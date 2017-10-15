 node {

    checkout scm

    //Properties for gradle are stored in ($JENKINS_HOME directory, cd ~/):
    //----->  /var/lib/jenkins/.gradle/gradle.properties

    stage('Build') {
        sh './gradlew --no-daemon wrapper'
        sh './gradlew --no-daemon npmSetup'
        sh './gradlew --no-daemon npmInstall'
        sh './gradlew --no-daemon npmPack'
    }
    stage('Integration testing') {
    }
    stage('SonarQube analysis') {
    //    sh './gradlew --no-daemon sonarqube'
    }
    stage('Archive results') {
        archiveArtifacts artifacts: '**/build/*.zip, fingerprint: true
        archiveArtifacts artifacts: '**/build/*.tar.gz, fingerprint: true
    }
 }

//zip -r polymer.zip build
//scp -i ~/.ssh/atman_cwsfe_id_rsa /home/rmo/IdeaProjects/cwsfe_website_2/cwsfe_website/polymer.zip root@85.194.240.137:/tmp/
