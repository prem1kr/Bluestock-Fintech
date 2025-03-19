import React from "react";
import "./Community.css";

function Community() {
  return (
    <div className="community-container">
      <section className="hero-section">
        <div className="hero-text">
          <h2>The Most Active Community of Traders & Investors</h2>
          <p>
            Join now to interact with thousands of active traders and investors
            to learn and share your knowledge on our buzzing forum.
          </p>
          <button className="join-button">Join Our Community</button>
        </div>
        <div className="chat-preview">
          <img src="https://drive.google.com/file/d/15cCU17JuYQjpI3Dc8Ob3bce2PFtyuto3/view?usp=sharing" alt="Chat Preview" />
        </div>
      </section>

      <section className="trading-club">
        <h3>Be a part of trading & investments club</h3>
        <div className="benefits">
          <p>✔ Rich environment for knowledge exchange.</p>
          <p>✔ Stay connected about the latest stock market.</p>
          <p>✔ Access exclusive community events, webinars, and meet-ups.</p>
        </div>
        <div className="club-features">
          <div className="feature">Dynamic Discussions</div>
          <div className="feature">Expert Insights</div>
          <div className="feature">Real-Time Interaction</div>
        </div>
      </section>

      <section className="team-section">
        <h3>Team Bluestock Cares</h3>
        <p>Interact with our members to engage, clarify and contribute.</p>
        <div className="chat-box">
          <img src="/images/expert-chat.png" alt="Expert Chat" />
        </div>
      </section>

      <section className="experts-section">
        <h3>Interact With Our Experts</h3>
        <ul>
          <li>⭕ Get valid suggestions</li>
          <li>⭕ Raise issues or concerns</li>
          <li>⭕ Ask your questions</li>
        </ul>
      </section>
    </div>
  );
}

export default Community;
