//! Guru
var buttonLeft = document.querySelector(".left")

var buttonRight = document.querySelector(".right")

var main3Content = document.querySelector(".main3-content")

buttonLeft.addEventListener("click", function(){
    main3Content.scrollLeft -= 250
})

buttonRight.addEventListener("click", function(){
    main3Content.scrollLeft += 250
})
// ! End Guru

//! Prestasi Sekolah
var buttonLeft2 = document.querySelector(".left2")
var buttonRight2 = document.querySelector(".right2")
var containerMain5 = document.querySelector(".container-main5")

buttonLeft2.addEventListener("click", function(){
    containerMain5.scrollLeft -= 250
})

buttonRight2.addEventListener("click", function(){
    containerMain5.scrollLeft += 250
})
//! End Prestasi Sekolah


//! Berita Terbaru
var buttonLeft3 = document.querySelector(".left3")
var buttonRight3 = document.querySelector(".right3")
var bagInti = document.querySelector(".bag-inti")

buttonLeft3.addEventListener("click", function(){
    bagInti.scrollLeft -= 250
})

buttonRight3.addEventListener("click", function(){
    bagInti.scrollLeft += 250
})
// ! End Berita Terbaru
