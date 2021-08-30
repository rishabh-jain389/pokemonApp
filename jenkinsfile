pipeline {
   agent any
      environment {
         PATH='C:/Users/risha/AppData/Roaming/npm'
      }
   stages {
      stage('NPM Setup') {
      steps {
         sh 'npm install'
      }
   }

   stage('Stage Web Build') {
      steps {
        sh 'npm run build --prod'
    }
  }

   stage('Publish Firebase Web') {
      steps {
      echo 'firebase deploy --token "Your Token Key"'
   }
  }

   stage('Publish iOS') {
      steps {
       echo "Publish iOS Action"
    }
   }

   stage('Publish Android') {
     steps {
    echo "Publish Android API Action"
   }
  }

 }
}
