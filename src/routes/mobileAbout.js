import React, {useState} from "react";
import MobileTopBar from "../components/mobileOnly/components/mobileTopBar";
import resumePath from "../helper/documents/ATS_RESUME.pdf";


export default function MobileAbout(){
    const [bioSelected, setBioSelected] = useState("selected");
    const [edSelected, setEdSelected] = useState("unselected");
    const [careerSelected, setCareerSelected] = useState("unselected");
    const [resumeSelected, setResumeSelected] = useState("unselected");
    const [aboutContent, setAboutContent ] = useState("biography");

    function handleTabClick(string){
        switch(string){
            case 'biography':
                setBioSelected("selected");
                setCareerSelected("unselected");
                setEdSelected("unselected");
                setResumeSelected("unselected");
                break;
            case 'education':
                setEdSelected("selected");
                setBioSelected("unselected");
                setResumeSelected("unselected");
                setCareerSelected("unselected");
                break;
            case 'career':
                setCareerSelected("selected");
                setBioSelected("unselected");
                setEdSelected("unselected");
                setResumeSelected("unselected");
                break;
            case 'resume':
                setResumeSelected("selected");
                setBioSelected("unselected");
                setEdSelected("unselected");
                setCareerSelected("unselected");
                break;
            default: console.log("Tab selection error")
        }
        setAboutContent(string);
    }
    function getAboutContent(contentString){
        switch(contentString){
            case 'biography':
                return(
                    <div className="about-biography content-display about-grid">
                        <p className="content-title">Biography</p>
                        <div className="about-biography-content-wrapper about-content-container about-grid">
                            <p>I am a father of four amazing boys; Bentley, Kayden, Eithan and Eli, and the proud husband of the most supportive and loving woman on Earth, Jenny. I am driven and passionate about learning and science in general. I have experimented with coding in Python and HTML for 11 years, and achieved a full education in Full Stack Development in 2023. I have attended some University for Chemisty, leaving due to financial constraints. I am an avid reader and researcher as well as a volunteer tutor for Mathematics and Coding. </p>
                        </div> 
                    </div>
                )
            case 'education':
                return(
                    <div className="about-education content-display">
                        <p className="content-title">Education</p>
                        <div className = "about-education-content-wrapper about-content-container about-grid">
                            <div className="about-education-unit about-grid-item">
                                <h4>Fort Hays State University</h4>
                                <h6>2023-Spring 2025</h6>
                                <p>I am currently 3 years into a Computer Science Bachelor's with a minor in Mathematics. Course work has been elevated, with previous experience waiving out basic Computer Science and Informatics courses. I will be taking my first Master's level class in Fall 2024.</p>
                            </div>
                            <div className="about-education-unit about-grid-item">
                                <h4>Bottega University</h4>
                                <h6>2022-2023</h6>
                                <p>I achieved a Full Stack Certification from Bottega University. This program included ReactJS, Javascript, Python, Flask, and MySQL</p>
                            </div>
                            <div className="about-education-unit about-grid-item">
                                <h4>Coursera</h4>
                                <h6>2022</h6>
                                <p>While waiting for Bottega University to accept me, I completed an IT certification through the IBM course on Coursera. This equipped me with a basic understanding of HTML, server behaviour, hardware, and basic networking</p>    
                            </div>
                            <div className="about-education-unit about-grid-item">
                                <h4>Self Education Period</h4>
                                <h6>2015-2022</h6>
                                <p>While I was unable to continue college due to financial concerns, I continued to pursue education. During this time I completed the Calculus 2 and 3 portion of my textbook, verifying my understanding with exercises. I also continued to read voraciously about world history, new technology trends, and Chemistry.</p>
                            </div>
                            <div className="about-education-unit about-grid-item">
                                <h4>Kansas Wesleyan University</h4>
                                <h6>2014-2015</h6>
                                <p>Progressed towards a Bachelors in Chemistry, including General Chemistry and Trigonometry.</p>
                            </div>
                        </div>
                    </div>  
                )
            case 'career':
                return(
                    <div className = "about-work-wrapper content-display">
                            <p className="content-title">Career History</p>
                            <div className="about-work-content-wrapper about-content-container about-grid">
                                 <div className = "about-work-item about-grid-item">
                                    <h2>Bottega University</h2>
                                    <h4>Apprentice Teaching Assistant</h4>
                                    <h6>2023 - Now</h6>
                                    <p>Teaching Full Stack Development utilizing React JS, Python, SCSS, and Mysql as well as teaching development techniques like avoiding anti-patterns, planning with UML, and interview techniques</p>
                                </div>
                                <div className = "about-work-item about-grid-item">
                                    <h2>Self Directed</h2>
                                    <h4>Volunteer Tutor</h4>
                                    <h6>2022-Now</h6>
                                    <p> Assisting various adults complete High School programs, GED programs, and college courses. Current clients are pursuing a High School Diploma and anoter is pursuing College Algebra</p>
                                </div>
                                <div className = "about-work-item about-grid-item">
                                    <h2>Rural and Remote</h2>
                                    <h4>Volunteer Mentor</h4>
                                    <h6>2022-Now</h6>
                                    <p>Guiding students through coding coursework including career skills such as collaborative coding, interviewing, self-advocacy, and self care in a remote work setting.</p>
                                </div>
                                <div className = "about-work-item about-grid-item">
                                    <h2>1 Vision Aviation</h2>
                                    <h4>Parts Room</h4>
                                    <h6>2022-2023</h6>
                                    <p>Dispensing aviation parts while maintaining a government tracked paper trail and internal inventory database. This includes investigating database discrepancies, modifying the database, and receiving and stocking parts </p>
                                </div>
                                <div className = "about-work-item about-grid-item">
                                    <h2>Crestwood Cabinetry</h2>
                                    <h4>CNC Operator</h4>
                                    <h6>2021-2022</h6>
                                    <p> Running a CNC Machine to cut cabinet pieces out of fibreboard or hardwood. Required maintaining computer system and the ability to navigate bugs and errors to preserve production time. Frequent manipulation of CNC file to ensure proper cuts and tracking machine details for performance issues</p>
                                </div>
                            </div>
                        </div>
                    )
            case 'resume':
                return(
                    <div className="about-additional-wrapper content-display">
                        <p className="content-title">Links</p>
                        <div className = "about-content-container about-links-wrapper about-grid">
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
                )
            default: console.log('Error returning content');
        }
    }
    return(
        <div className="mobile-about-wrapper">
            <MobileTopBar />
            <div className="mobile-about-header binding">
                <p>About Me</p>
            </div>
            <div className="mobile-about-display-wrapper">
                <div className= "mobile-about-content-wrapper">
                    {getAboutContent(aboutContent)}
                </div>
                <div className="mobile-about-tab-wrapper">
                    <div className="mobile-about-tab-helper-1" />
                    <div className={`mobile-about-tab biography-tab clickable ${bioSelected}`} onClick={()=>{handleTabClick('biography')}}>
                        Biography
                    </div>
                    <div className={`mobile-about-tab education-tab clickable ${edSelected}`} onClick={()=>{handleTabClick('education')}}>
                        Education
                    </div>
                    <div className={`mobile-about-tab career-tab clickable ${careerSelected}`} onClick={()=>{handleTabClick('career')}}>
                        Career
                    </div>
                    <div className={`mobile-about-tab resume-tab clickable ${resumeSelected}`} onClick={()=>{handleTabClick('resume')}}>
                        Links
                    </div>
                    <div className="mobile-about-tab-helper-2" />
                </div>

            </div>
        </div>
    )
}