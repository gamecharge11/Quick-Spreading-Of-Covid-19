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
    document.body.style.overflow="visible"
    button.style.display="block"
}