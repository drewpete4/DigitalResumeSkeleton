import avatar from './images/profile.jpeg';

const ResumeData = {
  myName: 'Andrew Peterson',

  avatar: avatar,

  tabLabels: ['Skills', 'Experience'],

  profileSummary: `If your company is looking for a fun loving, dedicated
  developer than I'm your man. I've worked on websites, video games, and 
  even 3D rendering! I love coding, modeling, and animation and am always 
  excited to play with new tech or start a new project. Also not to brag 
  but im a dad joke and taco connoisseur. so what are you waiting for lets 
  get our newest project started!`,

  buttonList: [
    {
      label: 'Github',
      link: 'https://github.com/drewpete4'
    },
    {
      label: 'Greenfields',
      link: 'http://www.greenfields.io/'
    },
    {
      label: 'Utah JCC',
      link: 'https://jcc.utah.gov/'
    }
  ],

  skillsList: [
    'JavaScript',
    'HTML5',
    'CSS',
    'Git',
    'Node.js',
    'Express',
    'JQuery',
    'NoSQL',
    'React',
    'Firebase',
    'Blender',
    'Unity',
    'Lumberyard'
  ],

  experienceList: [
    {
      company: '<Company 1>',
      projects: [
        {
          id: 1,
          value: `<Project 1>`
        },
        {
          id: 2,
          value: `<Project 2>`
        },
        {
          id: 3,
          value: `<Project 3>`
        }
      ]
    },
    {
      company: '<Company 2>',
      projects: [
        {
          id: 1,
          value: `<Project 1>`
        },
        {
          id: 2,
          value: `<Project 2>`
        },
      ] // end projects array
    } // end project object
  ] // end experienceList array
} // end ResumeData

export default ResumeData;