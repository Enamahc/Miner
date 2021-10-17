var savegame = JSON.parse(localStorage.getItem("Save"));

var prestige = JSON.parse(localStorage.getItem("PrestigeSave"));

var gamedata = {
  version: "0.0.0.a",
  newgame: true,
  money: 0,
  d1base: 2,
  d1x: 1.15,
  d1rate: 1,
  d2base: 20,
  d2x: 1.15,
  d2rate: 5,
  d3base: 200,
  d3x: 1.15,
  d3rate: 25,
  res: {
    Iron: 0,
    Copper: 0,
    Aluminium: 0,
    Zinc: 0,
    Lead: 0,
    Silver: 0,
    Iridium: 0,
    Gold: 0,
    Palladium: 0,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  baseValue: {
    Iron: 1,
    Copper: 1,
    Aluminium: 1,
    Zinc: 20,
    Lead: 20,
    Silver: 20,
    Iridium: 1600,
    Gold: 1600,
    Palladium: 1600,
    Rare1: 40000,
    Rare2: 250000,
    Rare3: 2000000
  },
  resValue: {
    Iron: 0,
    Copper: 0,
    Aluminium: 0,
    Zinc: 0,
    Lead: 0,
    Silver: 0,
    Iridium: 0,
    Gold: 0,
    Palladium: 0,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  sumValue: 0,
  sellingTime: 10,
  timeLeft: 0,
  minePower: 1,
  yield1: 0.1,
  yield2: 0.01,
  yield3: 0.001,
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
  reach: {
    d1NW: 0,
    d1N: 0,
    d1NE: 0,
    d1W: 0,
    d1E: 0,
    d1SW: 0,
    d1S: 0,
    d1SE: 0,
    d2Core: 0,
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
  outermaterial: "",
  possibleInnerMaterial: ["Zinc", "Lead", "Silver"],
  innermaterial: "",
  possibleCoreMaterial: ["Iridium", "Gold", "Palladium"],
  corematerial: "",
  drone1: 2,
  d1left: 2,
  d1res1Cost: 2,
  d1res2Cost: 2,
  d1res3Cost: 2,
  drone2: 2,
  d2left: 2,
  d2res1Cost: 20,
  d2res2Cost: 20,
  d2res3Cost: 20,
  drone3: 2,
  d3left: 2,
  d3res1Cost: 200,
  d3res2Cost: 200,
  d3res3Cost: 200,
  shipCargoLvl: 1,
  shipMaxCargo: 10,
  shipCapacity: 10,
  shipStock: {
    Iron: 0,
    Copper: 0,
    Aluminium: 0,
    Zinc: 0,
    Lead: 0,
    Silver: 0,
    Iridium: 0,
    Gold: 0,
    Palladium: 0,
    Rare1: 0,
    Rare2: 0,
    Rare3: 0
  },
  lasttick: Date.now()
};


var h = 33;
var l = h + 1 / 3 * h;

var cornerBorder = [];

for (let y = 2 / 3 * h * h - (h / 3 - 1); y <= 2 / 3 * h * h; y++) {
  cornerBorder.push(y);
}
for (let y = 1; y <= h/3; y++) {
  let n = h*h*2/3 + y*(2*h/3);
  cornerBorder.push(n);
}

var flatBorder = [];

for (let y = 2 / 3 * h * l - l + 1; y <= 2 / 3 * h * l; y++) {
  flatBorder.push(y);
}

var c2leftBorder = [];

for (let y = 1; y <= 1 / 3 * h; y++) {
  let n = 1 / 3 * h * (y - 1) + 1;
  c2leftBorder.push(n);
}

var coreCoord = [];

for (let y = 0; y < l/2; y++){
	for (let z = 1; z <= l/2; z++){
  	let n = l*l/4+l/4+z+y*l;
		coreCoord.push(n);
  }
}

var coreExtBorder = [];

for (let y = 1; y <= l; y++){coreExtBorder.push(y);}
for (let y = 0; y < l; y++){
	let n = l*y+1;
  if(!coreExtBorder.includes(n)){
  	coreExtBorder.push(n);
  }
}
for (let y = 1; y <= l; y++){
	let n = l*y;
  if(!coreExtBorder.includes(n)){
  	coreExtBorder.push(n);
  }
}
for (let y = l*l-l; y <= l*l; y++){coreExtBorder.push(y);}

var coreIntBorder = [];

for (let y = 0; y < coreCoord.length; y++){
	let n1 = coreCoord[y]-1;
  let n2 = coreCoord[y]+1;
  let n3 = coreCoord[y]-l;
  let n4 = coreCoord[y]+l;
	if (!coreCoord.includes(n1)){
  	coreIntBorder.push(n1);
  }
	if (!coreCoord.includes(n2)){
  	coreIntBorder.push(n2);
  }
	if (!coreCoord.includes(n3)){
  	coreIntBorder.push(n3);
  }
	if (!coreCoord.includes(n4)){
  	coreIntBorder.push(n4);
  }
}

if (savegame != null) {
  Object.entries(gamedata).forEach(([key, value]) => {
    gamedata[key] = savegame[key];
  });
  if (gamedata.timeLeft > 0) {
    selling();
  }
} else if (prestige != null) {
  Object.entries(prestige).forEach(([key, value]) => {
    gamedata[key] = prestige[key];
  });
}

prestige = {
  res: {

  }
};


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


function init() {
  gamedata.outermaterial = gamedata.possibleOuterMaterial[Math.floor(Math.random() * 3)];
  gamedata.innermaterial = gamedata.possibleInnerMaterial[Math.floor(Math.random() * 3)];
  gamedata.corematerial = gamedata.possibleCoreMaterial[Math.floor(Math.random() * 3)];

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

  Object.entries(gamedata.resValue).forEach(([key, value]) => {
    gamedata.resValue[key] = Math.random() * (((gamedata.baseValue[key] * 0.25) + gamedata.baseValue[key]) - gamedata.baseValue[key] * 0.75) + gamedata.baseValue[key] * 0.75;
  });
}


if (gamedata.newgame === true) {
  init();
  gamedata.newgame = false;
}


document.getElementById("outermaterial").innerHTML = gamedata.outermaterial;
document.getElementById("innermaterial").innerHTML = gamedata.innermaterial;
document.getElementById("corematerial").innerHTML = gamedata.corematerial;
update("d1res1Cost", format(gamedata.d1res1Cost, "scientific"));
update("d1res2Cost", format(gamedata.d1res2Cost, "scientific"));
update("d1res3Cost", format(gamedata.d1res3Cost, "scientific"));
update("d2res1Cost", format(gamedata.d2res1Cost, "scientific"));
update("d2res2Cost", format(gamedata.d2res2Cost, "scientific"));
update("d2res3Cost", format(gamedata.d2res3Cost, "scientific"));
update("d3res1Cost", format(gamedata.d3res1Cost, "scientific"));
update("d3res2Cost", format(gamedata.d3res2Cost, "scientific"));
update("d3res3Cost", format(gamedata.d3res3Cost, "scientific"));
Object.entries(gamedata.droneAssign).forEach(([key, value]) => {
  update(key, format(gamedata.droneAssign[key], "round"));
  update("local_" + key, format(gamedata.droneAssign[key], "round"));
});
document.getElementById("shipMenu").style.display = "none";
chooseRegion("map", "map");
tab("workbench");

function reset() {
  window.localStorage.clear();
  document.location.reload(true);
  gamedata.newgame = true;
}

function save() {
  localStorage.setItem("Save", JSON.stringify(gamedata));
}

var savegameloop = window.setInterval(function() {
  save();
}, 15000);

var maingameloop = window.setInterval(function() {
  droneMining();
  diff = Date.now() - gamedata.lasttick;
  gamedata.lasttick = Date.now();
}, 1000);

var refreshloop = window.setInterval(function() {
  Object.entries(gamedata.res).forEach(([key, value]) => {
    update(key, format(gamedata.res[key], "scientific"));
  });
  update("drone1", format(gamedata.drone1, "round"));
  update("d1left", format(gamedata.d1left, "round"));
  update("drone2", format(gamedata.drone2, "round"));
  update("d2left", format(gamedata.d2left, "round"));
  update("drone3", format(gamedata.drone3, "round"));
  update("d3left", format(gamedata.d3left, "round"));
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    update((key + "Ship"), format(gamedata.shipStock[key], "scientific"));
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

function format(number, type) {
  let exponent = Math.floor(Math.log10(number));
  let mantissa = number / Math.pow(10, exponent);
  if (type == "round") return number.toFixed(0);
  if (exponent < 5) return number.toFixed(3);
  if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent;
  if (type == "engineering")
    return (
      (Math.pow(10, exponent % 3) * mantissa).toFixed(2) +
      "e" +
      Math.floor(exponent / 3) * 3
    );
}

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
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
      cell = document.getElementById("mineGri" + key).getElementsByTagName("td");
      if (key.includes("1")) {
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
            removeItemOnce(gamedata.notMined[key], toMine[x]);
            if (key.includes("1")) {
              if (flatBorder.includes(toMine[x]) && gamedata.reach[key] === 0) {
                gamedata.reach[key] = toMine[x];
              }
              gamedata.res[gamedata.outermaterial] = gamedata.res[gamedata.outermaterial] + gamedata.yield1;
            } else if (key.includes("2")) {
              gamedata.res[gamedata.innermaterial] = gamedata.res[gamedata.innermaterial] + gamedata.yield2;
            }

          } else {
            if (key.includes("2") && gamedata.minePower === 1) {
              gamedata.minePower = 2;
              cell[toMine[x] - 1].click();
              gamedata.minePower = 1;
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
	
  if (
    ((!region.includes(antCol) && antCol != 0) ||
     (!region.includes(antRow) && antRow != 0) ||
     (!region.includes(postCol) && postCol != 0) ||
     (!region.includes(postRow) && postRow != 0) ||
     (optReg.length == 4 && col == 0) ||
     (row == 0 && optReg.includes("1"))
      ) &&
    region.includes(i)
  ) {
    if (((optReg.length == 4 && cornerBorder.includes(i)) || (optReg.length == 3 && flatBorder.includes(i))) && gamedata.reach[optReg] === 0) {
      gamedata.reach[optReg] = i;
    }
    if (grid.parentNode.id.includes("1")) {
      removeItemOnce(region, i);
      el.className = "clicked";
      gamedata.res[gamedata.outermaterial] = gamedata.res[gamedata.outermaterial] + gamedata.yield1;
    } else if (
    	grid.parentNode.id.includes("2") && 
    	gamedata.minePower > 1 && 
      (
        (
        !gamedata.notMined["d1" + optReg.slice(2)].includes(i + (2 * h / 3 * (l) - l)) && 
        optReg.length == 3
        ) || (
        !gamedata.notMined["d1" + optReg.slice(2)].includes(h*(2*h/3)-(h/3-col-1)+2*h*row/3) && 
        optReg.length == 4
        ) || (
        gamedata.notMined[optReg].length < (h / 3 * l) && 
        optReg.length == 3
        ) || (
        gamedata.notMined[optReg].length < (h / 3 * h / 3) && 
        optReg.length == 4
        )
      )
    ) {
      removeItemOnce(region, i);
      el.className = "clicked";
      gamedata.res[gamedata.innermaterial] = gamedata.res[gamedata.innermaterial] + gamedata.yield2;
    } else if (grid.parentNode.id.includes("3") && gamedata.minePower > 2) {
      removeItemOnce(region, i);
      el.className = "clicked";
      gamedata.res[gamedata.corermaterial] = gamedata.res[gamedata.corematerial] + gamedata.yield3;
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
        	if (regionName.length === 6 && coreCoord.includes(i)){
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
    gamedata.res.Iron >= gamedata.d1res1Cost &&
    gamedata.res.Copper >= gamedata.d1res2Cost &&
    gamedata.res.Aluminium >= gamedata.d1res3Cost
  ) {
    gamedata.res.Iron -= gamedata.d1res1Cost;
    gamedata.res.Copper -= gamedata.d1res2Cost;
    gamedata.res.Aluminium -= gamedata.d1res3Cost;
    gamedata.drone1 += 1;
    gamedata.d1left += 1;
    gamedata.d1res1Cost = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
    gamedata.d1res2Cost = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
    gamedata.d1res3Cost = gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
    update("d1res1Cost", format(gamedata.d1res1Cost, "scientific"));
    update("d1res2Cost", format(gamedata.d1res2Cost, "scientific"));
    update("d1res3Cost", format(gamedata.d1res3Cost, "scientific"));
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
    gamedata.res.Zinc >= gamedata.d2res1Cost &&
    gamedata.res.Lead >= gamedata.d2res2Cost &&
    gamedata.res.Silver >= gamedata.d2res3Cost
  ) {
    gamedata.res.Zinc -= gamedata.d2res1Cost;
    gamedata.res.Lead -= gamedata.d2res2Cost;
    gamedata.res.Silver -= gamedata.d2res3Cost;
    gamedata.drone2 += 1;
    gamedata.d2left += 1;
    gamedata.d2res1Cost = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
    gamedata.d2res2Cost = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
    gamedata.d2res3Cost = gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
    update("d2res1Cost", format(gamedata.d2res1Cost, "scientific"));
    update("d2res2Cost", format(gamedata.d2res2Cost, "scientific"));
    update("d2res3Cost", format(gamedata.d2res3Cost, "scientific"));
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
    gamedata.res.Iridium >= gamedata.d3res1Cost &&
    gamedata.res.Gold >= gamedata.d3res2Cost &&
    gamedata.res.Palladium >= gamedata.d3res3Cost
  ) {
    gamedata.res.Iridium -= gamedata.d3res1Cost;
    gamedata.res.Gold -= gamedata.d3res2Cost;
    gamedata.res.Palladium -= gamedata.d3res3Cost;
    gamedata.drone3 += 1;
    gamedata.d3left += 1;
    gamedata.d3res1Cost = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
    gamedata.d3res2Cost = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
    gamedata.d3res3Cost = gamedata.d3base * Math.pow(gamedata.d3x, gamedata.drone3);
    update("d3res1Cost", format(gamedata.d3res1Cost, "scientific"));
    update("d3res2Cost", format(gamedata.d3res2Cost, "scientific"));
    update("d3res3Cost", format(gamedata.d3res3Cost, "scientific"));
  } else {
    console.log("Not enough resources");
  }
}

function shipMenu() {
  document.getElementById("shipMenu").style.display = "grid";
  let root = document.documentElement.style;
  root.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Iron + gamedata.shipStock.Copper + gamedata.shipStock.Aluminium))) + "%");
  root.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Zinc + gamedata.shipStock.Lead + gamedata.shipStock.Silver))) + "%");
  root.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Iridium + gamedata.shipStock.Gold + gamedata.shipStock.Palladium))) + "%");

  Object.entries(gamedata.res).forEach(([key, value]) => {
    let el = document.getElementById(key + "Ship");
    el.value = gamedata.shipStock[key];
    update(key + "Value", format(gamedata.resValue[key], "scientific"));
  });
  update("sumValue", format(gamedata.sumValue, "scientific") + "$");
  update("money", format(gamedata.money, "scientific") + "$");
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
        el.value = gamedata.shipStock[res];
      }
    } else if ((parseFloat(el.value) - gamedata.shipStock[res]) > gamedata.res[res] && gamedata.res[res] > 0) {
      if (gamedata.shipCapacity >= gamedata.res[res]) {
        gamedata.shipStock[res] = gamedata.shipStock[res] + gamedata.res[res];
        gamedata.shipCapacity = gamedata.shipCapacity - gamedata.res[res];
        gamedata.res[res] = 0;
        el.value = gamedata.shipStock[res];
      } else {
        gamedata.shipStock[res] = gamedata.shipStock[res] + gamedata.shipCapacity;
        gamedata.res[res] = gamedata.res[res] - gamedata.shipCapacity;
        gamedata.shipCapacity = 0;
        el.value = gamedata.shipStock[res];
      }
    } else {
    	el.value = gamedata.shipStock[res];
    }
  } else {
    el.value = gamedata.shipStock[res];
  }

  let root = document.documentElement.style;
  root.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Iron + gamedata.shipStock.Copper + gamedata.shipStock.Aluminium))) + "%");
  root.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Zinc + gamedata.shipStock.Lead + gamedata.shipStock.Silver))) + "%");
  root.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Iridium + gamedata.shipStock.Gold + gamedata.shipStock.Palladium))) + "%");

  gamedata.sumValue = 0;
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    let el = document.getElementById(key + "Ship");
    gamedata.sumValue = gamedata.sumValue + gamedata.shipStock[key] * gamedata.resValue[key];
  });
  update("sumValue", format(gamedata.sumValue, "scientific") + "$");
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
  root.style.setProperty("--res1GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Iron + gamedata.shipStock.Copper + gamedata.shipStock.Aluminium))) + "%");
  root.style.setProperty("--res2GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Zinc + gamedata.shipStock.Lead + gamedata.shipStock.Silver))) + "%");
  root.style.setProperty("--res3GaugeH", (100 / (gamedata.shipMaxCargo / (gamedata.shipStock.Iridium + gamedata.shipStock.Gold + gamedata.shipStock.Palladium))) + "%");
  gamedata.sumValue = 0;
  update("sumValue", format(gamedata.sumValue, "scientific") + "$");
}

function sellRessources() {
  if (gamedata.sumValue > 0) {
    var minutes = Math.floor(gamedata.sellingTime / 60);
    var seconds = gamedata.sellingTime % 60;
    var msg = "Ship won't be in orbit for " + minutes + "m" + seconds + "s";
    if (confirm("Are you sure you want to sell resources stocked in ship?\n" + msg)) {

      gamedata.money = gamedata.money + gamedata.sumValue;
      resetAmounts(true);
      update("money", format(gamedata.money, "scientific") + "$");
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
  Object.entries(gamedata.shipStock).forEach(([key, value]) => {
    prestige.res[key] = gamedata.shipStock[key];
  });
  prestige.money = gamedata.money;
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
    };
  }
  App.view.zone();
  App.view.multiStars();
}

App.start = function() {
  App.view.init();
}
App.start();
