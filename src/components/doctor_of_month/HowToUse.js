import React from 'react';

function HowToUse() {
  return (
    <div className="box how-to-use">
      <div className="how-to-use-content-wrapper">
        <div className="how-to-use-text-column">
          <div className="title-container">
            <div className="how-to-title">How to Use PhysiLink</div>
            <a href="/Newsletter">
            <button className="how-to-use-newsletter-btn">Join the Newsletter for Updates!</button>
            </a>
          </div>
          <div className="how-to-use-text">
            <p className="how-to-use-font" style={{ margin: 0, lineHeight: '1.4' }}>
            Each month, we feature a physician and a resident from a different specialty to answer your questions about their journey and expertise. Ask anything, and check back for their answers! At the end of the month, Q&As are moved to the "Previous Physician/Resident" page.

 <b> Join our newsletter</b> to stay updated on new specialists, answered questions, webinar dates, and more. To connect with these physicians/residents personally, visit our <b>contact page</b>.            </p>
          </div>
        </div>
        <div className="how-to-use-video-column">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/-1slFiAJLfY"
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