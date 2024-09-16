export class Display {
  constructor() {}
  displayGames(Games_Data) {
    const gamesContainer = document.querySelector(".row");
    gamesContainer.innerHTML = "";
    for (var i = 0; i < Games_Data.length; i++) {
      const card = document.createElement("div");
      card.className = "col-md-3";
      card.innerHTML = `
        <div data-id="${Games_Data[i].id}" style="height: 400px" class="card">
          <div class="card-body">
            <figure>
              <img class="card-img-top object-fit-cover h-100" src="${Games_Data[i].thumbnail}" />
            </figure>
            <figcaption>
            <div class="game-caption d-inline-block w-100 d-flex justify-content-between">
                <div class="game-name">${Games_Data[i].title}</div>
                <a
                    name=""
                    id=""
                    class="btn btn-primary"
                    href="#"
                    role="button"
                    >FREE</a
                >
                
            </div>
              <div class="game-description pt-4 text-center">${Games_Data[i].short_description}</div>
            </figcaption>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <div class="game-genre">${Games_Data[i].genre}</div>
            <div class="game-platform">${Games_Data[i].platform}</div>
          </div>
        </div>
      `;

      gamesContainer.appendChild(card); // Append the card to the container
    }
  }

  displayGameDetails(Game_Data) {
    const gameDetailsContainer = document.querySelector(
      "#game-details .container"
    );
    gameDetailsContainer.innerHTML = "";

    const gameDetails = document.createElement("div");
    gameDetails.className = "row";

    const gameThumbnail = document.createElement("div");
    gameThumbnail.className = "col-md-6";
    gameThumbnail.innerHTML = `
      <div>Game Details:</div>
      <div class="game-thumbnail"><img src="${Game_Data.thumbnail}" alt="Game Thumbnail"></div>
    `;

    const gameInfo = document.createElement("div");
    gameInfo.className = "col-md-6";
    gameInfo.innerHTML = `
      <div class="title">${Game_Data.title}</div>
      <div class="game-category">Category: <p class="text bg-info">${Game_Data.genre}</p></div>
      <div class="game-platform">Platform: <p class="text bg-info">${Game_Data.platform}</p></div>
      <div class="game-status">Status: <p class="text bg-info">${Game_Data.status}</div>
      <div class="game-description">Description:<p class="text"> ${Game_Data.description}</p></div>
    `;

    gameDetails.appendChild(gameThumbnail);
    gameDetails.appendChild(gameInfo);

    gameDetailsContainer.appendChild(gameDetails);
  }
}
