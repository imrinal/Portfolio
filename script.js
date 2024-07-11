// JavaScript code to create typing effect with multiple sentences
var sentences = [
    "Web Development",
    "Frontend Development",
    "Competitive Coding",
    "Software Engineering"
]; // Array of sentences to be typed
var speed = 50; // Typing speed (milliseconds)
var container = document.getElementById('typing-container'); // Get the container element

// Function to simulate typing effect
function typeWriter(index) {
    if (index < sentences.length) {
        var sentence = sentences[index]; // Get the next sentence
        var typed = ""; // Initialize typed text
        var i = 0; // Initialize index for character in sentence

        // Inner function to type each character
        function typeCharacter() {
            if (i < sentence.length) {
                typed += sentence.charAt(i); // Add the next character
                container.innerHTML = typed; // Update the container with the typed text
                i++;
                setTimeout(typeCharacter, speed); // Call the function recursively after a delay
            } else {
                setTimeout(eraseText, 1000); // Erase the text after a delay
            }
        }

        // Inner function to erase the text
        function eraseText() {
            if (typed.length > 0) {
                typed = typed.slice(0, -1); // Remove the last character
                container.innerHTML = typed; // Update the container with the erased text
                setTimeout(eraseText, speed); // Call the function recursively after a delay
            } else {
                setTimeout(function() { typeWriter(index + 1) }, 1000); // Type the next sentence after a delay
            }
        }

        typeCharacter(); // Start typing the current sentence
    } else {
        typeWriter(0); // Loop back to the first sentence
    }
}

typeWriter(0); // Start the typing effect


document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-to');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offset = 70; // Adjust this value as needed
                const targetOffset = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons with the class 'logo' and the 'dcv' button
    const buttons = document.querySelectorAll(".logo, .dcv, .heading, .sub-heading");

    // Add the animation class to each button
    buttons.forEach(button => {
        button.classList.add("animate-slide-in");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const aboutHeaders = document.querySelectorAll('.about-hd, .skills-hd');
    const aboutParagraphs = document.querySelectorAll('.about-p p');
    const aboutImage = document.querySelector('.abt-img');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        aboutHeaders.forEach(header => {
            const headerTop = header.getBoundingClientRect().top;

            if (headerTop < triggerBottom) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
        });

        aboutParagraphs.forEach(paragraph => {
            const paragraphTop = paragraph.getBoundingClientRect().top;

            if (paragraphTop < triggerBottom) {
                paragraph.classList.add('visible');
            } else {
                paragraph.classList.remove('visible');
            }
        });

        const imgTop = aboutImage.getBoundingClientRect().top;
        if (imgTop < triggerBottom) {
            aboutImage.classList.add('visible');
        } else {
            aboutImage.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', revealOnScroll);

    // Initial call to reveal elements that are already in view on page load
    revealOnScroll();
});


document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    const revealCards = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 200); // Delay each card by 200ms
            }
        });
    };

    window.addEventListener('scroll', revealCards);

    // Initial call to reveal elements that are already in view on page load
    revealCards();
});


document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".exp-card");
    const firstCardWidth = firstCard.offsetWidth + parseInt(getComputedStyle(firstCard).marginLeft) * 2;

    let isDragging = false,
        startX,
        startScrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;

        // Calculate the new scroll position
        const newScrollLeft = startScrollLeft - (e.pageX - startX);

        // Check if the new scroll position exceeds
        // the carousel boundaries
        if (newScrollLeft <= 0 || newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
            // If so, prevent further dragging
            isDragging = false;
            return;
        }

        // Otherwise, update the scroll position of the carousel
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    // Add event listeners for the arrow buttons to
    // scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ?
                -firstCardWidth : firstCardWidth;
        });
    });
});
 

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

