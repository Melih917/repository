
anime({
    targets: '.mainLogo',
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1500,
    delay: 500
});


anime({
    targets: '.mainUL li',
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: anime.stagger(200, { start: 800 })
});


anime({
    targets: '.mainSection div',
    translateX: [-50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: anime.stagger(200)
});


anime({
    targets: '.awordsIMG',
    scale: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 1500
});


anime({
    targets: '.pcConsoles',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 1800
});


anime({
    targets: '.sustem',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 2000
});


anime({
    targets: 'footer',
    translateY: [20, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: 2200
});
anime({
targets: '.navLI',
translateY: [-20, 0],
opacity: [0, 1],
easing: 'easeInOutQuad',
duration: 1000,
delay: anime.stagger(200)
});


anime({
targets: '.navIMG',
translateY: [-20, 0],
opacity: [0, 1],
easing: 'easeInOutQuad',
duration: 1000,
delay: 200
});


anime({
targets: '.fa-search',
translateY: [-20, 0],
opacity: [0, 1],
easing: 'easeInOutQuad',
duration: 1000,
delay: 400
});