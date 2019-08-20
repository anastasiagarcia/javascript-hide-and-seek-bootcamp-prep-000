function getFirstSelector(selector){
  var firstSel=document.querySelector(selector);
  return firstSel;
}


function nestedTarget(){
  let nestTarg= document.getElementById('nested').getElementsByClassName('target')[0];
  return nestTarg;
}

function deepestChild(){
  var parent=document.getElementById('grand-node');
  var children = [...parent.children]; //make a copy of an array and point to the copy, so you don't alter the original array//
  
  while(children.length>0){
    if(parent.children !== undefined){
      children.push(...parent.children);
    }
    parent = children.shift();
  }
  return parent;
  }
  
  function increaseRankBy(n){
    var ranks=document.getElementsByClassName('ranked-list');
   for(let j=0; j<ranks.length;j++){
     var currentRank=ranks[j];
      for (let i=0;i<currentRank.children.length; i++){
        var child=currentRank.children[i];
        child.innerHTML=parseInt(child.innerHTML)+n;
      }
   }
  }
