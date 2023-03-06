import Lottie from "lottie-react";
//import wellcome from "../../../../public/lotties/wellcome.json";
import "../mainPage.css";

const WellcomeAll = () => {
  return (
    <>
      <div className="wellcome-all">
        <h2
          style={{ color: "#FFA500", fontSize: "3rem", margin: "-0px -20px" }}
        >
          Bienvenidos!
        </h2>
      </div>
      <div className="contact-container">
        <div className="contact-me">
          <h2>Contáctame!</h2>
        </div>
        <a
          className="links"
          target={"_blank"}
          href="https://www.linkedin.com/in/pablocharamello/"
        >
          Mi LinkedIn
        </a>
        <a
          className="links"
          target={"_blank"}
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNxNpCHPMzgKbnbQpZMCwmLjtSKDsvMDjHSZZcNkpHvkRKwXZQzHrwFBhFSzcgZVVpVcBB"
        >
          Mi correo
        </a>
      </div>
    </>
  );
};

export default WellcomeAll;
