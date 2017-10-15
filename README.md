# cwsfe_website_2
CWSFE website 2.0.

#Building
* ./gradlew npmSetup
* ./gradlew npmPack

#Delivery
* scp -i ~/.ssh/privKey .../cwsfe_website-2.0.0.tgz USER@ip:/tmp/;
* gunzip -c cwsfe_website-2.0.0.tgz | tar xvf -;
* rm -Rf package/build.gradle;
* rm -Rf package/build;
* rm -Rf package/package.json;
* cp -R package/* /someFolder/
* reload web server

#Running website for development
* browser-sync start --server 'cwsfe_website' -f 'cwsfe_website' --browser "google-chrome" --no-notify;
