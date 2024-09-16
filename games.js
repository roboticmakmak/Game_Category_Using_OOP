import { Display } from "./ui.js";
import { default_category } from "./index.js";
// import { category } from "./index.js";
export class Games extends Display {
  Games_Data = [];
  async getAllGames(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0be1a55dd9msh8d09be5343b7146p12312ejsnee4610d870c0",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      this.Games_Data = [];
      viewLoading();
      const response = await fetch(url, options);
      //console.log(response);
      function viewLoading() {
        $(".loading").removeClass("d-none");
        $(".loading").addClass("d-block");
      }
      if (response.ok) {
        $(".loading").removeClass("d-block");
        $(".loading").addClass("d-none");
        console.log("Success");
      } else {
        $(".loading").removeClass("d-none");
        $(".loading").addClass("d-block");
        console.log("Error");
      }
      const Games_JSON = await response.json();
      this.Games_Data = Games_JSON;
      return this.Games_Data;
      //console.log(this.Games_Data);
    } catch (error) {
      console.error(error);
    }
  }
  async Display_Games(category) {
    //console.log(category);
    this.Games_Data = await this.getAllGames(category);
    //console.log(this.Games_Data);
    this.displayGames(this.Games_Data);
    return this.Games_Data;
  }
}
