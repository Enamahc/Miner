var gamedata = {
    version: "0.0.0.a",
    newgame: 1,
    d1base: 0,
    d1x: 1.1,
    d1rate: 1,
    d2base: 0,
    d2x: 1.05,
    d2rate: 5,
    d3base: 0,
    d3x: 1.05,
    d3rate: 50,
    iron: 0,
    copper: 0,
    alu: 0,
    zinc: 0,
    lead: 0,
    silver: 0,
    iridium: 0,
    gold: 0,
    palladium: 0,
    minePower: 1,
    yield1: 0.1,
    yield2: 0.01,
    yield3: 0.001,
    d1left: 0,
    d2left: 0,
    d3left: 0,
    d1NW: 0,
    d1N: 0,
    d1NE: 0,
    d1W: 0,
    d1Core: 0,
    d1E: 0,
    d1SW: 0,
    d1S: 0,
    d1SE: 0,
    d2NW: 0,
    d2N: 0,
    d2NE: 0,
    d2W: 0,
    d2Core: 0,
    d2E: 0,
    d2SW: 0,
    d2S: 0,
    d2SE: 0,
    d3NW: 0,
    d3N: 0,
    d3NE: 0,
    d3W: 0,
    d3Core: 0,
    d3E: 0,
    d3SW: 0,
    d3S: 0,
    d3SE: 0,
    minedNW: [],
    minedN: [],
    minedNE: [],
    minedW: [],
    minedCore: [],
    minedE: [],
    minedSW: [],
    minedS: [],
    minedSE: [],
    possibleOuterMaterial: ["Iron", "Copper", "Aluminium"],
    outermaterial: "",
    possibleInnerMaterial: ["Zinc", "Lead", "Silver"],
    innermaterial: "",
    possibleCoreMaterial: ["Iridium", "Gold", "Palladium"],
    corematerial: "",
    drone1: 0,
    d1res1Cost: 0,
    d1res2Cost: 0,
    d1res3Cost: 0,
    drone2: 0,
    d2res1Cost: 0,
    d2res2Cost: 0,
    d2res3Cost: 0,
    drone3: 0,
    d3res1Cost: 0,
    d3res2Cost: 0,
    d3res3Cost: 0,
    lasttick: Date.now()
  };
  
  gamedata.outermaterial =
    gamedata.possibleOuterMaterial[Math.floor(Math.random() * 3)];
  gamedata.innermaterial =
    gamedata.possibleInnerMaterial[Math.floor(Math.random() * 3)];
  gamedata.corematerial =
    gamedata.possibleCoreMaterial[Math.floor(Math.random() * 3)];
  
  var gridN = clickableGrid(99, 100, mining, gamedata.minedN);
  document.getElementById("mineGridFlatN").appendChild(gridN);
  var gridS = clickableGrid(99, 100, mining, gamedata.minedS);
  document.getElementById("mineGridFlatS").appendChild(gridS);
  var gridW = clickableGrid(99, 100, mining, gamedata.minedW);
  document.getElementById("mineGridFlatW").appendChild(gridW);
  var gridE = clickableGrid(99, 100, mining, gamedata.minedE);
  document.getElementById("mineGridFlatE").appendChild(gridE);
  
  document.getElementById("outermaterial").innerHTML =
    "Outer layer : " + gamedata.outermaterial;
  document.getElementById("innermaterial").innerHTML =
    "Inner layer : " + gamedata.innermaterial;
  document.getElementById("corematerial").innerHTML =
    "Core1 : " + gamedata.corematerial;
  document.getElementById("shop").style.display = "inline-block";
  gamedata.d1res1Cost = gamedata.d1base;
  gamedata.d1res2Cost = gamedata.d1base;
  gamedata.d1res3Cost = gamedata.d1base;
  gamedata.d2res1Cost = gamedata.d2base;
  gamedata.d2res2Cost = gamedata.d2base;
  gamedata.d2res3Cost = gamedata.d2base;
  
  function reset() {
    window.localStorage.clear();
    document.location.reload();
    document.getElementById("logs").value = ">";
    gamedata.newgame = 1;
  }
  
  var maingameloop = window.setInterval(function () {
    droneMining();
    diff = Date.now() - gamedata.lasttick;
    gamedata.lasttick = Date.now();
  }, 1000);
  
  var refreshloop = window.setInterval(function () {
    update("iron", format(gamedata.iron, "scientific"));
    update("copper", format(gamedata.copper, "scientific"));
    update("alu", format(gamedata.alu, "scientific"));
    update("zinc", format(gamedata.zinc, "scientific"));
    update("lead", format(gamedata.lead, "scientific"));
    update("silver", format(gamedata.silver, "scientific"));
    update("iridium", format(gamedata.iridium, "scientific"));
    update("gold", format(gamedata.gold, "scientific"));
    update("palladium", format(gamedata.palladium, "scientific"));
    update("drone1", format(gamedata.drone1, "round"));
    update("d1left", format(gamedata.d1left, "round"));
    update("drone2", format(gamedata.drone2, "round"));
    update("d2left", format(gamedata.d2left, "round"));
    // update("drone3", format(gamedata.drone3, "round"));
    // update("d3left", format(gamedata.d3left, "round"));
    update("d1res1Cost", "Iron x" + format(gamedata.d1res1Cost, "scientific"));
    update("d1res2Cost", "Copper x" + format(gamedata.d1res2Cost, "scientific"));
    update(
      "d1res3Cost",
      "Aluminium x" + format(gamedata.d1res3Cost, "scientific")
    );
    update("d2res1Cost", "Zinc x" + format(gamedata.d2res1Cost, "scientific"));
    update("d2res2Cost", "Lead x" + format(gamedata.d2res2Cost, "scientific"));
    update("d2res3Cost", "Silver x" + format(gamedata.d2res3Cost, "scientific"));
    // update("d3res1Cost", "Iridium x" + format(gamedata.d3res1Cost, "scientific"));
    // update("d3res2Cost", "Gold x" + format(gamedata.d3res2Cost, "scientific"));
    // update("d3res3Cost", "Palladium x" + format(gamedata.d3res3Cost, "scientific"));
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
  
  function addDrone(region, number) {
    if (gamedata["d" + number + "left"] > 0) {
      gamedata["d" + number + "left"] -= 1;
      gamedata["d" + number + region] += 1;
      update("d" + number + region, gamedata["d" + number + region]);
      update("localD" + number + region, gamedata["d" + number + region]);
      update("d" + number + "left", gamedata["d" + number + "left"]);
    }
  }
  
  function removeDrone(region, number) {
    if (gamedata["d" + number + region] > 0) {
      gamedata["d" + number + "left"] += 1;
      gamedata["d" + number + region] -= 1;
      update("d" + number + region, gamedata["d" + number + region]);
      update("localD" + number + region, gamedata["d" + number + region]);
      update("d" + number + "left", gamedata["d" + number + "left"]);
    }
  }
  
  function droneMining() {
    var notMinedNd1 = [];
    var notMinedNd2 = [];
    var toMineNd1 = [];
    var toMineNd2 = [];
    var cellN = document
      .getElementById("mineGridFlatN")
      .getElementsByTagName("td");
    var notMinedWd1 = [];
    var notMinedWd2 = [];
    var toMineWd1 = [];
    var toMineWd2 = [];
    var cellW = document
      .getElementById("mineGridFlatW")
      .getElementsByTagName("td");
    var notMinedEd1 = [];
    var notMinedEd2 = [];
    var toMineEd1 = [];
    var toMineEd2 = [];
    var cellE = document
      .getElementById("mineGridFlatE")
      .getElementsByTagName("td");
    var notMinedSd1 = [];
    var notMinedSd2 = [];
    var toMineSd1 = [];
    var toMineSd2 = [];
    var cellS = document
      .getElementById("mineGridFlatS")
      .getElementsByTagName("td");
    var d1min = 1;
    var d1max = 6600;
    var d2min = 6601;
    var d2max = 9900;
    for (let y = d1min; y <= d1max; y++) {
      if (!gamedata.minedN.includes(y)) {
        notMinedNd1.push(y);
      }
      if (!gamedata.minedW.includes(y)) {
        notMinedWd1.push(y);
      }
      if (!gamedata.minedE.includes(y)) {
        notMinedEd1.push(y);
      }
      if (!gamedata.minedS.includes(y)) {
        notMinedSd1.push(y);
      }
    }
    toMineNd1 = notMinedNd1.slice(0, gamedata.d1N);
    toMineWd1 = notMinedWd1.slice(0, gamedata.d1W);
    toMineEd1 = notMinedEd1.slice(0, gamedata.d1E);
    toMineSd1 = notMinedSd1.slice(0, gamedata.d1S);
  
    for (let y = d2min; y <= d2max; y++) {
      if (!gamedata.minedN.includes(y)) {
        notMinedNd2.push(y);
      }
      if (!gamedata.minedW.includes(y)) {
        notMinedWd2.push(y);
      }
      if (!gamedata.minedE.includes(y)) {
        notMinedEd2.push(y);
      }
      if (!gamedata.minedS.includes(y)) {
        notMinedSd2.push(y);
      }
    }
    toMineNd2 = notMinedNd2.slice(0, gamedata.d2N);
    toMineWd2 = notMinedWd2.slice(0, gamedata.d2W);
    toMineEd2 = notMinedEd2.slice(0, gamedata.d2E);
    toMineSd2 = notMinedSd2.slice(0, gamedata.d2S);
  
    if (toMineNd1.length >= 0) {
      for (let x = 0; x < toMineNd1.length; x++) {
        mining(cellN[toMineNd1[x] - 1], "", "", toMineNd1[x], gamedata.minedN);
      }
    }
    if (toMineNd2.length >= 0) {
      for (let x = 0; x < toMineNd2.length; x++) {
        mining(
          cellN[toMineNd2[x] - 1],
          "shunt",
          "",
          toMineNd2[x],
          gamedata.minedN
        );
      }
    }
    if (toMineWd1.length >= 0) {
      for (let x = 0; x < toMineWd1.length; x++) {
        mining(cellW[toMineWd1[x] - 1], "", "", toMineWd1[x], gamedata.minedW);
      }
    }
    if (toMineWd2.length >= 0) {
      for (let x = 0; x < toMineWd2.length; x++) {
        mining(
          cellW[toMineWd2[x] - 1],
          "shunt",
          "",
          toMineWd2[x],
          gamedata.minedW
        );
      }
    }
    if (toMineEd1.length >= 0) {
      for (let x = 0; x < toMineEd1.length; x++) {
        mining(cellE[toMineEd1[x] - 1], "", "", toMineEd1[x], gamedata.minedE);
      }
    }
    if (toMineEd2.length >= 0) {
      for (let x = 0; x < toMineEd2.length; x++) {
        mining(
          cellE[toMineEd2[x] - 1],
          "shunt",
          "",
          toMineEd2[x],
          gamedata.minedE
        );
      }
    }
    if (toMineSd1.length >= 0) {
      for (let x = 0; x < toMineSd1.length; x++) {
        mining(cellS[toMineSd1[x] - 1], "", "", toMineSd1[x], gamedata.minedS);
      }
    }
    if (toMineSd2.length >= 0) {
      for (let x = 0; x < toMineSd2.length; x++) {
        mining(
          cellS[toMineSd2[x] - 1],
          "shunt",
          "",
          toMineSd2[x],
          gamedata.minedS
        );
      }
    }
  }
  
  function chooseRegion(reg) {
    document.getElementById("map").style.display = "none";
    var regionToHide = document.getElementsByClassName("detailRegion");
    for (var i = 0; i < regionToHide.length; i++) {
      regionToHide[i].style.display = "none";
    }
  
    var regionToShow = document.getElementsByClassName(
      "detailRegion" + " " + reg
    );
    if (regionToShow.length >= 1) {
      regionToShow[0].style.display = "grid";
    }
    document.getElementById(reg).style.display = "grid";
  }
  
  chooseRegion("map");
  
  function mining(el, row, col, i, region) {
    // console.log("You clicked on element:", el);
    // console.log("You clicked on row:", row);
    // console.log("You clicked on col:", col);
    // console.log("You clicked on item #:", i);
    if (
      (region.includes(i - 1) ||
        region.includes(i + 1) ||
        region.includes(i - 100) ||
        region.includes(i + 100) ||
        i <= 100) &&
      !region.includes(i)
    ) {
      if (gamedata.minePower < 2 || row === "shunt") {
        if (i <= 6600) {
          region.push(i);
          el.className = "clicked";
          if (gamedata.outermaterial === "Iron") {
            gamedata.iron = gamedata.iron + gamedata.yield1;
          }
          if (gamedata.outermaterial === "Copper") {
            gamedata.copper = gamedata.copper + gamedata.yield1;
          }
          if (gamedata.outermaterial === "Aluminium") {
            gamedata.alu = gamedata.alu + gamedata.yield1;
          }
        }
      } else {
        region.push(i);
        el.className = "clicked";
        if (gamedata.innermaterial === "Zinc") {
          gamedata.zinc = gamedata.zinc + gamedata.yield2;
        }
        if (gamedata.innermaterial === "Lead") {
          gamedata.lead = gamedata.lead + gamedata.yield2;
        }
        if (gamedata.innermaterial === "Silver") {
          gamedata.silver = gamedata.silver + gamedata.yield2;
        }
      }
    }
  }
  
  function clickableGrid(rows, cols, callback, region) {
    let i = 0;
    let grid = document.createElement("table");
    let reg = region;
    grid.className = "grid";
    for (let r = 0; r < rows; ++r) {
      let tr = grid.appendChild(document.createElement("tr"));
      for (let c = 0; c < cols; ++c) {
        let cell = tr.appendChild(document.createElement("td"));
        i = ++i;
        cell.innerHTML = "<span style='display:none;'>" + i + "</span>";
        cell.addEventListener(
          "click",
          (function (el, r, c, i, reg) {
            return function () {
              callback(el, r, c, i, reg);
            };
          })(cell, r, c, i, reg),
          false
        );
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
    if (
      gamedata.iron >= gamedata.d1res1Cost &&
      gamedata.copper >= gamedata.d1res2Cost &&
      gamedata.alu >= gamedata.d1res3Cost
    ) {
      gamedata.iron -= gamedata.d1res1Cost;
      gamedata.copper -= gamedata.d1res2Cost;
      gamedata.alu -= gamedata.d1res3Cost;
      gamedata.drone1 += 1;
      gamedata.d1left += 1;
      gamedata.d1res1Cost =
        gamedata.d1base * Math.pow(gamedata.d1x, gamedata.drone1);
      gamedata.d1res2Cost += 0;
      gamedata.d1res3Cost += 0;
    } else {
      console.log("Not enough resources");
    }
  }
  
  function buyDrone2() {
    if (
      gamedata.zinc >= gamedata.d2res1Cost &&
      gamedata.lead >= gamedata.d2res2Cost &&
      gamedata.silver >= gamedata.d2res3Cost
    ) {
      gamedata.zinc -= gamedata.d2res1Cost;
      gamedata.lead -= gamedata.d2res2Cost;
      gamedata.silver -= gamedata.d2res3Cost;
      gamedata.drone2 += 1;
      gamedata.d2left += 1;
      gamedata.d2res1Cost =
        gamedata.d2base * Math.pow(gamedata.d2x, gamedata.drone2);
      gamedata.d2res2Cost += 0;
      gamedata.d2res3Cost += 0;
    } else {
      console.log("Not enough resources");
    }
  }
  