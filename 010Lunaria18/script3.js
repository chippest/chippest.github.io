let canvas3 = document.getElementById("canvas3")

canvas3.width = window.innerWidth
canvas3.height = window.innerHeight

let a = canvas3.getContext('2d')

addEventListener('resize', () => {
    canvas3.width = innerWidth
    canvas3.height = innerHeight
    location.reload()
})

white = `#ffffff` + Math.floor((Math.random() * (100-60) + 60))
so = 1
let n3 = 63
let n4 = 86

function Star(sx, sy, sr){
    this.x = sx
    this.y = sy
    this.r = sr

    this.draw = function(){
        a.beginPath();
        a.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        a.fillStyle = white;
        a.fill();
    }
    this.draw()
}

Star(365, 359 - n4, so)
Star(350, 359 - n4, so)
Star(343, 329 - n4, so)
Star(405, 258 - n4, so)
Star(346, 578 - n4, so)
Star(530, 273, so)
Star(264, 373, so)
Star(279, 379, so)
Star(504, 147, so)
Star(451, 418, so)
Star(565, 390 - n4, so)
Star(540, 385 - n4, so)
Star(521, 417 - n4, so)
Star(525, 435 - n4, so)
Star(551, 414 - n4, so)
Star(559, 440 - n4, so)
Star(616, 356 - n4, so)
Star(577, 592 - n4, so)
Star(611, 420 - n4, so)
Star(640, 375 - n4, so)
Star(650, 403 - n4, so)
Star(629, 429 - n4, so)
Star(581, 443 - n4, so)

Star(616 + n3, 356 - n4, so)
Star(577 + n3, 592 - n4, so)
Star(611 + n3, 420 - n4, so)
Star(640 + n3, 375 - n4, so)
Star(650 + n3, 403 - n4, so)
Star(629 + n3, 429 - n4, so)
Star(581 + n3, 443 - n4, so)

Star(738, 380 - n4, so)
Star(732, 405 - n4, so)
Star(736, 428 - n4, so)
Star(774, 390 - n4, so)
Star(752, 531 - n4, so)
Star(721, 617 - n4, so)
Star(702, 633 - n4, so)
Star(694, 599 - n4, so)
Star(714, 520 - n4, so)
Star(757, 461 - n4, so)
Star(829, 400 - n4, so)
Star(969, 234 - n4, so)
Star(922, 549 - n4, so)
Star(907, 335 - n4, so)
Star(902, 291 - n4, so)
Star(1023, 248 - n4, so)
Star(1050, 295 - n4, so)
Star(1001, 368 - n4, so)
Star(943, 397 - n4, so)
Star(935, 382 - n4, so)
Star(984, 346 - n4, so)
Star(1034, 348 - n4, so)
Star(1065, 378 - n4, so)
Star(1045, 473 - n4, so)
Star(973, 520 - n4, so)
Star(938, 523 - n4, so)
Star(1100, 396 - n4, so)
Star(1101, 446 - n4, so)
Star(1136, 424 - n4, so)
Star(1177, 367 - n4, so)
Star(1168, 353 - n4, so)
Star(1144, 389 - n4, so)
Star(1166, 408 - n4, so)
Star(1193, 395 - n4, so)
Star(1181, 477 - n4, so)
Star(1242, 403 - n4, so)
Star(1271, 276 - n4, so)
Star(1204, 572 - n4, so)
Star(1223, 567 - n4, so)
Star(1173, 325 - n4, so)
Star(1403, 319 - n4, so)
Star(1291, 333 - n4, so)
Star(1292, 276 - n4, so)
Star(1316, 253 - n4, so)
Star(1316, 284 - n4, so)
Star(1277, 349 - n4, so)
Star(1251, 486 - n4, so)
Star(1294, 416 - n4, so)
Star(1315, 448 - n4, so)
Star(1379, 383 - n4, so)
Star(1393, 414 - n4, so)
Star(1377, 538 - n4, so)
Star(1399, 521 - n4, so)
Star(1348, 415 - n4, so)
Star(1352, 445 - n4, so)
Star(1382, 427 - n4, so)
Star(1421, 348 - n4, so)
Star(1436, 272 - n4, so)
Star(1418, 298 - n4, so)
Star(1393, 414 - n4, so)
Star(1458, 387 - n4, so)
Star(1428, 385 - n4, so)
Star(1412, 432 - n4, so)
Star(1433, 430 - n4, so)
Star(1450, 403 - n4, so)
Star(1457, 440 - n4, so)
Star(1479, 446 - n4, so)
Star(1507, 390 - n4, so)
Star(1505, 427 - n4, so)
Star(1522, 428 - n4, so)
Star(1543, 392 - n4, so)
Star(1512, 557 - n4, so)
Star(1482, 627 - n4, so)
Star(1464, 625 - n4, so)
Star(1463, 551 - n4, so)
Star(1524, 460 - n4, so)
Star(1596, 400 - n4, so)