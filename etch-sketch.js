const sketch_board = document.querySelector(".container");
let pixel_block = document.createElement("div");
pixel_block.classList.add("pixel");

for (let i=0; i < 16; i++) {
    for (let i=0; i < 16; i++) {
        pixel_block = pixel_block.cloneNode(true);
        sketch_board.appendChild(pixel_block);
    }
}
//const all_pixel = document.querySelectorAll(".pixel").length);