export const informations = {
  name: "Zafer Barış",
  title: "Senior React Native Developer",
  location: "Antalya, Türkiye",
  email: "zaferrosh@gmail.com",
  portfolio: "https://izbaris.dev",
  description:
    "With almost 5 years of experience in React Native and React, I have worked on a variety of impactful projects, particularly in healthcare, consumer applications, and high-traffic mobile solutions. I specialize in developing scalable, high-performance applications with complex integrations, such as Apple Health, Google Health, and MasterCard payment systems. My expertise extends to creating custom map routes, optimizing location-based services, and implementing advanced iOS features like Live Activity.",
  github: "https://www.github.com/izbari",
  linkedin: "https://www.linkedin.com/in/izbaris",
  medium: "https://medium.com/@izbaris",
  photo: "https://avatars.githubusercontent.com/u/73957984?v=4",
  topSkills: ["FHIR", "Mobile Design", "Front-End Design"],
  languages: ["English (Professional Working)"],
  certifications: [
    "Google Cloud Fundamentals: Core Infrastructure",
    "Git Eğitimi",
    "Data Visualization",
    "Oyunlaştırma 101",
    "Introduction to Machine Learning",
  ],
  honors: ["Fighting UAV Competition"],
  experience: [
    {
      company: "Caretta",
      position: "React Native Developer",
      period: "October 2023 - Present",
      location: "Istanbul, Turkey",
      description:
        "Led the development of applications with complex integrations and high performance. Successfully implemented MasterCard payment integration, iOS native features like Live Activity, and custom map routes for location-based services. Worked on various high-demand projects including social media features, AI chatbots, advanced notification systems, and in-app store functionalities.",
    },
    {
      company: "TÜBİTAK",
      position: "Project Team Lead",
      period: "March 2023 - November 2024",
      location: "2209-A University Students Research Projects Support Program",
      description:
        "Led project team in research and development initiatives under TÜBİTAK's university students research projects support program.",
    },
    {
      company: "ACTIMI",
      position: "React Native Developer",
      period: "May 2022 - October 2023",
      location: "Stuttgart, Baden-Württemberg, Germany",
      description:
        "Worked on several healthcare applications for the German market, including systems for family medicine, early diagnosis in dentistry, and long-term patient monitoring. Played a key role in integrating with Apple Health and Google Health apps and ensuring compliance with European standards by utilizing FHIR resources. Contributed to gaming and amusement park solutions tailored for the German market.",
    },
    {
      company: "Paradise Bilisim",
      position: "Mobile Developer",
      period: "January 2022 - May 2022",
      location: "Turkey",
      description: "Mobile application development and maintenance.",
    },
  ],
  education: [
    {
      institution: "Akdeniz University",
      degree: "Bachelor's degree, Computer Engineering",
      period: "2019 - 2023",
    },
    {
      institution: "Final Koleji",
      period: "September 2014 - June 2018",
    },
  ],
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
