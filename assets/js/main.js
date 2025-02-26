/* ----- NAVIGATION BAR FUNCTION ----- */
class Project{
    constructor(id, title, description, link){
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
    }

    // simulation of a database
    static getProjects(){
        return [
            new Project(0, 'Portfolio', "Création de mon portfolio pour présenter mes compétences et mes projets", '#'),
            new Project(1, 'Alba Massage', "Site web pour mettre en avant une entreprise de massage et bien-être à domicile", 'https://alba-massage.shpirt.fr/fr/'),
            new Project(2, 'Setify', "Plateforme d'analyse de playlists spotify pour les DJ, pour permettre de faire des setlists cohérents.", 'https://setify.fr/'),
            new Project(3, 'Shpirt', "Site web pour présenter mon projet musical : Shpirt un artiste venu du net", 'https://shpirt.fr/'),
            new Project(4, 'Chess Game', "C'est un jeu d'échec que j'ai codé en html/css/js comme projet d'étude", 'https://github.com/AntoninRoyer/Chess'),
            new Project(5, 'Les Rochers de Maguelone', "Un site web réalisé pour un accro-branche à villeneuve-les-magelone", 'https://www.les-rochers-de-maguelone.com/'),
            new Project(6, 'Wifi Cracker', "Projet d'étude pour récupérer le mot de passe wifi d'un réseau (but éducatif)", '#'),
            new Project(7, "Outline", "Wiki d'entreprise mis en place avec Outline un notion like open source", 'https://wiki.plugindigital.com/'),
            new Project(8, 'GLPI', "Outil de gestion de parc informatique pour l'entreprise Plug In Digital", 'https://glpi.plugindigital.com/'),
            new Project(9, 'Back Office', 'Outil de back office de Plug In Digital pour réaliser un objectif métier', 'https://bo.plugin.digital/Portal/Home/index'),
            new Project(10, 'Playlist Downloader', 'Outil de téléchargement de playlist spotify pour avoir une copie de ses meilleures playlists', 'https://github.com/AntoninRoyer/spotify-downloader'),
            new Project(11, 'Ansible Peertube', "Automatisation de l'installation d'un serveur peertube avec ansible", 'https://github.com/AntoninRoyer/ansible-peertube'),
        ];
    }

    getProject(id){
        return Project.getProjects().find(project => project.id === id);
    }
}
// insert projects into the DOM
const projectsData = Project.getProjects();
const projectContainer = document.querySelector('#project');
// Supposons que projectContainer soit votre conteneur où vous souhaitez afficher vos projets.
// Assurez-vous d'avoir un conteneur parent avec la classe "columns" pour utiliser Bulma Grid.

// Nettoyage du contenu existant dans projectContainer
projectContainer.innerHTML = '';

// Boucle sur les données des projets
projectsData.forEach(project => {
    // Création d'une colonne Bulma pour chaque projet
    const projectColumn = document.createElement('div');
    projectColumn.classList.add('column'); // Utilisation de Bulma pour définir la largeur de la colonne

    // Contenu du projet à insérer dans la colonne
    // Ajout du contenu du projet à la colonne
    projectColumn.innerHTML = `
        <div class="box" id="project-${project.id}">
            <img src="/assets/images/projects/${project.id}.png" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-btn">View Project</a>
            </div>
        </div>
    `;

    // Ajout de la colonne au conteneur parent
    projectContainer.appendChild(projectColumn);
});
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["DevOps","DSI","Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
});


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Experience Section
const experience = document.querySelector('#experience');
const experienceBtn = document.querySelector('#experience-btn');
// reveal experience section on click
experienceBtn.addEventListener('click', () => {
    if (experience.style.display === 'none') {
        experience.style.display = 'block';
    }
    else {
        experience.style.display = 'none';
    }
});

// Project Section
const projects = document.querySelector('#project');
const projectsBtn = document.querySelector('#project-btn');
// reveal project section on click
projectsBtn.addEventListener('click', () => {
    if (projects.style.display === 'none') {
        projects.style.display = 'flex';
    }
    else {
        projects.style.display = 'none';
    }
});

// Clients Section
const clients = document.querySelector('#client');
const clientsBtn = document.querySelector('#client-btn');
// reveal clients section on click
clientsBtn.addEventListener('click', () => {
    if (clients.style.display === 'none') {
        clients.style.display = 'block';
    }
    else {
        clients.style.display = 'none';
    }
});


