function changeHeadingText() {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.textContent = "You're ready to uncover the mystery!";
    } else {
        console.log('Heading not found!');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.hero-btn');
    if (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();  
            changeHeadingText();     
        });
    } else {
        console.log('Button not found!');
    }
});
