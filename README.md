# cwsfe_website_2
CWSFE website 2.0.

#Building
* ./gradlew npmSetup
* ./gradlew npmPack

#Delivery
* cd cwsfe_website;
* gunzip -c cwsfe_website-2.0.0.tgz | tar xvf -;
* rm -Rf package/build.gradle;
* rm -Rf package/build;
* rm -Rf package/package.json;
* cp -R package public
* firebase login (optional?)
* firebase deploy
* rm -Rf package;
* rm -Rf public;
* rm cwsfe_website-*.tgz;

#Running website for development
* browser-sync start --server 'cwsfe_website' -f 'cwsfe_website' --browser "google-chrome" --no-notify;
