import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <h2 className="card-title">Bluestock Highlights</h2>
      <p className="card-subtitle">
        Simplified enough for beginners, Detailed enough for experts. Track
        upcoming IPOs, Leverage advanced tools to make the best decisions.
      </p>

      <div className="card-sections">
        <div className="card card1">
          <h3 className="card-header">Learn Chart ✏️</h3>
          <ul>
            <li>✅ Technical, Fundamental</li>
            <li>✅ Finology, Facts, Equity</li>
            <li>✅ Trading Psychology</li>
            <li>✅ Risk Assessment</li>
            <li>✅ Option Trading</li>
          </ul>
        </div>

        <div className="card card2">
          <h3 className="card-header">Analytics ✈️</h3>
          <ul>
            <li>✅ Live Sector Trend</li>
            <li>✅ IPO DRHP</li>
            <li>✅ Sectoral Distribution</li>
            <li>✅ Stock Overview</li>
            <li>✅ TradingView Chart</li>
            <li>✅ Technical, Fundamental</li>
          </ul>
        </div>

        <div className="card card3">
          <h3 className="card-header">Club ⚡</h3>
          <ul>
            <li>✅ Educational Resources</li>
            <li>✅ Real-time Chat</li>
            <li>✅ Forums</li>
          </ul>
        </div>
      </div>

      <div className="card-info">
        <h3>Why do traders love bluestock?</h3>
        <p>
          Bluestock caters to traders looking to enhance their technical analysis
          skills, providing a user-friendly environment to interpret and leverage
          charts effectively for strategic decision-making in the financial
          markets.
        </p>
      </div>

      <div className="card-icons">
        <div className="icon">
          <img
            className="image1"
            src="https://s3-alpha-sig.figma.com/img/de34/3667/a22cc1f1dc72a5c7d32b49d20f106e29?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mSIrYswc2V45wK21u6tZZ9KfGVQ~0oNBxe1ztkRR68R5msPU4S8fVlUjTrBkEZATRkJ~4vQXfymjWmIMB5h-mwL2ZT1c9TFEprm7TerAil81JWRNDL02O8LXuSlSMwJK3w9KcXvXU5cphaVyhwAbVDmWFRbk8JOr~6sY7b4V4rG1fVEom8MkAWk~f40lnV2pJER0TvyiCIxwcwGKQcFs7TOiBm4hWTk9tF0HyQxcR1iChx~vZiVYRHqrTKUC7KHOsx42qVcrbI-2kNA4KcuWR0Bijo8C3xKH9U980gS7OSegm8HVOdXKs68QmoCeiBKFQnEY9w-m6PTVif9Fwq75Jg__"
            alt="Analytics"
          />
          Analytics
        </div>
        <div className="icon">
          <img
            className="image1"
            src="https://s3-alpha-sig.figma.com/img/65e0/bec9/c8652dec3a3e026fa0b46ec4a2e94031?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kk2PReeJDYqFvgRi2O1qMKvimI3skMzqM0QTSit2ywjzxJjbK4Uoqhp-oVEzkhveudEiULqtbqtCxcwLUNW1k7kLL6ueVgGjnaawZBIBXmISzq~z-GaiRivKpMs6y1DNNyKB3ZNC9nRVRCMh08m3W1qNkx3IQZGc2b6vseTLw2lYPGoZw6UqrrT-AzocZfyI6njb3YLAHwM9S176BCQQes4gMl9rSbQVtjyB0PG-An7RI9a1fj8FiiGEDU4GRtf8F2HKXC9kndIQevLeJNCVKIAu-ZNJ5Ph7Q-VVB3L--xsG2eGd7u1ja~n6-HyHWAg0HdTHTXHUguuIyLmvrYaZvA__"
            alt="Blogs"
          />
          Blogs
        </div>
        <div className="icon">
          <img
            className="image1"
            src="https://s3-alpha-sig.figma.com/img/9203/bb43/b5d785856df6b2b12b0abc8949d3fcb9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=erV2w6qrtQu6y2XYvDsFGdOLJfS0JZqjDGQ9iGSCDfxPe6VsAsMS8LHgRIBg7VK9zmA49iPusazlH4utR4U20yW3qdxtWL58KPv1nNUO9xIJhFFRzm9Z6wyKxMdr46VQgkAkXflnm8u3HRArbuSZ--uJTtQYfkofaa4XZE~qdX6laII0rRI7iKbcvAP5nTLSYE64pkuogS~aU51eVa3nWs4F8FRzh7u7g5r2n8gI13C4DW~ypYGWSamAH1IL7UpNMb7mmHJ9GJYeG6dntP8DQ7QfXJ5OEQFHvD8XEQAtl1aW~u~HuBdT8dhxtLFPKSKyCsfguAZkQIrvkcy1koU4dg__"
            alt="Videos"
          />
          Videos
        </div>
      </div>

      <div className="card-footer">
        <h3>All things finance, right here</h3>
        <p>
          Master the art of investing and secure your financial future with
          Bluestock learning resources.
        </p>
      </div>
    </div>
  );
};

export default Card;