document.addEventListener('DOMContentLoaded', (event) => {
    let speed = 50;
    let tagline = "Smart solutions for a digital world";
    let index = 0;

    const typeWriter = () => {
        const taglineElement = document.getElementById("hero-txt-tagline");
        if (taglineElement && index < tagline.length) {
            taglineElement.innerHTML += tagline.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
});