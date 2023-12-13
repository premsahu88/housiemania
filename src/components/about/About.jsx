import React from "react";
import VideoPlayer from "./VideoPlayer";
import "./about.css";
import DownloadBtn from "../download-btn/DownloadBtn";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about-content">
            <h2>
              ABOUT
              <span> HOUSIE MANIA</span>
            </h2>
            <div className="about-text">
              <p>
                Introducing Housie Mania - Your Ultimate Tambola Housie
                Extravaganza!
              </p>
              <p>
                Get set to embark on an exhilarating journey into the world of
                Tambola Housie like never before. Housie Mania is here to
                redefine your Housie experience, bringing the age-old game into
                the modern era and making it accessible to everyone, anytime,
                anywhere.
              </p>
              <p>
                Experience the ultimate convenience in generating random numbers
                for Bingo or Tambola or Housie with our state-of-the-art and
                user-friendly app! It's the top choice for effortlessly
                generating numbers for Housie or Tambola. Plus, with our app,
                you can even generated tickets , enhancing your Bingo or Tambola
                experience to the fullest. It's incredibly simple to use and
                boasts a stunning design!
              </p>
            </div>
            <div className="video">
              <VideoPlayer></VideoPlayer>
            </div>
            <div className="about-btn">
              <DownloadBtn></DownloadBtn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
