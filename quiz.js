//Making navbar functional
const nav = document.getElementById("nav")
const openn = document.getElementById("openn")
const button = document.getElementById("openn")
const title = document.getElementById("title")
const closee = document.getElementById("closee")

openn.onclick=()=>{

if (nav.style.opacity==0)
{
  nav.style.opacity="1";
    nav.style.width="100vw"
    nav.style.display="block"
    title.style.display="block";
    document.body.style.overflow = "hidden";
    document.getElementById("one").style.display="block"
}
}

closee.onclick=()=>{
    nav.style.opacity="0"
    nav.style.width="0px";
    title.style.display = "none"
    document.body.style.overflow="visible"
    document.getElementById("one").style.display="none"
}
//Evaluating the form
//Send using ?in the url in the end

//Submit button
const submit = document.getElementById("submit")

//Calculated score (default = 0)
var final = 0;
//Evaluating function
submit.onclick = () => {
    //Check if checked==true
    if (document.getElementById("qa-correct").checked == true) {
        final++
    }
    if (document.getElementById("qb-correct").checked == true) {
        final++
    }
    if (document.getElementById("qc-correct").checked == true) {
        final++
    }
    if (document.getElementById("qd-correct").checked == true) {
        final++
    }
    if (document.getElementById("qe-correct").checked == true) {
        final++
    }
    //redirect 
    location.href="quiz-result.html?res="+final
}