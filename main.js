var locales = "en-EN";
var currency = "USD";

var savegame = JSON.parse(localStorage.getItem("Save"));

var prestige = JSON.parse(localStorage.getItem("PrestigeSave"));

var gamedata = {
  version: "0.0.0.a",
  newgame: true,
  money: 0,
  planetSize: 10,
  res: {
    Res1a: 5000,
    Res1b: 5000,
    Res1c: 5000,
    Res2a: 1000,
    Res2b: 1000,
    Res2c: 1000,
    Res3a: 100,
    Res3b: 100,
    Res3c: 100,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  resName: {
    Res1a: "Iron",
    Res1b: "Copper",
    Res1c: "Aluminium",
    Res2a: "Zinc",
    Res2b: "Lead",
    Res2c: "Silver",
    Res3a: "Iridium",
    Res3b: "Gold",
    Res3c: "Palladium",
    Rare1: "Rare1",
    Rare2: "Rare2",
    Rare3: "Rare3"
  },
  baseValue: {
    Res1a: 1,
    Res1b: 1,
    Res1c: 1,
    Res2a: 20,
    Res2b: 20,
    Res2c: 20,
    Res3a: 1600,
    Res3b: 1600,
    Res3c: 1600,
    Rare1: 40000,
    Rare2: 250000,
    Rare3: 2000000
  },
  resValue: {
    Res1a: 0,
    Res1b: 0,
    Res1c: 0,
    Res2a: 0,
    Res2b: 0,
    Res2c: 0,
    Res3a: 0,
    Res3b: 0,
    Res3c: 0,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  rare: {
    Rare1: false,
    Rare2: false,
    Rare3: false
  },
  minePower: 1,
  reach: {
    d1NW: 0,
    d1N: 0,
    d1NE: 0,
    d1W: 0,
    d1E: 0,
    d1SW: 0,
    d1S: 0,
    d1SE: 0,
    d2core: 0,
    core: 0
  },
  notMined: {
    d1NW: [],
    d1N: [],
    d1NE: [],
    d1W: [],
    d1E: [],
    d1SW: [],
    d1S: [],
    d1SE: [],
    d2NW: [],
    d2N: [],
    d2NE: [],
    d2W: [],
    d2core: [],
    d2E: [],
    d2SW: [],
    d2S: [],
    d2SE: [],
    /* 
        d3NW: [],
        d3N: [],
        d3NE: [],
        d3W: [], */
    d3core: []
    /* ,
        d3E: [],
        d3SW: [],
        d3S: [],
        d3SE: [] */
  },
  possibleOuterMaterial: ["Iron", "Copper", "Aluminium"],
  outermaterial: {
    name: "",
    ref: ""
  },
  possibleInnerMaterial: ["Zinc", "Lead", "Silver"],
  innermaterial: {
    name: "",
    ref: ""
  },
  possibleCoreMaterial: ["Iridium", "Gold", "Palladium"],
  corematerial: {
    name: "",
    ref: ""
  },
  droneAssign: {
    d1NW: 0,
    d1N: 0,
    d1NE: 0,
    d1W: 0,
    d1E: 0,
    d1SW: 0,
    d1S: 0,
    d1SE: 0,
    d2NW: 0,
    d2N: 0,
    d2NE: 0,
    d2W: 0,
    d2core: 0,
    d2E: 0,
    d2SW: 0,
    d2S: 0,
    d2SE: 0,
    /* d3NW: 0, */
    /* d3N: 0, */
    /* d3NE: 0, */
    /* d3W: 0, */
    d3core: 0
    /* d3E: 0,
    d3SW: 0,
    d3S: 0,
    d3SE: 0 */
  },
  d1base: 2,
  d1x: 1.4,
  d1rate: 1,
  d2base: 1,
  d2x: 1.4,
  d2rate: 1,
  d3base: 0.2,
  d3x: 1.4,
  d3rate: 1,
  yield1: 0.1,
  yield2: 0.01,
  yield3: 0.001,
  drone1: 0,
  d1left: 0,
  drone2: 0,
  d2left: 0,
  drone3: 0,
  d3left: 0,
  shipCargoLvl: 1,
  shipMaxCargo: 10,
  shipCapacity: 10,
  shipBayCapacity: 5,
  droneMk1: {
    Res1a: 0,
    Res1b: 0,
    Res1c: 0
  },
  droneMk2: {
    Res2a: 0,
    Res2b: 0,
    Res2c: 0
  },
  droneMk3: {
    Res3a: 0,
    Res3b: 0,
    Res3c: 0
  },
  shipStock: {
    Res1a: 0,
    Res1b: 0,
    Res1c: 0,
    Res2a: 0,
    Res2b: 0,
    Res2c: 0,
    Res3a: 0,
    Res3b: 0,
    Res3c: 0,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  sumValue: 0,
  sellingTime: 150,
  timeLeft: 0,
  tech: {
    membercard1: 0,
    membercard2: 0,
    membercard3: 0,
    researchLab: 0,
    droneMk1: 0,
    droneMk2: 0,
    droneMk3: 0,
    exoMk1: 1,
    exoMk2: 0,
    exoMk3: 0,
    cargoMk1: 1,
    cargoMk2: 0,
    cargoMk3: 0,
    droneBayMk1: 1,
    droneBayMk2: 0,
    droneBayMk3: 0,
    thrustersMk1: 1,
    thrustersMk2: 0,
    thrustersMk3: 0,
    antennaMk1: 1,
    antennaMk2: 0,
    antennaMk3: 0,
    converterMk1: 0,
    converterMk2: 0,
    converterMk3: 0,
    autonomousDrone: 0,
    massReducer: 0,
    engineeredDrone: 0,
    planetAnalyzer: 0,
    teleporter: 0,
    tradingAI: 0,
    miningAI: 0,
    spatialDrillingLaser: 0,
    tractorBeam: 0,
    autoPrestige: 0
  },
  BP: {
    researchLab: 0,
    droneMk1: 0,
    droneMk2: 0,
    droneMk3: 0,
    exoMk1: 1,
    exoMk2: 0,
    exoMk3: 0,
    cargoMk1: 1,
    cargoMk2: 0,
    cargoMk3: 0,
    droneBayMk1: 1,
    droneBayMk2: 0,
    droneBayMk3: 0,
    thrustersMk1: 1,
    thrustersMk2: 0,
    thrustersMk3: 0,
    antennaMk1: 1,
    antennaMk2: 0,
    antennaMk3: 0,
    converterMk1: 0,
    autonomousDrone: 0,
    planetAnalyzer: 0,
    teleporter: 0,
    spatialDrillingLaser: 0,
    tractorBeam: 0,
    autoPrestige: 0
  },
  RP: 0,
  resRP: {
    Res1a: 0.2,
    Res1b: 0.2,
    Res1c: 0.2,
    Res2a: 4,
    Res2b: 4,
    Res2c: 4,
    Res3a: 64,
    Res3b: 64,
    Res3c: 64,
    Rare1: 12.8,
    Rare2: 128,
    Rare3: 1280
  },
  prestigeTime: 10,
  lasttick: 0
};

var blueprints = {
  membercard1: {
    prev: [],
    next: ["membercard2"],
    title: "Membership Card I",
    bought: false,
    toCraft: false,
    price: 2500,
    desc: "This membership card of the Universal Mining Organization reduces travel costs by 99.99%!"
  },
  membercard2: {
    prev: ["membercard1"],
    next: ["membercard3"],
    title: "Membership Card II",
    bought: false,
    toCraft: false,
    price: 5000,
    desc: "Get another 99.99% reduction on travel costs!"
  },
  membercard3: {
    prev: ["membercard2"],
    next: [],
    title: "Membership Card III",
    bought: false,
    toCraft: false,
    price: 0,
    desc: "(Not implemented)"
  },
  researchLab: {
    prev: [],
    next: [],
    title: "Research Lab",
    bought: false,
    toCraft: true,
    price: 500,
    res: {
      Res1a: 15,
      Res1b: 15,
      Res1c: 15,
      Res2a: 5,
      Res2b: 5,
      Res2c: 5,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "This laboratory provides access to research on the collected materials."
  },
  droneMk1: {
    prev: [],
    next: ["droneMk2", "exoMk2"],
    title: "Mining Drone Mk1",
    bought: false,
    toCraft: true,
    price: 10,
    res: {
      Res1a: 2,
      Res1b: 2,
      Res1c: 2,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Automated mining drone that can mine the upper layer of the planet."
  },
  droneMk2: {
    prev: ["droneMk1", "exoMk2"],
    next: ["droneMk3", "exoMk3"],
    title: "Mining Drone Mk2",
    bought: false,
    toCraft: true,
    price: 250,
    res: {
      Res1a: 0,
      Res1b: 0,
      Res1c: 0,
      Res2a: 1,
      Res2b: 1,
      Res2c: 1,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Automated mining drone that can mine the second layer of the planet."
  },
  droneMk3: {
    prev: ["droneMk2", "exoMk3"],
    next: [],
    title: "Mining Drone Mk3",
    bought: false,
    toCraft: true,
    price: 0,
    res: {
      Res1a: 0,
      Res1b: 0,
      Res1c: 0,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0.2,
      Res3b: 0.2,
      Res3c: 0.2
    },
    desc: "Automated mining drone that can mine the core of the planet!"
  },
  exoMk1: {
    prev: [],
    next: ["exoMk2"],
    bought: true
  },
  exoMk2: {
    prev: ["exoMk1", "droneMk1"],
    next: ["exoMk2", "droneMk2"],
    title: "Exoskeleton Mk1",
    bought: false,
    toCraft: true,
    price: 150,
    res: {
      Res1a: 33,
      Res1b: 33,
      Res1c: 33,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increase your strength enough to mine the second layer of the planet by hand."
  },
  exoMk3: {
    prev: ["exoMk2", "droneMk2"],
    next: ["droneMk3"],
    title: "Exoskeleton Mk2",
    bought: false,
    toCraft: true,
    price: 2500,
    res: {
      Res1a: 150,
      Res1b: 150,
      Res1c: 150,
      Res2a: 33,
      Res2b: 33,
      Res2c: 33,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increase your strength enough to mine the core of the planet by hand!"
  },
  cargoMk1: {
    prev: [],
    next: ["cargoMk2", "droneBayMk2"],
    bought: true
  },
  cargoMk2: {
    prev: ["cargoMk1"],
    next: ["cargoMk3", "droneBayMk3"],
    title: "Cargo Bay Mk2",
    bought: false,
    toCraft: true,
    price: 100,
    res: {
      Res1a: 3.3,
      Res1b: 3.3,
      Res1c: 3.3,
      Res2a: 0,
      Res2b: 0,
      Res2c: 0,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increases ship cargo space from 10 units to 100 units!"
  },
  cargoMk3: {
    prev: ["cargoMk2"],
    next: [],
    title: "Cargo Bay Mk3",
    bought: false,
    toCraft: true,
    price: 2000,
    res: {
      Res1a: 30,
      Res1b: 30,
      Res1c: 30,
      Res2a: 3.3,
      Res2b: 3.3,
      Res2c: 3.3,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increases ship cargo space from 100 units to 1000 units!"
  },
  droneBayMk1: {
    prev: [],
    next: ["droneBayMk2"],
    bought: true
  },
  droneBayMk2: {
    prev: ["cargoMk1", "droneBayMk1"],
    next: ["droneBayMk3"],
    title: "Drone Bay Mk2",
    bought: false,
    toCraft: true,
    price: 250,
    res: {
      Res1a: 30,
      Res1b: 30,
      Res1c: 30,
      Res2a: 1,
      Res2b: 1,
      Res2c: 1,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Increases the number of drones transportable to new planets from 5 to 20!"
  },
  droneBayMk3: {
    prev: ["cargoMk2", "droneBayMk2"],
    next: [],
    title: "Drone Bay Mk3",
    bought: false,
    toCraft: true,
    price: 4000,
    res: {
      Res1a: 300,
      Res1b: 300,
      Res1c: 300,
      Res2a: 30,
      Res2b: 30,
      Res2c: 30,
      Res3a: 0.05,
      Res3b: 0.05,
      Res3c: 0.05,
    },
    desc: "Increases the number of drones transportable to new planets from 20 to 50!"
  },
  thrustersMk1: {
    prev: [],
    next: ["thrustersMk2"],
    bought: true
  },
  thrustersMk2: {
    prev: ["thrustersMk1"],
    next: ["thrustersMk3"],
    title: "Thrusters Mk2",
    bought: false,
    toCraft: true,
    price: 350,
    res: {
      Res1a: 33,
      Res1b: 33,
      Res1c: 33,
      Res2a: 0.3,
      Res2b: 0.3,
      Res2c: 0.3,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0,
    },
    desc: "Cuts travel times in half!"
  },
  thrustersMk3: {
    prev: ["thrustersMk2"],
    next: [],
    title: "Thrusters Mk3",
    bought: false,
    toCraft: true,
    price: 2000,
    res: {
      Res1a: 210,
      Res1b: 210,
      Res1c: 210,
      Res2a: 21,
      Res2b: 21,
      Res2c: 21,
      Res3a: 0.21,
      Res3b: 0.21,
      Res3c: 0.21
    },
    desc: "Cuts travel times in half, again!"
  },
  antennaMk1: {
    prev: [],
    next: ["antennaMk2"],
    bought: true
  },
  antennaMk2: {
    prev: ["antennaMk1"],
    next: ["antennaMk3"],
    title: "Antenna Mk2",
    bought: false,
    toCraft: true,
    price: 1000,
    res: {
      Res1a: 1,
      Res1b: 1,
      Res1c: 1,
      Res2a: 1,
      Res2b: 1,
      Res2c: 1,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "With this antenna, the ship will be able scan 2 planets to go to!"
  },
  antennaMk3: {
    prev: ["antennaMk2"],
    next: [],
    title: "Antenna Mk3",
    bought: false,
    toCraft: true,
    price: 5000,
    res: {
      Res1a: 1,
      Res1b: 1,
      Res1c: 1,
      Res2a: 1,
      Res2b: 1,
      Res2c: 1,
      Res3a: 1,
      Res3b: 1,
      Res3c: 1
    },
    desc: "With this antenna, the ship will be able scan 5 planets to go to!"
  }
}

var research = {
  engineeredDrone: {
    prev: [],
    next: [],
    title: "Engineered Drones",
    bought: false,
    toCraft: false,
    RP: 9700,
    desc: "Drones Mk2 doesn't require Mk1 drone anymore to be crafted. And the cost of making the Mk1 drone is now based on the quantity of Mk1 drone only (instead of Mk1 + Mk2)"
  },
  planetAnalyzer: {
    prev: [],
    next: ["massReducer"],
    title: "Planet Analyzer",
    bought: false,
    toCraft: true,
    RP: 4850,
    res: {
      Res1a: 30,
      Res1b: 30,
      Res1c: 30,
      Res2a: 3,
      Res2b: 3,
      Res2c: 3,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Provides the composition of the planets scanned by the ship."
  },
  converterMk1: {
    prev: [],
    next: ["massReducer", "converterMk2"],
    title: "Resource Converter Mk1",
    bought: false,
    toCraft: true,
    RP: 4850,
    res: {
      Res1a: 30,
      Res1b: 30,
      Res1c: 30,
      Res2a: 3,
      Res2b: 3,
      Res2c: 3,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "A machine capable of rearranging the atoms that make up matter."
  },
  massReducer: {
    prev: ["planetAnalyzer", "converterMk1"],
    next: [],
    title: "Mass Reducer",
    bought: false,
    toCraft: false,
    RP: 4850,
    desc: "Reduces the weight of materials in the cargo bay, thereby reducing transport costs."
  },
  converterMk2: {
    prev: ["converterMk1"],
    next: ["converterMk3"],
    title: "Resource Converter Mk2",
    bought: false,
    toCraft: false,
    RP: 29099,
    desc: "Improves the efficiency of the resource converter."
  },
  converterMk3: {
    prev: ["converterMk2"],
    next: [],
    title: "Resource Converter Mk3 (Not Implemented)",
    bought: false,
    toCraft: false,
    RP: 43648,
    desc: "(Not implemented)"
  },
  tractorBeam: {
    prev: [],
    next: ["miningAI"],
    title: "Tractor Beam",
    bought: false,
    toCraft: true,
    RP: 4850,
    res: {
      Res1a: 30,
      Res1b: 30,
      Res1c: 30,
      Res2a: 3,
      Res2b: 3,
      Res2c: 3,
      Res3a: 0,
      Res3b: 0,
      Res3c: 0
    },
    desc: "Allows the ship to automatically load resources on board."
  },
  autonomousDrone: {
    prev: [],
    next: ["miningAI"],
    title: "Autonomous Drones",
    bought: false,
    toCraft: false,
    RP: 4850,
    desc: "Drones are assigned automatically."
  },
  miningAI: {
    prev: ["tractorBeam", "autonomousDrone"],
    next: ["tradingAI", "spatialDrillingLaser"],
    title: "Mining AI",
    bought: false,
    toCraft: false,
    RP: 4850,
    desc: "Allows the ship and drones to mine other planets when offline."
  },
  tradingAI: {
    prev: ["miningAI"],
    next: [],
    title: "Trading AI",
    bought: false,
    toCraft: false,
    RP: 9700,
    desc: "Allows the ship to sell resources mined on other planets when offline."
  },
  spatialDrillingLaser: {
    prev: ["miningAI"],
    next: ["teleporter", "autoPrestige"],
    title: "Spatial Drilling Laser",
    bought: false,
    toCraft: true,
    RP: 130944,
    res: {
      Res1a: 147,
      Res1b: 147,
      Res1c: 147,
      Res2a: 21,
      Res2b: 21,
      Res2c: 21,
      Res3a: 3,
      Res3b: 3,
      Res3c: 3
    },
    desc: "With this laser, the ship can mine from orbit at a high efficiency level."
  },
  teleporter: {
    prev: ["spatialDrillingLaser"],
    next: [],
    title: "Teleporter",
    bought: false,
    toCraft: true,
    RP: 261888,
    res: {
      Res1a: 300,
      Res1b: 300,
      Res1c: 300,
      Res2a: 30,
      Res2b: 30,
      Res2c: 30,
      Res3a: 3,
      Res3b: 3,
      Res3c: 3
    },
    desc: "Nullifies all travel times."
  },
  autoPrestige: {
    prev: ["spatialDrillingLaser"],
    next: [],
    title: "Auto Prestige (Not Implemented)",
    bought: false,
    toCraft: false,
    RP: 1000000000000,
    desc: "Automates trips to new planets."
  }
}

window.onload = function() {
  chooseRegion("map", "map");
  tab("shop");

  if (savegame != null) {
    Object.entries(gamedata).forEach(([key, value]) => {
      gamedata[key] = savegame[key];
    });
    offlineProgress();
    if (gamedata.timeLeft > 0) {
      selling();
    }
  } else if (prestige != null) {
    Object.entries(prestige).forEach(([key, value]) => {
      gamedata[key] = prestige[key];
    });
    init();
  }
  prestige = {
    res: {}
  };

  if (gamedata.newgame === true) {
    document.getElementById('loading').style.display = 'flex';
    setTimeout(
      function() {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('main').style.display = 'grid';
      }, 5000);
    init();
  } else {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('main').style.display = 'grid';
  }

  document.getElementById("outermaterial").innerHTML = gamedata.outermaterial.name;
  document.getElementById("innermaterial").innerHTML = gamedata.innermaterial.name;
  document.getElementById("corematerial").innerHTML = gamedata.corematerial.name;

  Object.entries(blueprints).forEach(([key, value]) => {
    if (gamedata.tech[key] === 1) {
      blueprints[key].bought = true;
    }
  });
  Object.entries(research).forEach(([key, value]) => {
    if (gamedata.tech[key] === 1) {
      research[key].bought = true;
    }
  });
  
  Object.entries(gamedata.resRP).forEach(([key, value]) => {
    let el = document.getElementById(key + "RP");
    el.value = format(gamedata.resRP[key], "standard");
    update(key + "RP", format(gamedata.resRP[key], "standard"));
  });

  Object.entries(gamedata.rare).forEach(([key, value]) => {
    if (gamedata.rare[key] === false) {
      document.getElementById(key).parentNode.style.display = "none";
    }
  });

  Object.entries(gamedata.droneAssign).forEach(([key, value]) => {
    update(key, format(gamedata.droneAssign[key], "round"));
    update("local_" + key, format(gamedata.droneAssign[key], "round"));
  });

  if (gamedata.tech.researchLab === 1) {
    researchLab();
  } else {
    document.getElementById("labButton").style.display = "none";
  }
  document.getElementById("droneMk1List").style.display = "none";
  document.getElementById("droneMk2List").style.display = "none";
  document.getElementById("droneMk3List").style.display = "none";
  if (gamedata.tech.droneMk1 === 1) {
    document.getElementById("workBenchButton").style.display = "block";
    document.getElementById("droneMk1List").style.display = "flex";
  }
  if (gamedata.tech.droneMk2 === 1) {
    document.getElementById("droneMk2List").style.display = "flex";
  }
  if (gamedata.tech.droneMk3 === 1) {
    document.getElementById("droneMk3List").style.display = "flex";
  }

  setDim();
  setShop();
  setWorkbench()
  save();
}

var grids = {
  grid1NW: 0,
  grid2NW: 0,
  grid1N: 0,
  grid2N: 0,
  grid1NE: 0,
  grid2NE: 0,
  grid1SW: 0,
  grid2SW: 0,
  grid1S: 0,
  grid2S: 0,
  grid1SE: 0,
  grid2SE: 0,
  grid1W: 0,
  grid2W: 0,
  grid1E: 0,
  grid2E: 0,
  grid2core: 0,
  grid3core: 0
};

var h = 0;
var l = 0;
var cornerBorder = [];
var flatBorder = [];
var flatCoreBorder = [];
var c2leftBorder = [];
var coreCoord = [];
var coreBorder = [];
var coreExtBorder = [];
var coreIntBorder = [];

function borders() {
  for (let y = 2 / 3 * h * h - (h / 3 - 1); y <= 2 / 3 * h * h; y++) {
    cornerBorder.push(y);
  }
  for (let y = 1; y <= h / 3; y++) {
    let n = h * h * 2 / 3 + y * (2 * h / 3);
    cornerBorder.push(n);
  }
  for (let y = 2 / 3 * h * l - l + 1; y <= 2 / 3 * h * l; y++) {
    flatBorder.push(y);
  }
  for (let y = 1; y <= 1 / 3 * h; y++) {
    let n = 1 / 3 * h * (y - 1) + 1;
    c2leftBorder.push(n);
  }
  for (let y = 0; y < l / 2; y++) {
    for (let z = 1; z <= l / 2; z++) {
      let n = l * l / 4 + l / 4 + z + y * l;
      coreCoord.push(n);
    }
  }
  for (let y = 1; y <= l; y++) {
    coreExtBorder.push(y);
  }
  for (let y = 0; y < l; y++) {
    let n = l * y + 1;
    if (!coreExtBorder.includes(n)) {
      coreExtBorder.push(n);
    }
  }
  for (let y = 1; y <= l; y++) {
    let n = l * y;
    if (!coreExtBorder.includes(n)) {
      coreExtBorder.push(n);
    }
  }
  for (let y = l * l - l; y <= l * l; y++) {
    coreExtBorder.push(y);
  }
  for (let y = 0; y < coreCoord.length; y++) {
    let n1 = coreCoord[y] - 1;
    let n2 = coreCoord[y] + 1;
    let n3 = coreCoord[y] - l;
    let n4 = coreCoord[y] + l;
    if (!coreCoord.includes(n1)) {
      coreIntBorder.push(n1);
      coreBorder.push(coreCoord[y]);
    }
    if (!coreCoord.includes(n2)) {
      coreIntBorder.push(n2);
      coreBorder.push(coreCoord[y]);
    }
    if (!coreCoord.includes(n3)) {
      coreIntBorder.push(n3);
      coreBorder.push(coreCoord[y]);
    }
    if (!coreCoord.includes(n4)) {
      coreIntBorder.push(n4);
      coreBorder.push(coreCoord[y]);
    }
  }
  for (let y = (l * (h / 3 - 1) + 1); y <= l * h / 3; y++) {
    flatCoreBorder.push(y);
  }
}

function offlineProgress() {
  var time = Math.round((Date.now() - gamedata.lasttick) / 1000);
  var resCycle = gamedata.prestigeTime + (gamedata.shipMaxCargo / (gamedata.yield1 * gamedata.drone1 + gamedata.yield2 * gamedata.drone2 + gamedata.yield3 * gamedata.drone3));
  if (gamedata.tech.miningAI === 0 && gamedata.tech.tradingAI === 0) {
    if (gamedata.d1left + gamedata.d2left + gamedata.d3left <= gamedata.drone1 + gamedata.drone2 + gamedata.drone3) {
      for (let i = 0; i < time; i++) {
        droneMining();
      }
    }
  } else if (gamedata.tech.miningAI === 1 && gamedata.tech.tradingAI === 0) {
    for (let i = 0; i < Math.floor(time / resCycle); i++) {
      Math.floor(Math.random() * 3);
    }
  }
  gamedata.timeLeft = gamedata.timeLeft - time;
}

function init() {
  let x = Math.floor(Math.random() * 3);
  gamedata.outermaterial.name = gamedata.possibleOuterMaterial[x];
  gamedata.outermaterial.ref = "Res1" + String.fromCharCode(97 + x);
  x = Math.floor(Math.random() * 3);
  gamedata.innermaterial.name = gamedata.possibleInnerMaterial[x];
  gamedata.innermaterial.ref = "Res2" + String.fromCharCode(97 + x);
  x = Math.floor(Math.random() * 3);
  gamedata.corematerial.name = gamedata.possibleCoreMaterial[x];
  gamedata.corematerial.ref = "Res3" + String.fromCharCode(97 + x);

  if (gamedata.newgame === false) {
    gamedata.planetSize = Math.round(randn_bm(1, 20, 1));
  } else if (gamedata.newgame === true) {
    gamedata.planetSize = 10;
  }
  h = 3 * gamedata.planetSize;
  l = h + h / 3;

  Object.entries(gamedata.notMined).forEach(([key, value]) => {
    let x = 0;
    if (key.includes("1") && key.length === 3) {
      x = l * 2 * h / 3;
    } else if (key.includes("2") && key.length === 3) {
      x = l * h / 3;
    } else if (key.includes("1") && key.length === 4) {
      x = h * h - h / 3 * h / 3;
    } else if (key.includes("2") && key.length === 4) {
      x = h / 3 * h / 3;
    } else if (key.includes("2") && key.length === 6) {
      x = l * l;
    } else if (key.includes("3") && key.length === 6) {
      x = l / 2 * l / 2;
    }
    for (let y = 1; y <= x; ++y) {
      gamedata.notMined[key].push(y);
    }
  });
  gamedata.d1left = gamedata.drone1;
  gamedata.d2left = gamedata.drone2;
  gamedata.d3left = gamedata.drone3;

  Object.entries(gamedata.resValue).forEach(([key, value]) => {
    gamedata.resValue[key] = Math.random() * (((gamedata.baseValue[key] * 0.25) + gamedata.baseValue[key]) - gamedata.baseValue[key] * 0.75) + gamedata.baseValue[key] * 0.75;
  });
  gamedata.newgame = false;
}

function reset() {
  clearInterval(saveGameLoop);
  window.localStorage.clear();
  document.location.reload(true);
  gamedata.newgame = true;
}

function save() {
  gamedata.lasttick = Date.now();
  localStorage.setItem("Save", JSON.stringify(gamedata));
}

var saveGameLoop = window.setInterval(function() {
  save();
}, 15000);

var mainGameLoop = window.setInterval(function() {
  droneMining();
  gamedata.lasttick = Date.now();
}, 1000);

var refreshLoop = window.setInterval(function() {
  Object.entries(gamedata.res).forEach(([key, value]) => {
    update(key, format(gamedata.res[key], "standard"));
  });
  update("drone1", format(gamedata.drone1, "round"));
  update("d1left", format(gamedata.d1left, "round"));
  update("drone2", format(gamedata.drone2, "round"));
  update("d2left", format(gamedata.d2left, "round"));
  update("drone3", format(gamedata.drone3, "round"));
  update("d3left", format(gamedata.d3left, "round"));
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    update((key + "Ship"), format(gamedata.shipStock[key], "standard"));
  });

  if (gamedata.shipCapacity <= 0) {
    document.getElementById("cargoFull").style.display = "grid";
  } else {
    document.getElementById("cargoFull").style.display = "none";
  }

}, 10);

function update(id, content) {
  document.getElementById(id).innerHTML = content;
}

function setDronePrice(lvl) {
  if (lvl === 1 || lvl === 0) {
    Object.entries(gamedata.droneMk1).forEach(([key, value]) => {
      if (gamedata.tech.engineeredDrone === 0) {
        gamedata.droneMk1[key] = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1 + gamedata.drone2 + gamedata.drone3);
      } else {
        gamedata.droneMk1[key] = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
      }
      if (document.getElementById("droneMk1" + key + "Cost") != null) {
        update("droneMk1" + key + "Cost", format(gamedata.droneMk1[key], "standard"));
      }
    });
    document.getElementById("droneMk1List").style.display = "flex";
  }
  if (lvl === 2 || lvl === 0) {
    Object.entries(gamedata.droneMk2).forEach(([key, value]) => {
      gamedata.droneMk2[key] = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
      if (document.getElementById("droneMk2" + key + "Cost") != null) {
        update("droneMk2" + key + "Cost", format(gamedata.droneMk2[key], "standard"));
      }
    });
    if (gamedata.tech.engineeredDrone === 0) {
      setDronePrice(1);
    }
    document.getElementById("droneMk2List").style.display = "flex";
  }
  if (lvl === 3 || lvl === 0) {
    Object.entries(gamedata.droneMk3).forEach(([key, value]) => {
      gamedata.droneMk3[key] = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
      if (document.getElementById("droneMk3" + key + "Cost") != null) {
        update("droneMk3" + key + "Cost", format(gamedata.droneMk3[key], "standard"));
      }
    });
    if (gamedata.tech.engineeredDrone === 0) {
      setDronePrice(1);
    }
    document.getElementById("droneMk3List").style.display = "flex";
  }
}

function setDim() {
  h = 3 * gamedata.planetSize;
  l = h + h / 3;
  borders();
}

function setShop() {
  Object.entries(blueprints).forEach(([key, value]) => {
    if ((blueprints[key].toCraft === false || gamedata.BP[key] === 0) && gamedata.tech[key] === 0) {
      if (blueprints[key].prev.length === 0) {
        createShopItem(key);
      } else {
        let check = 0;
        for (let i = 0; i < blueprints[key].prev.length; i++) {
          if (gamedata.BP[blueprints[key].prev[i]] === 1 && gamedata.tech[blueprints[key].prev[i]] === 1) {
            check += 1;
          }
        }
        if (check === blueprints[key].prev.length) {
          createShopItem(key);
        }
      }
    }
  });
}

function createShopItem(BP) {
  if (document.getElementById(BP) === null) {
    var nextItem = blueprints[BP];
    var buyable = document.createElement("div");
    buyable.className = "buyable";
    buyable.id = BP;
    document.getElementById("shop").appendChild(buyable);
    var buyable_text = document.createElement("div");
    buyable_text.className = "buyable_text";
    buyable.appendChild(buyable_text);
    let btn = document.createElement("button");
    btn.innerText = "Buy";
    btn.className = "buyable_button";
    btn.addEventListener("click", function() {
      buyShopItem(nextItem, BP);
    });
    buyable.appendChild(btn);
    var tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.innerText = nextItem.desc;
    buyable.appendChild(tooltip);
    var buyable_title = document.createElement("div");
    buyable_title.className = "buyable_title";
    buyable_text.appendChild(buyable_title);
    var buyable_title_text = document.createElement("span");
    buyable_title_text.className = "buyable_title_text";
    var buyable_title_price = document.createElement("div");
    buyable_title_price.className = "buyable_title_price";
    buyable_title.appendChild(buyable_title_text);
    buyable_title.appendChild(buyable_title_price);
    buyable_title_text.innerText = nextItem.title;
    var cost = document.createElement("div");
    buyable_title_price.appendChild(cost);
    cost.innerText = "Cost :";
    cost.className = "price";
    var amount = document.createElement("span");
    cost.appendChild(amount);
    amount.innerText = format(nextItem.price, "currency");
    if (nextItem.toCraft === true) {
      buyable.style.background = "linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 0, 1)), url('https://blueprintmarketing.fr/wp-content/uploads/2020/11/Blueprint-Marketing-Plan.jpg')";
      buyable.style["background-size"] = "cover";
      buyable_title_text.innerText = nextItem.title + " (BP)";
    }
  }

}

function buyShopItem(item, tech) {
  if (gamedata.money >= 0 /* item.price */ ) {
    item.bought = true;
    gamedata.BP[tech] = 1;
    document.getElementById("shop").removeChild(document.getElementById(tech));
    if (item.toCraft === true) {
      glow(document.getElementById("workBenchButton"));
      createWorkbenchItem(item, tech);
      if (tech.includes("droneMk")) {
        gamedata.tech[tech] = 1;
      }
    } else {
      gamedata.tech[tech] = 1;
      try {
        window[tech]();
      } catch (err) {}
    }
    save();
  }
  setShop();
}

function setWorkbench() {
  Object.entries(blueprints).forEach(([key, value]) => {
    if (gamedata.BP[key] === 1 && gamedata.tech[key] === 0) {
      createWorkbenchItem(blueprints[key], key);
    }
  });
  if (gamedata.tech.droneMk1 === 1) {
    createWorkbenchItem(blueprints.droneMk1, "droneMk1");
    setDronePrice(1);
  }
  if (gamedata.tech.droneMk2 === 1) {
    createWorkbenchItem(blueprints.droneMk2, "droneMk2");
    setDronePrice(2);
  }
  if (gamedata.tech.droneMk3 === 1) {
    createWorkbenchItem(blueprints.droneMk3, "droneMk3");
    setDronePrice(3);
  }

}

function createWorkbenchItem(item, tech) {
  var buyable = document.createElement("div");
  buyable.className = "buyable";
  buyable.id = tech;
  document.getElementById("workbench").appendChild(buyable);
  var buyable_text = document.createElement("div");
  buyable_text.className = "buyable_text";
  buyable.appendChild(buyable_text);
  let btn = document.createElement("button");
  btn.innerText = "Craft";
  btn.className = "craft_button";
  if (tech.includes("droneMk1")) {
    Object.entries(gamedata.droneMk1).forEach(([key, value]) => {
      if (gamedata.droneMk1[key] === 0) {
        gamedata.droneMk1[key] = item.res[key];
      }
    });
    btn.addEventListener("click", function() {
      buyDrone1();
    });
  } else if (tech.includes("droneMk2")) {
    Object.entries(gamedata.droneMk2).forEach(([key, value]) => {
      if (gamedata.droneMk2[key] === 0) {
        gamedata.droneMk2[key] = item.res[key];
      }
    });
    btn.addEventListener("click", function() {
      buyDrone2();
    });
  } else if (tech.includes("droneMk3")) {
    Object.entries(gamedata.droneMk3).forEach(([key, value]) => {
      if (gamedata.droneMk3[key] === 0) {
        gamedata.droneMk3[key] = item.res[key];
      }
    });
    btn.addEventListener("click", function() {
      buyDrone3();
    });
  } else {
    btn.addEventListener("click", function() {
      craftItem(item, tech);
    });
  }
  buyable.appendChild(btn);
  var tooltip = document.createElement("span");
  tooltip.className = "tooltip";
  tooltip.innerText = item.desc;
  buyable.appendChild(tooltip);
  var buyable_title = document.createElement("div");
  buyable_title.className = "buyable_title";
  buyable_text.appendChild(buyable_title);
  var buyable_title_text = document.createElement("span");
  buyable_title_text.className = "buyable_title_text";
  var buyable_title_price = document.createElement("div");
  buyable_title_price.className = "buyable_title_price";
  buyable_title.appendChild(buyable_title_text);
  buyable_title.appendChild(buyable_title_price);
  buyable_title_text.innerText = item.title;
  var cost = document.createElement("div");
  buyable_title_price.appendChild(cost);
  Object.entries(item.res).forEach(([key, value]) => {
    if (value > 0) {
      var res = document.createElement("div");
      if (key.includes("1")) {
        res.className = "cat1";
      } else if (key.includes("2")) {
        res.className = "cat2";
      } else {
        res.className = "cat3";
      }
      buyable_title_price.appendChild(res);
      res.innerText = gamedata.resName[key];
      var amount = document.createElement("span");
      amount.id = tech + key + "Cost";
      res.appendChild(amount);
      amount.innerText = value;
    }
  });
}

function craftItem(item, tech) {
  let x = true;
  Object.entries(item.res).some(function(key) {
    if (gamedata.res[key[0]] < item.res[key[0]]) {
      x = false;
    }
  });
  if (x === true) {
    if (item.next.length > 0) {
      glow(document.getElementById("shopButton"));
    }
    Object.entries(item.res).forEach(([key, value]) => {
      gamedata.res[key] -= item.res[key];
    });
    document.getElementById("workbench").removeChild(document.getElementById(tech));
    gamedata.tech[tech] = 1;
    save();
  } else {
    console.log("Not enough resources");
  }
  try {
    window[tech]();
  } catch (err) {}
  setShop();
}

function researchLab() {
  if (document.getElementById("labButton").style.display === "none") {
    document.getElementById("labButton").style.display = "block";
    document.getElementById("labTab").style.display = "block";
    glow(document.getElementById("labButton"));
  }
  Object.entries(research).forEach(([key, value]) => {
    if ((research[key].toCraft === false || gamedata.BP[key] === 0) && gamedata.tech[key] === 0) {
      if (research[key].prev.length === 0) {
        createLabItem(key);
      } else {
        let check = 0;
        for (let i = 0; i < research[key].prev.length; i++) {
          if (gamedata.BP[research[key].prev[i]] === 1 && gamedata.tech[research[key].prev[i]] === 1) {
            check += 1;
          }
        }
        if (check === research[key].prev.length) {
          createShopItem(key);
        }
      }
    }
  });
}

function createLabItem(BP) {
  if (document.getElementById(BP) === null) {
    var nextItem = research[BP];
    var buyable = document.createElement("div");
    buyable.className = "buyable";
    buyable.id = BP;
    document.getElementById("labTab").appendChild(buyable);
    var buyable_text = document.createElement("div");
    buyable_text.className = "buyable_text";
    buyable.appendChild(buyable_text);
    let btn = document.createElement("button");
    btn.innerText = "Buy";
    btn.className = "buyable_button";
    btn.addEventListener("click", function() {
      buyLabItem(nextItem, BP);
    });
    buyable.appendChild(btn);
    var tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.innerText = nextItem.desc;
    buyable.appendChild(tooltip);
    var buyable_title = document.createElement("div");
    buyable_title.className = "buyable_title";
    buyable_text.appendChild(buyable_title);
    var buyable_title_text = document.createElement("span");
    buyable_title_text.className = "buyable_title_text";
    var buyable_title_price = document.createElement("div");
    buyable_title_price.className = "buyable_title_price";
    buyable_title.appendChild(buyable_title_text);
    buyable_title.appendChild(buyable_title_price);
    buyable_title_text.innerText = nextItem.title;
    var cost = document.createElement("div");
    buyable_title_price.appendChild(cost);
    cost.innerText = "Cost :";
    cost.className = "price";
    var amount = document.createElement("span");
    cost.appendChild(amount);
    amount.innerText = format(nextItem.RP, "standard");
    if (nextItem.toCraft === true) {
      buyable.style.background = "linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 0, 1)), url('https://blueprintmarketing.fr/wp-content/uploads/2020/11/Blueprint-Marketing-Plan.jpg')";
      buyable.style["background-size"] = "cover";
      buyable_title_text.innerText = nextItem.title + " (BP)";
    }
  }
}

function buyLabItem(item, tech) {
  if (gamedata.RP >= item.RP) {
    gamedata.RP -= item.RP;
    document.getElementById("labTab").removeChild(document.getElementById(tech));
    gamedata.tech[tech] = 1;
    save();
  } else {
    console.log("Not enough Research Point");
  }
  try {
    window[tech]();
  } catch (err) {}
  researchLab();
}

function exoMk2() {
  console.log("exoMk2 function");
}

function exoMk3() {
  console.log("exoMk3 function");
}

function cargoMk2() {
  console.log("cargoMk2 function");
}

function cargoMk3() {
  console.log("cargoMk3 function");
}

function droneBayMk2() {
  console.log("droneBayMk2 function");
}

function droneBayMk3() {
  console.log("droneBayMk3 function");
}

function thrustersMk2() {
  console.log("thrustersMk2 function");
}

function thrustersMk3() {
  console.log("thrustersMk3 function");
}

function antennaMk2() {
  console.log("antennaMk2 function");
}

function antennaMk3() {
  console.log("antennaMk3 function");
}

function converterMk1() {
  console.log("converterMk1 function");
}

function converterMk2() {
  console.log("converterMk2 function");
}

function converterMk3() {
  console.log("converterMk3 function");
}

function massReducer() {
  console.log("massReducer function");
}

function planetAnalyzer() {
  console.log("planetAnalyzer function");
}

function teleporter() {
  console.log("teleporter function");
}

function tradingAI() {
  console.log("tradingAI function");
}

function miningAI() {
  console.log("miningAI function");
}

function spatialDrillingLaser() {
  console.log("spatialDrillingLaser function");
}

function tractorBeam() {
  console.log("tractorBeam function");
}

function autoPrestige() {
  console.log("autoPrestige function");
}

function randn_bm(min, max, skew) {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
  num = Math.pow(num, skew); // Skew
  num *= max - min; // Stretch to fill range
  num += min; // offset to min
  return num;
}

function format(number, type) {
  let exponent = Math.floor(Math.log10(number));
  let mantissa = number / Math.pow(10, exponent);
  if (type == "round") return number.toFixed(0);
  if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent;
  if (type == "engineering")
    return (
      (Math.pow(10, exponent % 3) * mantissa).toFixed(2) +
      "e" +
      Math.floor(exponent / 3) * 3
    );
  if (type == "standard") return new Intl.NumberFormat([locales, "en-EN"]).format(number);
  if (type == "currency") return new Intl.NumberFormat([locales, "en-EN"], {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 3,
    currencyDisplay: 'narrowSymbol'
  }).format(number);
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  rareDrop();
  return arr;
}

function rareDrop() {
  if (Math.random() >= (1 - 1 / 100000)) {
    gamedata.res.Rare3 += 1;
    if (gamedata.rare.Rare3 == false) {
      document.getElementById("Rare3").parentNode.style.display = "flex";
      gamedata.rare.Rare3 = true;
    }
  } else if (Math.random() >= (1 - 1 / 10000)) {
    gamedata.res.Rare2 += 1;
    if (gamedata.rare.Rare2 == false) {
      document.getElementById("Rare2").parentNode.style.display = "flex";
      gamedata.rare.Rare2 = true;
    }
  } else if (Math.random() >= (1 - 1 / 1000)) {
    gamedata.res.Rare1 += 1;
    if (gamedata.rare.Rare1 == false) {
      document.getElementById("Rare1").parentNode.style.display = "flex";
      gamedata.rare.Rare1 = true;
    }
  }
}

function addDrone(region, number) {
  if (gamedata["d" + number + "left"] > 0) {
    gamedata["d" + number + "left"] -= 1;
    gamedata.droneAssign["d" + number + region] += 1;
    update("d" + number + region, gamedata.droneAssign["d" + number + region]);
    update("local_d" + number + region, gamedata.droneAssign["d" + number + region]);
    update("d" + number + "left", gamedata["d" + number + "left"]);
  }
}

function removeDrone(region, number) {
  if (gamedata.droneAssign["d" + number + region] > 0) {
    gamedata["d" + number + "left"] += 1;
    gamedata.droneAssign["d" + number + region] -= 1;
    update("d" + number + region, gamedata.droneAssign["d" + number + region]);
    update("local_d" + number + region, gamedata.droneAssign["d" + number + region]);
    update("d" + number + "left", gamedata["d" + number + "left"]);
  }
}

function droneMining() {
  Object.entries(gamedata.droneAssign).forEach(([key, value]) => {
    var toMine = [];
    var cell = [];
    if (value > 0) {
      if (key != "d3core") {
        cell = document.getElementById("mineGri" + key).getElementsByTagName("td");
      } else {
        cell = document.getElementById("mineGrid2core").getElementsByTagName("td");
      }
      if (key.includes("core") && gamedata.reach.core != 0) {
        if (key.includes("2")) {
          const notMinedExt = gamedata.notMined[key].filter(function(n) {
            if (!coreCoord.includes(n)) {
              return n;
            }
          })
          toMine = notMinedExt.slice(0, gamedata.droneAssign[key]);
        } else if (key.includes("3")) {
          if (gamedata.reach.d2core != 0 && gamedata.notMined.d2core.includes(1441)) {
            const notMinedTemp = gamedata.notMined.d2core.filter(function(n) {
              if (coreCoord.includes(n)) {
                if (coreBorder.includes(gamedata.reach.d2core + l)) {
                  return n >= (gamedata.reach.d2core + l);
                } else if (coreBorder.includes(gamedata.reach.d2core + 1)) {
                  return n >= (gamedata.reach.d2core + 1);
                } else if (coreBorder.includes(gamedata.reach.d2core - 1)) {
                  return n >= (gamedata.reach.d2core - 1);
                } else if (coreBorder.includes(gamedata.reach.d2core - l)) {
                  return n >= (gamedata.reach.d2core - l);
                }
              }
            })
            toMine = notMinedTemp.slice(0, gamedata.droneAssign[key]);
          } else if (!gamedata.notMined.d2core.includes(1441)) {
            const notMinedCore = gamedata.notMined.d2core.filter(function(n) {
              if (coreCoord.includes(n)) {
                return n;
              }
            })
            toMine = notMinedCore.slice(-gamedata.droneAssign[key]);
          }
        }
      } else if (key.includes("1")) {
        toMine = gamedata.notMined[key].slice(0, gamedata.droneAssign[key]);
      } else if (key.includes("2")) {
        if (gamedata.notMined[key].includes(1) && gamedata.reach["d1" + key.slice(2)] != 0) {
          if (key.length === 3) {
            const notMinedReversed = gamedata.notMined[key].filter(function(n) {
              return n <= (gamedata.reach["d1" + key.slice(2)] - (2 * h / 3 * (l) - l));
            })
            toMine = notMinedReversed.slice(-gamedata.droneAssign[key]);
          } else if (key.length === 4) {
            if (gamedata.reach["d1" + key.slice(2)] < (h * 2 * h / 3 + 2 * h / 3)) {
              const notMinedReversed = gamedata.notMined[key].filter(function(n) {
                return n <= (gamedata.reach["d1" + key.slice(2)] - (h * 2 * h / 3 + 2 * h / 3 - h));
              });
              toMine = notMinedReversed.slice(-gamedata.droneAssign[key]);
            } else {
              const notMinedReversed = gamedata.notMined[key].filter(function(n) {
                if (c2leftBorder.includes(n)) {
                  return n <= (((gamedata.reach["d1" + key.slice(2)] - (h * 2 * h / 3 + 2 * h / 3)) / 2) + 1);
                }
              });
              toMine = notMinedReversed.slice(-gamedata.droneAssign[key]);
            }
          }
        } else if (!gamedata.notMined[key].includes(1)) {
          toMine = gamedata.notMined[key].slice(0, gamedata.droneAssign[key]);
        }
      }
      if (toMine.length >= 0) {
        for (let x = 0; x < toMine.length; x++) {
          if (cell[toMine[x] - 1] === undefined) {
            if (key.includes("3")) {
              removeItemOnce(gamedata.notMined.d2core, toMine[x]);
            } else {
              removeItemOnce(gamedata.notMined[key], toMine[x]);
            }
            if (key.includes("1")) {
              if (flatBorder.includes(toMine[x]) && gamedata.reach[key] === 0) {
                gamedata.reach[key] = toMine[x];
              }
              gamedata.res[gamedata.outermaterial.ref] = gamedata.res[gamedata.outermaterial.ref] + gamedata.yield1;
            } else if (key.includes("2")) {
              if (key.includes("core") && coreIntBorder.includes(toMine[x]) && gamedata.reach[key] === 0) {
                gamedata.reach[key] = toMine[x];
              }
              gamedata.res[gamedata.innermaterial.ref] = gamedata.res[gamedata.innermaterial.ref] + gamedata.yield2;
              if (key.length === 3 && gamedata.reach.core === 0 && flatCoreBorder.includes(toMine[x])) {
                gamedata.reach.core = toMine[x];
              }
            } else if (key.includes("3")) {
              gamedata.res[gamedata.corematerial.ref] = gamedata.res[gamedata.corematerial.ref] + gamedata.yield3;

            }

          } else {
            if (key.includes("2") || key.includes("3")) {
              if (gamedata.minePower === 1) {
                gamedata.minePower = 2;
                cell[toMine[x] - 1].click();
                gamedata.minePower = 1;
              } else {
                cell[toMine[x] - 1].click();
              }
            } else if (key.includes("1")) {
              cell[toMine[x] - 1].click();
            }
          }
        }
      }
    }
  });
  if (gamedata.tech.autonomousDrone === 1) {
    autonomy();
  }
}

function mining(grid, el, row, col, i, region, optReg) {
  /* console.log("You clicked on element:", el);
  console.log("You clicked on col:", col);
  console.log("You clicked on row:", row);
  console.log("You clicked on item #:", i); */
  var antCol = (grid.rows[row].cells[col - 1] !== undefined) ?
    Number(grid.rows[row].cells[col - 1].textContent) :
    0;
  var antRow = (grid.rows[row - 1] !== undefined) ?
    Number(grid.rows[row - 1].cells[col].textContent) :
    0;
  var postCol = (grid.rows[row].cells[col + 1] !== undefined) ?
    Number(grid.rows[row].cells[col + 1].textContent) :
    0;
  var postRow = 0;

  if (grid.rows[row + 1] !== undefined) {
    if (grid.rows[row + 1].cells[col] !== undefined) {
      postRow = Number(grid.rows[row + 1].cells[col].textContent);
    } else {
      postRow = 0;
    }
  } else {
    postRow = 0;
  }
  /* 
      console.log("region : " + region);
      console.log("optReg : " + optReg); */
  if (
    ((!region.includes(antCol) && antCol != 0) ||
      (!region.includes(antRow) && antRow != 0) ||
      (!region.includes(postCol) && postCol != 0) ||
      (!region.includes(postRow) && postRow != 0) ||
      (optReg.includes("1") && optReg.length === 4 && (col === 0 || row === 0)) ||
      (row === 0 && optReg.includes("1")) ||
      ((row === 0 || row === l - 1 || col === 0 || col === l - 1) && optReg.includes("core") && gamedata.reach.core != 0) ||
      (optReg.includes("2") && optReg.length === 3 && !gamedata.notMined["d1" + optReg.slice(2)].includes(i + (2 * h / 3 * (l) - l)) && row === 0) ||
      (optReg.includes("2") && optReg.length === 4 && ((!gamedata.notMined["d1" + optReg.slice(2)].includes(h * (2 * h / 3) + 2 / 3 * h * (row + 1)) && col === 0) || (!gamedata.notMined["d1" + optReg.slice(2)].includes(h * (2 * h / 3) - h / 3 + (col + 1)) && row === 0)))
    ) &&
    region.includes(i)
  ) {
    if (((optReg.length == 4 && cornerBorder.includes(i)) || (optReg.length == 3 && flatBorder.includes(i)) || (optReg.includes("core") && coreIntBorder.includes(i))) && gamedata.reach[optReg] === 0) {
      console.log("Reached next layer!");
      gamedata.reach[optReg] = i;
    }
    if (optReg.includes("2") && optReg.length === 3 && gamedata.reach.core === 0 && flatCoreBorder.includes(i)) {
      console.log("Core region reached!");
      gamedata.reach.core = col + optReg;
    }
    if (grid.parentNode.id.includes("core")) {
      if (!coreCoord.includes(i) && gamedata.minePower > 1 && gamedata.reach.core != 0) {
        if (coreIntBorder.includes(i) && gamedata.reach.d2core === 0) {
          console.log("Core reached!");
          gamedata.reach.d2core = i;
        }
        removeItemOnce(region, i);
        el.className = "clicked";
        gamedata.res[gamedata.innermaterial.ref] = gamedata.res[gamedata.innermaterial.ref] + gamedata.yield2;
      } else if (coreCoord.includes(i) && gamedata.minePower > 2 && gamedata.reach.d2core != 0) {
        removeItemOnce(region, i);
        el.className = "clicked";
        gamedata.res[gamedata.corematerial.ref] = gamedata.res[gamedata.corematerial.ref] + gamedata.yield3;

      }
    } else if (grid.parentNode.id.includes("1")) {
      removeItemOnce(region, i);
      el.className = "clicked";
      gamedata.res[gamedata.outermaterial.ref] = gamedata.res[gamedata.outermaterial.ref] + gamedata.yield1;
    } else if (
      grid.parentNode.id.includes("2") &&
      gamedata.minePower > 1
    ) {
      removeItemOnce(region, i);
      el.className = "clicked";
      gamedata.res[gamedata.innermaterial.ref] = gamedata.res[gamedata.innermaterial.ref] + gamedata.yield2;
    }
  }
}

function autonomy() {
  Object.entries(gamedata.notMined).forEach(([key, value]) => {
    if (gamedata.notMined[key].length === 0) {
      if (key.includes("1")) {
        gamedata.d1left = gamedata.d1left + gamedata.droneAssign[key];
        update("d1left", gamedata.d1left);
      } else if (key.includes("2")) {
        gamedata.d2left = gamedata.d2left + gamedata.droneAssign[key];
        update("d2left", gamedata.d2left);
      } else if (key.includes("3")) {
        gamedata.d3left = gamedata.d3left + gamedata.droneAssign[key];
        update("d3left", gamedata.d3left);
      }
      gamedata.droneAssign[key] = 0;
      update(key, gamedata.droneAssign[key]);
      update("local_" + key, gamedata.droneAssign[key]);
    }
  });
  Object.entries(gamedata.notMined).forEach(([key, value]) => {
    if (gamedata.notMined[key].length > 0) {
      if (key.includes("1") && gamedata.d1left > 0) {
        gamedata.droneAssign[key] = gamedata.droneAssign[key] + gamedata.d1left;
        console.log(gamedata.droneAssign[key])
        gamedata.d1left = 0;
        update("d1left", gamedata.d1left);
      } else if (key.includes("2") && gamedata.d2left > 0 && gamedata.reach["d1" + key.slice(2)] > 0) {
        gamedata.droneAssign[key] = gamedata.droneAssign[key] + gamedata.d2left;
        gamedata.d2left = 0;
        update("d2left", gamedata.d2left);
      } else if (key.includes("3") && gamedata.d3left > 0 && gamedata.reach.d2core > 0) {
        gamedata.droneAssign[key] = gamedata.droneAssign[key] + gamedata.d3left;
        gamedata.d3left = 0;
        update("d3left", gamedata.d3left);
      }
      update(key, gamedata.droneAssign[key]);
      update("local_" + key, gamedata.droneAssign[key]);
    }
  });

}

function chooseRegion(to, from) {

  if (to.length === 2) {
    grids["grid1" + to] = clickableGrid(h, h, mining, gamedata.notMined["d1" + to], "d1" + to);
    grids["grid2" + to] = clickableGrid(h / 3, h / 3, mining, gamedata.notMined["d2" + to], "d2" + to);
    document.getElementById("mineGrid1" + to).appendChild(grids["grid1" + to]);
    document.getElementById("mineGrid2" + to).appendChild(grids["grid2" + to]);
  } else if (to.length === 1) {
    grids["grid1" + to] = clickableGrid(2 * h / 3, l, mining, gamedata.notMined["d1" + to], "d1" + to);
    grids["grid2" + to] = clickableGrid(h / 3, l, mining, gamedata.notMined["d2" + to], "d2" + to);
    document.getElementById("mineGrid1" + to).appendChild(grids["grid1" + to]);
    document.getElementById("mineGrid2" + to).appendChild(grids["grid2" + to]);
  } else if (to === "core") {
    grids["grid2" + to] = clickableGrid(l, l, mining, gamedata.notMined["d2" + to], "d2" + to);
    /* grids["grid3" + to] = clickableGrid(l/2, l/2, mining, gamedata.notMined["d3" + to], "d3" + to); */
    document.getElementById("mineGrid2" + to).appendChild(grids["grid2" + to]);
    /* document.getElementById("mineGrid3" + to).appendChild(grids["grid3" + to]); */
  } else if (from != "map" && from != "core") {
    document.getElementById("mineGrid1" + from).removeChild(grids["grid1" + from]);
    document.getElementById("mineGrid2" + from).removeChild(grids["grid2" + from]);
  } else if (from != "map" && from === "core") {
    document.getElementById("mineGrid2" + from).removeChild(grids["grid2" + from]);
  }

  document.getElementById("map").style.display = "none";
  var regionToHide = document.getElementsByClassName("detailRegion");
  for (var i = 0; i < regionToHide.length; i++) {
    regionToHide[i].style.display = "none";
  }

  var regionToShow = document.getElementsByClassName("detailRegion" + " " + to);
  if (regionToShow.length >= 1) {
    regionToShow[0].style.display = "grid";
  }
  document.getElementById(to).style.display = "grid";
  document.getElementById("shipMenu").style.display = "none";
}

function clickableGrid(rows, cols, callback, regionArray, regionName) {
  let i = 0;
  let j = 0;
  var grid = document.createElement("table");
  let reg = regionArray;
  grid.className = "grid";
  if (regionName.length === 3 || regionName.includes("d2")) {
    for (let r = 0; r < rows; ++r) {
      let tr = grid.appendChild(document.createElement("tr"));
      for (let c = 0; c < cols; ++c) {
        let cell = tr.appendChild(document.createElement("td"));
        i = ++i;
        cell.innerHTML = "<span style='display:none;'>" + i + "</span>";
        if (!regionArray.includes(i)) {
          cell.className = "clicked";
        } else if (regionName.includes("d1")) {
          cell.className = "couche1";
        } else if (regionName.includes("d2")) {
          if (regionName.length === 6 && coreCoord.includes(i)) {
            cell.className = "couche3";
          } else {
            cell.className = "couche2";
          }
        }
        cell.addEventListener(
          "click",
          (function(grid, el, r, c, i, reg, regionName) {
            return function() {
              callback(grid, el, r, c, i, reg, regionName);
            };
          })(grid, cell, r, c, i, reg, regionName),
          false
        );
      }
    }
  } else if (regionName.length === 4) {
    for (let r = 0; r < (2 * rows) / 3; ++r) {
      let tr = grid.appendChild(document.createElement("tr"));
      for (let c = 0; c < cols; ++c) {
        let cell = tr.appendChild(document.createElement("td"));
        i = ++i;
        cell.innerHTML = "<span style='display:none;'>" + i + "</span>";
        if (!regionArray.includes(i)) {
          cell.className = "clicked";
        } else if (regionName.includes("d1")) {
          cell.className = "couche1";
        } else if (regionName.includes("d2")) {
          cell.className = "couche2";
        }
        cell.addEventListener(
          "click",
          (function(grid, el, r, c, i, reg, regionName) {
            return function() {
              callback(grid, el, r, c, i, reg, regionName);
            };
          })(grid, cell, r, c, i, reg, regionName),
          false
        );
      }
    }
    for (let r = (2 * rows) / 3; r < rows; ++r) {
      let tr = grid.appendChild(document.createElement("tr"));
      for (let c = 0; c < (2 * cols) / 3; ++c) {
        let cell = tr.appendChild(document.createElement("td"));
        i = ++i;
        cell.innerHTML = "<span style='display:none;'>" + i + "</span>";
        if (!regionArray.includes(i)) {
          cell.className = "clicked";
        } else if (regionName.includes("d1")) {
          cell.className = "couche1";
        } else if (regionName.includes("d2")) {
          cell.className = "couche2";
        }
        cell.addEventListener(
          "click",
          (function(grid, el, r, c, i, reg, regionName) {
            return function() {
              callback(grid, el, r, c, i, reg, regionName);
            };
          })(grid, cell, r, c, i, reg, regionName),
          false
        );
      }
    }
  }
  return grid;
}

function tab(tab) {
  document.getElementById("shop").style.display = "none";
  document.getElementById("lab").style.display = "none";
  document.getElementById("workbench").style.display = "none";
  document.getElementById("labTab").style.display = "none";
  document.getElementById("machineTab").style.display = "none";
  document.getElementById(tab).style.display = "inline-block";
  if (tab === "lab") {
    document.getElementById("labTab").style.display = "inline-block";
  }
  if (tab.includes("Tab")) {
    document.getElementById("lab").style.display = "inline-block";
  }
  Object.entries(gamedata.rare).forEach(([key, value]) => {
    if (gamedata.rare[key] == false) {
      let el = document.getElementsByClassName(key)
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = "none";
      }
    } else {
      let el = document.getElementsByClassName(key)
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = "block";
      }
    }
  });
}

function buyDrone1() {
  let x = true;
  Object.entries(gamedata.droneMk1).some(function(key) {
    if (gamedata.res[key[0]] < gamedata.droneMk1[key[0]]) {
      x = false;
    }
  });
  if (x === true) {
    gamedata.drone1 += 1;
    gamedata.d1left += 1;
    Object.entries(gamedata.droneMk1).forEach(([key, value]) => {
      if (gamedata.droneMk1[key] > 0) {
        gamedata.res[key] -= gamedata.droneMk1[key];
      }
    });
    setDronePrice(1);
  } else {
    console.log("Not enough resources");
  }
}

function buyDrone2() {
  let x = true;
  Object.entries(gamedata.droneMk2).some(function(key) {
    if (gamedata.res[key[0]] < gamedata.droneMk2[key[0]]) {
      x = false;
    }
  });
  if (x === false) {
    console.log("Not enough resources");
  }

  if (gamedata.tech.engineeredDrone === 0 && gamedata.drone1 === 0) {
    console.log("Not enough Mk1 drone");
    x = false;
  }
  if (x === true) {
    gamedata.drone2 += 1;
    gamedata.d2left += 1;
    Object.entries(gamedata.droneMk2).forEach(([key, value]) => {
      if (gamedata.droneMk2[key] > 0) {
        gamedata.res[key] -= gamedata.droneMk2[key];
      }
    });
    if (gamedata.tech.engineeredDrone === 0) {
      gamedata.drone1 -= 1;
      if (gamedata.d1left === 0) {
        for (const [key, value] of Object.entries(gamedata.droneAssign)) {
          if (value > 0 && key.includes("d1")) {
            gamedata.droneAssign[key] -= 1;
            gamedata.d1left += 1;
            update(key, format(gamedata.droneAssign[key], "round"));
            update("local_" + key, format(gamedata.droneAssign[key], "round"));
            break;
          }
        }
      }
      gamedata.d1left -= 1;
    }
    setDronePrice(2);
  }
}

function buyDrone3() {
  let x = true;
  Object.entries(gamedata.droneMk3).some(function(key) {
    if (gamedata.res[key[0]] < gamedata.droneMk3[key[0]]) {
      console.log("Not enough resources");
      x = false;
    }
  });

  if (gamedata.tech.engineeredDrone === 0 && gamedata.drone2 === 0) {
    console.log("Not enough Mk2 drone");
    x = false;
  }
  if (x === true) {
    gamedata.drone3 += 1;
    gamedata.d3left += 1;
    Object.entries(gamedata.droneMk3).forEach(([key, value]) => {
      if (gamedata.droneMk3[key] > 0) {
        gamedata.res[key] -= gamedata.droneMk3[key];
      }
    });
    gamedata.drone2 -= 1;
    if (gamedata.d2left === 0) {
      for (const [key, value] of Object.entries(gamedata.droneAssign)) {
        if (value > 0 && key.includes("d2")) {
          gamedata.droneAssign[key] -= 1;
          gamedata.d2left += 1;
          update(key, format(gamedata.droneAssign[key], "round"));
          update("local_" + key, format(gamedata.droneAssign[key], "round"));
          break;
        }
      }
    }
    gamedata.d2left -= 1;
    setDronePrice(3);
  }
}

function shipMenu() {
  var shipTech = ["cargo", "droneBay", "thrusters", "antenna", "planetAnalyzer", "tractorBeam", "miningAI", "tradingAI", "spatialDrillingLaser", "teleporter", "autoPrestige"];
  document.getElementById("shipMenu").style.display = "grid";
  let root = document.documentElement.style;
  root.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res1a + gamedata.shipStock.Res1b + gamedata.shipStock.Res1c))) + "%");
  root.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res2a + gamedata.shipStock.Res2b + gamedata.shipStock.Res2c))) + "%");
  root.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res3a + gamedata.shipStock.Res3b + gamedata.shipStock.Res3c))) + "%");

  Object.entries(gamedata.rare).forEach(([key, value]) => {
    if (gamedata.rare[key] == false) {
      let el = document.getElementsByClassName(key)
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = "none";
      }
    } else {
      let el = document.getElementsByClassName(key)
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = "block";
      }
    }
  });

  Object.entries(gamedata.res).forEach(([key, value]) => {
    let el = document.getElementById(key + "Ship");
    el.value = format(gamedata.shipStock[key], "standard");
    update(key + "Value", format(gamedata.resValue[key], "standard"));
  });
  for (let i = 0; i < 4; i++) {
    if (gamedata.tech[shipTech[i] + "Mk3"] == 1) {
      document.getElementById(shipTech[i]).innerText = "Mk3";
    } else if (gamedata.tech[shipTech[i] + "Mk2"] == 1) {
      document.getElementById(shipTech[i]).innerText = "Mk2";
    } else if (gamedata.tech[shipTech[i] + "Mk1"] == 1) {
      document.getElementById(shipTech[i]).innerText = "Mk1";
    }
  }
  for (let i = 4; i < shipTech.length; i++) {
    if (gamedata.tech[shipTech[i]] == 0) {
      document.getElementById(shipTech[i]).style.display = "none";
    } else {
      document.getElementById(shipTech[i]).style.display = "block";
    }
  }
  update("sumValue", format(gamedata.sumValue, "currency"));
  update("money", format(gamedata.money, "currency"));
}

function changeStock(res, resCat) {

  let el = document.getElementById(res + "Ship");
  if (parseFloat(el.value) >= 0) {
    if (gamedata.res[res] >= (parseFloat(el.value) - gamedata.shipStock[res])) {
      if (gamedata.shipCapacity + (gamedata.shipStock[res] - parseFloat(el.value)) > 0) {
        gamedata.res[res] = gamedata.res[res] + (gamedata.shipStock[res] - parseFloat(el.value));
        gamedata.shipCapacity = gamedata.shipCapacity + (gamedata.shipStock[res] - parseFloat(el.value));
        gamedata.shipCapacity = Number(gamedata.shipCapacity.toFixed(3));
        gamedata.shipStock[res] = parseFloat(el.value);
      } else if (parseFloat(el.value) - gamedata.shipStock[res] >= gamedata.shipCapacity) {
        gamedata.res[res] = gamedata.res[res] - gamedata.shipCapacity;
        gamedata.shipStock[res] = gamedata.shipStock[res] + gamedata.shipCapacity;
        gamedata.shipCapacity = 0;
        el.value = format(gamedata.shipStock[res], "standard");
      }
    } else if ((parseFloat(el.value) - gamedata.shipStock[res]) > gamedata.res[res] && gamedata.res[res] > 0) {
      if (gamedata.shipCapacity >= gamedata.res[res]) {
        gamedata.shipStock[res] = gamedata.shipStock[res] + gamedata.res[res];
        gamedata.shipCapacity = gamedata.shipCapacity - gamedata.res[res];
        gamedata.res[res] = 0;
        el.value = format(gamedata.shipStock[res], "standard");
      } else {
        gamedata.shipStock[res] = gamedata.shipStock[res] + gamedata.shipCapacity;
        gamedata.res[res] = gamedata.res[res] - gamedata.shipCapacity;
        gamedata.shipCapacity = 0;
        el.value = format(gamedata.shipStock[res], "standard");
      }
    } else {
      el.value = format(gamedata.shipStock[res], "standard");
    }
  } else {
    el.value = format(gamedata.shipStock[res], "standard");
  }

  let root = document.documentElement.style;
  root.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res1a + gamedata.shipStock.Res1b + gamedata.shipStock.Res1c))) + "%");
  root.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res2a + gamedata.shipStock.Res2b + gamedata.shipStock.Res2c))) + "%");
  root.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res3a + gamedata.shipStock.Res3b + gamedata.shipStock.Res3c))) + "%");

  gamedata.sumValue = 0;
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    let el = document.getElementById(key + "Ship");
    gamedata.sumValue = gamedata.sumValue + gamedata.shipStock[key] * gamedata.resValue[key];
  });
  update("sumValue", format(gamedata.sumValue, "currency"));
}

function resetAmounts(sale) {
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    let el = document.getElementById(key + "Ship");
    if (sale === undefined) {
      gamedata.res[key] = gamedata.res[key] + parseFloat(el.value);
    }
    gamedata.shipStock[key] = gamedata.shipStock[key] - parseFloat(el.value);
    gamedata.shipCapacity = gamedata.shipCapacity + parseFloat(el.value);
    el.value = 0;
  });
  let root = document.documentElement;
  root.style.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res1a + gamedata.shipStock.Res1b + gamedata.shipStock.Res1c))) + "%");
  root.style.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res2a + gamedata.shipStock.Res2b + gamedata.shipStock.Res2c))) + "%");
  root.style.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res3a + gamedata.shipStock.Res3b + gamedata.shipStock.Res3c))) + "%");
  gamedata.sumValue = 0;
  update("sumValue", format(gamedata.sumValue, "currency"));
}

function sellRessources() {
  if (gamedata.sumValue > 0) {
    var minutes = Math.floor(gamedata.sellingTime / 60);
    var seconds = gamedata.sellingTime % 60;
    var msg = "Ship won't be in orbit for " + minutes + "m" + seconds + "s";
    if (confirm("Are you sure you want to sell resources stocked in ship?\n" + msg)) {

      gamedata.money = gamedata.money + gamedata.sumValue;
      resetAmounts(true);
      update("money", format(gamedata.money, "currency"));
      chooseRegion('map', 'map');
      gamedata.timeLeft = gamedata.sellingTime;
      selling();
    } else {
      console.log("Aborted");
    }
  }
}

function selling() {
  document.getElementById("ship").style.display = "none";
  document.getElementById("timer").style.display = "block";
  var x = setInterval(function() {
    gamedata.timeLeft -= 1;
    var m = Math.floor(gamedata.timeLeft / 60);
    var s = gamedata.timeLeft % 60;
    document.getElementById("timer").innerHTML = "Ship will be back in " + m + "m " + s + "s ";
    if (gamedata.timeLeft < 0) {

      clearInterval(x);
      document.getElementById("ship").style.display = "block";
      document.getElementById("timer").style.display = "none";
    }
  }, 1000)
}

function prestige1() {
  clearInterval(saveGameLoop);
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    prestige.res[key] = gamedata.shipStock[key];
  });
  prestige.tech = gamedata.tech;
  prestige.BP = gamedata.BP;
  prestige.droneMk1 = gamedata.droneMk1;
  prestige.droneMk2 = gamedata.droneMk2;
  prestige.droneMk3 = gamedata.droneMk3;
  if ((gamedata.drone1 + gamedata.drone2 + gamedata.drone3) <= gamedata.shipBayCapacity) {
    prestige.drone1 = gamedata.drone1;
    prestige.drone2 = gamedata.drone2;
    prestige.drone3 = gamedata.drone3;
  } else {
    let x = gamedata.shipBayCapacity;
    let d1 = gamedata.drone1;
    let d2 = gamedata.drone2;
    let d3 = gamedata.drone3;
    prestige.drone1 = 0;
    prestige.drone2 = 0;
    prestige.drone3 = 0;
    while (x > 0) {
      if (d3 > 0) {
        d3 -= 1;
        x -= 1;
        prestige.drone3 += 1;
      } else if (d2 > 0) {
        d2 -= 1;
        x -= 1;
        prestige.drone2 += 1;
      } else if (d1 > 0) {
        d1 -= 1;
        x -= 1;
        prestige.drone1 += 1;
      }
    }
  }
  prestige.money = gamedata.money;
  prestige.newgame = false;
  localStorage.clear();
  localStorage.setItem("PrestigeSave", JSON.stringify(prestige));
  chooseRegion('map', 'map');
  document.location.reload(true);
}

function glow(el) {
  el.classList.remove("glow");
  void el.offsetWidth;
  el.classList.add("glow");
}

App = {};
App.view = {};
App.control = {};
App.model = {};

App.model.nbStars = 100;
App.model.colors = function() {
  do {
    App.model.red = Math.floor(Math.random() * 255);
  }
  while (App.model.red < 150);

  do {
    App.model.blue = Math.floor(Math.random() * 255);
  }
  while (App.model.blue < 150);

  do {
    App.model.green = Math.floor(Math.random() * 255);
  }
  while (App.model.green > 150);

  do {
    App.model.opacity = Math.random();
  }
  while (App.model.opacity == 0 || App.model.opacity > 0.75);
}

App.view.init = function() {
  App.view.zone = function() {
    App.view.zone = document.createElement("div");
    document.body.appendChild(App.view.zone);
    App.view.zone.id = "zone";
  }
  App.view.createStar = function() {
    App.view.star = document.createElement("div");
    App.view.zone.appendChild(App.view.star);
    App.view.star.className = "stars";
    // App.view.star.style.top = Math.floor(Math.random() * parseInt(App.view.zone.style.height)) + "vh";
    // App.view.star.style.left = Math.floor(Math.random() * parseInt(App.view.zone.style.width)) + "vw";
    App.view.star.style.top = Math.floor(Math.random() * 100) + "vh";
    App.view.star.style.left = Math.floor(Math.random() * 100) + "vw";

    var tmp = Math.random() * 0.5;
    App.view.star.style.width = tmp + "rem";
    App.view.star.style.height = tmp + "rem";
  }

  App.view.multiStars = function() {
    for (var i = 0; i < App.model.nbStars; i++) {
      App.view.createStar();
    }
  }
  App.view.zone();
  App.view.multiStars();
}

App.start = function() {
  App.view.init();
}
App.start();
