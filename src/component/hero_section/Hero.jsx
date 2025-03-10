// Organized in collaboration with Incubation Center IIT Patna & E-Cell IIT Patna

// import { model } from "mongoose";
import styles from "./Hero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <>
      {" "}
      <div className={`${styles.container} aline-item-center`}>
        <div className={styles.pictuter}>
          <div style={{ backgroundColor: "rgb(136, 133, 179)" }}>
            <img
              src="/ecell_transparent_black.png"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div style={{ backgroundColor: "rgb(136, 133, 179)" }}>
            <img src="/Incubation.png" className="card-img-top" alt="..." />
          </div>
        </div>
        <div className={`${styles.container} text-white text-center p-5`}>
          <h1 className="fw-bold">
            🚀 Venture Boost 3.0 – Your Gateway to Innovation & Success!
          </h1>
          <p className=" fs-5  fw-bold">
          <p className="mt-3 fs-5 fw-bold">
  🚀 Organized in collaboration with{" "}
  <span className="text-success">Incubation Center IIT Patna</span> &{" "}
  <span className="text-success">E-Cell IIT Patna</span>
</p>

          </p>
          <p className="fs-5">
            Are you ready to turn your <strong>ideas into reality</strong>? Do
            you want to{" "}
            <strong>
              connect with top entrepreneurs, investors, and industry leaders
            </strong>
            ? If YES, then <strong>Venture Boost 3.0</strong> is where you need
            to be!
          </p>

          <div className="d-flex flex-column align-items-center gap-4 py-4">
            <div className="text-start text-white">
              <h2 className="text-center">🌟 Why Attend?</h2>
              <ul className="fs-5">
                <li>
                  ✅ <strong>Meet Successful Entrepreneurs</strong> – Gain
                  insights from startup veterans
                </li>
                <li>
                  ✅ <strong>Explore the Startup Expo</strong> – Discover
                  groundbreaking innovations
                </li>
                <li>
                  ✅ <strong>Exclusive Networking</strong> – Connect with
                  investors and mentors
                </li>
                <li>
                  ✅ <strong>Anubhav Dubey’s Special Session</strong> – Learn
                  from the Co-Founder of <strong>Chai Sutta Bar</strong>
                </li>
              </ul>
            </div>

            <div className="text-start text-white">
              <h2 className="text-center">🎯 Who Should Join?</h2>
              <ul className="fs-5">
                <li>
                  🎓 <strong>Students & aspiring entrepreneurs</strong> looking
                  to kickstart their journey
                </li>
                <li>
                  🚀 <strong>Startups & businesses</strong> seeking funding and
                  collaboration
                </li>
                <li>
                  💡{" "}
                  <strong>
                    Anyone with a passion for innovation & success
                  </strong>
                </li>
              </ul>
            </div>

            <div className={` ${styles.button_div}`}>
              <a
                href="https://forms.gle/VXSGcsmCT8tRL3nW9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary px-4 py-2 fw-bold">
                  📌 Register for Startup Expo
                </button>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd2oBVj95nSMRjqIngVNGoehV6cWnV18_Gf2drXqQBjTbc92g/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="btn btn-primary px-4 py-2 fw-bold"
                  style={{ width: "267px" }}
                >
                  📌 Session Registration
                </button>
              </a>
            </div>
          </div>

          <p className="mt-4 fs-5">
            🔥 Don't miss this incredible opportunity to be part of the future of innovation! 🚀
          </p>

        
        </div>
      </div>
    </>
  );
}

export default Hero;
