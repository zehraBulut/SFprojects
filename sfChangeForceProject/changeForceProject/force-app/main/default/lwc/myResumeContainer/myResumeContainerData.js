import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import myPhoto from '@salesforce/resourceUrl/myPhoto';
export const PROFILE_IMAGE = myPhoto

export const SOCIAL_LINKS=[


    {
        type:'twitter',
        label:"twitter/bulut_Zehra_Dev",
        link:"https://twitter.com/bulut_Zehra_Dev",
        icon:SOCIAL+'/SOCIAL/twitter.svg'
    },  
    {
        type: "facebook",
        label: "facebook/ZehraBulutDeveloper",
        link: "https://www.facebook.com/ZehraBulutDeveloper/",
        icon: SOCIAL + '/SOCIAL/facebook.svg'
    },
    {
        type: "github",
        label: "github/zehraBulut",
        link: "https://github.com/zehraBulut",
        icon: SOCIAL + '/SOCIAL/github.svg'
    },
    {
        type: "linkedin",
        label: "linkedin.com/in/zehra-bulut",
        link: "https://www.linkedin.com/in/zehra-bulut/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },
    {   type: "trailhead",
        label: "trailblazer/dezgr",
        link:  "https://salesforce.com/trailblazer/dezgr",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
   ]


export const USER_DETAILS={
    NAME:'Zehra Bulut',
    ROLE:'Salesforce Developer',
    EMAIL:'ozgurdestina@gmail.com',
    PHONE:'+90546 1983125'
}

export const CAREER_SUMMARY={
    HEADING:"CAREER SUMMARY",
    DESCRIPTION: "Results-driven IT professional with 3+ years of industry experience, specializing in multitasking and certified as a Salesforce Developer and Administrator. Proven track record in real sales management across diverse companies. Committed to continuous learning, certified in analyzing, designing, and optimizing business processes.Experienced Math teacher for 14 years, contributing to the educational community through seminars, events, and club creation. Seeking to specialize further by actively participating in projects that contribute to personal and professional growth. Known for streamlining processes and fostering a positive environment at every stage" ,
    KEYS_POINTS:[
        "Experienced Mathematics Teacher, Education Coach, and Assistant Principal with a global track record in private schools and courses",
        "Led a Mathematics Club and coordinated social activities. ",
        "Managed a profitable shopping store from 2016 to 2020, achieving a 30% profit upon handover.",
        "In 2021, I prepared an exam preparation Math Question Book. ",
        "Problem Solver || Flexibility || Multitasking Skills || Passionate || CRM Experience   || Strong Work EthicPublic speaking skills || Fast Learner || Hardworking  || Positive || Organizing ||Organizing || Time Management Goal-oriented || Energetic || Highly Self-Responsible || Communication || Analytical Thinking",
     
    ]
}
                
             


export const EXPERIENCE_DATA={
    HEADING: "Work Experience",
    EXPERIENCES: [

          {
            ROLE: "Salesforce Junior Developer",
            COMPANY_NAME: "RemeConsult",
            DURATION: "2021-2023",
            DESCRIPTION:
                "We built a Holiday Village that offers accommodation for individuals and groups and also hosts events such as weddings, concerts, panels, etc....Experienced Salesforce Developer with a proven track record in successfully completing a hotel management system project using Sales Cloud and Salesforce's Unlimited Edition.Managed a diverse team within an Agile environment, contributing to daily stand-ups, sprint planning, and retrospective meetings. Skilled in Git and Bitbucket for version control, I deployed changes through Change Sets and collaborated on REST API integration for website reservations. Proficient in creating Reports and Dashboards, my expertise lies in optimizing business processes and delivering innovative solutions.. ",
          
                TECHNOLOGIES_USED: {
                    HEADING: 'Technologies used',
                    LIST: [
                        "Sales cloud",
                        "Validation rules",
                        "Agile methodology",
                        "Approval processes",
                        "Flow",
                        "Trigger",
                        "HTML",
                        "LWC",
                    ]
                },
            },
    
            {
                ROLE: "Salesforce Developer ",
                COMPANY_NAME: "RemeConsult",
                DURATION: "2022-2023",
                DESCRIPTION:
                    "Its a Salesforce admin project aimed at managing the sales and rental of cars. The project includes a comprehensive database of cars for sale and rent, enabling customers to browse through available vehicles and make a selection based on their preferences.. ",
                
                TECHNOLOGIES_USED: {
                    HEADING: 'Technologies used',
                    LIST: [
                        "Deployment with change set",
                        "Agile methodology",
                        "Validation",
                        "Trigger",
                        "Flow",
                        "Unit Test class",
                        "SOQL",
                        "LWC",
                    ]
                }
            },
    
              { 
                ROLE: "Salesforce Developer",
                COMPANY_NAME: "Project Force Hub",
                DURATION: "2023-2024",
                DESCRIPTION:
                    "Accomplished the seamless integration of an educational website into Salesforce, ensuring optimal data flow and system efficiency ",
                DESCRIPTION_POINTS: [
                    " Developed robust Apex classes for handling contact and course updates with a focus on best coding practices. Implemented user-friendly buttons using Flow and established errorLogs for effective debugging. Utilized custom meta data for personalized email campaigns, enhancing user engagement. Employed Lightning Web Components (LWC) to visually enhance profiles and dynamically manage page fields.   r.",
                    "Created customizable dynamic panels on contact pages through Flow Screen for enhanced user interaction.",
                    "Innovated with a 'Studied Days' field using Apex and LWC for efficient monthly progress tracking.",
                    "Introduced dynamic progress tracking for students using LWC, Flow, Custom Meta Data, and Apex classes.",
                    "Proven ability to integrate systems seamlessly and optimize user experiences in Salesforce environments, combining technical expertise with creative solutions.",
                ],
                TECHNOLOGIES_USED: {
                    HEADING: 'Technologies used',
                    LIST: [
                        "Apex Programming",
                        "Custom Meta Data",
                        "Flow",
                        "HTML",
                        "LWC",
                        "Javascript",
                        "CSS",
                        "Integration",
                        "Rest-API",
                        "Visual Force",
                        "API Log -Error Logs",
                    
                    ]
                }
            },
    
            


    
          {
                ROLE: "Salesforce Developer ",
                COMPANY_NAME: "CALINTECH",
                DURATION: "2022-2023",
                DESCRIPTION:
                    "Its a Salesforce admin project aimed at managing the sales and rental of cars. The project includes a comprehensive database of cars for sale and rent, enabling customers to browse through available vehicles and make a selection based on their preferences.. ",
                
                TECHNOLOGIES_USED: {
                    HEADING: 'Technologies used',
                    LIST: [
                        "Deployment with change set",
                        "Agile methodology",
                        "Validation",
                        "Trigger",
                        "Flow",
                        "Unit Test class",
                        "SOQL",
                        "LWC",
                    ]
                }
            },


         


             ]
       }
        




    export const EDUCATION_DATA={
        ICON: SOCIAL + '/SOCIAL/education.svg',
        HEADING: "EDUCATION",
        LIST:[
            {
                NAME: " Bachelor in Mathematics Teaching ",
                UNIVERSITY_NAME: "J.B.International University Mathematics Faculty/Teacher ",
                DURATION: "2002-2007",
            }
         
        ]
    }
    

    
    export const CERTIFICATION_DATA={
        ICON: SOCIAL + '/SOCIAL/certification.svg',
        HEADING: "CERTIFICATIONS",
        LIST: [
            {
                NAME: "Salesforce Administrator",
            },
            {
                NAME: "Salesforce Developer 1",
            },
            {
                NAME: "COPADO Certified  Fundamentals  I and II  MP",
            },
            {
                NAME: "Sololearn  HTML & JS & CSS  & JAVA",
            },
            {
                NAME: "Education Coaching Certificate",
            },
            {
                NAME: "Russian-Computer Language Certified",
            }
        ]
    }
    
    export const LANGUAGES_DATA={
        HEADING: "LANGUAGES",
        LIST: [
            {
                NAME: "English",
                LEVEL: "Intermediate",
            },
            {
                NAME: "Russian",
                LEVEL: "Intermediate",
            },
            {
                NAME: "Turkish",
                LEVEL: "Native",
            },
        ],
    }
    
    export const SKILLS_DATA ={
        HEADING: "SKILLS & TOOLS",
        SKILLS:[
            
           {
            HEADING: "DEVELOPER",
            SKILLS_LIST: [
                    { NAME: "Apex Programming", LEVEL: "85" },
                    { NAME: "Validation Rules", LEVEL: "80" },
                    { NAME: "Flow", LEVEL: "85" },
                    { NAME: "LWC", LEVEL: "80" },
                    { NAME: "JavaScript", LEVEL: "80" },
                    { NAME: "HTML", LEVEL: "85" },                
                    { NAME: "Meta Data", LEVEL: "95" },
                    { NAME: "Integration", LEVEL: "80" },
                    { NAME: "Data Import Loader", LEVEL: "85" },
                    { NAME: " SOQL-SOSL ", LEVEL: "85" },
                    { NAME: "JavaScript ", LEVEL: "85" },
                     
                ],
            }, 
            
        ], 
    
        OTHERS_SKILLS:{
            HEADING: 'OTHERS',
            SKILLS_LIST: [
                "Git",
                "Change Set",
                "Rest-API-JSON ",
                "Code Review",
                "JIRA",
                "SANDBOX ",
            ]
         }
      } 
    
    
    export const INTERESTS_DATA = {
        HEADING: "Interests",
        LIST: ["Reading", "Cooking", "Cricket"]
    }