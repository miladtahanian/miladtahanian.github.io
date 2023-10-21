import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Experienced English Instructor and React Native Developer with a passion for education and technology. With over 8 years of teaching experience, I have successfully guided students in improving their English language skills, both in written and spoken forms. My expertise lies in creating engaging lesson plans, incorporating interactive activities, and providing personalized feedback to help learners achieve their language goals.
            </ScrollAnimation>
            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            In addition to my teaching background, I am also a skilled React Native developer. I have a strong understanding of JavaScript and its frameworks, allowing me to build efficient and user-friendly mobile applications. I have successfully delivered projects using React Native, leveraging its cross-platform capabilities to create seamless experiences for both iOS and Android users.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
