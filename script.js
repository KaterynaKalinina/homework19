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


const highlight = (e) => {
    const highlightedArea = document.querySelector('#highlightedArea');
    highlightedArea.className = 'highlight';

    let clickX = e.clientX;
    let clickY = e.clientY;

    const mousemoveProcess = (e) => {
        let moveX = e.clientX;
        let moveY = e.clientY;

        if (moveX > clickX) {
            highlightedArea.style.left = `${clickX}px`;
            highlightedArea.style.right = `${window.innerWidth - moveX}px`;
        } else {
            highlightedArea.style.left = `${moveX}px`;
            highlightedArea.style.right = `${window.innerWidth - clickX}px`;
        };


        if (moveY > clickY) {
            highlightedArea.style.top = `${clickY}px`;
            highlightedArea.style.bottom = `${window.innerHeight - moveY}px`;
        } else {
            highlightedArea.style.top = `${moveY}px`;
            highlightedArea.style.bottom = `${window.innerHeight - clickY}px`;
        };

    };

    window.addEventListener('mousemove', mousemoveProcess);

    window.addEventListener('mouseup', () => {
        highlightedArea.removeAttribute('style');
        window.removeEventListener('mousemove', mousemoveProcess);
    });
};

window.addEventListener('mousedown', highlight);
