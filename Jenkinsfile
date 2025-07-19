pipeline {
    agent any      

    environment {
        APP_DIR   = '/srv/family-new/family-network-foundation-customer'
        STACK_DIR = '/srv/family-new'
    }

    stages {
        stage('Checkout code') {
            steps {
                checkout scm
                sh '''
                    git checkout main
                    git pull origin main
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build -t family-customer:local .
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
