var house = [0]; //list of rooms
var txt; //text area
var input; //input box
var pos; //position of the player
var game; //story written to the screen
var gap = "\n\n"; //blank line

function setup() {
  game = "";
  noCanvas();
  txt = document.getElementById('txt');
  input = createInput();
  input.elt.focus();
  input.changed(parseText);
  input.attribute("align", "center");
  pos = 0;

  //*****************************
  //Start coding your house below
  //*****************************
  house[0] = {
    name: "foyer",
    start: true,
    description: "The foyer is a cavernous space with a large chandelier swaying above. The gentle movement of the light fixture casts odd shadows across the floor.",
    north: "le couloir",
    east: false,
    south: false,
    west: false,
    objects: [{
        name: "un bureau",
        description: "Along the wall is a long, skinny, oak desk. The desk has a drawer."
      },
      {
        name: "des lettres",
        description: "On top of the desk are a pile of letters. Looks like it's mostly junk mail addressed to a \"Mr. V. Dragulya\"."
      }
    ],
    end: false
  };

  house[1] = {
    name: "le couloir",
    start: false,
    description: "You enter a narrow, dark hallway. The boards creak under your feet.",
    north: false,
    east: "la salle à manger",
    south: "foyer",
    west: "la bibliothèque",
    objects: [{
      name: "une photo",
      description: "It appears to be a family portrait. A mother and father stand lovingly behind a young boy. Everybody in the family wears long, black clothes. Their skin seems unusually pale."
    }],
    end: false
  };

  house[2] = {
    name: "la bibliothèque",
    start: false,
    description: "The room is filled floor to ceiling with stacks of old, musty books. You galnce at the titles as you walk by; many seem to be related to Romanian or Slavic history.",
    north: "le salon",
    east: "le couloir",
    south: false,
    west: false,
    objects: [{
      name: "une chaise",
      description: "There is a high-backed leather chair in the corner."
    }],
    end: false
  };

  house[3] = {
    name: "la salle à manger",
    start: false,
    description: "A long wooden table fille the room. Three candelabra are equally spaced out on the table. A single place setting is at the far end of the table.",
    north: "la cuisine",
    east: false,
    south: false,
    west: "le couloir",
    objects: [{
      name: "cloche",
      description: "There is a silver cloche covering the dinner plate. You lift up the lid and see raw liver on the plate. Blood from the uncooked organ is spreading out across the plate."
    }],
    end: false
  };

  house[4] = {
    name: "la cuisine",
    start: false,
    description: "The kitchen is mostly tidy, save for the cutting board and knife still on the counter.",
    north: "la chambre d'hôtes",
    east: false,
    south: "la salle à manger",
    west: false,
    objects: [{
      name: "un couteau",
      description: "A razor sharp chief's knife lays on the cutting board. Undoubtedly it was used to carve the liver, but there is not a trace of blood on the knife or the cutting board."
    }],
    end: false
  };

  house[5] = {
    name: "le salon",
    start: false,
    description: "A few chairs face a sofa. You can still the the faint lines where somebody recently sat on the one of the chairs. On the adjacent table is a wine glass.",
    north: false,
    east: false,
    south: "la bibliothèque",
    west: "la grande chambre",
    objects: [{
      name: "calice",
      description: "The last bits of what looks to be red wine have pooled at the bottom."
    }],
    end: false
  };

  house[6] = {
    name: "la grande chambre",
    start: false,
    description: "In middle of a wall is king-sized, four-poster bed. The bedding is made of shiny, black slik with red accents. The bed is pristine; it seems as though it has never been used.",
    north: false,
    east: "le salon",
    south: false,
    west: false,
    objects: [{
      name: "une boîte",
      description: "Off in the corner of the room, you see a long wooden box lying on the floor. Before you can go investigate further, you hear a loud bang coming from another room. Better go and investigate."
    }],
    end: false
  };

  house[7] = {
    name: "la chambre d'hôtes",
    start: false,
    description: "You step slowly into the guest bedroom, the door slams shut behind you. \"Why hello there,\" says a tall, slender man. His eyes remind you of the boy from the family portrait. \"I am delighted that you will be joining me for dinner,\" the man continues. \"And when I say 'for dinner' I don't mean as my guest.\" The man smiles slyly, revealing long, pointed incisors.",
    north: false,
    east: false,
    south: "la cuisine",
    west: false,
    objects: [],
    end: true
  };


  updateGame();
}

function draw() {
  txt.scrollTop = txt.scrollHeight;
  txt.value = game;
}
