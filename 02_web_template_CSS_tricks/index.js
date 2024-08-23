let currentPage = 1
let menuNumber = 1
//array
let pages = []
let menuitems //array med menupunkter
let colors = ['red', 'green', 'blue', 'orange', 'cyan','purple','pink','lightblue']

function setup(){
    console.log('P5.js er loaded')
    select("#page" + currentPage).addClass('visible')
    select("#menu" + menuNumber).addClass('active')

    pages=selectAll('.page')
    menuitems=selectAll('.menuitem')

    for(m of menuitems){
        m.mousePressed(function(e){
            //e.target er html div
            console.log(e.target.id)
            //slice -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            shiftPage(nr)
        })
    }


    // kan ses pages er blevet til en liste med alle page class = page ting 
    // console.log(pages.length)

    //laver en masse div til page 3
    for(c of colors){
        //console.log(c)
        let div = createDiv()
        div.style('background-color', c)
        select('#page3').child(div)
    }
}

function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }

    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
    select("#menu" + menuNumber).removeClass('active')
    menuNumber = num
    select("#menu" + menuNumber).addClass('active')
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}