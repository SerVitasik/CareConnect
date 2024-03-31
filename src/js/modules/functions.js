export function isWebp() {

    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });

}

export function burgerMenu() {
    const iconMenu = document.querySelector('.icon-menu');
    if (iconMenu) {
        const menuBody = document.querySelector('.menu__body');
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('menu-open');
            menuBody.classList.toggle('menu-open');
        });
    }
}

export function tabs() {
    const tabNavItems = document.querySelectorAll('.tabs-deals__button');
    const tabItems = document.querySelectorAll('.item-tabs');

    document.addEventListener("click", function (e) {
        const targetElement = e.target;
        let currentActiveIndex = null;
        let newActiveIndex = null;

        if (targetElement.closest('.tabs-deals__button')) {
            tabNavItems.forEach((tabNavItem, index) => {
                if (tabNavItem.classList.contains('active')) {
                    currentActiveIndex = index;
                    tabNavItem.classList.remove('active');
                }
                if (tabNavItem === targetElement) {
                    newActiveIndex = index;
                }
                // targetElement.classList.add('active');
                // tabNavItem.classList.remove('active');
            });
            // for (let i = 0; i < tabNavItems.length; i++) {
            //     tabNavItems[i].classList.remove('active');
            // }
            targetElement.classList.add('active');
            tabItems[newActiveIndex].classList.add('active');
            tabItems[currentActiveIndex].classList.remove('active');
        }
    });
}
