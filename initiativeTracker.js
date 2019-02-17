var initiativeOrder = [];
var currentInitiative = 0;

function compare(a,b){ return b.initiative - a.initiative; }

function addToInitiativeOrder(){
  if(document.getElementById("roll").checked){
    document.getElementById("initiative").value = Math.floor(Math.random() * 20);
  }
  initiativeOrder.push({name:document.getElementById("name").value, initiative:document.getElementById("initiative").value});
  initiativeOrder.sort(compare);
  var list = "";
  for(var k = 0; k < initiativeOrder.length; k++){
    list += "<li>";
    if(k == currentInitiative)
      list += "<mark>";
    list += initiativeOrder[k].name;
    if(k == currentInitiative)
      list += "</mark>";
    list += "</li>";
  }
  document.getElementById("initiativeList").innerHTML = list;
}

function resetInitiativeOrder(){
  initiativeOrder = [];
  currentInitiative = 0;
  document.getElementById("initiativeList").innerHTML = "";
}

function removeFromInitiativeOrder(index){
  if(currentInitiative > index) currentInitiative--;
  if(currentInitiative == initiativeOrder.length) currentInitiative = 0;
  initiativeOrder.splice(index, 1);
  var list = "";
  for(var k = 0; k < initiativeOrder.length; k++){
    list += "<li>";
    if(k == currentInitiative)
      list += "<mark>";
    list += initiativeOrder[k].name;
    if(k == currentInitiative)
      list += "</mark>";
    list += "</li>";
  }
  document.getElementById("initiativeList").innerHTML = list;
}

function advanceList(){
  currentInitiative = (currentInitiative + 1) % initiativeOrder.length;
  var list = "";
  for(var k = 0; k < initiativeOrder.length; k++){
    list += "<li>";
    if(k == currentInitiative)
      list += "<mark>";
    list += initiativeOrder[k].name;
    if(k == currentInitiative)
      list += "</mark>";
    list += "</li>";
  }
  document.getElementById("initiativeList").innerHTML = list;
}
