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
  for(var k in initiativeOrder){
    list += "<li>" + initiativeOrder[k].name + "</li>";
  }
  document.getElementById("initiativeList").innerHTML = list;
}

function resetInitiativeOrder(){
  initiativeOrder = [];
  document.getElementById("initiativeList").innerHTML = "";
}

function removeFromInitiativeOrder(index){
  initiativeOrder.splice(index);
}

function advanceList(){}
