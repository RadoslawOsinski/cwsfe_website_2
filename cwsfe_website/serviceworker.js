let CACHE_NAME = "cwsfe-website-cache-v5";
let CACHED_URLS = [
  //css
  "https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic",
  "https://fonts.googleapis.com/css?family=Raleway:700,400,300",
  "https://fonts.googleapis.com/css?family=Pacifico",
  "https://fonts.googleapis.com/css?family=PT+Serif",
  "static/bootstrap/css/bootstrap.css",
  "static/fonts/font-awesome/css/font-awesome.css",
  "static/fonts/fontello/css/fontello.css",
  "static/plugins/magnific-popup/magnific-popup.css",
  "static/plugins/rs-plugin-5/css/settings.css",
  "static/plugins/rs-plugin-5/css/layers.css",
  "static/plugins/rs-plugin-5/css/navigation.css",
  "static/css/animations.css",
  "static/plugins/owlcarousel2/assets/owl.carousel.min.css",
  "static/plugins/owlcarousel2/assets/owl.theme.default.min.css",
  "static/plugins/hover/hover-min.css",
  "static/css/style.css",
  "static/css/typography-default.css",
  "static/css/skins/light_blue.css",
  //js
  "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
  "/static/js/custom.js",
  //layout
  "static/layout/CWSFE_logo_150x150.png",
  "static/layout/CWSFE_logo_64x64.png",
  "static/layout/favicon.png"
];

self.addEventListener("install", event => {
  // Cache everything in CACHED_URLS. Installation fails if anything fails to cache
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        let promise = cache.addAll(CACHED_URLS);
        console.log('success');
        return promise
      })
      .catch(e =>
        console.log('Service worker failed to install because: ' + e)
      )
  );
});


self.addEventListener("fetch", event => {
  var requestURL = new URL(event.request.url);
  // Handle requests for index.html
  if (requestURL.pathname === "/" || requestURL.pathname === "/index.html") {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match("/index.html").then(cachedResponse => {
          var fetchPromise = fetch("/index.html").then(networkResponse => {
            cache.put("/index.html", networkResponse.clone());
            return networkResponse;
          });
          return cachedResponse || fetchPromise;
        }))
    );
  } else if (
    CACHED_URLS.includes(requestURL.href) ||
    CACHED_URLS.includes(requestURL.pathname)
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(event.request).then(response => response || fetch(event.request))
      )
    );
  }
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (CACHE_NAME !== cacheName && cacheName.startsWith("cwsfe-website-cache")) {
          return caches.delete(cacheName);
        }
      })
    ))
  );
});
