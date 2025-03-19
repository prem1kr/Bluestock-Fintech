import React from "react";
import "./Ipo3.css"; 

const Ipo3 = () => {
  return (
    <div className="ipo-container">
      <section className="ongoing-ipo">
        <h2>Ongoing</h2>
        <p>
          Companies where the IPO investment process is started and will be
          listed soon in the stock market for regular trading.
        </p>
        <div className="ipo-card">
          <h3 className="company-name">Medi Assist Healthcare Services Ltd. IPO</h3>
          <p><strong>PRICE BAND:</strong> Rs 218 - 230</p>
          <p><strong>OPEN:</strong> 2024-01-19</p>
          <p><strong>CLOSE:</strong> 2024-01-23</p>
          <p><strong>ISSUE SIZE:</strong> 640.05 Cr.</p>
          <p><strong>ISSUE TYPE:</strong> <span className="bold">Book Built</span></p>
          <p><strong>LISTING DATE:</strong> 2024-01-29</p>
          <div className="buttons">
            <button className="rhp-btn">RHP</button>
            <button className="drhp-btn">DRHP</button>
          </div>
        </div>
        <button className="view-all">View All</button>
      </section>


      <section className="new-listed">
        <h2>New Listed</h2>
        <p>
          Companies that have been listed recently through an IPO. Find their
          listing gains and returns here.
        </p>
        <div className="ipo-list">
          <div className="ipo-card">
            <h3 className="company-name">Jyoti CNC Automation Ltd.</h3>
            <p><strong>IPO PRICE:</strong> Rs 331</p>
            <p><strong>LISTING PRICE:</strong> Rs 370</p>
            <p><strong>LISTING GAIN:</strong> 11.78%</p>
            <p><strong>LISTING DATE:</strong> 2024-01-16</p>
            <p><strong>CMP:</strong> Rs 455.75</p>
            <p><strong>CURRENT RETURN:</strong> 37.69%</p>
            <div className="buttons">
              <button className="rhp-btn">RHP</button>
              <button className="drhp-btn">DRHP</button>
            </div>
          </div>
          <div className="ipo-card">
            <h3 className="company-name">Innova Captab Ltd.</h3>
            <p><strong>IPO PRICE:</strong> Rs 448</p>
            <p><strong>LISTING PRICE:</strong> Rs 452.1</p>
            <p><strong>LISTING GAIN:</strong> 0.92%</p>
            <p><strong>LISTING DATE:</strong> 2023-12-29</p>
            <p><strong>CMP:</strong> Rs 515</p>
            <p><strong>CURRENT RETURN:</strong> 14.96%</p>
            <div className="buttons">
              <button className="rhp-btn">RHP</button>
              <button className="drhp-btn">DRHP</button>
            </div>
          </div>
          <div className="ipo-card">
            <h3 className="company-name">Azad Engineering Ltd.</h3>
            <p><strong>IPO PRICE:</strong> Rs 524</p>
            <p><strong>LISTING PRICE:</strong> Rs 720</p>
            <p><strong>LISTING GAIN:</strong> 37.4%</p>
            <p><strong>LISTING DATE:</strong> 2023-12-28</p>
            <p><strong>CMP:</strong> Rs 683.25</p>
            <p><strong>CURRENT RETURN:</strong> 26.57%</p>
            <div className="buttons">
              <button className="rhp-btn">RHP</button>
              <button className="drhp-btn">DRHP</button>
            </div>
          </div>
        </div>
        <button className="view-all">View All</button>
      </section>

      <section className="ipo-news-analysis">
        <div className="ipo-news">
          <h3>IPO News</h3>
          <p>Brainbees Solutions files DRHP with SEBI</p>
          <p>22 Dec, 2:58PM</p>
          <p>Gretex Share Broking files DRHP with SEBI</p>
          <p>22 Dec, 2:57PM</p>
        </div>
        <div className="ipo-analysis">
          <h3>IPO Analysis</h3>
          <p>Euphorian Infotech India coming with IPO to raise up to Rs 9.60 crore</p>
          <p>18 Jan, 2:29PM</p>
          <p>EPACK Durable coming with IPO to raise up to Rs 662 crore</p>
          <p>17 Jan, 4:52PM</p>
          <p>Qualitek Labs coming with IPO to raise Rs 19.64 crore</p>
          <p>17 Jan, 3:59PM</p>
        </div>
      </section>
    </div>
  );
};

export default Ipo3;
