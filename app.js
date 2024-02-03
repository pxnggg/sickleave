const imgcat = document.querySelector(".cat")
const btnok = document.querySelector(".sayok")
const btnno = document.querySelector(".sayno")
const topic = document.querySelector(".topic")

var okh = 40
var okw = 100

var dew = 100
var deh = 40

btnok.addEventListener("click",()=>{
    console.log("ok")
    btnok.style.width = 0+"px"
    btnok.style.height = 0+"px"
    btnok.style.visibility = "hidden"
    btnno.style.visibility = "hidden"
    imgcat.setAttribute("src","https://i.pinimg.com/originals/92/01/4e/92014ee9d5b7a5da872631ebf72dc524.gif")
    topic.textContent = "ครูหนูให้ลาก่อน 07:30 นะครับ"
})

btnno.addEventListener("click",()=>{
    console.log("no")
    okh *= 1.3
    okw *= 1.3
    console.log(okh)

    btnok.style.width = okw+"px"
    btnok.style.height = okh+"px"
})