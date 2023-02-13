const sketch_board = document.querySelector(".container");
let pixel_template = document.createElement("div");
pixel_template.classList.add("pixel");

for (let i=0; i < 16; i++) {
    for (let i=0; i < 16; i++) {
        pixel_template = pixel_template.cloneNode(true);
        sketch_board.appendChild(pixel_template);
    }
}
const all_pixel = document.querySelectorAll(".pixel");

all_pixel.forEach( (pixel) => {
    pixel.addEventListener("mouseenter", () => {
        pixel.classList.add("hover");
    })
    pixel.addEventListener("transitionend", (e) => {
        if (e.propertyName !== "background-color") return;
        pixel.classList.remove("hover");
    });
});