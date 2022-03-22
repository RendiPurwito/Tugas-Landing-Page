var buttonLeft = document.querySelector(".left")

var buttonRight = document.querySelector(".right")

var main3Content = document.querySelector(".main3-content")

buttonLeft.addEventListener("click", function(){
    main3Content.scrollLeft -= 250
})

buttonRight.addEventListener("click", function(){
    main3Content.scrollLeft += 250
})

