import React, { useState } from 'react';
import { NavLink as Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import MouseSpotlight from './mouse';
import linkedinLogo from './link.png';
import githubLogo from './github.png';


const NavLink = styled(Link)`
color: #ABB7D8;
&.active {
	color: #63ABD1;
    text-decoration: none;
}
text-decoration: none;

&:hover {
    color: #51D0DB;
    text-decoration: none;
  }

`;

const HomeContainer = styled.div`
  color: white;
  display: flex;
  background-color: #131d37;
  opacity: 1;
  position: relative;
  border: 15px solid #241d28;
  /*animation: borderAnimation 5s infinite;  Apply animation to the border */


  /* Define the keyframe animation 
  @keyframes borderAnimation {
    0% {
      border: 15px solid #241d28; /* Start border size and color */
    }
    25% {
      border: 15px solid #392d3e; /* Midpoint border size and color */
    }
    50% {
        border: 15px solid #43354a; /* Midpoint border size and color */
      }
    75% {
    border: 15px solid #584660; /* Midpoint border size and color */
    }
    100% {
      border: 15px solid #6d5677; /* End border size and color */
    }
  }*/

  
`;

const LinkedInLink = styled.a`
  color: white;
  text-decoration: none; /* Remove underlines */
`;

const LinkedInLogo = styled.img`
  width: 24px; /* Adjust the width to fit your design */
  padding: 6px;
  color: white;
  margin-top: 5px;
`;



const Section = styled.div`
/*display: flex;
flex-direction: column;
align-items: flex-start; /* Vertically align items */
width: 100%; /* Ensure it spans the full width */

@media (max-width: 1000px) { /* Adjust breakpoint as needed */
  flex-direction: column; /* Stack items vertically on smaller screens */
  align-items: flex-start;
}*/

`;



const Header = styled.h2`
  margin: 0;
  color: rgb(255, 255, 255, 0.7);
`;

const Header2= styled.h2`
  margin-top: 30px;
  color: rgb(255, 255, 255, 0.7);
  margin-bottom: 0px;
`;

const Paragraph = styled.p`
  padding-top: 10px;
  font-size: 16px;
  margin-top: 0;

  padding-bottom: 0px;
  color: #7683A7;
  line-height: 2.0; /* Set line spacing to 1.5 */
  
`;


const Text = styled.p`
  padding-top: 10px;
  font-size: 17px;
  margin-top: 0;
  margin-bottom: 0px;
  padding-bottom: 0px;
  color: #7683A7;
  line-height: 2.0; /* Set line spacing to 1.5 */
  
`;

const Bio = styled.h3`
  padding-top: 5px;
  font-size: 20px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  color: rgb(255, 255, 255, 0.7);
  
`;

const Buttons = styled.div` // Changed from styled.p to styled.div for semantic correctness
    display: flex;
    flex-direction: column;
    justify-content: space-between; // Correct property name
    width: 30%;
    margin-top: 50px;
`;

const Button = styled.button`
    color: #7683A7;
    font-size: 17px;
    border: none;
    padding: 5px;
    background-color: rgba(228, 192, 210, 0);
    text-align: left; // Align text to the left
    transition: transform 0.2s; // Smooth transition for hover effect
    transform-origin: left; // Set the origin of transformation to the left

    &:hover {
        transform: scale(1.3); // Grow the button on hover
        color: #51D0DB;

        
    }

    &:not(:last-child) {
        margin-bottom: 10px; // Add space between buttons
    }
`;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Align items to the start */
  align-items: flex-start; /* Vertically align items */
  margin-top: 50px;
  padding-left: 60px; /* Adjusted padding-left instead of margin-left */
  width: 100%; /* Ensure it spans the full width */
  margin-left: 7%;

  @media (max-width: 1000px) { /* Adjust breakpoint as needed */
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: flex-start;
    padding-left: 0;
    margin-left: 5%; /* Adjust margin for smaller screens */
  }
`;

const Name = styled.h1`
  font-size: 48px; /* Larger font size for the name */
  white-space: nowrap; /* Keep name on one line */
  padding-right: 10%; /* Right padding is 10% of the container width */
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 20px; /* Padding on the right */
  flex-grow: 1; /* Let the bio container grow */
  margin-top: 50px;
  margin-left: 200px;
  margin-right: 10%;
  margin-bottom: 50px;

  @media (max-width: 1000px) {
    margin-left: 0; /* Adjust margin for smaller screens */
    margin-top: 100px; /* Space between name and bio on smaller screens */
    margin-right: 50px;

  }
`;

const ProjectBox = styled.div`
  border: 1px solid rgb(255, 255, 255, 0.3);
  padding: 10px;
  padding-left: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 10px;
  width: 500px; // Adjust as needed
  height: 100; // Adjust as needed
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1); // Grow the button on hover
    background-color: rgb(255, 255, 255, 0.05);
}
`;

const Description = styled.p `
    padding-top: 0px;
    font-size: 13px;
    margin-top: 0;
    color: #7683A7;
    margin-bottom: 0px;
`;

const Title = styled.p `
    margin: 0px;
    color: rgba(255, 255, 255, 0.8);
`;

const Date = styled.p `
    margin: 0px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
`;

const Project = ({ title, job, date, description }) => (
  <ProjectBox>
    <Paragraph>
        <Title><strong>{title}</strong> - <i>{job}</i></Title>
        <Date><i>{date}</i></Date>
        <Description>{description}</Description>
    </Paragraph>
  </ProjectBox>
);

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start;
  margin-left: 0px;
`;


// ... Rest of the Home component

const Home = () => {
    // Define the state for the current section
    const [currentSection, setCurrentSection] = useState('about');
  
    // Function to update the current section
    const handleSectionChange = (section) => {
      setCurrentSection(section);
    };
  
    // Render different content based on the current section
    const renderBioContent = () => {
      switch (currentSection) {
        case 'projects':
          return  (
            <ProjectsContainer>
              <Project 
                title="GrooveVault" 
                job="Northwestern University"
                description="A cloud-based music application using AWS services for a serverless architecture, playlist and user data management, file storage, and client-side features for personalized playlist and song streaming."
              />
                 <Project 
                title="CommonApp Data Transfer" 
                job="P33"
                description="A Python program automating data extraction from P33's Airtable database and CommonApp, a website for startup founders, integrating a streamlined process to merge extracted data into a singular database."
              />
              <Project 
                title="McGuireWoods Search Engine" 
                job="Northwestern University"
                description="Developed a specialized search engine for McGuireWoods LLP, designed for lawyers to extract FDA-related data and insights, and spearheaded the creation of its front-end interface and Flask-based server."
              />
               <Project 
                title="Photo App (Instagram Clone)" 
                job="Northwestern University"
                description="A full-stack photo-sharing web application, with database integration, a web server with user authentication,  user interface almost identical to Instagram, and deployed on Heroku using Flask & SQLAlchemy."
              />
            </ProjectsContainer>
          );


        case 'experiences':
            return  (
                <ProjectsContainer>
                     <Project 
                    title=" Technological Innovations for Inclusive Learning & Teaching Lab" 
                    job="Research Assistant"
                    date="October 2023 - Present"
                    description="Engineering an app using Bluetooth connectivity to a microbit to track athletes' analytics, aiming to unite youth sports and STEM by teaching young students to independently code a microbit."
                  />
                  <Project 
                    title="P33" 
                    job="Founder's Team Intern"
                    date="June 2023 - August 2023"
                    description="At P33, a Chicago-based tech-talent development non-profit, worked on the TechChicago Week Capital Summit for 150 investors and 200 founders and constructed an R/HTML/CSS dashboard showcasing P33's multi-year statistics."
                  />
                  <Project 
                    title="Climate Change Research Group" 
                    job="Research Assistant"
                    date="June 2022 - August 2022"
                    description="Developed Python algorithms modeling future carbon emissions in Chicago if all vehicles shifted to electric, alongside reviewing scientific literature backing the reduction in carbon dioxide emissions through electric vehicle adoption."
                  />
                   <Project 
                    title="American Energy Society" 
                    job="Research Intern"
                    date="December 2021 - May 2022"
                    description="Conducted research spanning over 20 countries, identifying 10-15 universities per country, pinpointing energy-focused research centers, institutes, and labs, while contributing to the Global Energy University Report, utilized by universities, governments, and investors worldwide."
                  />
                </ProjectsContainer>
              );

        default: // 'about'
          return (
            <div>
              <Header>Me in 10 seconds:</Header>

                <Paragraph>
                I am currently in my fourth year at Northwestern University, 
                majoring in Computer Science and Environmental Policy.
                My journey in programming began in 2020, when I developed my inaugural project:
                a Tic-Tac-Toe game, using Python. Since then, I have been amazed by the endless possibilities that come with the ability to code. 
                
                </Paragraph>
                
                <Paragraph>
                Over the past three years at Northwestern, I have been committed to enhancing my programming expertise, with a specific focus on cloud engineering and software design. I am very interetd in AI-driven solutions for renewable energy optimization, waste reduction, and eco-efficient urban planning, aiming to make a contribution towards a greener future.
                </Paragraph>

                <Paragraph>
                When I am not coding or reading about AI, I like to spend my free time sailing, running, playing guitar, or doing anything outdoors. 
                </Paragraph>


            
                <Header2>Me in 10 minutes:</Header2>
               
                     <Paragraph>
                    Checkout my{' '}
                    <NavLink to="/" style={{ fontWeight: 'bold' }}>
                        experiences
                    </NavLink>{' '}
                    or{' '}
                    <NavLink to="/" style={{ fontWeight: 'bold' }}>
                        projects
                    </NavLink>
                    in the menu to the left. 
                    </Paragraph>
                    </div>
                );
      }
    };

  return (
    <HomeContainer>
        {/* <MouseSpotlight /> */}
        <LayoutContainer>
        
        <Section>

        <Name>Annabel Edwards</Name>
        <Bio>Software Engineer & Web Developer</Bio>
        <Text>Norhtwestern Univeristy</Text>
                <LinkedInLink href="https://github.com/annabelge7" target="_blank">
                <LinkedInLogo src={githubLogo} alt="GitHub Logo" />
            </LinkedInLink>
            
            <LinkedInLink href="https://www.linkedin.com/in/annabel-edwards-1302271a5/" target="_blank">
                <LinkedInLogo src={linkedinLogo} alt="LinkedIn Logo" />
            </LinkedInLink>

        <Buttons>
        <Button onClick={() => handleSectionChange('about')}>About</Button>
        <Button onClick={() => handleSectionChange('projects')}>Projects</Button>
        <Button onClick={() => handleSectionChange('experiences')}>Experiences</Button>
        </Buttons>


        </Section>

        
        <BioContainer>
        {renderBioContent()}
      </BioContainer>
      </LayoutContainer>
    </HomeContainer>
  );
};

export default Home;
