pipeline {
    agent any

    environment {
        STACK_DIR  = '/srv/family-new'    
        IMAGE_TAG  = 'family-customer:local'
        GIT_URL    = 'https://github.com/FK98V2/family-network-foundation-customer'
        GIT_CRED   = 'github-credential'
        GIT_BRANCH = 'main'
    }

    options { skipDefaultCheckout true }    

    stages {

       
        stage('Sync source') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "*/${env.GIT_BRANCH}"]],
                    userRemoteConfigs: [[
                        url:            "${env.GIT_URL}",
                        credentialsId:  "${env.GIT_CRED}"
                    ]],
                    extensions: [[
                        $class: 'PruneStaleBranch'    
                    ]]
                ])

                sh '''
                   git fetch origin ${GIT_BRANCH}
                   git checkout ${GIT_BRANCH}
                   git reset --hard origin/${GIT_BRANCH}
                   git clean -fdx             # ลบไฟล์ที่ไม่ถูก track (กันของค้าง)
                '''
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t ${IMAGE_TAG} ."
            }
        }

        /* ──────────────── COMPOSE UP ──────────────── */
        stage('Compose Up') {
            steps {
                sh """
                  cd ${STACK_DIR}
                  docker compose up -d --force-recreate customer
                """
            }
        }
    }

    post {
        success { echo '✅  Build & Deploy successful' }
        failure { echo '❌  Pipeline failed - check logs' }
    }
}
