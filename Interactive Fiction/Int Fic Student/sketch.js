var house;
var txt; //text area
var input; //input box
var pos; //position of the player
var msg; //story written to the screen
var gap = "\n\n"; //blank line
var theight;

function preload() {
  house = loadJSON("bldg.json");
}

function setup() {
  msg = "";
  noCanvas();
  newRoom = 0;
  txt = createElement('textarea');
  createP('Type your commands below.');
  input = createInput();
  input.changed(parseText);

  for (var i = 0; i < house.rooms.length; i++) {
    if (house.rooms[i].start == true) {
      pos = i;
    }
  }
  updateMsg();
}

function draw() {
  txt.value(msg);
}

function updateMsg() {
  msg += house.rooms[pos].description + gap;
  containers();
  doors();
  gameOver();
}

function containers() {
  if (house.rooms[pos].objects) {
    msg += "You see:\n"
    for (var i = 0; i < house.rooms[pos].objects.length; i++) {
      msg += house.rooms[pos].objects[i].name + "\n";
    }
    msg += "\n";
  }
}

function doors() {
  if (house.rooms[pos].north) {
    msg += "There is a door to the North.\n"
  }

  if (house.rooms[pos].east) {
    msg += "There is a door to the East.\n"
  }

  if (house.rooms[pos].south) {
    msg += "There is a door to the South.\n"
  }

  if (house.rooms[pos].west) {
    msg += "There is a door to the West.";
  }

  msg += gap;
}

function parseText() {
  var str = input.value();
  input.value("");
  var res = str.split(" ");

  if (res[0] == "go") {
    for (var i = 0; i < res.length; i++) {
      if (res[i] == "north" && house.rooms[pos].north) {
        msg += ">>> Go to the " + house.rooms[pos].north + gap;
        changeRoom(house.rooms[pos].north);
      } else if (res[i] == "east" && house.rooms[pos].east) {
        msg += ">>> Go to the " + house.rooms[pos].east + gap;
        changeRoom(house.rooms[pos].east);
      } else if (res[i] == "south" && house.rooms[pos].south) {
        msg += ">>> Go to the " + house.rooms[pos].south + gap;
        changeRoom(house.rooms[pos].south);
      } else if (res[i] == "west" && house.rooms[pos].west) {
        msg += ">>> Go to the " + house.rooms[pos].west + gap;
        changeRoom(house.rooms[pos].west);
      } else {

      }
    }
  } else if (res[0] == "look") {
    checkRoom(res);
    checkObjects(res);
  }
} //end parseText function

function checkRoom(res) {
  for (var i = 0; i < res.length; i++) {
    if (res[i] == house.rooms[pos].name) {
      msg += ">>> Look at the " + house.rooms[pos].name + gap;
      updateMsg();
      //break;
    }
  }
}

function checkObjects(res) {
  if (house.rooms[pos].objects) {
    for (var i = 1; i < res.length; i++) {
      for (var j = 0; j < house.rooms[pos].objects.length; j++) {
        if (res[i] == house.rooms[pos].objects[j].name) {
          msg += ">>> Look at the " + house.rooms[pos].objects[j].name + gap;
          msg += house.rooms[pos].objects[j].description + gap;
          containers();
          doors();
        }
      }
    }
  }
} //end of checkObjects function

function changeRoom(newRoom) {
  for (var i = 0; i < house.rooms.length; i++) {
    if (house.rooms[i].name == newRoom) {
      pos = i;
    }
  }
  updateMsg();
}

function gameOver() {
  if (house.rooms[pos].end) {
    msg += "Game Over"
    noLoop();
  }
}
