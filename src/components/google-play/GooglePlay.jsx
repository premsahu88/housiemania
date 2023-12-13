import React from "react";
import "./google.css";
import housieApp from '../../assets/images/0857ce8d-82a8-4781-b909-ee890e3f080e_qrhousie.avif'
import scannerImg from '../../assets/images/2bbe5fbe-98d4-4f63-8f47-543a951d9471_Googleplay.avif'
import downloadImg from '../../assets/images/df01297b-ec0d-40cf-88df-34292afa18fd_Downloadsc.avif'

const GooglePlay = () => {
  return (
    <>
      <section className="google-play">
        <div className="container">
          <div className="g-play-content">
            <h2>
              AVAILABLE ON
              <span> GOOGLE PLAY</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-7 col-12">
                <div className="app-img">
                    <img src={downloadImg} alt="" />
                </div>
            </div>
            <div className="col-lg-5 col-12">
            <div className="scanner">
                    <img className="google-img" src={scannerImg} alt="" />
                    <img className="g-scanner" src={housieApp} alt="" />
                    <h3>SCAN QR CODE AND DOWNLOAD</h3>
                    <button>DOWNLOAD APP NOW</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GooglePlay;
