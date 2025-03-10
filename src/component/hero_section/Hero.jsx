// import { model } from "mongoose";
import styles from "./Hero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <>
      {" "}
      <div className={`${styles.container} aline-item-center`}>
        <h1 className="text-white text-center"><strong>Venture Boost 3.0 – Empowering Innovation & Startups</strong></h1>
        <h2 className="text-white text-center">A Gateway to Entrepreneurship – Connect, Learn, and Grow!</h2>
       <div className={styles.pictuter}>
       <div className="card" style={{width: "18rem",height: "18rem",backgroundColor: "rgb(136, 133, 179)",paddingLeft:"20px"}}>
          <img src="/ecell_transparent_black.png" className="card-img-top" alt="..." />
        </div>
        <div className="card" style={{width: "18rem",height: "18rem",backgroundColor: "rgb(136, 133, 179)", paddingLeft:"20px"}}>
          <img src="/Incubation.png" className="card-img-top" alt="..." />
        </div>
       </div>

       <div className="d-flex justify-content-center flex-column gap-4 py-4">
       <a href="https://forms.gle/VXSGcsmCT8tRL3nW9" className="d-flex justify-content-center "><button type="button" style={{width:"300px"}} className="btn btn-primary">Register for Expo</button></a>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2oBVj95nSMRjqIngVNGoehV6cWnV18_Gf2drXqQBjTbc92g/viewform?usp=sharing " className="d-flex justify-content-center "><button type="button" style={{width:"300px"}} className="btn btn-primary"> Register For Anubhav Dubey Talk</button></a>

       </div>
      </div>
      
    </>
  );
}

export default Hero;
