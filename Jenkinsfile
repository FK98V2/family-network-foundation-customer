pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        APP_DIR   = '/srv/family-new/family-network-foundation-customer'
        STACK_DIR = '/srv/family-new'
        DOCKER_BUILDKIT = '1'
        COMPOSE_DOCKER_CLI_BUILD = '1'
        NEXT_PUBLIC_API_URL = 'https://family-network.or.th'
        NEXT_PUBLIC_CONTEXT_URL = 'https://family-network.or.th'
    }

    stages {
        stage('Checkout code') {
            steps {
                checkout scm
            }
        }

        stage('Show revision') {
            steps {
                script {
                    env.GIT_SHA = sh(script: 'git rev-parse --short=12 HEAD', returnStdout: true).trim()
                }
                sh '''
                    echo "Workspace revision: $GIT_SHA"
                    git log -1 --oneline
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build \
                      --pull \
                      --build-arg NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL \
                      --build-arg NEXT_PUBLIC_CONTEXT_URL=$NEXT_PUBLIC_CONTEXT_URL \
                      --build-arg GIT_SHA=$GIT_SHA \
                      -t family-customer:local .
                '''
            }
        }

        stage('Compose Up') {
            steps {
                sh '''
                    cd $STACK_DIR
                    docker compose up -d --no-deps customer
                '''
            }
        }
    }

    post {
        success { echo '✅  Build & Deploy successful' }
        failure { echo '❌  Pipeline failed - check logs' }
    }
}
