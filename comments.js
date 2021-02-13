const nav = document.getElementById("nav")
const openn = document.getElementById("openn")
const button = document.getElementById("openn")
const title = document.getElementById("title")
const closee = document.getElementById("closee")

openn.onclick=()=>{

if (nav.style.opacity==0)
{
  nav.style.opacity="1";
    nav.style.transition="0.7s linear "
    nav.style.width="100vw"
    nav.style.display="block"
    title.style.display="block";
    document.body.style.overflow="hidden";
    button.style.display="none"
    document.getElementById("one").style.display="block"
}
else
{
    nav.style.opacity="0";
    nav.width="0px";
    document.body.style.overflow="visible"
  }
}

closee.onclick=()=>{
    nav.style.opacity="0"
    nav.style.width="0px";
    nav.style.visiblity="hidden";
    title.style.display="none"
    button.style.display="block"
    document.getElementById("one").style.display="none"
    document.body.style.overflow="visible"
}
var d = new Date()
const name = document.getElementById("name")
const ans = document.getElementById("ans")
const val = document.getElementById("comment")
const sub = document.getElementById("sub")
sub.onclick=()=>{
  sessionStorage.setItem("comment", val.value)
  send()
}

function send () {
  var comments = []
  comments.push(val.value)
  for (let i = 0;i<comments.length;i++){
  ans.innerHTML+= "<span>" + d.getHours() + ":" + d.getMinutes() + " " +  name.value + ":" + "<b>" + "     " + "<b>"+comments[i] + "</b>"+"</span>" + "<br>"
  }
}