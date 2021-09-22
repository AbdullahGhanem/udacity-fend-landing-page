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

function addScrollIntoAnchorEvent(e) {
    let section = e.target.id.replace("link-", "");
    // Scroll to anchor ID using scrollTO event 
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
    a.className = (section.id == 'section1') ? "menu__link active" : "menu__link";

    // Scroll to anchor ID using scrollTO event 
    a.addEventListener('click', addScrollIntoAnchorEvent);

    return li.appendChild(a);
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




/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildNavMenu();

// Scroll to section on link click

// Set sections as active