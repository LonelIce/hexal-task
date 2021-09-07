import "./style.scss";
import Logo from './assets/img/Logo.svg'
import Photo from './assets/img/Photo.svg'
let portfolio_img = [];
function importAll(r) {
    r.keys().forEach((s, i, arr) => portfolio_img[i] = r(s));
}
importAll(require.context('./assets/img/portfolio/', true, /\.svg$/));


function addToggleClass(element, newClassName) {
    deleteToggleClass(newClassName);
    element.classList.add(newClassName);
}

function deleteToggleClass(className) {
    const element = document.querySelector(`.${className}`);
    element.classList.remove(className);
}

const nav_link = document.querySelectorAll(".nav-link");
for (let i = 0; i < nav_link.length; i++) {
    nav_link[i].addEventListener("click", () => {
        addToggleClass(nav_link[i], "active");
    });
}


