# cwsfe_website_2
CWSFE website 2.0.3

#Building
* ./gradlew npmSetup
* ./gradlew npmPack

#Delivery
* (zaktualizować wersję w serviceworker.js oraz w package.json)
* cd cwsfe_website;
* gunzip -c cwsfe_website-2.0.3.tgz | tar xvf -;
* rm -Rf package/build.gradle package/build package/package.json package/src/docker;
* cp -R package public
* firebase login (optional?)
* firebase deploy
* rm -Rf package public cwsfe_website-*.tgz;

#Running website for development
* browser-sync start --server 'cwsfe_website' -f 'cwsfe_website' --browser "google-chrome" --no-notify;
