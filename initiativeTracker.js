var initiativeOrder = [];

function compare(a,b){ return b.initiative - a.initiative; }

function addToInitiativeOrder(){
  initiativeOrder.push({name:document.getElementById("name").value, initiative:document.getElementById("initiative").value});
  initiativeOrder.sort(compare);
  var list = "";
  for(var k in initiativeOrder){
    list += "<li>" + initiativeOrder[k].name + "</li>";
  }
  document.getElementById("initiativeList").innerHTML = list;
  console.log(initiativeOrder);
}

function resetInitiativeOrder(){
  initiativeOrder = [];
  document.getElementById("initiativeList").innerHTML = "";
}

function removeFromInitiativeOrder(name){
  
}
