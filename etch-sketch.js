const sketch_board = document.querySelector(".container");
let pixel_template = document.createElement("div");
pixel_template.classList.add("pixel");
const resize_btn = document.querySelector(".canvas-size-btn");

let size = 16;
const pixel_size = 20;

pixel_template.setAttribute("style", 
`height: ${pixel_size}px; width: ${pixel_size}px`);

// Making the grid 
function make_grid(size) {
    console.log(pixel_template);
    // Setting grid size
    sketch_board.setAttribute("style",
    `grid-template-columns: repeat(${size}, ${pixel_size}px);`);
    // Creating Grid
    for (let i=0; i < size; i++) {
        for (let i=0; i < size; i++) {
            pixel_template = pixel_template.cloneNode(true);
            sketch_board.appendChild(pixel_template);
        }
    }

    // adding EventListener for the canvas/pixel
    const all_pixel = document.querySelectorAll(".pixel");
    
    all_pixel.forEach( (pixel) => {
        pixel.addEventListener("mouseenter", () => {
            pixel.classList.add("hover");
        })
    })

};

function remove_grid() {
    while(sketch_board.hasChildNodes()){
    sketch_board.removeChild(sketch_board.firstChild);
    }
}

// Button setting
resize_btn.addEventListener("click", () => {
    let temp = parseInt(prompt("Enter the size you want(up to 100): "));
    if (temp > 100 || temp < 1) {
        alert("Error Not a valid number!");
        return;
    }
    size = temp;
    remove_grid();
    make_grid(size);
})

make_grid(size);