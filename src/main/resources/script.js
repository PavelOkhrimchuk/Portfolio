const addProjectBtn = document.getElementById('add-project-btn');
const projectForm = document.getElementById('project-form');
const submitProjectBtn = document.getElementById('submit-project-btn');
const projectsList = document.getElementById('projects-list');

addProjectBtn.addEventListener('click', () => {
    projectForm.style.display = 'block';
    addProjectBtn.style.display = 'none';
});

submitProjectBtn.addEventListener('click', () => {
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;

    if (title && description) {
        const newProject = document.createElement('div');
        newProject.classList.add('project');


        newProject.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
        `;

        projectsList.appendChild(newProject);


        document.getElementById('project-title').value = '';
        document.getElementById('project-description').value = '';


        projectForm.style.display = 'none';
        addProjectBtn.style.display = 'block';
    } else {
        alert('Пожалуйста, заполните все поля');
    }
});


const addSkillBtn = document.getElementById('add-skill-btn');
const skillForm = document.getElementById('skill-form');
const submitSkillBtn = document.getElementById('submit-skill-btn');
const skillsList = document.getElementById('skills-list');

addSkillBtn.addEventListener('click', () => {
    skillForm.style.display = 'block';
    addSkillBtn.style.display = 'none';
});

submitSkillBtn.addEventListener('click', () => {
    const skillName = document.getElementById('skill-name').value;

    if (skillName) {
        const newSkill = document.createElement('li');
        newSkill.textContent = skillName;

        skillsList.appendChild(newSkill);

        document.getElementById('skill-name').value = '';

        skillForm.style.display = 'none';
        addSkillBtn.style.display = 'block';
    } else {
        alert('Пожалуйста, заполните поле');
    }
});