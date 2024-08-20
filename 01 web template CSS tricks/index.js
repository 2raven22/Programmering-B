let currentPage = 3
//array
let pages = []
let colors = ['red', 'green', 'blue', 'orange', 'cyan','purple','babypink']

function setup(){
    console.log('P5.js er loaded')
    select("#page" + currentPage).addClass('visible')
    pages=selectAll('.page')
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
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}