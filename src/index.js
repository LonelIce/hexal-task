import './styles/index.scss';

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
const switches = document.querySelectorAll(".switch");
for (let i = 0; i < switches.length; i++) {
    switches[i].addEventListener("click", () => {
        addToggleClass(switches[i], "active-switch");
    });
}
