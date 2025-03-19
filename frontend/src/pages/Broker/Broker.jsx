import React from "react";
import "./Broker.css";
import { FaStar, FaStarHalfAlt, FaRegStar, FaUser, FaUsers, FaInfoCircle } from "react-icons/fa";

const brokers = [
  {
    name: "Upstox",
    reviews: "15K",
    accounts: "50.2K",
    logo: "upstox-logo.png",
    rating: 4.5,
    color: "#eef4ff",
  },
  {
    name: "AngelOne",
    reviews: "15K",
    accounts: "50.2K",
    logo: "angelone-logo.png",
    rating: 4.5,
    color: "#fef3c7",
  },
  {
    name: "AngelOne",
    reviews: "15K",
    accounts: "50.2K",
    logo: "angelone-logo.png",
    rating: 4.5,
    color: "#fef3c7",
  },

  {
    name: "AngelOne",
    reviews: "15K",
    accounts: "50.2K",
    logo: "angelone-logo.png",
    rating: 4.5,
    color: "#fef3c7",
  },
];

const Broker = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star-icon" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="star-icon" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-icon" />);
      }
    }
    return stars;
  };

  return (
    <div className="broker-details-container">
      <h1 className="page-title">
        Made <span>to</span>Trade
      </h1>
      {brokers.map((broker, index) => (
        <div
          key={index}
          className="broker-details-card"
          style={{ backgroundColor: broker.color }}
        >
          <div className="broker-info">
            <h2>{broker.name}</h2>
            <div className="rating">{renderStars(broker.rating)}</div>
            <p>
              <FaUser /> {broker.reviews} Reviews
            </p>
            <p>
              <FaUsers /> {broker.accounts} Accounts
            </p>
            <p className="free-account">Open Demat A/c for FREE</p>
            <div className="buttons">
              <button className="open-account">Open A/C 🚀</button>
              <button className="learn-more">
                <a href="/BrokerCompare">Learn More</a></button>
            </div>
          </div>
          <div className="broker-services">
            <p>✅ Equity</p>
            <p>✅ Commodity</p>
            <p>✅ Currency</p>
            <p>✅ Futures</p>
            <p>✅ Options</p>
          </div>
          <div className="broker-charges">
            <p>
              <strong>A/C Opening Charge</strong> <br /> ₹ Rs. 0
            </p>
            <p>
              <strong>Maintenance Charge</strong> <FaInfoCircle /> <br /> ₹300
            </p>
            <p>
              <strong>Delivery Brokerage</strong> <FaInfoCircle /> <br /> ₹20
            </p>
            <p>
              <strong>Intraday Brokerage</strong> <FaInfoCircle /> <br /> ₹20
            </p>
          </div>
          <div className="broker-logo">
            <img src={broker.logo} alt={broker.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Broker;
