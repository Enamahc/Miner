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
  sumValue: 0,
  sellingTime: 10,
  timeLeft: 0,
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
    d3NW: [],
    d3N: [],
    d3NE: [],
    d3W: [],
    d3core: [],
    d3E: [],
    d3SW: [],
    d3S: [],
    d3SE: []
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
  d1x: 1.15,
  d1rate: 1,
  d2base: 1,
  d2x: 1.15,
  d2rate: 1,
  d3base: 0.5,
  d3x: 1.15,
  d3rate: 1,
  yield1: 0.1,
  yield2: 0.01,
  yield3: 0.001,
  drone1: 0,
  d1left: 0,
  d1res1Cost: 2,
  d1res2Cost: 2,
  d1res3Cost: 2,
  drone2: 0,
  d2left: 0,
  d2res1Cost: 1,
  d2res2Cost: 1,
  d2res3Cost: 1,
  drone3: 0,
  d3left: 0,
  d3res1Cost: 0.5,
  d3res2Cost: 0.5,
  d3res3Cost: 0.5,
  shipCargoLvl: 1,
  shipMaxCargo: 10,
  shipCapacity: 10,
  shipBayCapacity: 5,
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
  tech: {
    membercard1: 0,
    membercard2: 0,
    membercard3: 0,
    lab: 0,
    drone1: 0,
    drone2: 0,
    drone3: 0,
    exoMk1: 0,
    exoMk2: 0,
    cargoMk2: 0,
    cargoMk3: 0,
    droneBayMk2: 0,
    droneBayMk3: 0,
    tractorBeam: 0,
    scanner: 0,
    teleporter: 0,
    tradingAI: 0,
    miningAI: 0
  },
  prestigeTime: 10,
  lasttick: 0
};

var blueprints = {
  membercard1: {
    prev: "",
    next: "membercard2",
    bought: false,
    price: 2500,
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
  membercard2: {
    prev: "membercard1",
    next: "membercard3",
    bought: false,
    price: 5000,
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
  membercard3: {
    prev: "membercard2",
    next: "membercard4",
    bought: false,
    price: 0,
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
  lab: {
    prev: "",
    next: "",
    bought: false,
    price: 0,
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
  drone1: {
    prev: "",
    next: "drone2",
    bought: false,
    price: 10,
    Res1a: 2,
    Res1b: 2,
    Res1c: 2,
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
  drone2: {
    prev: "drone1",
    next: "drone3",
    bought: false,
    price: 250,
    Res1a: 0,
    Res1b: 0,
    Res1c: 0,
    Res2a: 1,
    Res2b: 1,
    Res2c: 1,
    Res3a: 0,
    Res3b: 0,
    Res3c: 0,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  drone3: {
    prev: "drone2",
    next: "",
    bought: false,
    price: 0,
    Res1a: 0,
    Res1b: 0,
    Res1c: 0,
    Res2a: 0,
    Res2b: 0,
    Res2c: 0,
    Res3a: 0.5,
    Res3b: 0.5,
    Res3c: 0.5,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  exoMk1: {
    prev: "",
    next: "exoMk2",
    bought: false,
    price: 350,
    Res1a: 33,
    Res1b: 33,
    Res1c: 33,
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
  exoMk2: {
    prev: "exoMk1",
    next: "",
    bought: false,
    price: 350,
    Res1a: 33,
    Res1b: 33,
    Res1c: 33,
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
  cargoMk2: {
    prev: "",
    next: "cargoMk3",
    bought: false,
    price: 100,
    Res1a: 3.3,
    Res1b: 3.3,
    Res1c: 3.3,
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
  cargoMk3: {
    prev: "cargoMk2",
    next: "cargoMk4",
    bought: false,
    price: 0,
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
  droneBayMk2: {
    prev: "",
    next: "droneBayMk3",
    bought: false,
    price: 150,
    Res1a: 30,
    Res1b: 30,
    Res1c: 30,
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
  droneBayMk3: {
    prev: "droneBayMk2",
    next: "droneBayMk4",
    bought: false,
    price: 0,
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
  tractorBeam: {},
  scanner: {},
  teleporter: {},
  tradingAI: {},
  miningAI: {}
}

window.onload = function() {
  document.getElementById("shipMenu").style.display = "none";
  chooseRegion("map", "map");
  tab("workbench");

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
  if (gamedata.newgame == true) {
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
  gamedata.d1res1Cost = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
  gamedata.d1res2Cost = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
  gamedata.d1res3Cost = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
  gamedata.d2res1Cost = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
  gamedata.d2res2Cost = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
  gamedata.d2res3Cost = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
  gamedata.d3res1Cost = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
  gamedata.d3res2Cost = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
  gamedata.d3res3Cost = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
  update("d1res1Cost", format(gamedata.d1res1Cost, "standard"));
  update("d1res2Cost", format(gamedata.d1res2Cost, "standard"));
  update("d1res3Cost", format(gamedata.d1res3Cost, "standard"));
  update("d2res1Cost", format(gamedata.d2res1Cost, "standard"));
  update("d2res2Cost", format(gamedata.d2res2Cost, "standard"));
  update("d2res3Cost", format(gamedata.d2res3Cost, "standard"));
  update("d3res1Cost", format(gamedata.d3res1Cost, "standard"));
  update("d3res2Cost", format(gamedata.d3res2Cost, "standard"));
  update("d3res3Cost", format(gamedata.d3res3Cost, "standard"));
  Object.entries(gamedata.droneAssign).forEach(([key, value]) => {
    update(key, format(gamedata.droneAssign[key], "round"));
    update("local_" + key, format(gamedata.droneAssign[key], "round"));
  });
  h = 3 * gamedata.planetSize;
  l = h + h / 3;
  borders();
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
    gamedata.planetSize = Math.round(randn_bm(1,20,1));
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
  /* diff = Date.now() - gamedata.lasttick; */
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
  } else if (Math.random() >= (1 - 1 / 10000)) {
    gamedata.res.Rare2 += 1;
  } else if (Math.random() >= (1 - 1 / 1000)) {
    gamedata.res.Rare1 += 1;
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
      (optReg.includes("2") && optReg.length === 4 && ((!gamedata.notMined["d1" + optReg.slice(2)].includes(h * (2 * h / 3) + 2/3*h*(row+1)) && col === 0)||(!gamedata.notMined["d1" + optReg.slice(2)].includes(h * (2 * h / 3) - h/3+(col+1)) && row === 0)))
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
  document.getElementById(tab).style.display = "inline-block";
}

function buyDrone1() {
  if (gamedata.d1res1Cost < gamedata.d1base) {
    gamedata.d1res1Cost = gamedata.d1base;
    gamedata.d1res2Cost = gamedata.d1base;
    gamedata.d1res3Cost = gamedata.d1base;
    gamedata.d2res1Cost = gamedata.d2base;
    gamedata.d2res2Cost = gamedata.d2base;
    gamedata.d2res3Cost = gamedata.d2base;
    gamedata.d3res1Cost = gamedata.d3base;
    gamedata.d3res2Cost = gamedata.d3base;
    gamedata.d3res3Cost = gamedata.d3base;
  }
  if (
    gamedata.res.Res1a >= gamedata.d1res1Cost &&
    gamedata.res.Res1b >= gamedata.d1res2Cost &&
    gamedata.res.Res1c >= gamedata.d1res3Cost
  ) {
    gamedata.res.Res1a -= gamedata.d1res1Cost;
    gamedata.res.Res1b -= gamedata.d1res2Cost;
    gamedata.res.Res1c -= gamedata.d1res3Cost;
    gamedata.drone1 += 1;
    gamedata.d1left += 1;
    gamedata.d1res1Cost = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
    gamedata.d1res2Cost = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
    gamedata.d1res3Cost = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
    update("d1res1Cost", format(gamedata.d1res1Cost, "standard"));
    update("d1res2Cost", format(gamedata.d1res2Cost, "standard"));
    update("d1res3Cost", format(gamedata.d1res3Cost, "standard"));
  } else {
    console.log("Not enough resources");
  }
}

function buyDrone2() {
  if (gamedata.d2res1Cost < gamedata.d2base) {
    gamedata.d1res1Cost = gamedata.d1base;
    gamedata.d1res2Cost = gamedata.d1base;
    gamedata.d1res3Cost = gamedata.d1base;
    gamedata.d2res1Cost = gamedata.d2base;
    gamedata.d2res2Cost = gamedata.d2base;
    gamedata.d2res3Cost = gamedata.d2base;
    gamedata.d3res1Cost = gamedata.d3base;
    gamedata.d3res2Cost = gamedata.d3base;
    gamedata.d3res3Cost = gamedata.d3base;
  }
  if (
    gamedata.res.Res2a >= gamedata.d2res1Cost &&
    gamedata.res.Res2b >= gamedata.d2res2Cost &&
    gamedata.res.Res2c >= gamedata.d2res3Cost
  ) {
    gamedata.res.Res2a -= gamedata.d2res1Cost;
    gamedata.res.Res2b -= gamedata.d2res2Cost;
    gamedata.res.Res2c -= gamedata.d2res3Cost;
    gamedata.drone2 += 1;
    gamedata.d2left += 1;
    gamedata.d2res1Cost = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
    gamedata.d2res2Cost = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
    gamedata.d2res3Cost = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
    update("d2res1Cost", format(gamedata.d2res1Cost, "standard"));
    update("d2res2Cost", format(gamedata.d2res2Cost, "standard"));
    update("d2res3Cost", format(gamedata.d2res3Cost, "standard"));
  } else {
    console.log("Not enough resources");
  }
}

function buyDrone3() {
  if (gamedata.d3res1Cost < gamedata.d3base) {
    gamedata.d1res1Cost = gamedata.d1base;
    gamedata.d1res2Cost = gamedata.d1base;
    gamedata.d1res3Cost = gamedata.d1base;
    gamedata.d2res1Cost = gamedata.d2base;
    gamedata.d2res2Cost = gamedata.d2base;
    gamedata.d2res3Cost = gamedata.d2base;
    gamedata.d3res1Cost = gamedata.d3base;
    gamedata.d3res2Cost = gamedata.d3base;
    gamedata.d3res3Cost = gamedata.d3base;
  }
  if (
    gamedata.res.Res3a >= gamedata.d3res1Cost &&
    gamedata.res.Res3b >= gamedata.d3res2Cost &&
    gamedata.res.Res3c >= gamedata.d3res3Cost
  ) {
    gamedata.res.Res3a -= gamedata.d3res1Cost;
    gamedata.res.Res3b -= gamedata.d3res2Cost;
    gamedata.res.Res3c -= gamedata.d3res3Cost;
    gamedata.drone3 += 1;
    gamedata.d3left += 1;
    gamedata.d3res1Cost = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
    gamedata.d3res2Cost = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
    gamedata.d3res3Cost = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
    update("d3res1Cost", format(gamedata.d3res1Cost, "standard"));
    update("d3res2Cost", format(gamedata.d3res2Cost, "standard"));
    update("d3res3Cost", format(gamedata.d3res3Cost, "standard"));
  } else {
    console.log("Not enough resources");
  }
}

function shipMenu() {
  document.getElementById("shipMenu").style.display = "grid";
  let root = document.documentElement.style;
  root.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res1a + gamedata.shipStock.Res1b + gamedata.shipStock.Res1c))) + "%");
  root.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res2a + gamedata.shipStock.Res2b + gamedata.shipStock.Res2c))) + "%");
  root.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Res3a + gamedata.shipStock.Res3b + gamedata.shipStock.Res3c))) + "%");

  Object.entries(gamedata.res).forEach(([key, value]) => {
    let el = document.getElementById(key + "Ship");
    el.value = format(gamedata.shipStock[key], "standard");
    update(key + "Value", format(gamedata.resValue[key], "standard"));
  });
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
  if ((gamedata.drone1 + gamedata.drone2 + gamedata.drone3) <= gamedata.shipBayCapacity) {
    prestige.drone1 = gamedata.drone1;
    prestige.drone2 = gamedata.drone2;
    prestige.drone3 = gamedata.drone3;
  } else {
    let x = gamedata.shipBayCapacity;
    let d1 = gamedata.drone1;
    let d2 = gamedata.drone2;
    let d3 = gamedata.drone3;
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
      } else {
        break;
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
