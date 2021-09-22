/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const sections = document.querySelectorAll('main section');
const navMenu = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// Scroll to section on link click
function addScrollIntoAnchorEvent(e) {
    let section = e.target.id.replace("link-", "");
    //after search about scrollTO i find this great method  https: //developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    document.querySelector(`#${section}`).scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
    e.preventDefault();
}

function buildNavItem(section) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.textContent = section.title;
    a.id = `link-${section.id}`;
    a.href = `#${section.id}`;
    // add class active and menu__link if first item, and add menu__link if else
    a.className = "menu__link";
    (section.id == 'section1') ? a.classList.add("active"): '';

    // Scroll to anchor ID using scrollTO event 
    a.addEventListener('click', addScrollIntoAnchorEvent);

    return li.appendChild(a);
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNavMenu() {
    const fragment = document.createDocumentFragment();
    for (let section of sections) {

        let formatedData = {
            'id': section.id,
            'title': section.querySelector('h2').textContent
        }

        let navItem = buildNavItem(formatedData);
        fragment.appendChild(navItem);
    }

    navMenu.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport
function setSectionActiveClass() {
    for (let section of sections) {
        let link = document.querySelector(`#link-${section.id}`);
        section.classList.remove("active");
        link.classList.remove("active");

        if (isInViewport(section)) {
            section.classList.add("active");
            link.classList.add("active");
        }
    }
}




/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildNavMenu();

// Set sections as active
window.addEventListener('scroll', function (e) {
    window.requestAnimationFrame(setSectionActiveClass);
});