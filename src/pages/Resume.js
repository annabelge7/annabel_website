const Resume = () => {
    // Note: Assuming your project setup serves the 'public' directory at the root URL
    const resumeUrl = process.env.PUBLIC_URL + '/AnnabelEdward_Resume2024.pdf';
  
    return (
      <div>
        <iframe
          src={resumeUrl}
          width="100%"
          height="1200"
          title="Resume"
        >
        </iframe>
      </div>
    );
  };
  
  export default Resume;