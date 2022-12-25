


var ckliked=document.getElementsByClassName("mycheck")
console.log(ckliked)
var change=document.getElementsByClassName("change")
console.log(change)
 for(let i=0;i<change.length;i++){
  ckliked[i].addEventListener('click', function() {
    change[i].innerHTML='✔';

})
 }
