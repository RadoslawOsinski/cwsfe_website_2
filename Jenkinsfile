 node {

    checkout scm

    //Properties for gradle are stored in ($JENKINS_HOME directory, cd ~/):
    //----->  /var/lib/jenkins/.gradle/gradle.properties

    stage('Build') {
        sh './gradlew --no-daemon wrapper'
        sh './gradlew --no-daemon npmSetup'
        sh './gradlew --no-daemon npmInstall'
        sh './gradlew --no-daemon createCwsfeZip'
    }
    stage('Integration testing') {
    }
    stage('SonarQube analysis') {
    //    sh './gradlew --no-daemon sonarqube'
    }
    stage('Archive results') {
        archiveArtifacts artifacts: '**/build/*.zip, fingerprint: true
    }
 }
