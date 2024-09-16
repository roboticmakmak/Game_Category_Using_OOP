import { Display } from "./ui.js";
export class Game_Details extends Display {
  Game_Data = {};
  async getGameDetails(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0be1a55dd9msh8d09be5343b7146p12312ejsnee4610d870c0",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      //console.log(result);
      this.Game_Data = result;
      return this.Game_Data;
      console.log(this.Game_Data);
    } catch (error) {
      console.error(error);
    }
  }

  Display_Game_Details(Game_Data) {
    this.displayGameDetails(Game_Data);
  }
}
