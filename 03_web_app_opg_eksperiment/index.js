let currentPage = 4

//array
let pages = []
let menuitems //array med menupunkter

function setup(){


    pages=selectAll('.page')
    menuitems=selectAll('.menuitem')

    //løber menu items igennem. Skifter side
    for(m of menuitems){
        m.mousePressed(function(e){
            //e.target er html div
            console.log(e.target.id)
            //slice -1 henter det sidste bogstav i en string
            let nr = e.target.id.slice(-1)
            shiftPage(nr)
        })
    }
    
        //shiftPage er funktion der tager tal og skifter til side
        shiftPage(currentPage)
        //venter 2 sekunder før vi adder classen hidden på header
        setTimeout(function(){
            select('header').addClass('hidden')
        }, 2000)
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
    select("#menu" + currentPage).removeClass('active')
    currentPage = num
    select("#page" + currentPage).addClass('visible')
    select("#menu" + currentPage).addClass('active')
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}