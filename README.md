# cwsfe_website_2
CWSFE website 2.0.

#Building
* ./gradlew npmSetup
* ./gradlew npmInstall
* ./gradlew createCwsfeZip
* copy ./build/cwsfe.zip to production tomcat

#Running website for development
* ./gradlew runDev

Run with one environment variable 
CMS_ADDRESS='/../../CWSFE_CMS' for local CMS or
CMS_ADDRESS='https://cwsfe.pl/CWSFE_CMS' for second server with CMS