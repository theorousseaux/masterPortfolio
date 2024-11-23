/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Théo's Portfolio",
  description:
    "Data Scientist and problem-solver with a strong technical background and a hands-on approach. Driven by curiosity, I am passionate about leveraging AI to create impactful solutions across domains like healthcare, defense, and sports, where innovation meets real-world application.",
  og: {
    title: "Théo Rousseaux Portfolio",
    type: "website",
    url: "https://overserr.theorsx.fr/",
  },
};

//Home Page
const greeting = {
  title: "Théo Rousseaux",
  logo_name: "ThéoRousseaux",
  // nickname: "ardeos_dozo",
  subTitle:
    "Data Scientist and problem-solver with a strong technical background and a hands-on approach. Driven by curiosity, I am passionate about leveraging AI to create impactful solutions across domains like healthcare, defense, and sports, where innovation meets real-world application.",
  resumeLink:
    "https://drive.google.com/file/d/199d5bCwJDaBjyOcpAcxoqzDQ7TTfQ-yO/view?usp=drive_link",
  githubProfile: "https://github.com/theorousseaux",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/theorousseaux",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/theo-rousseaux",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:theo.rousseaux99@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Expertise in cutting-edge Computer Vision models for object detection, segmentation, and Pose Estimation tasks",
        "⚡ Proficient in NLP with experience in LLMs, Retrieval-Augmented Generation (RAG) systems, and LangChain for advanced document analysis and summarization",
        "⚡ Strong foundation in scientific modeling and classical machine learning, including scikit-learn, MLFlow for model management, and explainability techniques like SHAP",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "devicon:opencv-wordmark",
        },
        {
          skillName: "SciKit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "logos:hugging-face-icon",
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
        },
      ],
    },
    {
      title: "DevOps & Data Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing and deploying scalable applications with Docker and cloud services",
        "⚡ Integrating robust data pipelines using PySpark, FastAPI, and orchestration tools",
        "⚡ Automating workflows and server management with Linux, Bash, and Git for efficient DevOps practices"
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "MLFlow",
          fontAwesomeClassname: "simple-icons:mlflow",
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi-wordmark",
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "simple-icons:apachespark",
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "logos:bash",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "mdi:github",
        }
      ],
    },
    {
      title: "Cloud & AI Deployment",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience deploying machine learning and AI solutions on cloud platforms",
        "⚡ Hosting interactive AI applications with Streamlit for real-time data analysis and clear visualizations",
        "⚡ Managing infrastructure on Azure for scalable and secure data and ML pipelines"
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "devicon:streamlit-wordmark",
        },
        {
          skillName: "seaborn",
          fontAwesomeClassname: "logos:seaborn",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "logos:sqlite",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    //   {
    //     siteName: "LeetCode",
    //     iconifyClassname: "simple-icons:leetcode",
    //     style: {
    //       color: "#F79F1B",
    //     },
    //     profileLink: "https://leetcode.com/layman_brother/",
    //   },
    //   {
    //     siteName: "HackerRank",
    //     iconifyClassname: "simple-icons:hackerrank",
    //     style: {
    //       color: "#2EC866",
    //     },
    //     profileLink: "https://www.hackerrank.com/layman_brother",
    //   },
    //   {
    //     siteName: "Codechef",
    //     iconifyClassname: "simple-icons:codechef",
    //     style: {
    //       color: "#5B4638",
    //     },
    //     profileLink: "https://www.codechef.com/users/ashutosh_1919",
    //   },
    //   {
    //     siteName: "Codeforces",
    //     iconifyClassname: "simple-icons:codeforces",
    //     style: {
    //       color: "#1F8ACB",
    //     },
    //     profileLink: "http://codeforces.com/profile/layman_brother",
    //   },
    //   {
    //     siteName: "Hackerearth",
    //     iconifyClassname: "simple-icons:hackerearth",
    //     style: {
    //       color: "#323754",
    //     },
    //     profileLink: "https://www.hackerearth.com/@ashutosh391",
    //   },
    //   {
    //     siteName: "Kaggle",
    //     iconifyClassname: "simple-icons:kaggle",
    //     style: {
    //       color: "#20BEFF",
    //     },
    //     profileLink: "https://www.kaggle.com/laymanbrother",
    //   },
  ],
};

const degrees = {
  degrees: [
    {
      title: "ISAE Supaero",
      subtitle: "Engineering degree",
      logo_path: "Logo_ISEA-Supaéro.png",
      alt_name: "Supaero engineering degree",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Engineering school specializing in aerospace, I took a wide range of courses including AI, Computer Science, Space Mechanics, Mathematics (optimization, statistics), Fluid Mechanics.",
        "⚡ In my final year, I specialized in Decision Data Science and Artificial Intelligence. In particular, I studied the foundations of macine learning, deep learning, statistics and probability, optimization, cloud computing and DevOps.",
        "⚡ Active in the school's community life, I was in charge of the campus weight room and gave science lessons to underprivileged students.",
      ],
      website_link: "https://www.isae-supaero.fr/en/",
    },
    {
      title: "Universidad Nacional de Córdoba",
      subtitle: "Acapademic exchange",
      logo_path: "unc.png",
      alt_name: "UNC exchange",
      duration: "2022",
      descriptions: [
        "⚡ I spent a semester at the Universidad Nacional de Córdoba in Argentina",
        "⚡ I took courses in AI, economics, International Aviation and Airports Organization, and America Latina geopolitics.",
      ],
      website_link: "https://www.unc.edu.ar/",
    },
    {
      title: "CPGE Lycée Fabert",
      subtitle: "Preparatory classes for Grandes Ecoles",
      logo_path: "fabert.png",
      alt_name: "CPGE",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ Intensive preparatory class for the entrance exams to France's top engineering schools.",
        "⚡ I studied fondamental courses in mathematics, physics, computer science and engineering.",
        "⚡ This brought me rigour and organization, and allowed me to develop my analytical and problem-solving skills.",
      ],
      website_link: "https://www.prepas-fabert.com/cpge/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "BNSSA",
      subtitle: "National Aquatic Safety and Rescue Certificate",
      logo_path: "bnssa.jpg",
      certificate_link:
        "https://www.nageur-sauveteur.com/BNSSA",
      alt_name: "BNSSA",
      color_code: "#345fff",
    },
    {
      title: "PSE 1",
      subtitle: "Team First Aid",
      logo_path: "pse1.png",
      certificate_link:
        "https://www.protection-civile.org/pse1/",
      alt_name: "pse1",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with leading companies, primarily as a ML Engineer, contributing to cutting-edge solutions in fields such as luxury, defense, and finance. Passionate about exploration and learning, I actively engage in personal projects and hackathons, combining my technical expertise with creativity to solve complex challenges. My curiosity and enthusiasm drive me to stay up-to-date with the latest advancements in AI, while my hands-on approach allows me to experiment with new technologies and develop innovative solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "Headmind Partners.",
          company_url: "https://www.headmind.com/",
          logo_path: "headmind_partners_logo.jpg",
          duration: "Sept 2023 - Sept 2024",
          location: "Paris, France",
          description:
            "I have had the opportunity to work on diverse projects across various sectors, demonstrating the versatility of AI applications. In the luxury industry, I spearheaded R&D for an advanced article retrieval solution, utilizing cutting-edge models such as DinoV2, SAM, and YOLO to achieve precise article detection, segmentation, and classification. In the financial sector, I designed and implemented an NLP-driven document classification system for a private equity client, leveraging Azure infrastructure and the Medallion Architecture to enable scalable and efficient data processing. Additionally, for the French Air Force, I developed explainable machine learning models for defense applications, incorporating the SHAP framework to enhance model transparency and facilitate informed decision-making. These experiences underscore my ability to deliver impactful AI solutions tailored to distinct industry needs.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science - End of Studies Internship",
          company: "Headmind Partners.",
          company_url: "https://www.headmind.com/",
          logo_path: "headmind_partners_logo.jpg",
          duration: "March 2023 - Aug 2023",
          location: "Paris, France",
          description:
            "I developped of a Human Pose Estimation tool using deep learning techniques to identify and analyze human movements. I applied this technology to evaluate movements and identify those that are potentially dangerous, thus contributing to injury prevention and safety. I also used HPE to detect falls in videos",
          color: "#000000",
        },
        {
          title: "Study of a constellation of nanosatellites",
          company: "IRAP (Institut de Recherche en Astrophysique et Planétologie)",
          company_url: "https://www.irap.omp.eu/",
          logo_path: "irap.png",
          duration: "March 2021 - Aug 2021",
          location: "Toulouse, France",
          description:
            "In the GAHEC Department (galaxies, high energy astrophysics and cosmology), I worked on a python simulator evaluating the performances of a constellation of nano-satellites, whose goal is the detection and localization of gamma-ray bursts in the universe. I used the LIGO-VIRGO data to cross-reference the results and refine the location.",
          color: "#ee3c26",
        },
        {
          title: "Order picker - work experience",
          company: "Thomé",
          company_url: "https://nicolasaltmayer.wixsite.com/thome-giss-store",
          logo_path: "thome.png",
          duration: "June 2020 - July 2020",
          location: "Metz, France",
          description:
            "During this one-month work placement, I was in charge of receiving and preparing orders for an industrial supplier specializing in cars and trucks.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "Popularizing science - Jaurès au clair de Lune",
          company: "Club MARS ISAE-SUPAERO",
          company_url: "https://mars.bde-supaero.fr/",
          logo_path: "mars.png",
          duration: "June 2019 - April 2020",
          location: "Colomiers, France",
          description:
            "Program to promote equal opportunities and social inclusion in disadvantaged areas. Science popularization sessions in a secondary school, on the conquest of space or science in general. Our group of 4 students set up independent science popularization courses over the course of a year, to give these pupils a taste for science and boost their self-confidence.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

