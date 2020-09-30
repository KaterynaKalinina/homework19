window.addEventListener('mousemove', (e) => {
    const horizontal = document.querySelector('#lineX');
    horizontal.classList.add('horizontal');
    const vertical = document.querySelector('#lineY');
    vertical.classList.add('vertical');
    let x = e.clientX;
    let y = e.clientY;
    horizontal.style.top = `${y}px`;
    vertical.style.left = `${x}px`;

});


function highlight (elem, e) {
    elem.className = 'highlight';

    let clickX = e.clientX;
    let clickY = e.clientY;
    let handle = handleMousemove.bind(this, clickX, clickY, elem);

    window.addEventListener('mousemove', handle);

    window.addEventListener('mouseup', () => {
        elem.removeAttribute('style');
        window.removeEventListener('mousemove', handle);
    });
};

function handleMousemove (x, y, el, e) {
    let moveX = e.clientX;
    let moveY = e.clientY;

    if (moveX > x) {
        el.style.left = `${x}px`;
        el.style.right = `${window.innerWidth - moveX}px`;
    } else {
        el.style.left = `${moveX}px`;
        el.style.right = `${window.innerWidth - x}px`;
    };


    if (moveY > y) {
        el.style.top = `${y}px`;
        el.style.bottom = `${window.innerHeight - moveY}px`;
    } else {
        el.style.top = `${moveY}px`;
        el.style.bottom = `${window.innerHeight - y}px`;
    };

};

window.addEventListener('mousedown', highlight.bind(this, document.querySelector('#highlightedArea')));
