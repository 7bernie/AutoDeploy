// Jenkinsfile for CI/CD pipeline

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'docker-compose -f jenkins/docker-compose.yml build'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'docker-compose -f jenkins/docker-compose.yml run backend npm test'
                sh 'docker-compose -f jenkins/docker-compose.yml run frontend npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh 'docker-compose -f jenkins/docker-compose.yml up -d'
            }
        }
    }
    post {
        always {
            echo 'Cleaning up...'
            sh 'docker-compose -f jenkins/docker-compose.yml down'
        }
    }
}
