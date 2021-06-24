self.addEventListener("install", function(e){
  console.log("Install finished");
  e.waitUntil(
    caches.open("static").then(function(cache){
      return cache.addAll([
        "./App/html/MainActivity.html",
        "./App/js/MainActivity.js",
        "https://ansifdev.github.io/MyWeb/img512.png",
        "https://ansifdev.github.io/MyWeb/img64.png"
      ]);
    })
  );
});

self.addEventListener("fetch",function(e){
  e.respondWith(
    caches.match(e.request).then(function(responce){
      if(responce){
        return responce;
      } else {
        return fetch(e.request);
      }
    })
  )
})
