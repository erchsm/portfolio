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
var PrecacheConfig = [["404.html","bd71c3d9c0578817258a43d47d1a4d94"],["images/about/backlog.svg","fba5316dde7ef29536f1dc6d1db206b5"],["images/about/brand.svg","04f57027f3560746931c936978b01baa"],["images/about/discovery.svg","b3b0464cf17b8e9a9983bf7ee9fd544c"],["images/about/ideation.svg","59256d95939672a3f22166ab4c1297bb"],["images/about/maping.svg","e09067041cb9933460b26e95c6243edf"],["images/about/mapping.svg","abfa6df82c6623437d451f40f715db69"],["images/about/prototype.svg","446176f3324a140ec14e5d94537f34d9"],["images/about/testing.svg","b002cd1ce7b67abc8450767483912fe7"],["images/about/wireframes.svg","82ba9e0567c14ad95292cc239ba87e97"],["images/american-made/cloud-bg.png","f6d23077d851a11195d956476d0b0195"],["images/american-made/cloud01.png","eacd1ca1a0fddcc60660d77cb8ff4dfb"],["images/american-made/cloud02.png","eacd1ca1a0fddcc60660d77cb8ff4dfb"],["images/american-made/cloud03.png","03e6c968af978cd36452233395d00cb8"],["images/american-made/cloud04.png","d3c843913ebf9a6cae94243cc0aefe56"],["images/american-made/cloud05.png","4c0e5411ca3921ffd418445c47d776de"],["images/american-made/cloud06.png","c81e7a9c37549ecfa66246e33b635712"],["images/american-made/gallery_7_sm.jpg","2c081d19e861159b671e6112c500ec2a"],["images/american-made/gallery_bg2.jpg","01d58114d341a84ef61c59027d789bdb"],["images/american-made/half-still.jpg","f6ea709d95507c1867e4747b9bec89df"],["images/american-made/hangar.jpg","052160b93f1cebd92d85e40e19ea3c23"],["images/american-made/map-code2.svg","e6b9a0a0d2eac4c6a09362bb4bbdfa31"],["images/american-made/mobile.svg","a200ccb71e9d545f5fbfbfdcaa91c32c"],["images/american-made/s06-bg-plane.jpg","95eecb001335e1679ff447dc7635b370"],["images/american-made/s07-synopsis.jpg","fba2bf99e29f64b6179dfba95c98f457"],["images/american-made/tickets-bg-dots-darker.jpg","ff51d58c178130fadaefeae989f65bec"],["images/american-made/tickets-bg-dots.jpg","57bccf3fb3f9741f948149edf08041bb"],["images/american-made/videos_bg.jpg","e1db88bd33710856f4e542e7222c6e8d"],["images/american-made/videos_mobile_bg.jpg","080563967caaa416acb1250a060cf4d5"],["images/app-templates/agency/1.jpg","e815123e3f8a5a6c5a01d149bdeca134"],["images/app-templates/agency/2.jpg","53e174a512950ae5ca16b70b40e8c3df"],["images/app-templates/agency/3.jpg","ee95f90ac7deaea619a753f96289f44f"],["images/app-templates/agency/4.jpg","b572e6d2994ac78bcb97d813d27b0775"],["images/app-templates/agency/5.jpg","972246960f409209c91ea3d2b4da3216"],["images/app-templates/agency/6.jpg","4725382d81b5d9a9d1d6b2f1c33dce5b"],["images/app-templates/agency/7.jpg","d10d52ddf777ca201a22042958e08575"],["images/app-templates/authoring.jpg","39b9f353aec0c73f3fa5c40390f34797"],["images/app-templates/authoring.png","5560c4df15fd9c6015ed5bf62c31952b"],["images/app-templates/commerce/1.jpg","17179a32fee10344c8960d02c03301e5"],["images/app-templates/commerce/2-full.jpg","a6ea22927afee7efec88933870aa1f1f"],["images/app-templates/commerce/2.jpg","bb57cb143651494b1a307b17193a9d9c"],["images/app-templates/commerce/3.jpg","7fedde80cf238696f44132632bd35a7d"],["images/app-templates/commerce/4.jpg","3f59d6b59928bb403aeed4638eb0aa0d"],["images/app-templates/commerce/5.jpg","0d8a10779ffd76a2e760d2e0d8fb5da7"],["images/app-templates/commerce/6.jpg","6ef3cce98a04f86ee02c881078a401a8"],["images/app-templates/commerce/7.jpg","8258bd8d40b32e496d879abf7a2051fc"],["images/app-templates/commerce/7.png","7fc584efec76750dbdc55e7cd1c7b341"],["images/app-templates/commerce/8.jpg","fa0a67a9799a66202156bab9db01a472"],["images/app-templates/commerce/9.jpg","b9f72ea620746597462b9d35dda6ac1d"],["images/app-templates/commerce/formock.jpg","bb53067ae32533f22693b12c1c0de1b8"],["images/app-templates/conference/1.jpg","245efbecef6f475d201ebb138409be49"],["images/app-templates/conference/2.jpg","051134149b90adb3471efdda4be8b6f0"],["images/app-templates/conference/3.jpg","5eb993304f35abb212822fd730cb2b0a"],["images/app-templates/conference/4.jpg","775aae4d09c4d61c3790a31aee80687a"],["images/app-templates/conference/5.jpg","64307dd51aa91d73deae6a33e376b17d"],["images/app-templates/conference/6.jpg","1466bd315e737eac46536cd1ab1fc798"],["images/app-templates/conference/7.jpg","7dcd189a670ac39ed749dc972078cc63"],["images/app-templates/conference/8.jpg","bdbd22727ac801d4a5729dbeeed1dc00"],["images/app-templates/conference2/1.jpg","e992abb9ab7de7ebdcdb41498b905c8c"],["images/app-templates/fashion-out.jpg","d29c60763032184eb8df6fd09f0a7c43"],["images/app-templates/from-fb.jpg","dba3af796bea9a845679922fcdcf79bd"],["images/app-templates/housewarming/1.jpg","b388491e5ab8b66ebc122ffe80055486"],["images/app-templates/housewarming/2.jpg","d74cbdc140f5bf7e7cb0ee8edc2c13e4"],["images/app-templates/housewarming/3.jpg","9b3a90bc659b9b1d7763dea1eab328c6"],["images/app-templates/housewarming/4.jpg","95212a537b674a25484b61b57d896dd6"],["images/app-templates/housewarming/5.jpg","e92dfd19280ad6e5226ff3592d39186d"],["images/app-templates/lead-generation/1.jpg","b7c9d640820882d4ea2ca2b6cc127c34"],["images/app-templates/lead-generation/2.jpg","2cdf4f32a143c38c7a4097662f995eb5"],["images/app-templates/lead-generation/3.jpg","54737766f08b2145c6ff444aa87d9d8d"],["images/app-templates/lead-generation/4.jpg","0e471132e89d2d7bf32c79cc4b94395e"],["images/app-templates/lead-generation/5.jpg","b0bf5dbd390988afb3d127213cd4caeb"],["images/app-templates/lead-generation/6.jpg","ac99e5cdcb039ec58af54e6444c92ff1"],["images/app-templates/out-mod.jpg","d7f12fbefe4193776ff9b14520b11ed4"],["images/app-templates/templates.jpg","c642c632ce34056201de8e58c713db34"],["images/app-templates/templates.mov","40ada02f2b310f76168306afb5fbd2e3"],["images/app-templates/templates.mp4","a29bef016fcd27788637d7f4a6a69af1"],["images/banner_hero.svg","7286649047466c50d043b65bad1506c4"],["images/brooklyn.jpg","6a81d03492bd7eb84ed033a1b0eda12c"],["images/card-components/Facebook.svg","de8c9ec0bf376d5c211a020e9104968d"],["images/card-components/Twitter.svg","1bffd1e6dd0c5593eec68fb2eb1c3c02"],["images/card-components/banner-alt.jpg","33ddb989dc488b5d88b5778b301a5439"],["images/card-components/banner.jpg","01fe14bbc135d9a3dbce7a3fbf8e2431"],["images/card-components/bold-modern.jpg","bcfe394bfc3aa5dc93996f3f616fa518"],["images/card-components/cart-animation.gif","dcac71a2b60bd9ad57c4c7e580836d67"],["images/card-components/crown.svg","945b9181d3080bfe1be5b48dc32f5141"],["images/card-components/minted-hand.jpg","ec7341b28e075bbd17a6644a92347bea"],["images/card-components/minted.jpg","e20d7e8590dde683c6fa805204257dea"],["images/card-components/perspective-cards.jpg","1e9b4a25b377a20fb18afb86e3afd1cb"],["images/card-components/pin.gif","d7417a1fd7d25f35c5df100be2ce6783"],["images/card-components/share-animation.jpg","68f6fd7aeb046ea19ef9c61421d79774"],["images/card-components/share.svg","729eba4df9c9e59d4899177885d7cecb"],["images/card-components/sms-white.svg","18747518e14c22415c032ec5255a6dc8"],["images/cisco/development.png","686d80107695735fa9080b0e76be607b"],["images/cisco/dropdown.png","9ff282ec759f499a3dd55bab6f010033"],["images/cisco/mate-ui.png","6dddc405a879b932640afb8b3adc4872"],["images/cisco/tooltip.png","94d01fa9bcdccf5d642a6fc79557dec8"],["images/cisco/wae-tutorial.jpg","7509f7d0e6efbf511cf9779dc5b2cff6"],["images/lands-end.jpg","49303ca3b92361c98898f16094c806a1"],["images/liquid-burn.gif","f4b268c44c141244246f9a1fdef2ba7f"],["images/loader.gif","60987038d7c8d6218833ee39ae4a75c7"],["images/logo.svg","69257f2a6f8590a2fd2a3d6b71cc0746"],["images/me.jpg","4c27de24c939e62b2eee20bd5854b562"],["images/me_copy.jpg","1154b0db054599c575659bddcebcd0f8"],["images/mist.jpg","694e4006883d454b5486460b7438f7ed"],["images/ocean.jpg","80d307c57e98e9ac9a34ab2a637aff76"],["images/perforce/activity-1.jpg","201d5aa9c71226897fa582499d7d39ec"],["images/perforce/banner.jpg","66356d9ea0a48e80208a86375ee9bdb6"],["images/perforce/file-activity-feed.jpg","50ac7c14b21059b81d9ed578c89b07d5"],["images/perforce/helix-cloud-import.jpg","fae24e8c3950b36c7411cbd1b5e97990"],["images/perforce/prototype.jpg","c88317ee98f7df3d94954f6fbff9e7a7"],["images/perforce/sean.png","bee72ab57f36d2aa958600ac8ba4aaab"],["images/plant.jpg","47a955333765fc553cf8eafee3221b96"],["images/protohack-givjoy/app-2.jpg","c4b7b03a8780c79e7143fe352a583294"],["images/protohack-givjoy/banner.jpg","2f9d8cbbf1cac96e6b05918728ccc948"],["images/protohack-givjoy/book.gif","870fc3e3fd15c057d2163562965c3ee4"],["images/protohack-givjoy/bottom.png","5cf8ad73c3c6e4be4c0b76d5fb99758b"],["images/protohack-givjoy/delivery.jpg","f28a7690822fd4e69638e040999ece2e"],["images/protohack-givjoy/desktop.jpg","84e34a0d0221a929d90ed74819f304df"],["images/protohack-givjoy/givjoy.jpg","279e5c210368379569102e07082bd398"],["images/protohack-givjoy/middle.png","721ad9b0cafe7d6f71be8fe7e9a85a39"],["images/protohack-givjoy/sketches.jpg","5b908978dcfc9a7faeadb1ce58084786"],["images/protohack-givjoy/the-team.jpg","b99c7f75e07f46bc6fd72b18f2eecd43"],["images/protohack-givjoy/top.png","30e4319d98906b33ff376344ebb1dbc1"],["images/roof.jpg","f7544fcd7e58af09ab8afb175162c206"],["images/standing.jpg","85ff76899bb02a3a72617618736e3a30"],["images/touch/chrome-touch-icon-192x192.png","c4a2e46caae5258e01718743b35ed405"],["images/window.jpg","a91796195dbab072ab3accd947e430b2"],["images/work-1.gif","3a41a888c126a39628e537f9ff39af60"],["images/work-2.jpg","274ac35fcf0d235530bba17e465d4f44"],["images/work-3.jpg","2100a1929d889bf51ed0bb3da447984e"],["images/work-4.jpg","39861a6b7a4662c1a0393b1477ceaa48"],["images/work-5.jpg","12639765febd717c026a16d7a4806265"],["images/work-6.jpg","e223e364999233f4262c85075725c48b"],["index.html","bfc64a6910dd064825197763506a924c"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/angular-route.min.js","c44ece3cc8599b1171ea3106af0d2afd"],["scripts/angular-scroll.min.js","bb0ad9725866f61020ffe56c97827f44"],["scripts/angular-ui-router.min.js","111d8dc7b19b1df3dbbee8fab10a838c"],["scripts/angular.min.js","f4914c1fed1c60b90816b57b009c6162"],["scripts/app.js","25d7fce8cdaf9f0c2607ab38bd18bc59"],["scripts/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["scripts/controllers.js","d744f4755ea389e30c039f0cd2e3f0d7"],["scripts/directives.js","21cfaa1a2303df73caa4430d38545bb8"],["scripts/ei.js","345e163e075f2cb2d7f179a1e9a70058"],["scripts/jquery.countTo.js","0f48c1b00e0bc4c33ed8aacfba285409"],["scripts/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["scripts/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["scripts/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["scripts/jquery.stellar.min.js","257c1e014bfdf359297cf2a80440a0ba"],["scripts/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["scripts/magnific-popup-options.js","dff6a284a8ab2e228307c7b5f6d443dd"],["scripts/main.min.js","d79fb7d1186798192625955790726444"],["scripts/mo.min.js","99683fb693889583af5c6a20073d182a"],["scripts/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["scripts/path-data-polyfill.js","41c20b6126ae8f968884ad9ffdedc2bd"],["scripts/respond.min.js","fda355038387a38685fb8213c2c2374b"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["styles/animate.css","4936a5b3dfbb1ff2179129f73f0714cc"],["styles/main.css","f1a2152e9355745227f59baf3f6556b0"]];
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




