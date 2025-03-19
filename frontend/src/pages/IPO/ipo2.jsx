import React from "react";
import "./ipo2.css";

const IPO2 = () => {
  return (
    <div className="ipo2-container">
      <div className="ipo2-card">
        <img
          src="https://s3-alpha-sig.figma.com/img/f2bb/0d5a/c303809a2994263415f5532bb2d2011d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MrPwwht2Z6xUgoZ0BiqbFk8rSBeFZ0pZXpiQDDDsg3XM6amDb~jvzS7GTquaYjnwNSzC876BnXue3MbZiX7e-bCbLUZ1~La48mecsZUEg3Ut-yZRur2GdXBiqSLBfJVu~5jdZhl9OBe~e5en9crZ-VvbQ2Yy9y2OpbYvr5rrfnqlL1u10Q7CdX1J45bTF1~LF~tClnNfcxwK0wwUEYLWFqNBYfBXM2eppGda48WoeHgGWwHbXiEqrD16bOTgGq0gV8xohu5o6lWv6gmH432Hu3w9NwWtlJLWgryhZtSsBodLSWtFKSeqgj~yUT0SDvNvEj-Aya4GoX9xel6Zzv3wCQ__"
          alt="Bluestock Logo"
          className="ipo2-logo"
        />
        <h2 className="ipo2-title">BLUESTOCK</h2>
        <h3 className="ipo2-subtitle">Applying for this IPO?</h3>
        <p className="ipo2-text">
          The way you compare & invest in only the best IPO, let us help you get started by
          comparing and selecting the best Demat account. Open your Demat account now to
          apply for your favourite IPO.
        </p>
        <button className="ipo2-btn">Open a Demat Account</button>
      </div>
    </div>
  );
};

export default IPO2;
