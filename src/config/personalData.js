export const personalData = {
    developmentMode: false,
    name: 'Idris Bouargoub',
    title: 'Backend Developer & Computer Science Student',
    avatar: 'https://github.com/IdrisBouar.png',
    location: 'Medenine, Tunisia',
    education: [
        {
            school: 'Higher Institute of Computer Science Medenine',
            degree: 'Computer Science',
            country: 'Tunisia',
            period: '2022 - Present'
        },
        {
            school: 'March 2 High School',
            degree: 'Bachelor\'s degree, Experimental Sciences',
            country: 'Tunisia',
            period: '2020 - 2021'
        }
    ],
    contact: {
        email: 'idris.bouargoub@hotmail.com',
        phone: '+216 92 726 521',
        github: 'https://github.com/IdrisBouar',
        linkedin: 'https://www.linkedin.com/in/idris-bouargoub',
        stackoverflow: 'https://stackoverflow.com/users/20082966/idrisbouar'
    },
    skills: {
        backend: {
            name: "Backend Development",
            items: [
                { name: "Spring Boot", level: 90, icon: "fab fa-java" },
                { name: "ASP.NET Core", level: 85, icon: "fab fa-microsoft" },
                { name: "Node.js", level: 40, icon: "fab fa-node-js" },
                { name: "Swagger API", level: 60, icon: "fas fa-book-open" }
            ]
        },
        frontend: {
            name: "Frontend Development",
            items: [
                { name: "WPF", level: 75, icon: "fab fa-windows" },
                { name: "Vue.js", level: 65, icon: "fab fa-vuejs" },
                { name: "Android", level: 55, icon: "fab fa-android" }
            ]
        },
        database: {
            name: "Database & DevOps",
            items: [
                { name: "MySQL", level: 90, icon: "fas fa-database" },
                { name: "MongoDB", level: 35, icon: "fas fa-database" },
                { name: "Docker", level: 35, icon: "fab fa-docker" },
                { name: "Git", level: 90, icon: "fab fa-git-alt" },
                { name: "GitHub", level: 90, icon: "fab fa-github" }
            ]
        }
    },
    projects: [
        {
            title: "Employed In",
            description: "A Web Platform that offers a new Experience when seeking new job opportunities",
            technologies: ["Spring Boot", "React", "MySQL", "Swagger API"],
            github: "https://github.com/employedin",
            demo: null,
            status: "development",
            image: "assets/projects/employed-in.png"
        },
        {
            title: "Interns Management System",
            description: "A Windows Desktop Application that allows companies to manage their interns",
            technologies: ["C#", "WPF", "ASP.NET", "WCF", "SQL Server"],
            status: "development",
            image: "assets/projects/interns.png"
        }
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
