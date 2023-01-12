/*************************************
console.log('Hello world!🧨')

const firstName = 'Abubakar';
const lastName = 'Kehinde';
const mixName = [firstName, lastName];
const yearsOfExp= 4;

console.log(firstName, lastName, yearsOfExp);
console.log ('My name is ' + firstName + ' ' + lastName + ' i have 4 years Of Exp');

// DOM Manipulation ==> Document Object Module
const h1 = document.querySelector('.headingPrimary');

h1.addEventListener('click', function() {
    h1.style.color = 'brown';
    h1.style.backgroundColor = 'cyan';
    h1.style.padding ='32px';
    h1.textContent = mixName;
})
****************************************/

// For footer year

const date = new Date();
const currentYear = date.getFullYear();
console.log(currentYear);
console.log(date);



const footerYear = document.querySelector('.year');
footerYear.textContent = currentYear;

// For Mobile Nav
const btnNavEl = document.querySelector('.btnMobileNav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('navOpen');

})

// How to write a function
// function addNumber (num1, num2) {
//..... return num1 + num2;
// }
// console.log(addNumber(23, 47));
// console.log(addNumber(89, 654)); 

// Adding Scroll Effect on Page
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        // Scrolling to the top
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: 'smooth' });
            headerEl.classList.toggle('navOpen');
        }

    })
})

// For the Sticky Navigation
const sectionHero = document.querySelector('.sectionHero');


//  Observe the Web Page
const obs = new IntersectionObserver(function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === false) {
        document.body.classList.add('sticky');

    }
    if (entry.isIntersecting === true) {
        document.body.classList.remove('sticky');
    };

}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
});
obs.observe(sectionHero);


function multiAddNumber(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4 / num4;
}

console.log(multiAddNumber(10, 10, 10, 5));

function multipro(w, x, y, z) {
    const multiptn = w * x;
    const addtn = y + z;
    const sum = multiptn / addtn;
    console.log(sum);
}
multipro(6, 7, 4, 3);


function reverseSetting(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('kenny'));





function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
