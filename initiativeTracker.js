var initiativeOrder = [];

function addToInitiativeOrder(){
  initiativeOrder[document.getElementById("name").value] = document.getElementById("initiative").value;
  initiativeOrder.sort();
  var list = "";
  for(var k in initiativeOrder){
    list += "<li>" + k + "</li>";
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
