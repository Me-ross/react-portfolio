
import quicklyRecipe from './Images/Quickly-Recipes.jpg';
import ceecees from './Images/CeeceesSalon.jpg';
import socialNetwork from './Images/SocialNetwork.jpg'

const projectList= [
  {
    id: 1,
    name: "Quickly Recipe & Drink Finder",
    imgPath: quicklyRecipe,
    alt: "quickly recipe website",
    description: "Find recipes based on the ingredients you have on hand paired with the perfect drink",
    techUsed: ["JavaScript", "CSS", "Bootstrap", "Server-Side API", "LocalStorage", ],
    deployedAt:"https://arama89.github.io/Group-Project/",
    githubLink:"https://github.com/AramA89/Group-Project"
  },
  {
    id: 2,
    name: "CeeCee's Salon",
    imgPath: ceecees,
    alt: "Ceecee hair salon website",
    description:     "HairSalon offering various styling services. User account authenthication, booking services, admin priviledges.",
    techUsed: ["Node", "Express", "SQL", "Sequelize", "bcrypt", "DatePicker", "JavaScript", "CSS", "Bootstrap" ],
    deployedAt:"https://arcane-mesa-34792.herokuapp.com",
    githubLink:"https://github.com/blu3bloodedcod3r/CeeCee-s_Salon"
  },
  {
    id: 3,
    name: "Social Network API",
    imgPath: socialNetwork,
    alt: "Social Network application",
    description: "Social Network API where users can share thoughts, create friends, and react to friends thoughts.",
    techUsed: ["Node", "Express", "Mongoose", "NoSQL", "JavaScript" ],
    deployedAt:"",
    githubLink:"https://github.com/Me-ross/socialNetwork"
  },
]
export default projectList;