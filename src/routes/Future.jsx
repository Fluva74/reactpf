import React from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import "./future.css";

function Future() {
  return (
    <div className="gradient">
      <div className="futureContainer">
        <Topbar />
        <div className="futureText">
          <h2 className="futureTitle">A Promising Future</h2>
          <p className="futureBody">
            My family and I have been on quite a journey. I have Type 2 Diabetes
            and my health had deteriorated at one point so badly that I needed
            an extended hospital stay and home care for a while. It was during
            this time that we lost everything. The struggles we faced were
            overwhelming and we knew we couldnt handle them all on our own. We
            reached out to local resources and were so blessed to have a few of
            these organizations come through and assist us on getting back on
            our feet. I am grateful for my wife and kids for being able to pull
            together and withstand the hardships we faced during such a dark
            time. Once we got back to a regular routine, my health got better. I
            started on my coding journey and started web development. As my
            skills progressed, I spoke with my wife and we both decided that we
            would do all we could to try and give back to people like those that
            had helped us. She has been involved with many organizations locally
            and provided tetimaony for these organizations, as well as providing
            support and encouragement for others in need. I have established a
            plan to be able to become a freelance developer in the future and
            offer my services to help small-business owners and non-profits. It
            is a joy for me to be able to offer services to those that help
            others and there is no way I could ever give back enough to give
            thanks for what was given to our family, but I'll do my best to try.
          </p>
        </div>
        {/* <div className="futureGoalsBox">
          <div className="tech">
            <div className="goalLeft">
              <img
                src=".\src\assets\code.png"
                alt="code"
                className="futurePic"
              />
            </div>
            <div className="goalRight">Right</div>
          </div>
          <div className="personal">
            <div className="goalLeft">
              <img
                src=".\src\assets\paint.png"
                alt="painting"
                className="futurePic"
              />
            </div>
            <div className="goalRight">Right</div>
          </div>
          <div className="professional">
            <div className="goalLeft">
              <img
                src="./src\assets\meeting.png"
                alt="meeting"
                className="futurePic"
              />
            </div>
            <div className="goalRight">Right</div>
          </div>
          <div className="longTerm">
            <div className="goalLeft">
              <img
                src=".\src\assets\volunteer.png"
                alt="volunteer"
                className="futurePic"
              />
            </div>
            <div className="goalRight">Right</div>
          </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Future;
