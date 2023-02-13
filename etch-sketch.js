const sketch_board = document.querySelector(".container");
let pixel_template = document.createElement("div");
pixel_template.classList.add("pixel");
const size = 16;

for (let i=0; i < size; i++) {
    for (let i=0; i < size; i++) {
        pixel_template = pixel_template.cloneNode(true);
        sketch_board.appendChild(pixel_template);
    }
}
const all_pixel = document.querySelectorAll(".pixel");

all_pixel.forEach( (pixel) => {
    pixel.addEventListener("mouseenter", () => {
        pixel.classList.add("hover");
    })
});