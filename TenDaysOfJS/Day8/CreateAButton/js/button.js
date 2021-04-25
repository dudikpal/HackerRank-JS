const button = document.querySelector("#incButton");

function increment() {
    let number = button.innerHTML;
    button.innerHTML = ++number;
}