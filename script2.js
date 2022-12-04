/*type-writer*/
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Runner";
    }, 4000);
    setTimeout(() => {
        text.textContent = "IT Specialist";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);