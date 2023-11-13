let time = document.getElementById("currenttime");
let item = setInterval(()=>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
},1000)
const stop=()=>{
    clearInterval(item)
 ;}