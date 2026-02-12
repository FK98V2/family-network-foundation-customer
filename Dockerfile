###########################
# Stage 1 : deps
###########################
FROM node:18-alpine AS deps
WORKDIR /app

# copy lock file + install
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f package-lock.json ]; then npm ci --legacy-peer-deps; \
  elif [ -f pnpm-lock.yaml ];  then npm i -g pnpm && pnpm install --frozen-lockfile; \
  else yarn install --frozen-lockfile; fi

###########################
# Stage 2 : builder
###########################
FROM node:18-alpine AS builder
WORKDIR /app

# Build-time environment variables
ARG NEXT_PUBLIC_API_URL=https://family-network.or.th
ARG NEXT_PUBLIC_CONTEXT_URL=https://family-network.or.th
# Pass build ARGs as ENV vars for Next.js build process
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_CONTEXT_URL=${NEXT_PUBLIC_CONTEXT_URL}
ENV NEXT_TELEMETRY_DISABLED=1

# ดึง node_modules มาจาก deps
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
# ดึง source code
COPY --chown=node:node . .
# WORKDIR is created by root; hand ownership to node so Next can create /app/.next
RUN chown node:node /app
USER node
RUN yarn build         

###########################
# Stage 3 : runtime
###########################
FROM node:18-alpine AS runner
WORKDIR /app
ARG GIT_SHA=local
LABEL org.opencontainers.image.revision=$GIT_SHA
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
USER node


# copy ของที่ runtime ต้องใช้จาก builder
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/package.json ./package.json
COPY --from=builder --chown=node:node /app/next.config.ts ./next.config.ts

EXPOSE 3000
CMD ["yarn","start"]     
