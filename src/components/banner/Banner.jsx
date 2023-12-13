import React from "react";
import './banner.css'
import bannerimg from '../../assets/images/e5415db6-9ee6-4974-a955-851179c973a2_bannerball.avif'
import DownloadBtn from "../download-btn/DownloadBtn";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="banner-content">
                <h1>Ultimate Housie Experience</h1>
                <p>
                  Housie Mania: The Tambola Extravaganza You've Been Waiting
                  For!
                </p>
                <DownloadBtn></DownloadBtn>
              </div>
            </div>
            <div className="col-sm-6">
                <div className="banner-img">
                    <img src={bannerimg} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
