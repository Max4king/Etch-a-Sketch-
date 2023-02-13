const sketch_board = document.querySelector(".container");
let pixel_block = document.createElement("div");
pixel_block.classList.add("pixel");
for (let i=0; i < 16; i++) {
    for (let i=0; i < 16; i++) {
        let pb = pixel_block.cloneNode(true);
        sketch_board.appendChild(pb);
    }
}
console.log(document.querySelectorAll(".pixel").length);