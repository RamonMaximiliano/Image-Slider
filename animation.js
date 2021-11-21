//pensei que havia bug neste código porém não, você tem que esperar a imagem aparecer por completo antes de clicar para vir a proxima

function changeImageRight() {
    const mainImage = document.getElementById("mainImage")

    if (mainImage.classList.contains("image1")) {
        mainImage.classList.remove("image1")
        mainImage.classList.add("image2")

    } else if (mainImage.classList.contains("image2")) {
        mainImage.classList.remove("image2")
        mainImage.classList.add("image3")

    } else if (mainImage.classList.contains("image3")) {
        mainImage.classList.remove("image3")
        mainImage.classList.add("image4")

    } else if (mainImage.classList.contains("image4")) {
        mainImage.classList.remove("image4")
        mainImage.classList.add("image1")
    }
}

function changeImageLeft() {
    const mainImageLeft = document.getElementById("mainImage")

    if (mainImageLeft.classList.contains("image1")) {
        mainImageLeft.classList.remove("image1")
        mainImageLeft.classList.add("image4")

    } else if (mainImageLeft.classList.contains("image4")) {
        mainImageLeft.classList.remove("image4")
        mainImageLeft.classList.add("image3")

    } else if (mainImageLeft.classList.contains("image3")) {
        mainImageLeft.classList.remove("image3")
        mainImageLeft.classList.add("image2")

    } else if (mainImageLeft.classList.contains("image2")) {
        mainImageLeft.classList.remove("image2")
        mainImageLeft.classList.add("image1")
    }
}


/*Vai o nome da função e o intervalo em milisegundos de quanto em quanto tempo ela deve rodar*/
setInterval(changeImageRight, 15000)

/*Acima meu código*/



/*Abaixo código do Boni*/

let totalSlides = document.querySelectorAll("div.sliderItem").length
let currentSlide = 0;
let sliderWidth = document.querySelector("div.sliderItem").clientWidth




function changeImageLeft1() {
    console.log(totalSlides)
    currentSlide++;
    if(currentSlide > (totalSlides -1)) {
        currentSlide = 0;
    } 
    updateMargin()
}

function changeImageRight2() {
    console.log(totalSlides)
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides -1;
    } 
    updateMargin()
}

function updateMargin(){
    /*    let newMargin = (currentSlide * document.body.clientWidth); */
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector("div.sliderBoni").style.marginLeft = `-${newMargin}px`;
}


/*Vai o nome da função e o intervalo em milisegundos de quanto em quanto tempo ela deve rodar*/
setInterval(changeImageRight2, 15000)