'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "36d8b2d8da5db9c22437bd97e99853a0",
"version.json": "e5f951eb6c24cffae51967bfaa0fda01",
"index.html": "6aeeea4a098c9c19ff6c5ec97db67802",
"/": "6aeeea4a098c9c19ff6c5ec97db67802",
"main.dart.js": "f26538481173ad5f854f1cfd0b2ae2b7",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"cors.json": "f390f645112ecaf29566799061348c70",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "17a263fa8442de931caec0315de4a909",
"logo.jpeg": "94bc1d9b96abd2f956f64b4dfd98889a",
".git/config": "b95fdc5ab9f5f0c346119558f3da84f6",
".git/objects/3e/104dccb099090c2864aac30f82a2b2412376a5": "c7ed28b3c1cc5e60ff7f2a03b747992c",
".git/objects/3e/a88d7f733239f43a1b0d13732bc7bf90653174": "a72b21a9d55cadcc2f5d8b90e460965f",
".git/objects/68/38eb6d8c652fb626cb66f47aecea0ad172f38e": "80574c9cb750628a5c733fdb345e7dbb",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/3b/2ad10bda827b9f3f842be8ecd228458a586f66": "48c6992b8df84778fa944a744a8bbe8e",
".git/objects/6f/6c8514bf27c0ce04922b33ad136c99b9a2530d": "96a0ff2e3152fc780f94156308581576",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/6a/9d2239f3f2166a54588d69ac072e5f99909cb7": "654151dcc4b08a9477010cca88c495ce",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/56/5f06b750482b67398f2590e0408f14693bb812": "289ca86b3b96db3cfc25a699dc02534c",
".git/objects/67/3bbe6ba7ee4ba933c247078a1d69ad111fd60a": "9e7216889fb5357bd14cef3646263b05",
".git/objects/0b/b4b95f110a7fe771c6f00b348f5e8ab58f2a02": "0d6995a878f16c2eef44917c808c182f",
".git/objects/0e/97f325e648a5a92ffea0e04d5b33158d2d241d": "cb5ad4a79bb2517b50945baf35dab11c",
".git/objects/0e/6aa5584e8d1f2280c6f276115dd112d7d86498": "1164a00da645fba86d529e153e77786a",
".git/objects/60/1e56b0119fb484f3bd50061a9ae90800bcb346": "04dc9cfade8ef17d45bb614d2c757f66",
".git/objects/60/7f59fc32acef85166775cd9796cc0aac47b9fc": "093eb4fb62fe177db355f5d2ea5d0573",
".git/objects/60/f013422a0f44ad6f3374a64745338d979bc1e0": "5c4957c68f445d8c62550ab8edf08440",
".git/objects/5a/9e5a5e97f7a0a46a35cde5bed3e68fcf8324c3": "298260dbfe0a92115e14b98d366babe1",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/ac/83c7f7386a29a1783eaa8936917c5268ef96b2": "55c49739c7b5819e941b0231829f3590",
".git/objects/d7/84fb4406240eb070ad1aebb17ac57174d82dfa": "6612c10224ad3863351bcaf90b64e904",
".git/objects/be/02be0212e0ab19f0c334c364b9ba9f3152770d": "4ff1580a730cf68387c47c6cd376b3d1",
".git/objects/be/b285377d96715d3bc6db01770a968240d071cd": "cbebc72842d514f5bc76ccced64f6d19",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/bd/873266f6f3454ac72152419c13970e0c646783": "58d8609f7438fe4555c43e5600747acf",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "70bc1d07824e0d0a16b4211b42792fef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/e5/38594f369b49020e7ccaaa4429ff1dd1e68ac1": "119661e76fb61cea263260b8a166f85f",
".git/objects/e2/1aac06d8e5df67810ac8c6bf128497b6cc030a": "afd63d0c24e90f971de321ed8276ccb4",
".git/objects/f3/4afc8736720dfe957d04414dae659cab78c29f": "174e5b9bb82e0cc2d1053ed1cc89ce88",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c0/0a010a1c4c664b65298e4c813560ce797f28e3": "4fa00a84f07bbab1534c933237ccf96d",
".git/objects/ee/7f49ed93b7bb00b01a863ab0552868070b8b98": "46ca8398b4701538cf623bfad3c5b0fa",
".git/objects/ee/22805cdbbcb2375d61830af28f3bd926dd1088": "651959db55ed23a38a18342e71faa861",
".git/objects/fc/86b1a4b2d0aebf3af39aaaf32c731c8ccfdca5": "f42c5190600665ac53976cd10be137b9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/ec/ef13dd16891b886c8828e30224b3ee3188273d": "0b21074fca0c32e774fbc20518b78e6a",
".git/objects/4b/837761b5f704a1356c3c58639c1cb8d1f01015": "e11a4e38d2b8d90cb0a468f92a234485",
".git/objects/7c/e8379728b1e9f6a6708ccb1eeac136bd9cfd04": "c99d0961539f5f13b08a49d68a023407",
".git/objects/7c/f11d3a8079da5821444d81d7938f57e7efda6d": "282150975f854f0e568860be708b2303",
".git/objects/42/45ed831e632ddc5a9bfbaff2a6f38dd137542b": "3293d014de0548c0b8d83cca5ed5ff5c",
".git/objects/89/4e4c60290bfd6b2e7c170cf5fdbcdffea3e134": "7f20bdbd68705a653a0e03bb8e924121",
".git/objects/89/771e0e01abc68fcda21676199efa2c0e73b688": "f722604229412f8651e6409a51158b58",
".git/objects/73/b8007c345cad2bf1896331514fa0af6953da9f": "12892665c74e996207845a68f74158ff",
".git/objects/74/8ea961d2612024d3535eb07880e8f8e1f45462": "bdbd7262b1ba368fc430ccb33a6e5a65",
".git/objects/1a/45a68e6ab7d0ae9e43c87258960ed4775dd63d": "4c352e001d86a6cdf7d909cdf912248c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/10/c9857ae3ecf25a52ea1c8a904ee64d0f0e2a44": "a4e49b58b9e3508ceb3e82f81ad959d9",
".git/objects/26/1277c5361e29f324a7087a50df7f0f30907586": "706b475eda1d3b0ba825a412828df110",
".git/objects/26/8ee1305b3424da0a119307f16683d11e436be0": "a5fee28e3755f49a4df41ada359089d3",
".git/objects/21/5a53a8f3de43fd59217ad19557612b56d3d78e": "84be29c211cb0245247e7e3850d53d73",
".git/objects/81/be100e573a1b60565e47c32842c7d0195ebde1": "05a02d60a74ab0159b9ee3991b07180b",
".git/objects/72/13376886300c8ee8d65f96096efa9e87a731ca": "dbe33e3f8b345c8bbf70d100cf152c84",
".git/objects/2f/96d386bbbfcdf7cdd56c37b741a32970065bba": "f8ec1b844be3e211b243b9392e34639f",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "5244a1f4eecc3b8d779cc3f22a95b8f4",
".git/objects/43/138f98ab93976a9d29183be240f8a0521cf34c": "59810e6b3c0e29c68ec4a949d9967352",
".git/objects/88/3fb6712cfd7d9087e0eca3cc920afd486faf2d": "0ee61672dedd1da0fbed6a094ab674e8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/00/1510952d6c93001bc31be7e017a377f8a393ca": "1e9f79ce1479cb7daf21d16633a91121",
".git/objects/9a/1891796fe2559d48bb9d291b16cad9ce6ae41e": "6c23becc38924b90a291f03952977864",
".git/objects/36/2ff15ab8555096988b4c323232226eea2fc2e7": "e283f0740b0c4b81e1302702a22483eb",
".git/objects/5c/c6676d4ceeee963bad457b4bd9ff80a0330cc4": "33b4410cbba6fa1f2e2d1d98f4d0a33c",
".git/objects/09/2056a0716e05ddfcfcffeece3734ed82d2c9f7": "c2b3faafdf6ce3e1d09eb7660d63a065",
".git/objects/09/3a31402aed65382fdf1b1e0892f1aec3a5c939": "068b24c93726fd303990cb3b3c36f84e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/98/99cfbf8f9b3262194b830a1e1d38d4a9e00285": "f6cfab72f07790674d2e853b404bf5e3",
".git/objects/30/a391fb84eda1b40884d9769988d414479eeea3": "879f806c0d4e36d16ba518159903897d",
".git/objects/30/dea00e5ba2dc7bfec881aedc9b8afcd6527e1f": "cb6c9339cdb8937e657af4d424ef4492",
".git/objects/5e/b339fe2e4ef01a2b0c986a9bf59302df69090e": "67bdd06b47e7d217326cd624c203fb3a",
".git/objects/37/d8a885b56c754bfb0656855f9f1e45ff213237": "47ee1c3c1646e8112a7c862555273032",
".git/objects/6c/17a8629ba118c2cf556de717ab8383d63775f5": "128c637c76d3db22fe1896dccd26e3f8",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "2cce1b4dedaaa905a3c8f9e7a2074aca",
".git/objects/55/b5d33c23236014f1675332d78a4eedd3c892ff": "389d7c6fef7626c200d2028ca475c9ef",
".git/objects/97/d7908b8bf257cceaf30ac1b06b8e185d5d1c15": "336ac97210206dc7b0a0ede18a5d922f",
".git/objects/63/eea06ef075fae0633331622d6e1d89710547ba": "771398b0458bb5b9b298affc2cb47779",
".git/objects/64/ea5398a29e8176b6cd9d229ee822c628177b7d": "4ef9b0ac173d9302d8fe9f9be4f318d4",
".git/objects/90/6e853aabc430d7cac5a14413338aa2bbb62739": "7206e6277303b636ef8d87c7f4e21ef1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/a0/085ae24562c193d70bdf77447eefff75e9caca": "05b607f30c5e241998db14ec519f58b7",
".git/objects/dd/310220c242c85d191f50563a1d8a9afbe74128": "3c7d5845bb564c757537c6b959f9955a",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "6e9c97fa8e93a6aa5ba45802bd0c8331",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "70211b0a8348423a1f37454c4b604839",
".git/objects/b6/baf1ea806f2d8ff31eedbce8cb2c01fbf89a00": "bab9b50b8ffa39eb7beec42e8f05cc13",
".git/objects/b6/d281610f2c77c15b7d74999deb4ee9ac7378e0": "f33de8c6d8373f9c4423b23e25b8fdcd",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "a826ac8bab9ab62d170be6b714e1a207",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/de/ea926a8eac87d00144896ce6b1d6e6d288a3ab": "7190fe591bc0466460f02ecbfc722caa",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "9ff3ce330d5df0be682c8e0063c1b84e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/f7/a91d41d1c85d13d3aaf215ab3c995b339127f1": "f0d5653ebd796290b31ed9e6d8b9bc51",
".git/objects/f6/b3e179a0ffa2b347d839b05db71499805c901e": "027f9b62e8952c001acc381062da787b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/f1/680fe6c7b6743d6ed154b98ed05c9c37b621a1": "37dd6a53947c3a3116335af3eb1d8487",
".git/objects/46/1370323a1f854970488a2fffa4af3937943cd4": "9333f2ef0c12218afea1a802fb1259ec",
".git/objects/2c/866b484a042f11e73f41c9ad3942d47380d8f9": "b7bb9717c2e4391b2bee05904fb4bb5a",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "5e0b026f9cac069c68e61c6230c9e22e",
".git/objects/2d/338fff840a6db852a8c26e4f4cfc7fa3b84097": "52b027832c3f0f41606275c5a12b4503",
".git/objects/41/8e85f444f2c6bd070dfd27611c8473ba6b0b88": "14e2503781c960e71ed82767e1e36535",
".git/objects/1e/298fba6f04002fcb3cc543a5018de1bc9859f4": "daa14821dda10e7119961367741d3a19",
".git/objects/1e/f3addf3daff52829293ca7c826a8a4ef05c88c": "4bcdd6eb3c8c443e003bb0e833a380c7",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/85/3abc72f17f4b8693d07c55a040a17bf7f16eeb": "92b034b3ae6a5a726ff867f09506d2e7",
".git/objects/49/adea319c9a2696c1cb590cf7f28c95ffaf2f6a": "97b48b356cde34041a3ab5383eafcbed",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/47/d53b35da00e90aba5efc1ab1e5206b38f1c310": "bcdaed024959e68ca3631c9b69fccad8",
".git/objects/8b/0fb9888ca1641f1acd050dc257ee5e1b9364f1": "73174ef194441710df8bf49ea84f0325",
".git/objects/13/fa71ca9cd88bbcd97414e8c26a81525d13b461": "03fc80656f146b96d6b76a3fbd2f08a3",
".git/objects/25/33085b82abe989c70f1995eaf5873568bdeeda": "03a76bacbecbbf9cad3fe22228f31cb8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "731a086ca15a95ea372f99509c785448",
".git/logs/refs/heads/main": "1265ae72f9502f60f0f3c425434e7f33",
".git/logs/refs/remotes/origin/main": "d5f037b765545cf1259c71548a0d1ce9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c079dd09c2fa86bb98497f1a3efb3962",
".git/refs/remotes/origin/main": "c079dd09c2fa86bb98497f1a3efb3962",
".git/index": "91ac13b9c74810b0945ec20637c56dc8",
".git/COMMIT_EDITMSG": "ff609e8ce66526bdf1100cea902de318",
".git/FETCH_HEAD": "3cd919e5f79f018803e6dc168205c7bc",
"assets/AssetManifest.json": "2c89e0ed87626238634e664acad55221",
"assets/NOTICES": "dc1df6b7fa3b7928decb6c7f5a95bcc2",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/AssetManifest.bin.json": "d4d1084e88b962e008706f0f9667c2de",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "15ab5256e79c88f0ed98dd3987f83f35",
"assets/fonts/MaterialIcons-Regular.otf": "3bc88bbf067cf46e7ac7a838093f80fe",
"assets/assets/env.txt": "de3d7f24b4b698cbd27027a0e4b231ae",
"assets/assets/images/logo.jpeg": "94bc1d9b96abd2f956f64b4dfd98889a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
