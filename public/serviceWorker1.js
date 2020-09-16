// const caches = 'network-or-cache-v1'
const timeout = 400

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([])
    })
  )
})

self.addEventListener('fetch', event => {
  console.log('response', event)
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response
      }
      return fetch(event.request).then(response => {
        const responseToCache = response.clone()
        console.log(responseToCache)
        caches.open('v1').then(cache => cache.put(event.request, responseToCache))
        return response
      })
    })
  )
})
