function updateGame() {
  game += house[pos].description + gap;
  objects();
  doors();
  gameOver();
}

function objects() {
  if (house[pos].objects) {
    game += "You see:\n"
    for (var i = 0; i < house[pos].objects.length; i++) {
      game += house[pos].objects[i].name + "\n";
    }
    game += "\n";
  }
}

function doors() {
  if (house[pos].north) {
    game += "There is a door to the North.\n"
  }

  if (house[pos].east) {
    game += "There is a door to the East.\n"
  }

  if (house[pos].south) {
    game += "There is a door to the South.\n"
  }

  if (house[pos].west) {
    game += "There is a door to the West.";
  }

  game += gap;
}

function gameOver() {
  if (house[pos].end) {
    game += "***Game Over***"
    noLoop();
  }
}

function parseText() {
  var str = input.value();
  input.value("");
  var res = str.split(" ");

  if (res[0] == "go") {
    for (var i = 0; i < res.length; i++) {
      if (res[i] == "north" && house[pos].north) {
        game += ">>> Go North to the " + house[pos].north + gap;
        changeRoom(house[pos].north);
      } else if (res[i] == "east" && house[pos].east) {
        game += ">>> Go East to the " + house[pos].east + gap;
        changeRoom(house[pos].east);
      } else if (res[i] == "south" && house[pos].south) {
        game += ">>> Go South to the " + house[pos].south + gap;
        changeRoom(house[pos].south);
      } else if (res[i] == "west" && house[pos].west) {
        game += ">>> Go West to the " + house[pos].west + gap;
        changeRoom(house[pos].west);
      } else {

      }
    }
  } else if (res[0] == "look") {
    checkRoom(res);
    checkObjects(res);
  }
}

function checkRoom(res) {
  for (var i = 0; i < res.length; i++) {
    if (res[i] == house[pos].name) {
      game += ">>> Look at the " + house[pos].name + gap;
      updateGame();
    }
  }
}

function checkObjects(res) {
  if (house[pos].objects) {
    for (var i = 1; i < res.length; i++) {
      for (var j = 0; j < house[pos].objects.length; j++) {
        if (res[i] == house[pos].objects[j].name) {
          game += ">>> Look at the " + house[pos].objects[j].name + gap;
          game += house[pos].objects[j].description + gap;
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
