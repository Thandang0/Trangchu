 var curimg = 0;
const sliders = [
    { src: 'assets/img/acquy.png', link: 'https://example.com/page1' },
    { src: 'assets/img/nobody.jpg', link: 'https://example.com/page2' },
    { src: 'assets/img/venom.png', link: 'https://example.com/page3' },
    { src: 'assets/img/codauhaomon.png', link: 'https://example.com/page4' }
];

function doianh() {
    curimg += 1;
    if (curimg >= sliders.length) {
        curimg = 0;
    };
    document.getElementById('img-link').href = sliders[curimg].link;
    document.getElementById('img').src = sliders[curimg].src;
}

setInterval(doianh, 4000);
