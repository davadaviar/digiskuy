import { backEnd, design, frontEnd, team1, team2, team3, team4 } from "../assets/images";

export const navbar = {
    name: 'Digiskuy',
    cta: 'Get in Touch',
    links: [
        'Home',
        'About Us',
        'Services',
        'Works',
        'Team'
    ]
}

export const hero = {
    heading: 'Next Generation \nDigital Agency',
    body: 'We bring to life the most complex projects, specialize in online \nbooking systems and the creation of aggregator sites'
}

export const aboutUs = {
    heading: 'About Us',
    body: 'Digital agency based on Surabaya that will provide the best \nservice to realize your idea through design and technology for \nyour business growth.'
}

export const services = [
    {
        title: 'Design',
        img: `${design}`,
        altText: 'Design'
    },
    {
        title: 'Front End',
        img: `${frontEnd}`,
        altText: 'Front End'
    },
    {
        title: 'Back End',
        img: `${backEnd}`,
        altText: 'Back End'
    }
];

const ourTeam = [
    {
        role: 'CEO',
        name: 'Dimitri',
        img: `${team1}`
    },
    {
        role: 'Product Designer',
        name: 'Stephan. Jr',
        img: `${team2}`
    },
    {
        role: 'Programmer',
        name: 'Lusenko Larov',
        img: `${team3}`
    },
    {
        role: 'Marketer',
        name: 'Andi Chen',
        img: `${team4}`
    }
]