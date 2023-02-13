const sketch_board = document.querySelector(".container");
let pixel_template = document.createElement("div");
pixel_template.classList.add("pixel");
const resize_btn = document.querySelector(".canvas-size-btn");

let size = 16;
let pixel_size = 25;
const max_size = 400;



// Making the grid 
function make_grid(size) {
    pixel_size = Math.floor(max_size/size);
    console.log(pixel_size);
    // Setting grid size
    pixel_template.setAttribute("style", 
    `height: ${pixel_size}px; width: ${pixel_size}px`);
    
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
        pixel.classList.remove("hover");

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
    let temp = parseInt(prompt("Enter the size you want(up to 100): ", 16));
    if (temp > 100 || temp < 1) {
        alert("Error Not a valid number!");
        return;
    }
    size = temp;
    remove_grid();
    make_grid(size);
})

make_grid(size);