/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["404.html","bd71c3d9c0578817258a43d47d1a4d94"],["images/app-templates/agency/1.jpg","eb4839e6dbf3b6294430ef5f69aac464"],["images/app-templates/agency/2.jpg","ed749c9a119ea141d5fd47d544b0146f"],["images/app-templates/agency/3.jpg","8af37ef566770f2f9784045e3e5138b8"],["images/app-templates/agency/4.jpg","e16391f5afe0cad55524b345c3e0a38b"],["images/app-templates/agency/5.jpg","deee0dfedf4837d2298996c3926f0aba"],["images/app-templates/agency/6.jpg","4fa931f0c3c90acf8e2a78e790688f57"],["images/app-templates/agency/7.jpg","fcd854dc9a01f0113cd30b2af694ff4d"],["images/app-templates/authoring.jpg","de7aa472b55b5b89eb1cebe89345281d"],["images/app-templates/authoring.png","760ede1aa5588db112d48e315690e684"],["images/app-templates/commerce/1.jpg","b8f203bd55ec28d048d84f69a231f228"],["images/app-templates/commerce/2.jpg","98d0b54d4e3eabae7e3d542bb1b33562"],["images/app-templates/commerce/3.jpg","a4aa41463528523e278b41862705e332"],["images/app-templates/commerce/4.jpg","b39741e6959e8f399d099fb61ea50d1e"],["images/app-templates/commerce/5.jpg","6b224081ac8f8a657ce02ee881e4021b"],["images/app-templates/commerce/6.jpg","f894130aa8a16f27c90eba4f83fd75e9"],["images/app-templates/commerce/7.jpg","cb0bab0d2941b69497721d874fb533f7"],["images/app-templates/commerce/7.png","682170b9f61efb9c5cea94f0bd444ef9"],["images/app-templates/commerce/8.jpg","29ccfb858e55b90739543c16eab20b4b"],["images/app-templates/commerce/9.jpg","a84e6f151b5fa7db369e1cad9b980a2c"],["images/app-templates/commerce/formock.jpg","b77139cb6a962441deab4478f66b8887"],["images/app-templates/conference/1.jpg","d682353f1cdadd753292aa80307020f2"],["images/app-templates/conference/2.jpg","db953e40a290211266da1f13fe66969a"],["images/app-templates/conference/3.jpg","5a2a79d605ddb305ab9e68dd9c40ce30"],["images/app-templates/conference/4.jpg","1a006794815b3833a3be9ca00a081bb4"],["images/app-templates/conference/5.jpg","1a8274370afcb9cf440394ca2e2c8e71"],["images/app-templates/conference/6.jpg","35345736317a53aa7d66acdbfb39855a"],["images/app-templates/conference/7.jpg","c81bf27a346052ddb1709a76bfe73992"],["images/app-templates/conference/8.jpg","cf00da753a21e9148d60645b382b4020"],["images/app-templates/conference2/1.jpg","120edbbc02ad723fa362cdbcf28a8b2e"],["images/app-templates/fashion-out.jpg","3fc41ea66c894604bf997e8998b004d7"],["images/app-templates/from-fb.jpg","857bbdd70216087ffa88a643f7ff3c8a"],["images/app-templates/housewarming/1.jpg","713cdadb73cc73e01dd1c5fb8fff7560"],["images/app-templates/housewarming/2.jpg","c72341bd20cd76289dd3c341fc5a0eeb"],["images/app-templates/housewarming/3.jpg","b5af93b6fee4c358596648f8cb78d88e"],["images/app-templates/housewarming/4.jpg","7bf7e831986ffa30c3a333dd0385f0e4"],["images/app-templates/housewarming/5.jpg","7bd7f2c2b656588464e110eb22fd913c"],["images/app-templates/lead-generation/1.jpg","924deb22f0a221a21e9c8347bc775605"],["images/app-templates/lead-generation/2.jpg","d52fef3602b13e3bd937fedfe30b53ad"],["images/app-templates/lead-generation/3.jpg","acd933223ac8b2d3118c87b4472eb17b"],["images/app-templates/lead-generation/4.jpg","6af5027b0dd1117a2eb2d5f67bb17348"],["images/app-templates/lead-generation/5.jpg","944a25894125ac546f08d3471b0a8cea"],["images/app-templates/lead-generation/6.jpg","e81473c33d5a71642cb0544e796cdfc5"],["images/app-templates/out-mod.jpg","46c1e2804502a65f6690a18a8b2eec67"],["images/app-templates/templates.jpg","960fa4f291fb070373ab3e857838b47a"],["images/app-templates/templates.mov","40ada02f2b310f76168306afb5fbd2e3"],["images/app-templates/templates.mp4","a29bef016fcd27788637d7f4a6a69af1"],["images/banner_hero.svg","7286649047466c50d043b65bad1506c4"],["images/brooklyn.jpg","646f583164189094cd7c0e01270c1754"],["images/card-components/Facebook.svg","de8c9ec0bf376d5c211a020e9104968d"],["images/card-components/Twitter.svg","1bffd1e6dd0c5593eec68fb2eb1c3c02"],["images/card-components/banner-alt.jpg","a0b0e2d89484d523aa5019ea0c60b4ee"],["images/card-components/banner.jpg","98ac1c23a8da296a24e3ab6f76448fb5"],["images/card-components/bold-modern.jpg","07c499a37c2f41cc7556ae7d9fb7190d"],["images/card-components/cart-animation.gif","dcac71a2b60bd9ad57c4c7e580836d67"],["images/card-components/crown.svg","945b9181d3080bfe1be5b48dc32f5141"],["images/card-components/minted-hand.jpg","2ff6e8d08c87bd24744a7ee5500dc2bc"],["images/card-components/minted.jpg","5e04d35f516dc0ea9c646455a3afb0aa"],["images/card-components/perspective-cards.jpg","3edbf48447363374277a51756130fd75"],["images/card-components/pin.gif","d7417a1fd7d25f35c5df100be2ce6783"],["images/card-components/share-animation.jpg","4493cd68ecf7f3877b8db1fccd8ba362"],["images/card-components/share.svg","729eba4df9c9e59d4899177885d7cecb"],["images/card-components/sms-white.svg","18747518e14c22415c032ec5255a6dc8"],["images/cisco/development.png","4062cef84e4ee377389d654928c8664b"],["images/cisco/dropdown.png","067832720fa67519c9531e91ecaec082"],["images/cisco/mate-ui.png","ef6852e877aed3417da9ca1b9f5f13dc"],["images/cisco/tooltip.png","eb0ebc1b5e0ac313a246b629dd8e33e7"],["images/cisco/wae-tutorial.jpg","4d9f36a4e79271bd6131273acbf40919"],["images/lands-end.jpg","58318feb6b19a27b87f69aa95c439626"],["images/loader.gif","60987038d7c8d6218833ee39ae4a75c7"],["images/logo.svg","69257f2a6f8590a2fd2a3d6b71cc0746"],["images/me.jpg","e1dee4fc4e09fab993246674949cc36f"],["images/me_copy.jpg","50388a86ef51f77a69bcd5a4899bdb3a"],["images/mist.jpg","ff215844311b7b6de87952ec88094c0f"],["images/ocean.jpg","ca0b45eba22863b7dbcb1ec14538401b"],["images/perforce/activity-1.jpg","201d5aa9c71226897fa582499d7d39ec"],["images/perforce/banner.jpg","df31d37c73c96f2283f1dfd596bce4aa"],["images/perforce/file-activity-feed.jpg","3f891d54f84c89071369a9daf96d42ed"],["images/perforce/helix-cloud-import.jpg","ffc1be8a900f2f99072b5b81a7a0128a"],["images/perforce/prototype.jpg","63496f3f56eda13caca63fa1550a17dd"],["images/perforce/sean.png","c5b99d6e4d9f8abea41b924e1a850d8b"],["images/plant.jpg","1b15f81a1bc506f88b116ddf03dd7905"],["images/protohack-givjoy/app-2.jpg","dbda7fdacbd881b9c0d4e4e0f273f2a0"],["images/protohack-givjoy/banner.jpg","fda555fcd3c7e5ee56ed9617d4224b46"],["images/protohack-givjoy/book.gif","870fc3e3fd15c057d2163562965c3ee4"],["images/protohack-givjoy/bottom.png","c270b9ae2fe0190268dba5e5ad769681"],["images/protohack-givjoy/delivery.jpg","69548a2d82188a42a0642c3443fcc16b"],["images/protohack-givjoy/desktop.jpg","3013862fa6e9f27d5b991993a68c3c9b"],["images/protohack-givjoy/givjoy.jpg","28a1bb05e43c8c21665a60b709a4c0d1"],["images/protohack-givjoy/middle.png","ecef736c30dbedb13dd94c544880576f"],["images/protohack-givjoy/sketches.jpg","d950092b533412f734efcdb0f0b7c3b2"],["images/protohack-givjoy/the-team.jpg","8ccee9c1939226d7b794923822b1dcbe"],["images/protohack-givjoy/top.png","dac52abf1629fa0fc9cb6142819df631"],["images/roof.jpg","6c081801517f61270157bd528e4b5c59"],["images/standing.jpg","5eaf667b8c08312ee6fa4c24c63f6b46"],["images/touch/chrome-touch-icon-192x192.png","45d65f5f4aaadc751ae0815a484a113a"],["images/window.jpg","11e39a648a864d1c35041595155bfacd"],["images/work-1.gif","3a41a888c126a39628e537f9ff39af60"],["images/work-2.jpg","791a69cef919f5091cb8ade99e833e7b"],["images/work-3.jpg","69570c464107179d6556e418801bbcc1"],["images/work-4.jpg","b51185d47f6f25db207ffd0a64911bdb"],["images/work-5.jpg","783fb24b0b89734aabe08573668c1017"],["images/work-6.jpg","2e25d536d252a83b6240e345fdc4b16e"],["index.html","bfc64a6910dd064825197763506a924c"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/angular-route.min.js","c44ece3cc8599b1171ea3106af0d2afd"],["scripts/angular-scroll.min.js","bb0ad9725866f61020ffe56c97827f44"],["scripts/angular-ui-router.min.js","111d8dc7b19b1df3dbbee8fab10a838c"],["scripts/angular.min.js","f4914c1fed1c60b90816b57b009c6162"],["scripts/app.js","69c46d840045de2f36b69a8226d6c0fc"],["scripts/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["scripts/controllers.js","51e8d796916a3eaddf14b4c9a41dc861"],["scripts/directives.js","d2e67c8b9410b2003c1855524361ad5c"],["scripts/ei.js","345e163e075f2cb2d7f179a1e9a70058"],["scripts/jquery.countTo.js","0f48c1b00e0bc4c33ed8aacfba285409"],["scripts/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["scripts/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["scripts/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["scripts/jquery.stellar.min.js","257c1e014bfdf359297cf2a80440a0ba"],["scripts/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["scripts/magnific-popup-options.js","dff6a284a8ab2e228307c7b5f6d443dd"],["scripts/main.min.js","20a1fd08595e7197f85a1d0b9263ca95"],["scripts/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["scripts/respond.min.js","fda355038387a38685fb8213c2c2374b"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/animate.css","4936a5b3dfbb1ff2179129f73f0714cc"],["styles/main.css","f4d4aab977069e9ca3263d2271e632e2"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




