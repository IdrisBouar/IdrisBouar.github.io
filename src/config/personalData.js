export const personalData = {
    name: 'Idris Bouargoub',
    title: 'Backend Developer & Computer Science Student',
    avatar: 'https://github.com/IdrisBouar.png',
    location: 'Medenine, Tunisia',
    education: {
        school: 'Higher Institute of Computer Science Medenine',
        degree: 'Computer Science',
        country: 'Tunisia'
    },
    contact: {
        email: 'idris.bouargoub@hotmail.com',
        phone: '+216 92 726 521',
        github: 'https://github.com/IdrisBouar',
        linkedin: 'https://www.linkedin.com/in/idris-bouargoub',
        stackoverflow: 'https://stackoverflow.com/users/20082966/idrisbouar'
    },
    skills: {
        backend: [
            { name: "Spring Boot", level: 90, icon: "fab fa-java" },
            { name: "ASP.NET Core", level: 85, icon: "fab fa-microsoft" },
            { name: "Node.js", level: 80, icon: "fab fa-node-js" },
            { name: "Python", level: 75, icon: "fab fa-python" }
        ],
        frontend: [
            { name: "Vue.js", level: 85, icon: "fab fa-vuejs" },
            { name: "Android", level: 75, icon: "fab fa-android" },
            { name: "React", level: 70, icon: "fab fa-react" }
        ],
        database: [
            { name: "MySQL", level: 90, icon: "fas fa-database" },
            { name: "MongoDB", level: 10, icon: "fas fa-database" },
            { name: "Docker", level: 85, icon: "fab fa-docker" },
            { name: "Git", level: 90, icon: "fab fa-git-alt" }
        ]
    },
    projects: [
        {
            title: "Employed In",
            description: "A Web Platform that offers a new Experience when seeking new job opportunities",
            technologies: ["Spring Boot", "React", "MySQL", "Swagger API"],
            github: "https://github.com/employedin",
            demo: null

        },
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with Spring Boot and Vue.js",
            technologies: ["Spring Boot", "Vue.js", "MySQL", "Docker"],
            github: "https://github.com/IdrisBouar/project1",
            demo: null
        },
        {
            title: "Interns Management System",
            description: "A Windows Desktop Application that allows companies to manage their interns",
            technologies: ["C#", "WPF", "ASP.NET", "WCF", "SQL Server"],

        }
        // Add more projects...
    ],
    techLogos: {
        'Spring Boot': {
            logo: 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg',
            url: 'https://spring.io/'
        },
        'Vue.js': {
            logo: 'https://vuejs.org/images/logo.png',
            url: 'https://vuejs.org/'
        }
        // Add more tech logos...
    }
};
