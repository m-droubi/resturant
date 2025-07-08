export function about() {

    const about = document.createElement("div");
    about.classList.add("about");
    
    const board = document.createElement("div");
    board.classList.add("board");
    about.appendChild(board)

    content.appendChild(about);
};

