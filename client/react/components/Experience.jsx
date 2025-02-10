import React from "react";
import { Fonts } from "../constants/Font";
import '../styles/Experience.css';

export default function Experience() {
  return (
    <div className="experienceContainer">
      <div className="experienceSection" >
      <h1 className="header" style={Fonts.pageHeader}>My Experience</h1>

      <div className="experience-flex">
        <div className="scrollDiv" style={Fonts.paragraph}>
          <p className="experience-text">
            Before becoming a Software Engineer, my career began with User
            Experience Design. In 2021, I completed a 6-month course through
            eCornell, diving into UXD essentials, from ideation to prototyping.
            However, even before knowing what UX Design was, I had ideas for
            websites and apps. With a business background, I realized that while
            these ideas were exciting, the logistics of starting companies were
            often unfeasible. I began to focus more on the digital experiences
            themselves rather than the business side of things. This shift
            sparked my interest in creative fields, including product design,
            and led me to discover UX Design. <br/> <br/>A TikTok video about UX Design
            caught my attention, and it inspired me to pursue formal training.
            After completing my first passion project, I realized I wanted to
            bring my ideas to life by building them out technically. This
            realization led me to pivot toward software engineering. <br/><br/>This
            journey has been incredibly fulfilling—seeing my creativity come to
            life through technology has been exciting, and I'm constantly
            motivated to learn more and contribute to meaningful projects.
          </p>
        </div>
        </div>
        </div>
        <div className="timeline">
          <h5 className="company">
            McKinsey & Company | <span className="dates">Jan 2024 - Present</span>
          </h5>
          <p>Software Engineering</p>
          <hr />

          <h5 className="company">
            Pluralsight | <span className="dates">Feb 2023 - Jan 2024</span>
          </h5>
          <p>Frontend Development</p>
          <hr />

          <h5 className="company">
            eCornell | <span className="dates">Aug 2021 - Jan 2022</span>
          </h5>
          <p>User Experience Design</p>
          <hr />

          <h5 className="company">Georgia State University</h5>
          <p>Associates in Business Administration</p>
        </div>
      </div>
  );
}