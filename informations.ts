export const informations = {
  name: "Zafer Barış",
  title: "Frontend Developer",
  description:
    "Frontend Developer with almost 3 years of experience in React native/React. Extensive knowledge and hands-on experience working on Smartphone Applications. Proven ability to interface with customers, understand product requirements, and design proof of concept prototypes. As a Frontend developer, I love coding and always consider learning new technologies as the first thing in my life.",
  github: "https://www.github.com/izbari",
  linkedin: "https://www.linkedin.com/in/izbaris",
  medium: "https://medium.com/@izbaris",
  photo: "https://avatars.githubusercontent.com/u/73957984?v=4",
  projects: [
    {
      name: "Bookstagram • TÜBITAK support award",
      url: "https://www.github.com/izbari/bookstagram",
      description:
        "The mobile app I developed is a social media platform integrated with a book app that aims to bring book enthusiasts together to chat, share recommendations, and discuss books. Users can write comments about the books they read, share their favorite books with their friends, and discover other users' recommendations. The app also offers features such as creating a reading list, following books, and earning rewards. With this app, socializing with books becomes even more enjoyable and exciting",
      image: require("./public/bookstagram.png"),
      techStack: [
        "React Native / TypeScript",
        "Firebase Products (Firestore, Realtime Database, Storage, Authentication, Cloud Functions, Cloud Messaging)",
        "Redux Toolkit / React Toolkit Query",
        "Tailwind CSS",
        "WebRTC",
      ],
      features: [
        "User interactions (fallow, chat, video call, video call etc.)",
        "Create a reading list",
        "Follow books",
        "Earn rewards",
        "Share recommendations",
        "Discover other users' recommendations",
      ],
    },
    {
      name: "MoviX",
      url: "https://www.github.com/izbari/MoviX",

      description:
        "Project is a movie app that allows users to register and log in to access a wide range of movie titles across multiple categories. Each movie comes with detailed information and, if available, a video preview. Users can recommend movies to external apps, add them to their wish list, and manage their watched and to-watch lists. With this app, movie lovers have a one-stop-shop for discovering, tracking, and sharing their favorite films.",
      image: require("./public/movix.png"),
      features: [
        "Movie recommendations",
        "Movie details",
        "Movie search",
        "Movie categories",
        "Movie comments",
        "Movie trailers",
        "Movie watchlist",
        "Movie favorite list",
      ],
      techStack: [
        "React Native",
        ".Net Core",
        "PostgreSQL",
        "Redux",
        "Reselect",
        "React Navigation",
      ],
    },
    {
      name: "Courier App",
      url: "https://www.github.com/izbari/Kuryep",

      description:
        "My project is a courier app that involves two types of roles - a courier and someone looking to hire a courier. Here's how it works: the courier specifies their vehicle and the areas they serve. Those looking to hire a courier fill out a form and begin searching for suitable couriers. Once a courier is found, they are notified and must accept the request through the app. Upon acceptance, a transaction begins between the courier and the customer, with the customer being able to track the courier's live location through the app's map feature. Communication is available through both voice and chat. Once the courier delivers the requested item and the customer confirms receipt, payment is automatically processed and deposited into the courier's account.",
      image: require("./public/kuryep.png"),
      features: [
        "Live location tracking in all state (foreground, background, killed)",
        "Voice and chat communication",
        "Map integration and routing",
        "Payment processing",
        "Push notifications",
        "User ratings",
        "User reviews",
        "User profile",
      ],
      techStack: [
        "React Native Expo",
        "JavaScipt",
        "Redux / Redux Saga",
        "Firebase Web SDK",
        "Google Maps API / Google Places API / Google Directions API / Google Distance Matrix API / Google Geocoding API / Google Geolocation API / Google Places Autocomplete API",
        ,
        "Firebase Cloud Messaging for Push Notifications",
      ],
    },

    {
      name: "Shop App",
      url: "https://mui-izbaris.netlify.app/",
      image: require("./public/shop.png"),
      description:
        "This application is a simple UI project where I practiced understanding breakpoints and using the MUI library, as well as utilizing styled components.",
      features: ["Responsive Design"],
      techStack: ["React", "TypeScript", "Material UI", "Styled Components"],
    },
    {
      name: "Smart Edu",

      description:
        "Smart Edu is a course-based educational application with three roles: teacher, student, and admin. Students can register to the system and enroll in courses created by teachers or admins, and access the course content. Teachers can create courses and view the list of students enrolled in their courses. Admins have full control over the system and can create, edit, and delete courses, teachers, and students.",
      image: require("./public/smart-edu.png"),
      features: [
        "Course creation",
        "Course enrollment",
        "Course content",
        "Student list",
        "Teacher list",
      ],
      techStack: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS Template Engine",
        "Bootstrap",
        "NodeMailer",
      ],
      url: "https://izbaris-edu.herokuapp.com",
    },
  ],
};
