'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16598c5f40cce04f412b978182b7311c",
".git/config": "9758c5434b356dd85140b96169561603",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0b85981a69845a98312a08ff1cd6bdcb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7585389db783dbdda1bc392af5937aac",
".git/logs/refs/heads/main": "7585389db783dbdda1bc392af5937aac",
".git/logs/refs/remotes/origin/main": "e1810d40a5491fe885f4a993a0af3ab8",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/07/79b9408e8a5d9ae7f30807bd34d5be71f31cab": "813ff890703505ab6ce9d5fbaf363e84",
".git/objects/08/dac2fa6cf2484762da41a3a100c45c5700ca26": "ff9f49b7cc86cf90882cd9eed2ac2021",
".git/objects/09/2c0b34249c03d393fcd13ccd01d675e2b3e089": "0ebdb540b4cb503e6b691e3c93d8bec2",
".git/objects/0f/562ab91c0b3e08daede4c39b29af986715a369": "137648cb50977d402ca405b1f4f1af14",
".git/objects/11/4466a35032d0d8d53c70c646b5d505cc0ce75b": "450e4f1e52d948ff859c9a50d0d2bb73",
".git/objects/12/a17084b77faf0cbaa4acfb6a088d8d39f552dc": "d532f7c6619a73df75273849263935b7",
".git/objects/15/a36981d7dcc061785266db7075e6649a098ad0": "b269eff511b515234bd4b6bff019994d",
".git/objects/16/dedab489413471158c947a37d491b392bda60e": "0157f360c33ef06331c60df066398cee",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3a/4ddcb77b42641f93c9278ae7d8b9973f6a204e": "a44ef0d477d8444fa8a56c11456d176c",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/42/27a0281674a6bd5beca462dcb1b34a1381fb1e": "3c6845a0d2f6b57f09f5e92eda56e035",
".git/objects/42/b5cb5924ab2259452bd5f58ea30cc2163e169e": "e26eba10811dfa1dc96e6e1d97feaa8e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0c581afac707c451beb66d6a728a256d6be52e": "4cd197a7eb68d7f98a4de847f0205723",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/56/00d8eaf4038f39a3ae3507683321d8803dda23": "78f0eea4db28955e2da8edba9b218bcf",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/01230bf36053d9ed09fc8e9a9b1d5a855446bd": "a205c03fb60216bbe854123801831e86",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/58c1247241729e5301be3420a25996557f6384": "4ebd11a0489151a4ce607740b786e14a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/cdc8c771efb339e7031485bc9de48643c463cf": "bc03995b52b7e788652f5da7b20b1247",
".git/objects/98/12c27c7eda52b06f3e61f4c02efe5d77bcc5de": "b64eef9b39b0b24ce91eb116d17a58e7",
".git/objects/9e/b42369382dc6eba73dc46aee7253141675a175": "52956c48ec5ad654d4f268e7fee5d43e",
".git/objects/a4/3eba09fabd6833e1d5df27a88e714383be1ce4": "d7005b0380e5aa7ed4e389d47110d839",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b2/a3aaf85dcb4881d81106479daf5de3901ef559": "7cc34aa329e15fa1463db8068c9bca42",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/660eb5a62adb29e12503cc426edac22b42aadf": "2740a75458175b66d6da8a98b1ed0e71",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/4910775416ee3d8d201d2384c23e0436ca31c1": "c11cace2a4c3b0325a49dc988c5ef7fe",
".git/objects/c2/b0be69f228c0f30f3615f164455816a1d037b2": "9e96a5b11ebe60c83133a5fd1fb5f9a4",
".git/objects/d3/61d666b4f814a496df25e1371d2a49625354be": "1db44cb5bed9fa3489fd7efff410e9c2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e4714809a48d7d7213dae4462691bdc583142c": "3f9fb9dc5f4621ba24f1f9f2f0e37364",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e2/3b6374c023aad6fe18474dce39e4702182ef36": "1fe868807d264b1d9416fcdac4647223",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/7d6eafea56639f2740b3a18e3e56262847f203": "a662b977d044c8fd59d9a186eda28270",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/61998fe3b74760b61c31c302cff7b62017423b": "c6b1173d92cb9530cc4bd71d0e7af467",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/579448989c233c9cf55d0451818f7cf0427ba4": "7810af00f712af9b2d2327f7cdf970d8",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/9f468069d72e7fec136052ee904c251eb78bfa": "c7abe63c1beadb9d176120ec917aa895",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "73e4b586c6cdbbfc6f3458ee05115a1a",
".git/refs/remotes/origin/main": "73e4b586c6cdbbfc6f3458ee05115a1a",
"assets/AssetManifest.bin": "92de00402833c728d92c99646917cade",
"assets/AssetManifest.bin.json": "9e0d90778666a3df252a288831e16c49",
"assets/AssetManifest.json": "069c54c4489b60dca35624aab9df3e5a",
"assets/assets/achieve.png": "3c841ab54c13bfe7aac5549e26e715a1",
"assets/assets/discover.png": "3428da64eada8ea33e60a7c7fb006efa",
"assets/assets/edu40_logo.png": "4819509944e94589345e28b702e6c7cc",
"assets/assets/edu4tech_logo.png": "42a6baa4a01e589243788723bfd7ea57",
"assets/assets/edusteam_logo.png": "bea7e57e9c414e9865f07ba4f03a2e40",
"assets/assets/learn.png": "0fee3cfe696329498af14c80d39adb1d",
"assets/assets/logo2-removebg-preview.png": "152bdabb5377a8f4f732ffc9ee37deab",
"assets/assets/logo2.jpg": "507168f701528ca6b30d358367eb6f8c",
"assets/assets/logo2.png": "089941ce36884fda2dd25f8ac0a6b617",
"assets/assets/person1.png": "769c4de1bead87a05e4cd7bd15985f0c",
"assets/assets/person2.png": "68ecb7fabfb7814c17567cb5cba30bb6",
"assets/assets/person3.png": "74fd5742245baf9b2b660716255c85ee",
"assets/assets/person4.png": "7b669efc081f3087c59aea46cc1e303e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a463983067fee8d5a009ea430135be8c",
"assets/NOTICES": "403c2b03e395557796e5c6a49f0227ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"CNAME": "9e6bedb641f827525d05698a2eba6e99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "ee21cc10351d08b2cbe058cc90cd98cb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1b56b07fc61eb15d2c9f18b3e5ed089b",
"/": "1b56b07fc61eb15d2c9f18b3e5ed089b",
"logo2-removebg-preview.png": "152bdabb5377a8f4f732ffc9ee37deab",
"main.dart.js": "698b4944a4b8ace108869bc3b2e31ce9",
"manifest.json": "0336accb07dad2353399cf7d1c61ad2a",
"version.json": "9dbe579495f3aef19172f6e22e7382e5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
