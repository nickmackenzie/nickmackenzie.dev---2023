import me from "./avatar.jpeg";

export const name = "Nick MacKenzie";
export const avatar = me;
export const role = "Full Stack Developer"

export const about = () => {
    return (
        <>
            Hey, I'm Nick MacKenzie, a meticulous, driven, and collaborative Full Stack Developer
            with over 12 years of professional experience. I have a passion for problem-solving and
            enjoy working in both team and independent settings.
        </>
    );
};
export const aboutExtended = () => {
    return (
        <>
          
  <p>I'm passionate about finding exciting opportunities to showcase my skills and expertise.</p>
  <p>Currently, I work as a Full Stack Developer at C3-Solutions, specializing in custom application development using <span className="highlight">.NET, C#, JavaScript, MSSQL, NodeJS, and the ZOHO Suite (CRM, Deluge, Flow) </span>. My focus is on creating intuitive user experiences, scalable code, and robust RESTful APIs.</p>
  <p>With a background in hospitality management, I bring a strong work ethic, exceptional organizational skills, and problem-solving abilities to my development projects. I excel in fast-paced environments and have a keen eye for detail.</p>
  <p>I graduated from the General Assembly Software Engineering program, equipping me with essential skills for building modern full-stack web applications. I'm proficient in version control with <span className="highlight">Git and GitHub</span>, enabling effective collaboration within teams. I'm always eager to learn and adapt to stay at the forefront of the ever-evolving software engineering field.</p>
        </>
    );
};
export const bio = () => {
    return (
        <>
            Feel free to explore my website and learn more about my skills, experience, and
            projects. If you have any questions or would like to discuss potential collaborations,
            please don't hesitate to get in touch with me through the provided contact information.
        </>
    );
};
