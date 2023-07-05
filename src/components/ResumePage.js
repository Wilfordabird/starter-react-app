import React from 'react';
import './ResumePage.css';
import pdf from './Resume.pdf'; // Ensure the path to your PDF is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import downloadimage from './icon.png'; // Ensure the path to your icon is correct

const ResumePage = () => (
    <div className="resume-page">
        <header>
            <h1 className="header-title"></h1>
            <a href={pdf} download="Emmanuel_Wilford_Resume.pdf" className="download-btn">
                <img src={downloadimage} alt="Download" /> {/* Ensure the path to your icon is correct */}
            </a>
        </header>
        <div className="resume">
            <h1 id="name">Emmanuel Wilford</h1>
            <p className="contact-info">203-343-4232 • ej.wilford@yale.edu • New Haven, CT</p>

            <section>
                <h2>Education</h2>
                <div>
                    <div className="across">
                        <h3>Yale University - <em>B.S. Computer Science,  B.A. Economics</em></h3>
                        <h5>Expected Graduation: May 2024</h5>
                    </div>
                    <div className="description">
                        <p><strong>Relevant Coursework</strong>: Data Structures, Databases, Algorithms, Artificial Intelligence, Econometrics, Software Engineering, Systems Programming & Computer Organization</p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Work Experience</h2>

                <div className="experience">
                    <div className="across">
                        <h3>Software Engineering Intern @ General Motors</h3>
                        <h5>June 2023 - August 2023</h5>
                    </div>
                    <div className="description">
                        <p><strong>Projects: </strong>Engineered a cost-effective proof-of-concept testing tool for automotive software.</p>
                        <p><strong>Contributions: </strong>Leveraged the company framework to build Python feature files for the automotive testing process. Implemented unit testing to ensure the reliability and accuracy of the software.</p>
                        <p><strong>Skills: </strong>Python, Test Engineering, Cost Optimization, Enterprise Software Development, Git</p>
                    </div>
                </div>

                <div className="experience">
                    <div className="across">
                        <h3>Software Engineering Intern @ Yale Institute for Global Health</h3>
                        <h5>June 2022 - June 2023</h5>
                    </div>
                    <div className="description">
                        <p><strong>Projects: </strong>Development of ShotBot for vaccine-related queries, analysis tool for social media campaigns, and a key performance indicator dashboard for educational initiatives.</p>
                        <p><strong>Contributions: </strong>Developed a flu vaccine hesitancy chatbot (ShotBot) using MERN stack. Developed a campaign analysis app with natural language processing abilities for Facebook ad campaigns using Python.</p>
                        <p><strong>Skills: </strong>Python, MERN, Web Development, Data Analysis, NLP</p>
                    </div>
                </div>

                <div className="experience">
                    <div className="across">
                        <h3>Tobin Research Assistant @ Yale School of Management</h3>
                        <h5>Feb 2022 - August 2022</h5>
                    </div>
                    <div className="description">
                        <p><strong>Projects: </strong>Economic agent decision-making research project, focusing on the influence of prestige.</p>
                        <p><strong>Contributions: </strong>Utilized Python and data analysis libraries for data cleaning and trend identification. Scraped data from reliable sources. Delivered professional presentations of significant data findings.</p>
                        <p><strong>Skills: </strong>Python, Data Analysis, Data Cleaning, Web Scraping, Research, Data Presentation</p>
                    </div>
                </div>

                <div className="experience">
                    <div className="across">
                        <h3>Introduction to Databases ULA @ Yale University</h3>
                        <h5>September 2023 -</h5>
                    </div>
                    <div className="description">
                        <p><strong>Expected Contributions: </strong>Assist in teaching and guiding 70 students in an introductory course on database systems. Provide support with course material, troubleshooting and grading.</p>
                    </div>
                </div>

            </section>

            <section>
                <h2>Skills</h2>
                <div className="experience">
                    <div className="description">
                        <p><strong>Languages: </strong>English (Fluent), Spanish (Advanced)</p>
                        <p><strong>Programming: </strong>Python, JavaScript, SQL</p>
                        <p><strong>Web Development: </strong>MERN Stack (MongoDB, Express.js, React, Node.js), HTML/CSS</p>
                        <p><strong>Version Control: </strong>Git</p>
                        <p><strong>Data Analysis: </strong>Data Cleaning, Web Scraping, Data Modeling, Database Design</p>
                    </div>
                </div>
            </section>

        </div>
    </div>
);

export default ResumePage;
