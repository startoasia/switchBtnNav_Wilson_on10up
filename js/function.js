// 開闔
function toggleContent(e) {
    var Content = document.querySelector(`#${e}`);

    if (Content.style.maxHeight) {
        Content.style.maxHeight = null;
    } else {
        Content.style.maxHeight = Content.scrollHeight + "px";
    }
}

// popUP
function popUp(e) {
    let Content = document.querySelector(`#${e}`);
    let Close = Content.querySelector(".closeBox");
    let html = document.documentElement;
    html.style.overflowY = 'hidden';

    Content.classList.add("popUp--active");
    Close.addEventListener("click", () => {
        Content.classList.remove("popUp--active");
        html.style.overflowY = 'scroll';
    });
}

// tick
window.addEventListener('scroll', () => {
    let Tick = document.querySelectorAll('.tickbox');
    let Tick1 = document.querySelector('#tick1');
    var scrollPosition = window.scrollY;
    var targetPosition = Tick1.getBoundingClientRect().top + window.scrollY;


    Tick.forEach((item) => {
        if (scrollPosition > targetPosition - 600) {
            item.classList.add('check')
        } else {
            item.classList.remove('check')
        }
    });
})