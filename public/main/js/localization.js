let lang =
    navigator.languages && navigator.languages.length
        ? navigator.languages[0].split('-')[0]
        : navigator.language.split('-')[0];
/**sercice componnet */
const servsContainer = document.getElementById('servicesList');
let servs = [];
const createServ = (servs) => {
    servs.forEach(s => {
        const servContainer = document.createElement('div');
        servContainer.classList = "col-block service-item";
        servContainer.setAttribute('data-aos', 'fade-up');
        servContainer.innerHTML = `<div class="service-icon"><i class="fa fa-shield" aria-hidden="true"></i></div><div class="service-text"><h3 class="h2" langKey="serv">${s[lang].title}</h3><p langKey="serv">${s[lang].txt}</p></div>`;
        servsContainer.appendChild(servContainer)
    })
}
const removeServ = () => {
    const servs = Array.from(document.getElementsByClassName('service-item'));
    servs.forEach(s => {
        s.remove()
    })
}
/** clint component */
// const clintsContainer = document.getElementById('clintsList');
// const slidTrack = document.getElementsByClassName('slick-track')[0];
// console.log(slidTrack);
// const createClints = (imgPath, i) => {
//     const clintLink = document.createElement('a');
//     clintLink.setAttribute('href', '#0');
//     clintLink.setAttribute('title', ' ');
//     clintLink.classList = 'clients__slide slick-slide slick-cloned';
//     clintLink.setAttribute("data-slick-index", i);
//     clintLink.setAttribute('aria-hidden', 'true');
//     clintLink.setAttribute('tabindex', '-1');
//     clintLink.setAttribute('style', 'width: 194px;');
//     const clintImg = document.createElement('img');
//     clintImg.setAttribute('src', imgPath);
//     clintLink.appendChild(clintImg);
//     slidTrack.appendChild(clintLink)
// }

/****** */

let translations = {
    "en": {

        "page_title": "hirasat",
        /**nav */
        "nav_title": 'NAVIGATION',
        "nav_home": "Home",
        "nav_about": "About",
        "nav_serv": "Services",
        "nav_clints": "Clints",
        "nav_contact": "Contact",
        "nav_menu": "Menu",
        /**home */
        "home_title": "Welcome to Hirsat",
        "home_contact_btn": "Contact Us",
        "home_about_btn": "More About US",
        /**about */
        "about_title": 'About Us',
        "about_content": '   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt',
        /**services */
        "serv_title": 'Services',
        "serv_content": ' We are pleased as a company specialized in security guards To offer you the best prices for security guards It is accessible to all, in addition to the availability of safe guards with a degree of efficiency and appropriate training. What distinguishes us from others First, all employees of the security and administrative guards are 100% Saudi. Secondly, our prices are affordable for everyone. Third, we have a number of big clients whose names are known in the business market. Fourth / our branches at the level of the Kingdom of Saudi Arabia. Our motto is (working according to security guards controls) We look forward to cooperating with you out of our keenness to protect your facility to offer you the ',
        /**clints */
        "clints_title": 'Our Clints',
    },

    // Arabic translations

    "ar": {

        "page_title": "حراسات",
        /**nav */
        "nav_title": '',
        "nav_home": "الرئيسية",
        "nav_about": "من نحن",
        "nav_serv": "خدماتنا",
        "nav_clints": "عملائنا",
        "nav_contact": "اتصل بنا",
        "nav_menu": "القائمة",
        /**home */
        "home_title": "مرحبا",
        "home_contact_btn": "اتصل بنا",
        "home_about_btn": "من نحن",
        /**about */
        "about_title": 'من نحن',
        "about_content": 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
        /**services */
        "serv_title": 'خدماتنا',
        "serv_content": 'يسعدنا كشركة متخصصة في الحراسات الامنيةبأن نتقدم لكم بأفضل الأسعار للحراسات الأمنيةوهي في متناول الجميع ، بالإضافة إلى توفر حراس آمن على قدر من الكفاءة والتدريب المناسب .ما يميزنا عن غيرنا /أولاً / جميع منسوبي الحراسات الأمنية والإدارية سعوديين 100 % .ثانياً / أسعارنا في متناول الجميع .ثالثاً / لدينا عدد من العملاء الكبار والمعروفة أسمائهم في سوق الأعمال .رابعاً / فروعنا على مستوى المملكة العربية السعودية .شعارنا هو (العمل وفق ضوابط الحراسات الأمنية)ونتطلع للتعاون معكم من منطلق حرصنا على حماية منشأتكم لنقدم لكم الخدمات التالية / ',
        /**clints */
        "clints_title": 'عملائنا',
    },

};
async function fetchContentAndApplay() {
    fetch('/content')
        .then(res => {
            return res.text();
        })
        .then(data => {
            let content = JSON.parse(data);
            translations.en.about_content = content.about.en;
            translations.ar.about_content = content.about.ar;
            console.log(content)
            let i = 0;
            changeElemintsLang(lang)
            servs = content.servs
            createServ(servs)
        })
        .catch(err => {
            console.log(err)
        })
}
const changeElemintsLang = (lang) => {
    const elmints = Array.from(document.querySelectorAll('[langKey]'));
    elmints.forEach(e => {
        if (e.getAttribute('langKey') !== 'serv') {
            e.innerText = translations[lang.split('-')[0]][e.getAttribute('langKey')];
        }
        if (lang == 'ar') {
            e.classList.add('arb-font');
        }
    })
}
const switcherLang = (t) => {
    changeElemintsLang(t.value)
    if (lang == 'en') {
        lang = 'ar'
    } else {
        lang = 'en'
    }
    removeServ();
    createServ(servs)
}
/****************************************************** */
fetchContentAndApplay()
