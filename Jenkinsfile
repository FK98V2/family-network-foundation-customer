pipeline {
    agent any      

    environment {
        APP_DIR   = '/srv/family-new/family-network-foundation-customer'
        STACK_DIR = '/srv/family-new'
        NEXT_PUBLIC_API_URL = 'https://family-network.or.th/api/v1'
        NEXT_PUBLIC_CONTEXT_URL = 'https://family-network.or.th'
    }

    stages {
        stage('Checkout code') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build \
                      --build-arg NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL} \
                      --build-arg NEXT_PUBLIC_CONTEXT_URL=${NEXT_PUBLIC_CONTEXT_URL} \
                      -t family-customer:local .
                '''
            }
        }

        stage('Compose Up') {
            steps {
                sh '''
                    cd $STACK_DIR
                    docker compose up -d --force-recreate customer
                '''
            }
        }
    }

    post {
        success { echo '✅  Build & Deploy successful' }
        failure { echo '❌  Pipeline failed - check logs' }
    }
}