function top(selector) {
    // To top---------------------------------------
    const toTop = document.querySelector(selector);
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
            toTop.style.display = "block";
        } else {
            toTop.style.display = "none";
        }
    }

    var tip;
    function up() {
        const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        if(top > 0) {
            window.scrollBy(0,-100);
            tip = setTimeout('up()',20);
        } else clearTimeout(t);
        return false;
    }

    toTop.addEventListener('click', up);
}

export default top;