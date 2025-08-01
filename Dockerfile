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
# ใช้ root เพื่อจัดการ permission ก่อนค่อยสลับ user ตอน build
USER root

# Build-time environment variables
ARG NEXT_PUBLIC_API_URL=https://family-network.or.th
ARG NEXT_PUBLIC_CONTEXT_URL=https://family-network.or.th
# Pass build ARGs as ENV vars for Next.js build process
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_CONTEXT_URL=${NEXT_PUBLIC_CONTEXT_URL}

# ดึง node_modules มาจาก deps
COPY --from=deps /app/node_modules ./node_modules
# ดึง source code
COPY . .

# ใช้ uid/gid เดียวกับ user node เพื่อเลี่ยง permission error
RUN chown -R node:node /app
USER node
RUN yarn build         

###########################
# Stage 3 : runtime
###########################
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
USER node


# copy ของที่ runtime ต้องใช้จาก builder
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/package.json ./package.json
COPY --from=builder --chown=node:node /app/next.config.ts ./next.config.ts

EXPOSE 3000
CMD ["yarn","start"]     