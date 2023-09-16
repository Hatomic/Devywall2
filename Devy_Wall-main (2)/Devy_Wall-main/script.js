let images = ["img/technology-innovation-concept-mixed-media_641298-10088.jpeg", "img/representations-user-experience-interface-design_23-2150104489.jpeg", "img/cropped-shot-view-young-smart-mature-female-businesswomen-working-online-via-laptop_273609-13657.jpeg"]
let index = 0;
const slideshow_image = document.querySelector ("#slideshow_image")

function on () {
    slideshow_image.src = images[index];
    index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(on, 7000);
}