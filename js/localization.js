let lang = 'en';
const translations = {

    // English translations

    "en": {

        "page-title": "hirasat",
        /**nav */
        "nav-title": 'NAVIGATION',
        "nav-home": "Home",
        "nav-about": "About",
        "nav-serv": "Services",
        "nav-clints": "Clints",
        "nav-contact": "Contact",
        "nav-menu": "Menu",
        /**home */
        "home-title": "Welcome to Hirsat",
        "home-contact-btn": "Contact Us",
        "home-about-btn": "More About US",
        /**about */
        "about-title": 'About Us',
        "about-content": '   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt',
        /**services */
        "serv-title": 'Services',
        "serv1-title": 'Lorem ipsum dolor sit amet',
        "serv2-title": 'Lorem ipsum dolor sit amet',
        "serv3-title": 'Lorem ipsum dolor sit amet',
        "serv4-title": 'Lorem ipsum dolor sit amet',
        "serv5-title": 'Lorem ipsum dolor sit amet',
        "serv6-title": 'Lorem ipsum dolor sit amet',
        "serv-content": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt',
        /**clints */
        "clints-title": 'Our Clints',
    },

    // Arabic translations

    "ar": {

        "page-title": "حراسات",
        /**nav */
        "nav-title": '',
        "nav-home": "الرئيسية",
        "nav-about": "من نحن",
        "nav-serv": "خدماتنا",
        "nav-clints": "عملائنا",
        "nav-contact": "اتصل بنا",
        "nav-menu": "القائمة",
        /**home */
        "home-title": "مرحبا",
        "home-contact-btn": "اتصل بنا",
        "home-about-btn": "من نحن",
        /**about */
        "about-title": 'من نحن',
        "about-content": 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
        /**services */
        "serv-title": 'خدماتنا',
        "serv1-title": 'هذا النص هو مثال',
        "serv2-title": 'هذا النص هو مثال',
        "serv3-title": 'هذا النص هو مثال',
        "serv4-title": 'هذا النص هو مثال',
        "serv5-title": 'هذا النص هو مثال',
        "serv6-title": 'هذا النص هو مثال',
        "serv-content": 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
        /**clints */
        "clints-title": 'عملائنا',
    },

};

// When the page content is ready...

document.addEventListener("DOMContentLoaded", () => {
    changeElemintsLang(lang)
});
const changeElemintsLang = (lang) => {
    const elmints = Array.from(document.querySelectorAll('[langKey]'));
    elmints.forEach(e => {
        e.innerText = translations[lang][e.getAttribute('langKey')];
        if (lang == 'ar') {
            e.classList.add('arb-font');
        }
    })
}
const switcherLang = (t) => {
    changeElemintsLang(t.value)
}