// src/data.js

export const dummyData = {
  schoolName: "Springdale Public School",
  logo: "logo.png",
  intro: "Welcome to Springdale Public School, where we nurture young minds for a brighter future.",
  carousel: [
    "Annual Sports Day - Celebrating Excellence in Sports",
    "Science Exhibition - Showcasing Student Innovations",
    "Cultural Fest - Embracing Diversity and Creativity"
  ],
  aboutUs: {
    history: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.",
    vision: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
    mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
    principalMessage: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
    infrastructure: [
      "State-of-the-art science and computer labs",
      "Spacious and well-equipped classrooms",
      "Library with a vast collection of books and digital resources",
      "Sports facilities including a playground, gymnasium, and swimming pool"
    ]
  },
  academics: {
    curriculum: {
      primary: "English, Mathematics, Science, Social Studies, Art, Physical Education",
      secondary: "English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art",
      seniorSecondary: {
        science: "Physics, Chemistry, Biology, Mathematics, Computer Science, English",
        commerce: "Accountancy, Business Studies, Economics, Mathematics, English"
      }
    },
    methodologies: "We use a blend of traditional and modern teaching techniques to cater to different learning styles.",
    resources: "Digital classrooms, interactive learning modules, and access to online educational platforms."
  },
  admissions: {
    process: "Admission forms are available for download. Submit the completed form along with required documents at the school office.",
    criteria: "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.",
    dates: [
      { event: "Admission Form Availability", date: "March 1st" },
      { event: "Last Date for Submission", date: "March 31st" },
      { event: "Entrance Test", date: "April 15th" },
      { event: "Announcement of Results", date: "April 30th" }
    ]
  },
  faculty: [
    { name: "John Doe", position: "Principal", qualifications: "M.Ed", experience: "20 years of experience in educational administration." },
    { name: "Jane Smith", position: "Vice Principal", qualifications: "M.Sc. in Physics", experience: "15 years of teaching experience." },
    { name: "Emily Johnson", position: "English Teacher", qualifications: "M.A. in English", experience: "10 years of teaching experience." },
    { name: "Michael Brown", position: "Mathematics Teacher", qualifications: "M.Sc. in Mathematics", experience: "8 years of teaching experience." },
    { name: "Sophia Davis", position: "Science Teacher", qualifications: "M.Sc. in Chemistry", experience: "12 years of teaching experience." },
    { name: "David Wilson", position: "Computer Science Teacher", qualifications: "B.Tech in Computer Science", experience: "5 years of teaching experience." }
  ],
  students: {
    life: [
      "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club",
      "Literary Society, Environmental Club, Astronomy Club, Coding Club"
    ],
    achievements: [
      "John Smith - National Level Math Olympiad Winner",
      "Sarah Lee - Gold Medalist in State Swimming Championship",
      "Tech Innovators Club - Winners of Inter-School Robotics Competition"
    ],
    council: {
      president: "Amy Parker, Grade 12",
      vicePresident: "Rajiv Mehta, Grade 11",
      secretary: "Lisa Wong, Grade 10"
    }
  },
  gallery: {
    photos: [
      { src: "sports_day.jpg", description: "Students participating in various sports events." },
      { src: "science_exhibition.jpg", description: "Students presenting their science projects." },
      { src: "cultural_fest.jpg", description: "Students performing in the cultural fest." },
      { src: "classroom.jpg", description: "A glimpse of our interactive classrooms." },
      { src: "library.jpg", description: "Students reading and studying in the school library." }
    ],
    videos: [
      { src: "school_tour.mp4", description: "Virtual tour of Springdale Public School." },
      { src: "annual_function.mp4", description: "Highlights from the Annual Function 2023." }
    ]
  },
  contact: {
    address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code",
    phone: "+1 (123) 456-7890",
    email: "info@springdale.edu"
  }
};
