import React from 'react';

function HowToUse() {
  return (
    <div className="box how-to-use">
      <div className="title">How to Use PhysiLink</div>
      <div className="how-to-use-content-wrapper">
        <div className="how-to-use-text">
          <p className="changeable-font" style={{ margin: 0, lineHeight: '1.4' }}>
            Each month, we feature a physician from a different specialty to answer your questions about their journey and expertise. Ask anything and check back for answers! At month's end, Q&As move to "Previous Doctor" page. <b>Join our newsletter</b> for updates on new doctors and answered questions. To connect with these doctors personally, visit our <b>contact page</b>.
          </p>
        </div>
        <div className="how-to-use-video">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/t5c3KFWqmH4"
              title="How to Use PhysiLink"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToUse;