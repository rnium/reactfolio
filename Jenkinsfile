pipeline {
    agent {
        node {
            label 'docker-agent-nodejs'
        }
    }
    stages {
        stage('Install') {
            steps {
                echo 'Installing packages...'
                sh '''
                npm install
                '''
            }
        }
        stage('Build') {
            steps {
                echo 'Building'
                sh '''
                npm run build
                pwd ls
                '''
            }
        }
    }
}