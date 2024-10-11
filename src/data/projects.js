import bistro from "./../assets/bistro.png";
import blue from "./../assets/blue.png";
import blueBook from "./../assets/blueBook.png";
import budget from "./../assets/budget.png";
import dash from "./../assets/dash.png";
import game from "./../assets/game.png";
import tastebite from "./../assets/tastebite.png";
import vesperr from "./../assets/vesperr.png";
import wasieh from "./../assets/wasieh.png";

const projects = [
  {
    title: "Bistro Food",
    description: "A restaurant website showcasing various food items.",
    image: bistro, // Correct: Direct reference to the image
    demoLink: "https://bistro-food.vercel.app/",
    githubLink: "https://github.com/aliModdd98/Bistro-Food",
    type: "Website",
  },
  {
    title: "Book Management System",
    description: "A book management system to organize and borrow books.",
    image: blue, // Correct
    demoLink: "https://my-books-xi.vercel.app/",
    githubLink: "https://github.com/aliModdd98/myBooks",
    type: "Web App",
  },
  {
    title: "Social Media App",
    description:
      "A social media platform to interact with friends and share content.",
    image: blueBook, // Correct
    demoLink: "https://blue-book-gamma.vercel.app/",
    githubLink: "https://github.com/aliModdd98/Socials-Media-App",
    type: "App",
  },
  {
    title: "Budget Management System",
    description: "A system for tracking and managing personal budgets.",
    image: budget, // Correct
    demoLink: "https://budget-management-system-seven.vercel.app/",
    githubLink: "https://github.com/your-username/budget-management-system",
    type: "Web App",
  },
  {
    title: "Mobile Market Dashboard",
    description: "Dashboard for managing mobile market data.",
    image: dash, // Correct: Should reference 'dash', not 'budget'
    demoLink: "https://mobiles-management-system.vercel.app/dashboard",
    githubLink: "https://github.com/aliModdd98/Budget-Management-System",
    type: "Dashboard",
  },
  {
    title: "Flipping Cards Game",
    description: "A fun flipping cards game to test memory skills.",
    image: game, // Correct
    demoLink: "https://my-game-kohl.vercel.app/",
    githubLink: "https://github.com/aliModdd98/myGame",
    type: "Game",
  },
  {
    title: "Restaurant Website",
    description: "A restaurant website to display the menu and services.",
    image: tastebite, // Correct
    demoLink: "https://tastebite-murex.vercel.app/",
    githubLink: "https://github.com/aliModdd98/Tastebite",
    type: "Website",
  },
  {
    title: "Landing Page",
    description: "A simple landing page for marketing a product.",
    image: vesperr, // Correct
    demoLink: "https://matrix-task.vercel.app/",
    githubLink: "https://github.com/aliModdd98/MatrixTask",
    type: "Website",
  },
  {
    title: "Wasieh Website",
    description: "A personal portfolio website showcasing various projects.",
    image: wasieh, // Correct
    demoLink: "https://wasieh.vercel.app/",
    githubLink: "https://github.com/aliModdd98/Wasieh",
    type: "Website",
  },
];

export default projects;
