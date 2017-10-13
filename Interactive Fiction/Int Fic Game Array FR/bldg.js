function updateGame() {
  game += house[pos].description + gap;
  objects();
  doors();
  gameOver();
}

function objects() {
  if (house[pos].objects) {
    game += "Vous voyez:\n"
    for (var i = 0; i < house[pos].objects.length; i++) {
      game += house[pos].objects[i].name + "\n";
    }
    game += "\n";
  }
}

function doors() {
  if (house[pos].north) {
    game += "Il y a une porte au nord.\n"
  }

  if (house[pos].east) {
    game += "Il y a une porte à l'est.\n"
  }

  if (house[pos].south) {
    game += "Il y a une porte au sud.\n"
  }

  if (house[pos].west) {
    game += "Il y a une porte à l'ouest.";
  }

  game += gap;
}

function gameOver() {
  if (house[pos].end) {
    game += "***Fin***"
    noLoop();
  }
}

function parseText() {
  var str = input.value();
  input.value("");
  var res = str.split(" ");

  if (res[0].toLowerCase() == "allez" || res[0].toLowerCase() == "va") {
    for (var i = 0; i < res.length; i++) {
      if (res[i].toLowerCase() == "nord" && house[pos].north) {
        game += ">>> Vous allez au nord vers " + house[pos].north + gap;
        changeRoom(house[pos].north);
      } else if (res[i].toLowerCase() == "l'est" && house[pos].east) {
        game += ">>> Vous allez à l'est vers " + house[pos].east + gap;
        changeRoom(house[pos].east);
      } else if (res[i].toLowerCase() == "sud" && house[pos].south) {
        game += ">>> Vous allez au sud vers " + house[pos].south + gap;
        changeRoom(house[pos].south);
      } else if (res[i].toLowerCase() == "l'ouest" && house[pos].west) {
        game += ">>> Vous allez à l'ouest vers " + house[pos].west + gap;
        changeRoom(house[pos].west);
      } else {

      }
    }
  } else if (res[0] == "regarde") {
    checkRoom(res);
    checkObjects(res);
  }
}

function checkRoom(res) {
  for (var i = 0; i < res.length; i++) {
    if (res[i] == house[pos].name) {
      game += ">>> Regarde " + house[pos].name + gap;
      updateGame();
    }
  }
}

function checkObjects(res) {
  if (house[pos].objects) { //checks to see if an object is present in the room
    for (var i = 1; i < res.length; i++) { //loop through the response starting from 2nd word
      for (var j = 0; j < house[pos].objects.length; j++) { //loop through objects in room
        if (res[i] == house[pos].objects[j].name.split(" ")[1]) { //check command with object name
          game += ">>> Regarde " + house[pos].objects[j].name + gap; //write command to the screen
          game += house[pos].objects[j].description + gap; //write object description to the screen
          objects();
          doors();
        }
      }
    }
  }
}

function changeRoom(newRoom) {
  for (var i = 0; i < house.length; i++) {
    if (house[i].name == newRoom) {
      pos = i;
    }
  }
  updateGame();
}
