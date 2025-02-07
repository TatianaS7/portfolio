import React from "react";
import { Fonts } from "../constants/Font";

export default function Experience() {
  return (
    <div style={{ height: "65vh", margin: "60px" }}>
      <h1 style={{ ...styles.flex, ...Fonts.pageHeader }}>My Experience</h1>

      <div style={styles.flex}>
        <div style={Fonts.paragraph}>
          <p>
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
        <div style={styles.timeline}>
          <h5 style={styles.company}>
            McKinsey & Company | <span style={styles.dates}>Jan 2024 - Present</span>
          </h5>
          <p>Software Engineering</p>
          <hr />

          <h5 style={styles.company}>
            Pluralsight | <span style={styles.dates}>Feb 2023 - Jan 2024</span>
          </h5>
          <p>Frontend Development</p>
          <hr />

          <h5 style={styles.company}>
            eCornell | <span style={styles.dates}>Aug 2021 - Jan 2022</span>
          </h5>
          <p>User Experience Design</p>
          <hr />

          <h5 style={styles.company}>Georgia State University</h5>
          <p>Associates in Business Administration</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    justifyContent: "space-between",
  },
  timeline: {
    textTransform: "uppercase",
    borderLeft: "dashed darkgreen 1pt",
    padding: "3em",
    marginLeft: "1em",
    textAlign: "center",
  },
  dates: {
    fontWeight: 300,
    fontSize: "12pt",
  },
  company: {
    fontWeight: "bold",
    fontSize: "15pt",
  },
};
