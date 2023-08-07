import { 
    backEnd, 
    design, 
    frontEnd, 
    team1, 
    team2, 
    team3, 
    team4, 
    works1, 
    works2, 
    works3, 
    works4 
} from "../assets/images";

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

export const services = {

    heading: 'Services',
    provides: [
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
    ]
};

export const ourWorks = {

    heading: 'Our Works',
    body: 'Team collaboration in which team members are experienced \npeople in their fields',
    works: [
        {
            id: '1',
            img: `${works1}`,
            altText: 'works-1'
        },
        {
            id: '2',
            img: `${works2}`,
            altText: 'works-2'
        },
        {
            id: '3',
            img: `${works3}`,
            altText: 'works-3'
        },
        {
            id: '4',
            img: `${works4}`,
            altText: 'works-4'
        }
    ]
};
    
const ourTeam = {

    heading: 'Our Team',
    team: [
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
};