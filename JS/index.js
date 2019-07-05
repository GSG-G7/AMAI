const home = document.querySelector('section.home');
const about = document.querySelector('section.about');
const team = document.querySelector('section.team');
const contact = document.querySelector('section.contact-us');
const homeBtn = document.querySelector('nav a#home');
const aboutBtn = document.querySelector('nav a#about');
const teamBtn = document.querySelector('nav a#team');
const contactBtn = document.querySelector('nav a#contact-us');
const callBtn = document.querySelector('.home__btn__call');
const logo = document.querySelector(".logo");
homeBtn.addEventListener('click', () => {
    showSection(home);
})
logo.addEventListener('click', () => {
    showSection(home);
})
aboutBtn.addEventListener('click', () => {
    showSection(about);
});
teamBtn.addEventListener('click', () => {
    showSection(team);
});
contactBtn.addEventListener('click', () => {
    showSection(contact);
});

callBtn.addEventListener('click', () => {
    showSection(contact);
});

function showSection(section) {
    home.hidden = true;
    about.hidden = true;
    team.hidden = true;
    contact.hidden = true;
    section.hidden = false;
}