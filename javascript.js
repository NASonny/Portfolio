window.addEventListener('beforeunload', function() {
    history.scrollRestoration = "manual";
});

document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollButtons = document.querySelectorAll(".home");

    smoothScrollButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            const targetElement = document.getElementById("section-1");

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollButtons = document.querySelectorAll(".aboutme");

    smoothScrollButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            const targetElement = document.getElementById("section-2");

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollButtons = document.querySelectorAll(".project");

    smoothScrollButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            const targetElement = document.getElementById("section-4");

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollButtons = document.querySelectorAll(".contact-me");

    smoothScrollButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            const targetElement = document.getElementById("section-5");

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const smoothScrollButtons = document.querySelectorAll(".github");

    smoothScrollButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            const targetElement = document.getElementById("section-6");

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Full-stack Developer.", "Software Developer.","Dreamer."];

document.addEventListener("DOMContentLoaded", function() {
    const el = document.getElementById("typewriter");
    
    let sleepTime = 50;
    
    let curPhraseIndex = 0;
    
    const writeLoop = async () => {
        while (true) {
            let curWord = phrases[curPhraseIndex];

            for (let i = 0; i < curWord.length; i++) {
                el.innerText = curWord.substring(0, i + 1);
                await sleep(sleepTime);
            }

            await sleep(sleepTime * 10);

            for (let i = curWord.length; i > 0; i--) {
                el.innerText = curWord.substring(0, i - 1);
                await sleep(sleepTime);
            }

            await sleep(sleepTime * 5);

            if (curPhraseIndex === phrases.length - 1) {
                curPhraseIndex = 0;
            } else {
                curPhraseIndex++;
            }
        }
    };
    writeLoop();
});

document.addEventListener ("DOMContentLoaded", function() {
    var swiper = new Swiper('.slide-content', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 25,
        centerSlide: 'true',
        loop: true,
        fade: 'true',
        grabCursor: 'true',

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },

    });
});
  

document.addEventListener("DOMContentLoaded", function() {
    var c = document.getElementById('c');
    var d = document.getElementById('section-6');
    ctx = c.getContext('2d'),
    W = c.width = d.offsetWidth;
    H = c.height = d.offsetHeight;
    font_size =  18;
    columns = W / font_size;
    drops = [];
    chinese = '0123456789ABCDEF';

    chinese = chinese.split('');
    
    for (var x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0.5, 0.05)';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#893dd0';
        ctx.font = font_size + 'px monospace';
        for (var i = 0; i < drops.length; i++) {
            var text = chinese[Math.floor(Math.random() * chinese.length)];
            ctx.fillText(text, i * font_size, drops[i] * font_size);
            if (drops[i] * font_size > H && Math.random() > 0.950) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 33);
});
