import React, { useRef } from "react";
import "./ipo1.css";

const IPO1 = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="ipo-container">
      <h2>IPO</h2>
      <p>Following is the list of companies for IPO as of today.</p>

      <div className="ipo-header">
        <h3>Upcoming</h3>
        <button className="view-all-btn">View All</button>
      </div>
      <p className="ipo-info">
        Companies that have filed for an IPO with SEBI. Few details might be
        disclosed by the companies later on.
      </p>

      <div className="scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>&#9665;</button>
        <div className="ipo-list" ref={scrollRef}>
          {[
            {
              img: "https://s3-alpha-sig.figma.com/img/24e2/5de8/b303b6ac52168faea60505f339e99540?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nH~Xb9Wgaf7j6ForOw5lIy5p7BzP3pPRUbwT1L0PjwE0~0cH15FXte~-~qsDaGgPSeYmaHUaDpUATr0gvuFHcYBrEm9zzzDoaFcH1MC5yNh2jC3I070AZ9dOuvHX92gmh4xWDR4pxTpGzAfb9TGklxobwHYbKynixLtWjniLN2GkBh4i56kfZ2Q-hqa5hujJyO4ZV0avOzAmrDTaM-f~veNFgNLwmk4eR7dt8vk8LUkN6StNr0iQeTQFbUbfBE0K2xZrNvNxH2lotp8c-boX3fIk8Ri0sxV6CftZrb8KhQcDMDClPxZsdrke7LVzUNkvMgA4TdFdzLETKRg40AlJYQ__",
              name: "Nova Agritech Ltd.",
              priceBand: "Rs 39 - 41",
              open: "2024-01-22",
              close: "2024-01-24",
              issueSize: "143.81 Cr.",
              issueType: "Book Built",
              listingDate: "2024-01-30",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/f6fe/ad0c/34893c0e7bb286ad16d46803e4f673bb?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oqilXrKmGnB~ljnPfqvJi2Mw10Qw5wGLKgSTefxunNXb0T3zgmVY8g2el4ywqOMo~~5GwbpAdKWrMmCn1kLFIWMdnbdl6K~wmXt5HQNuEZX7-Lou6uPHrjLh-Q9F0EZJIrfHADLwKyznj767vnf1SDOTrRSc2Yb1naLYYJ9JE1eyoaHF9gSuRXXr5H1lJchn25AZJeClITdMUsMLgs0nx4w0PluKp-rM7XTqq7ZdaK2NYYkJIwozLIsPsWwQRf7Aw5ztMUNnfdQJYtRB9HQypskXNtF~WRqvXcIWWBJCuOUReMx~mcC-KeK2JMsbZNHyGfMCYoO~nrr5zi69~MOVoQ__",
              name: "EPACK Durable Ltd.",
              priceBand: "Rs 218 - 230",
              open: "2024-01-19",
              close: "2024-01-23",
              issueSize: "640.05 Cr.",
              issueType: "Book Built",
              listingDate: "2024-01-29",
            },
            {
              img: "https://s3-alpha-sig.figma.com/img/7f4e/46ef/57b83780b069911267f2b48171245f44?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q2cPVhGlR6JpNmSCRVn4SLh0uhVzEUkcOdUcNOMDtCRKpP~Ob3tjY6d33SoD95I7FGb8IYMaBgQU4fkXbWmwqxwT6HP6R8zZTXoWinOXnCVc3u8ikUEuppEFLKQjqNLI92fNQ7noTwaS5vpbfiLwOFDLaVrNXenVB3e0PWJ71ZlT1l1mHoLEDgiIw5K2-XEqDK1yRyzvevaCrxiNWtrClYhv5CLM-xEI1qdQiLU3dG4DKnXT~LuVprCPevXl9I~2AM6ePoPzZwVYCAB8gIiEU91A96obWFFBcEl0ZVguB0mxSFY5mvhmRo17~72KpqyE9uuAjs6hzOjHbGJl6-S1Eg__",
              name: "RK Swamy Ltd.",
              priceBand: "Not Issued",
              open: "Not Issued",
              close: "Not Issued",
              issueSize: "Not Issued",
              issueType: "Book Built",
              listingDate: "Not Issued",
            },
            {
                img: "https://s3-alpha-sig.figma.com/img/7f4e/46ef/57b83780b069911267f2b48171245f44?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q2cPVhGlR6JpNmSCRVn4SLh0uhVzEUkcOdUcNOMDtCRKpP~Ob3tjY6d33SoD95I7FGb8IYMaBgQU4fkXbWmwqxwT6HP6R8zZTXoWinOXnCVc3u8ikUEuppEFLKQjqNLI92fNQ7noTwaS5vpbfiLwOFDLaVrNXenVB3e0PWJ71ZlT1l1mHoLEDgiIw5K2-XEqDK1yRyzvevaCrxiNWtrClYhv5CLM-xEI1qdQiLU3dG4DKnXT~LuVprCPevXl9I~2AM6ePoPzZwVYCAB8gIiEU91A96obWFFBcEl0ZVguB0mxSFY5mvhmRo17~72KpqyE9uuAjs6hzOjHbGJl6-S1Eg__",
                name: "RK Swamy Ltd.",
                priceBand: "Not Issued",
                open: "Not Issued",
                close: "Not Issued",
                issueSize: "Not Issued",
                issueType: "Book Built",
                listingDate: "Not Issued",
              },
              {
                img: "https://s3-alpha-sig.figma.com/img/7f4e/46ef/57b83780b069911267f2b48171245f44?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q2cPVhGlR6JpNmSCRVn4SLh0uhVzEUkcOdUcNOMDtCRKpP~Ob3tjY6d33SoD95I7FGb8IYMaBgQU4fkXbWmwqxwT6HP6R8zZTXoWinOXnCVc3u8ikUEuppEFLKQjqNLI92fNQ7noTwaS5vpbfiLwOFDLaVrNXenVB3e0PWJ71ZlT1l1mHoLEDgiIw5K2-XEqDK1yRyzvevaCrxiNWtrClYhv5CLM-xEI1qdQiLU3dG4DKnXT~LuVprCPevXl9I~2AM6ePoPzZwVYCAB8gIiEU91A96obWFFBcEl0ZVguB0mxSFY5mvhmRo17~72KpqyE9uuAjs6hzOjHbGJl6-S1Eg__",
                name: "RK Swamy Ltd.",
                priceBand: "Not Issued",
                open: "Not Issued",
                close: "Not Issued",
                issueSize: "Not Issued",
                issueType: "Book Built",
                listingDate: "Not Issued",
              },
          ].map((ipo, index) => (
            <div className="ipo-card" key={index}>
              <img src={ipo.img} alt={ipo.name} />
              <h3 className="ipo-name">{ipo.name}</h3>
              <p><strong>Price Band:</strong> {ipo.priceBand}</p>
              <p><strong>Open:</strong> {ipo.open}</p>
              <p><strong>Close:</strong> {ipo.close}</p>
              <p><strong>Issue Size:</strong> {ipo.issueSize}</p>
              <p><strong>Issue Type:</strong> <span className="highlight">{ipo.issueType}</span></p>
              <p><strong>Listing Date:</strong> {ipo.listingDate}</p>
              <div className="ipo-buttons">
                <button className="rhp-btn">RHP</button>
                <button className="drhp-btn">DRHP</button>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>&#9655;</button>
      </div>
    </div>
  );
};

export default IPO1;
