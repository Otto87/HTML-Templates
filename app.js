const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const ils = document.getElementsByClassName('li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        for (var i = 0; i < ils.length; ++i) {
            // do something with items[i], which is a <li> element
            if (ils[i].style.animation) {
                ils[i].style.animation = ``;
            } else
                ils[i].style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.5}s`;
        }



        // Burger
        burger.classList.toggle('toggle');
    });
}


navSlide();
