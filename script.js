// JavaScript function to display a greeting
function greetUser() {
    const name = prompt("What's your name?");
    if (name) {
        alert(`Hello, ${name}!`);
    } else {
        alert("Hello, guest!");
    }
}
