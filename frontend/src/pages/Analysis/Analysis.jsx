import React from "react";

const stockData = Array(20).fill({
  company: "Apple",
  open: "21,456.00",
  high: "21,465.00",
  low: "21,455.00",
  prevClose: "21,455.00",
  lte: "21,459.00",
  change: "73.98",
  percentChange: "4.36",
  volume: "23,89,91,890",
  value: "209.59",
  high52W: "21,834.35",
  low52W: "16,833.75",
  percent30D: "9.10",
  today: "graph",
});

const Analysis = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ borderBottom: "2px solid black", paddingBottom: "10px" }}>NIFTY 50</h2>
      <p style={{ color: "red", fontWeight: "bold" }}>
        Today Market has Closed as on 09 Jan 2024 16:00:00 IST
      </p>
      <p>
        <span style={{ color: "green" }}>Advances - 30 </span>
        <span style={{ color: "red" }}>Declines - 20 </span>
        <span>Unchanged - 0</span>
      </p>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            minWidth: "800px",
          }}
        >
          <thead>
            <tr style={{ background: "#f4f4f4", borderBottom: "2px solid black" }}>
              {["Company", "OPEN", "HIGH", "LOW", "PREV. CLOSE", "LTE", "CHNG", "%CHNG", "VOLUME", "VALUE", "52W H", "52W L", "30 D %CHNG", "TODAY"].map((header) => (
                <th key={header} style={{ padding: "10px", textAlign: "left", whiteSpace: "nowrap" }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stockData.map((stock, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <td
                  style={{
                    padding: "10px",
                    background: index === 0 ? "#ffcccc" : "white",
                    fontWeight: index === 0 ? "bold" : "normal",
                  }}
                >
                  {stock.company}
                </td>
                {Object.keys(stock).slice(1).map((key, idx) => (
                  <td key={idx} style={{ padding: "10px", whiteSpace: "nowrap" }}>{stock[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>{`
        @media (max-width: 768px) {
          table {
            font-size: 12px;
          }
          th, td {
            padding: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default Analysis;
