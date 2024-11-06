/* Toggle theme */
const toggleTheme = document.getElementById('toggleTheme');

toggleTheme.addEventListener('click', () => {
    const html = document.querySelector('html');
    html.dataset.theme = html.dataset.theme === 'light' ? 'dark' : 'light';
    
    toggleTheme.classList.toggle('bi-sun');
    toggleTheme.classList.toggle('bi-moon-stars');
})

/* Add courses dynamically */

function addCoursesSection(type, title) {
    return `
    <section class="${type}">
        <h2 class="courses__type" >${title}</h2>
    </section>
    `
}
function addCourse(course, alter_bool) {
    const class_name = alter_bool ? 'course alter' : 'course';
    return `
    <div class="${class_name}">
        <h3 class="course__title" >${course.title}</h3>
            <div class="course__info">
            <img class="course__img" src="assets/images/${course.certificate_num}.png" alt="Certificate ${course.title}">
            <p class="course__description">
               ${course.description}
            </p>
            </div>
    </div>
    `
}

/* Read json file */
/* Contra a adição de classe alter */
let counter = 0;

fetch('/assets/data/courses.json')
    .then(response => response.json())
    .then((json) => {
        for (const [key, value] of Object.entries(json['courses_types'])) {
            document.querySelector('.courses').innerHTML += addCoursesSection(key, value)
            for (let i = 0; i < json[key].length; i++) {
                document.querySelector(`.${key}`).innerHTML += addCourse(json[key][i], counter % 2)
                counter++;
            } 
        }
    })

/* Toggle active menu item */

function toggleMenu(element) {
    document.querySelector('.active').classList.remove('active');
    element.classList.add('active');
}