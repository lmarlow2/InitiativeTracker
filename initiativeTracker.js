var initiativeOrder = [];

function compare(a,b){
  return a.value - b.value;
}

function addToInitiativeOrder(){
  initiativeOrder[document.getElementById("name").innerHTML] = document.getElementById("initiative").innerHTML;
  initiativeOrder.sort(compare);
  var list = "";
  for(var k in initiativeOrder){
    list += "<li>" + k + "</li>";
  }
  console.log(initiativeOrder);
}

function resetInitiativeOrder(){}

function removeFromInitiativeOrder(){}
