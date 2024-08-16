let currentPage = 2
//array
let pages = []

function setup(){
    console.log('P5.js er loaded')
    select("#page" + currentPage).addClass('visible')
    pages=selectAll('.page')
    // kan ses pages er blevet til en liste med alle page class = page ting 
    // console.log(pages.length)
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