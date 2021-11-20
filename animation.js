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
