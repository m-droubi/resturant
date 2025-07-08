export function home() {

    const home = document.createElement("div");
    home.classList.add("home");
    
    const name = document.createElement("div");
    name.classList.add("name");
    home.appendChild(name);

    const picture = document.createElement("div");
    picture.classList.add("picture");
    home.appendChild(picture)

    const discr = document.createElement("div");
    discr.classList.add("discr");
    home.appendChild(discr)

    const title = document.createElement("div");
    title.classList.add("title");
    home.appendChild(title)

    content.appendChild(home);
};
