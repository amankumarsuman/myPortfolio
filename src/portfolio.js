/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aman's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Aman kumar Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Aman",
  logo_name: "Aman Kumar",
  nickname: "Coder",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/drive/folders/13DHyQtgGQ3dkwx3-3NIJIV_fGfGN-jCt",
  portfolio_repository: "https://github.com/amankumarsuman/myPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/amankumarsuman",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aman-kumar-b683b614b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:amankumar.dev98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  
];

const skills = {
  data: [
    // {
    //   title: "Data Structure",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Different Algorithum",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "ReactJs",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React, Redux, Material-ui",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Material-ui",
          fontAwesomeClassname: "",
          style: {
            color: "#339933",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
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
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/amankumarsuman_1",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "B.Tech. in Electronics & Communication Engineering",
      logo_path: "lpu_logo.png",
      alt_name: "lpu_logo",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Robotics & Automation and Full Stack Development.",
      ],
      website_link: "https://www.lpu.in/",
    },
    {
      title: "Masai School",
      subtitle: "6Months 9-9-6 Program",
      logo_path: "masai_logo1.jpg",
      alt_name: "masai_logo",
      duration: "2021 - 2021",
      descriptions: [
        "⚡ Build More Than 8 Industry Projects With A team of 4 Members",
        "⚡ Learned Industry Approach Of Coding",
      ],
      website_link: "https://masaischool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: ".Net Hiring Challenge",
      subtitle: "- Mr. Sanjay Goyal, Business Head(TimesJob&TechGig)",
      logo_path: "techgig.png",
      certificate_link:
        "https://drive.google.com/file/d/1P2_PTBovZ0Qg8UeVI2wNekETQBcvZiEG/view",
      alt_name: ".nethiring",
      color_code: "#8C151599",
    },
    {
      title: "Senior Mobile Developer Challenge",
      subtitle: "- Mr. Sanjay Goyal, Business Head(TimesJob&TechGig)",
      logo_path: "techgig.png",
      certificate_link:
        "https://drive.google.com/file/d/1P1gqJKVcwgp2UrKV2IczhRYCbv7eataW/view",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Amazon Code Challenge",
      subtitle: "- Mr. Sanjay Goyal, Business Head(TimesJob&TechGig)",
      logo_path: "techgig.png",
      certificate_link:
        "https://drive.google.com/file/d/1PA3Ux4cun76Nd4lNkIfQIPHY3Ov37W5b/view",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "React Hiring Challenge",
      subtitle: "- Mr. Sanjay Goyal, Business Head(TimesJob&TechGig)",
      logo_path: "techgig.png",
      certificate_link:
        "https://drive.google.com/file/d/1PAjRDKVp2IOwasx76lkZIixRabpJeMMj/view",
      alt_name: "react",
      color_code: "#1F70C199",
    },
    {
      title: "Fundamental Of Digital Marketing",
      subtitle: "- Matt Brittin ,President(Google EMEA)",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1cwIBsmN772s_AiVQjc3xzTReDl09wAAg/view",
      alt_name: "GOOGLE",
      color_code: "#D83B0199",
    },
    {
      title: "TechGig Code Gladiator2021(Cognizant)",
      subtitle: "- Mr. Sanjay Goyal, Business Head(TimesJob&TechGig)",
      logo_path: "techgig_cd.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1PF-zXA3sn0OVOt5BFi33HJDzIaMLbWgw/view",
      alt_name: "cogni",
      color_code: "#1F70C199",
    },
    {
      title: "IOT Challenge",
      subtitle: "- IOT Challenge By IIT Bombay&i3India",
      logo_path: "iit_bombay.png",
      certificate_link:
        "https://drive.google.com/file/d/1YZPWCjBxU-T_BfT1oT1AwazoE9_77tx2/view",
      alt_name: "iot",
      color_code: "#0C9D5899",
    },
    {
      title: "Startup India",
      subtitle: "- Upgrad",
      logo_path: "upgrad.jpg",
      certificate_link:
        "https://drive.google.com/file/d/14KYq9Isig7slMku3a1Ad-wXDrqYBeZqD/view",
      alt_name: "startup",
      color_code: "#00000099",
    },
    {
      title: "NSO",
      subtitle: "- National Science Olympied",
      logo_path: "nso.jpg",
      certificate_link:
        "https://drive.google.com/file/d/18Ug4LWc0S9KpBGMF99Rz11bKv5KnawxF/view",
      alt_name: "nso",
      color_code: "#2A73CC",
    },
    {
      title: "5G",
      subtitle: "- Telcocrates",
      logo_path: "telco.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1t18nshED_u59uN2QsISl5-eBR-ZfEqad/view",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Blood Donation",
      subtitle: "- PSBTC",
      logo_path: "blood.png",
      certificate_link:
        "https://drive.google.com/file/d/1h07CeLKeM94CgVFhE99KmQrGWfCYKjFv/view",
      alt_name: "blood",
      color_code: "#FFBB0099",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Software  Developer. I have also worked with some well established companies From USA mostly as Senior Software Developer as well as  Front-End lead. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Software Developer",
          company: "Comtron US",
          company_url: "https://comtronusa.com/",
          logo_path: "comtron_lpu.png",
          duration: "August 2021 - PRESENT",
          location: "Visakhapatnam, A.P.",
          description:
            "I am working on automating healthcare Service. The projects involve automation for process improvements and for significantly enhancing the Health Record (EHR Model). I am currently working as a senior software developer. Our goal is to make Automated system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "CTO",
          company: "SadiBazar",
          company_url: "",
          logo_path: "mainLogo.png",
          duration: "May 2021 - Present",
          location: "Darbhanga, Bihar",
          description:
            "I am a part of a startup as CTO, Where I am leading the tech team",
          color: "#9b1578",
        },
       
      ],
    },
    
      // title: "Internships",
      // experiences: [
      //   {
      //     title: "Data Science Research Intern",
      //     company: "Delhivery Pvt. Ltd.",
      //     company_url: "https://www.delhivery.com/",
      //     logo_path: "delhivery_logo.png",
      //     duration: "May 2019 - Sept 2019",
      //     location: "Gurgaon, Haryana",
      //     description:
      //       "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
      //     color: "#ee3c26",
      //   },
      //   {
      //     title: "Data Science Intern",
      //     company: "Intel Indexer LLC",
      //     company_url:
      //       "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
      //     logo_path: "intel_logo.jpg",
      //     duration: "Nov 2018 - Dec 2018",
      //     location: "Work From Home",
      //     description:
      //       "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
      //     color: "#0071C5",
      //   },
      // ],
    
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://amankumar.hashnode.dev/clone-of-airgarage-website-within-3-day",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Bandihuli,Narsar Post:-Arga, Via:-Baheri, Dist.-Darbhanga, Bihar - 847105",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/25%C2%B056'54.3%22N+86%C2%B003'26.0%22E/@25.9484258,86.0550443,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x39ede9a971c7e92f:0xf72607f86f462ec4!2sBaheri,+Bihar+847105!3b1!8m2!3d25.946579!4d86.0580585!3m5!1s0x0:0xd4663ec5be9e77d3!7e2!8m2!3d25.9484208!4d86.0572332",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8360105386",
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
  contactPageData,
};
