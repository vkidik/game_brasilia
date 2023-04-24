setTimeout(() => {
  window.scrollTo(0, 0);
}, 50);
let x = 0;
let y = 90;
let inJump = false;
let inPause = true;
let i = 0;
document.addEventListener("keydown", function (event) {
  if (inPause) return;
  if (event.keyCode == 39) {
    x += 50;
    runner.style.left = x + "px";
  }
  if (event.keyCode == 38) {
    y += 25;
    runner.style.bottom = y + "px";
    if (y >= 115) {
      y = 115;
      runner.style.bottom = y + "px";
    }
  }
  if (event.keyCode == 40) {
    y -= 25;
    runner.style.bottom = y + "px";
    if (y <= 65) {
      y = 65;
      runner.style.bottom = y + "px";
    }
  }
  if (event.keyCode == 32) {
    if (inJump) {
      return;
    }
    inJump = true;
    y += 30;
    runner.style.bottom = y + "px";
    setTimeout(() => {
      y -= 30;
      inJump = false;
      runner.style.bottom = y + "px";
    }, 300);
  }
});
function Move(dir) {
  if (dir == "x") {
    console.log("по x");
    x += 9.6;
    runner.style.left = x + "px";
    window.scrollBy(10, 0);
  }
  if (dir == "y") {
    console.log("по y");
  }
}
Move("y");

function removeStart() {
  start.remove();
  inPause = false;
  window.scrollTo(0, 0);
  function a() {
    setTimeout(() => {
      Move("x");
      a();
    }, 50);
  }
  a();
}

// let player = document.querySelector("#runner");
// function windowProportions() {
//   left = checkPos(left, window.innerWidth);
//   top = checkPos(down, windw.innerHeight);
//   player.style.left = left + "px";
//   player.style.top = top + "px";

//   function checkPos(pos, max) {
//     if (pos < 0) {
//       return max + pos;
//     } else if (pos >= max) {
//       return max - pos;
//     } else {
//       return pos;
//     }
//   }
//   checkPos();
// }
// let XcoordAmazon = amazon.getBoundingClientrect();
// console.log("top:" + XcoordAmazon.top + " left: " + XcoordAmazon.left + "");
