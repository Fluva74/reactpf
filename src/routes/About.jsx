import React from "react";
import "../../src/styles.css";
import "../routes/about.css";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

function About() {
  return (
    <div className="gradient" id="top">
      <div className="aboutContainer">
        <Topbar />
        <div className="meBox">
          <div className="meLeft">
            <div className="meText">
              <div className="meTitle">A Little About Me...</div>
              <div className="meBody">
                Hello everyone! My name is Mike Finnegan. Most prople call me
                Finn. I just wanted to say hey and give a little background on
                who I am. I am living in McKinney, Texas with my wife and kids.
                We still have 2 at home while our others are grown and on their
                own at this point. I have been an artist my whole life. A
                creative person that loves painting, drawing, drumming, cooking,
                and at the most recent stage in my life...coding. I am a
                self-taught developer and really enjoy the creative side of
                development. Front-end is my path. I love that it has provided
                another outlet for my creativity. I've been going at it for a
                couple years now and am excited to sit at my computer every day
                to see what new language or technology I can learn. I am glad to
                share some of my journey here with you and I appreciate you
                taking the time to learn some about me.{" "}
              </div>
            </div>
          </div>
          <div className="meRight">
            <img
              src="\src\assets\finn1.jpg"
              alt="finnegan"
              className="portrait"
            />
          </div>
        </div>
        <div className="timeBox">
          <div className="itemBox">
            <h3 className="lineItem">Music</h3>
            <p className="itemText">
              Radiohead, Tortoise, Bright Eyes, Bon Iver, Wilco, Too Many To
              List...{" "}
            </p>
            <h3 className="lineItem">Art Medium</h3>
            <p className="itemText">
              Pencil, Pen, Acrylics, Oils, Charcoal, Marker, Spray Paint
            </p>
            <h3 className="lineItem">Film</h3>
            <p className="itemText">
              These are always changing: Pulp Fiction, Goodfellas, Shawshank,
              these of course are the ovious ones, I do have to say I really
              like Bullet Train. We can go on for hours so I'll just stop here.
            </p>
            <h3 className="lineItem">Technology</h3>
            <p className="itemText">
              HTML, CSS, Javascript, React. Of course these are the core of a
              front-End developer. I have really enjoyed getting out of my
              comfort level and playing around with GraphQL, some Sanity, and am
              really enjoying Next 13. This is another long conversation as
              well.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
