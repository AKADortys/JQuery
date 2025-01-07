//NATIF
const list = document.getElementById("javascript-list");
const btn = document.getElementById("btn-js");
console.log(btn);
let isOpen = true;

btn.addEventListener("click", () => {
  document.getElementById("carre").style.display = isOpen ? "none" : "block";
  setTimeout(() => {
    document.getElementById("carre").style.opacity = isOpen ? "1" : "0";
  }, 50);
  isOpen = !isOpen;
});

list.childNodes.forEach((e) => {
  e.innerText = "javascript";
});

document
  .querySelector("#javascript-list>li:nth-child(2)")
  .addEventListener("click", () => {
    alert("Tu as cliquer!");
  });

//JQUERY
$("#jquery>li").text("JQuery");

$("#jquery>li:nth-child(2)").css("cursor", "pointer");
$("#jquery>li:nth-child(2)").on("click", function () {
  alert("Tu as cliquer!");
});

$("#btn-jq").on("click", () => {
  $("#carre").animate({ opacity: isOpen ? "0" : "1" });
  isOpen = !isOpen;
});

const availableTags = [
  "ActionScript",
  "AppleScript",
  "Asp",
  "BASIC",
  "C",
  "C++",
  "Clojure",
  "COBOL",
  "ColdFusion",
  "Erlang",
  "Fortran",
  "Groovy",
  "Haskell",
  "Java",
  "JavaScript",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
  "Ruby",
  "Scala",
  "Scheme",
];
$("#tags").autocomplete({
  source: availableTags,
});

function hexFromRGB(r, g, b) {
  var hex = [r.toString(16), g.toString(16), b.toString(16)];
  $.each(hex, function (nr, val) {
    if (val.length === 1) {
      hex[nr] = "0" + val;
    }
  });
  return hex.join("").toUpperCase();
}
function refreshSwatch() {
  var red = $("#red").slider("value"),
    green = $("#green").slider("value"),
    blue = $("#blue").slider("value"),
    hex = hexFromRGB(red, green, blue);
  $("#swatch").css("background-color", "#" + hex);
}

$("#red, #green, #blue").slider({
  orientation: "horizontal",
  range: "min",
  max: 255,
  value: 127,
  slide: refreshSwatch,
  change: refreshSwatch,
});
$("#red").slider("value", 255);
$("#green").slider("value", 140);
$("#blue").slider("value", 60);

let progres = 0;
setInterval(() => {
  progres = progres + 1;
  progress(progres);
}, 500);
function progress(num) {
  $("#progressbar").progressbar({
    value: num,
  });
}
