# cwsfe_website_2
CWSFE website 2.0.

#Building
* ./gradlew npmSetup
* ./gradlew npmPack
* copy ./cwsfe_website-2.0.0.tgz to production nginx

#Running website for development
* browser-sync start --server 'cwsfe_website' -f 'cwsfe_website' --browser "google-chrome" --no-notify;
