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
function buildNavItem(section) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.textContent = section.title;
    a.id = `link-${section.id}`;
    a.href = `#${section.id}`;

    return li.appendChild(a);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNavMenu() {
    for (let section of sections) {

        let formatedData = {
            'id': section.id,
            'title': section.querySelector('h2').textContent
        }

        let navItem = buildNavItem(formatedData);

        navMenu.appendChild(navItem);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
buildNavMenu();

// Scroll to section on link click

// Set sections as active