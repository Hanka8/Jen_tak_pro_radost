// kocka
const SVG = document.getElementById("svg5");

const pathsElement = document.querySelectorAll("#svg5 path");
const inputColorElement = document.getElementById("inputColor");

let target_path;

function markTargetedPath (pathElement) {
    let pathFill;
    pathElement.addEventListener("mouseover", () => {
        pathFill = pathElement.style.fill;
        pathElement.style.fill = "red";
    });
    pathElement.addEventListener("mouseout", () => {
        pathElement.style.fill = pathFill;
    });
        pathElement.addEventListener("click", () => {
        target_path = pathElement;
    });
};

function fillPath (inputColor) {
    target_path.style.fill = inputColor.target.value;
}

pathsElement.forEach(markTargetedPath);

inputColorElement.addEventListener("input", fillPath);

