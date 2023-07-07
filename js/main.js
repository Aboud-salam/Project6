// nav toggle
let toggleBtn = document.querySelector(".toggle-btn")
let sideLinks = document.querySelector(".side-links")
const mediaQuery = window.matchMedia('(max-width: 767px)')
toggleBtn.onclick = function () {
        sideLinks.classList.toggle("clicked")
        if (sideLinks.classList.contains("clicked")) {
            sideLinks.style.height = `336px`
        } else {
            sideLinks.style.height = `0px`
        }
}
window.onresize = function() {
    if (mediaQuery.matches === false) {
        sideLinks.style.height = `0px`
    }
}
// questions toggle
let question = document.querySelectorAll(".asked-questions .container .questions .question")
let content = document.querySelector(".asked-questions .container .questions .question .content")
let clicks = 0;
let getData = async () => {
    let response = await fetch("answers.json")
    let data = await response.json()
    return data
}
getData().then(res => {
    let answers = res;
    question.forEach((e, index) => {
        e.onclick = function () {
            console.log(index)
            e.classList.toggle("clicked")
            if (e.classList.contains("clicked")) {
                e.lastElementChild.innerHTML = "";
                let answer = answers.filter(e => {
                    return e[`answer-${index}`]
                })
                console.log(e.lastElementChild)
                    let element = document.createElement("p")
                    element.appendChild(document.createTextNode(answer[0][`answer-${index}`]))
                    element.classList.add("description")
                    e.lastElementChild.appendChild(element)
                    e.lastElementChild.style.height = `${e.lastElementChild.scrollHeight}px`
            } else {
                e.lastElementChild.style.height = `0px`
            }
            removeClicked(index)
        }
    })
})
function removeClicked(indexOne) {
    question.forEach((el, indexTwo) => {
        let des = el.querySelector(".content")
        if (indexOne != indexTwo) {
            el.classList.remove("clicked")
            des.style.height = `0px`
        }
    })
}
// shuffle imgs 
let landing = document.querySelector(".landing");
let imgsArr = ["landing-01.jpg", "landing-02.jpg", "landing-03.jpg", "landing-04.jpg", "landing-05.jpeg", "landing-06.png"];
setInterval(function() {
    let randomNum = Math.floor(Math.random() * imgsArr.length)
    landing.style.backgroundImage = `url(/imgs/${imgsArr[randomNum]})`
},10000)