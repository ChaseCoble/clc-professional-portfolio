import React from "react";
import TopBar from "../components/topbar/TopBar";
import resumePath from "../helper/documents/ATS_RESUME.pdf";
import aboutPicture from "../helper/images/biography/About.png"



export default function About() {
    return (
        <div className="about-wrapper">
                <TopBar/>
                <div className = "about-me-wrapper">
                    <div className="about-left-column">
                        <div className="about-biography">
                            <h4>Biography</h4>
                            <p>I am a father of four amazing boys; Bentley, Kayden, Eithan and Eli, and the proud husband of the most supportive and loving woman on Earth, Jenny. I am driven and passionate about learning and science in general. I have experimented with coding in Python and HTML for 11 years, and achieved a full education in Full Stack Development in 2023. I have attended some University for Chemisty, leaving due to financial constraints. I am an avid reader and researcher as well as a volunteer tutor for Mathematics and Coding. </p> 
                        </div>
                        <div className="about-education">
                            <h2>Education</h2>
                            <div className="about-education-unit">
                                <h4>Google Certifications</h4>
                                <h6>2023-Now</h6>
                                <p>I am currently pursuing certifications from Google in Advanced Python for Automation, and Kotlin for Android Development</p>
                            </div>
                            <div className="about-education-unit">
                                <h4>Bottega University</h4>
                                <h6>2022-Now</h6>
                                <p>I achieved a Full Stack Certification from Bottega University. This program included ReactJS, Javascript, Python, Flask, MySQL and Redis. I also am pursuing training in React Native and Machine Learning through Bottega</p>
                            </div>
                            <div className = "about-education-unit">
                                <h4>Coursera</h4>
                                <h6>2022</h6>
                                <p>While waiting for Bottega University to accept me, I completed an IT certification through the IBM course on Coursera. This equipped me with a basic understanding of HTML, server behaviour, hardware, and basic networking</p>    
                            </div>
                            <div className = "about-education-unit">
                                <h4>Self Education Period</h4>
                                <h6>2015-2022</h6>
                                <p>While I was unable to continue college due to financial concerns, I continued to pursue education. During this time I completed the Calculus 2 and 3 portion of my textbook, verifying my understanding with exercises. I also continued to read voraciously about world history, new technology trends, and Chemistry.</p>
                            </div>
                            <div className="about-education-unit">
                                <h4>Kansas Wesleyan University</h4>
                                <h6>2014-2015</h6>
                                <p>Progressed towards a Bachelors in Chemistry, including General Chemistry and Trigonometry.</p>
                            </div>
                        </div>
                        <div className="about-additional">
                            <div className = "additional-body">
                                <div className = "about-online-wrapper">
                                    <h2>Links</h2>
                                    <div className="about-online-link">
                                        <a href="https://www.linkedin.com/in/chase-coble-38a218242/">LinkedIn</a>
                                    </div>
                                    <div className="about-online-link">
                                        <a href="https://github.com/ChaseCoble">Github</a>
                                    </div>
                                    <div className = "about-resume-wrapper about-online-link">
                                        <a href={resumePath} download="ChaseCobleResume.pdf" className="menu">
                                            Download Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>        
                    </div>
                    <div className = "about-right-column">
                        <img src={aboutPicture} alt = "ChaseCoble" />
                        <div className = "about-work-wrapper">
                            <div className = "about-work-title-wrapper">Career History</div>
                            <div className = "about-work-item">
                                <h2>Bottega University</h2>
                                <h4>Apprentice Teaching Assistant</h4>
                                <h6>2023 - Now</h6>
                                <p>Teaching Full Stack Development utilizing React JS, Python, SCSS, and Mysql as well as teaching development techniques like avoiding anti-patterns, planning with UML, and interview techniques</p>
                            </div>
                            <div className = "about-work-item">
                                <h2>Self Directed</h2>
                                <h4>Volunteer Tutor</h4>
                                <h6>2022-Now</h6>
                                <p> Assisting various adults complete High School programs, GED programs, and college courses. Current clients are pursuing a High School Diploma and anoter is pursuing College Algebra</p>
                            </div>
                            <div className = "about-work-item">
                                <h2>Rural and Remote</h2>
                                <h4>Volunteer Mentor</h4>
                                <h6>2022-Now</h6>
                                <p>Guiding students through coding coursework including career skills such as collaborative coding, interviewing, self-advocacy, and self care in a remote work setting.</p>
                            </div>
                            <div className = "about-work-item">
                                <h2>1 Vision Aviation</h2>
                                <h4>Parts Room</h4>
                                <h6>2022-2023</h6>
                                <p>Dispensing aviation parts while maintaining a government tracked paper trail and internal inventory database. This includes investigating database discrepancies, modifying the database, and receiving and stocking parts </p>
                            </div>
                            <div className = "about-work-item">
                                <h2>Crestwood Cabinetry</h2>
                                <h4>CNC Operator</h4>
                                <h6>2021-2022</h6>
                                <p> Running a CNC Machine to cut cabinet pieces out of fibreboard or hardwood. Required maintaining computer system and the ability to navigate bugs and errors to preserve production time. Frequent manipulation of CNC file to ensure proper cuts and tracking machine details for performance issues</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}