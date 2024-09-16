import { Games } from "./games.js";
import { Game_Details } from "./game_details.js";
import {} from "./game_details.js";
let category = document.querySelectorAll(".nav-link");
let allGames = new Games();
let myGame_Details = new Game_Details();
let myGameDetails;
let activeLink = category[0];
export let default_category = "shooter";
await allGames.Display_Games(default_category);

//console.log(category);

var offsetnavTop = $("nav").offset().top;

$(window).scroll(function () {
  if ($(window).scrollTop() >= offsetnavTop) {
    $(".navbar").addClass("fixed-top");
  } else {
    $(".navbar").removeClass("fixed-top");
  }
});

let myDisplayedGames = new Games();

let myGames = await myDisplayedGames.getAllGames(default_category);
console.log(myGames);

let Data;
Data = document.querySelectorAll(".card");
console.log(Data);

category.forEach((item) => {
  item.addEventListener("click", async (e) => {
    if (activeLink) {
      activeLink.classList.remove("active");
      e.target.classList.add("active");
      //console.log(activeLink);
    }
    activeLink = e.target;
    await allGames.Display_Games(e.target.text);
    myGames = await myDisplayedGames.getAllGames(activeLink.text);
    console.log(myGames);
    Data = document.querySelectorAll(".card");
    console.log(Data);

    Data.forEach((item) => {
      item.addEventListener("click", (e) => {
        console.log(item.attributes[0].value);
        FindGameDetails(item.attributes[0].value);
        document.getElementById("game-details").style.display = "block";
        let width = $("#game-details").width();
        console.log(width + "px");
        $(".btn-close").css("left", width - 100 + "px");
        document.getElementById("games").style.display = "none";
      });
    });
    console.log(Data);
  });
});

Data.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.attributes[0].value);
    FindGameDetails(item.attributes[0].value);
    document.getElementById("game-details").style.display = "block";
    let width = $("#game-details").width();
    console.log(width + "px");
    $(".btn-close").css("left", width - 100 + "px");
    document.getElementById("games").style.display = "none";
  });
});

async function FindGameDetails(id) {
  //console.log(id);
  myGameDetails = await myGame_Details.getGameDetails(id);
  console.log(myGameDetails);
  myGame_Details.Display_Game_Details(myGameDetails);
  myGameDetails.getGameDetails;
}

$(".btn-close").click(function (e) {
  const gameDetailsContainer = document.querySelector(
    "#game-details .container"
  );
  gameDetailsContainer.innerHTML = "";
  document.getElementById("game-details").style.display = "none";
  document.getElementById("games").style.display = "block";
  myGameDetails = "";
});
