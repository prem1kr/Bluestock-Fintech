import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Market.css";

const highStocks = [
  { company: "Indian Railway Finance", price: "113.40", dayHigh: "114.00" },
  { company: "Firstsource Solution", price: "209.90", dayHigh: "217.00" },
  { company: "HCL Tech.", price: "1,540.80", dayHigh: "1,555.00" },
  { company: "ONGC", price: "223.40", dayHigh: "224.75" },
  { company: "Avanti Feeds", price: "545.30", dayHigh: "581.40" },
  { company: "Coforge", price: "6,592.70", dayHigh: "6,615.00" },
  { company: "Infibeam Avenues", price: "26.55", dayHigh: "27.50" },
  { company: "Tata Power", price: "357.75", dayHigh: "361.85" },
  { company: "Bank Of India", price: "129.10", dayHigh: "130.10" },
  { company: "Tata Consumer Products", price: "1,159.00", dayHigh: "1,165.55" },
  { company: "Zomato", price: "139.55", dayHigh: "141.50" },
  { company: "Tata Motors", price: "816.45", dayHigh: "818.55" },
  { company: "Rail Vikas Nigam", price: "203.25", dayHigh: "207.00" },
  { company: "IRCTC", price: "951.20", dayHigh: "962.00" },
  { company: "Union Bank Of India", price: "131.20", dayHigh: "132.50" },
];

const lowStocks = [
  { company: "Mukesh Babu Fin Serv", price: "149.10", change: "+20%" },
  { company: "Jupiter Infomedia", price: "50.20", change: "+19.98%" },
  { company: "Jigar Cables", price: "66.45", change: "+19.95%" },
  { company: "Dhanlaxmi Bank", price: "36.30", change: "+19.8%" },
  { company: "CNI Research", price: "4.00", change: "+19.76%" },
  { company: "Manomay Tex India", price: "193.10", change: "+19.68%" },
  { company: "Eastern Logica Info", price: "1,329.80", change: "+19.41%" },
  { company: "Ansal Buildwell", price: "119.99", change: "+19.38%" },
  { company: "Upsurge Investment", price: "55.60", change: "+19.34%" },
  { company: "Paired Technologies", price: "210.60", change: "+18.38%" },
  { company: "Service Care", price: "67.50", change: "+17.39%" },
  { company: "Zodiac Ventures", price: "23.94", change: "+16.33%" },
  { company: "Mitcon Consultancy", price: "105.85", change: "+16.06%" },
  { company: "Ashiana Housing", price: "311.35", change: "+14.97%" },
  { company: "Xelpmoc Design", price: "127.70", change: "+14.63%" },
];

const MarketMovers = () => {
  const [activeTab, setActiveTab] = useState("NSE");

  return (
    <motion.div
      className="market-movers"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Market Movers</h1>
      <p>Learn about Stock market updates today – 52 Week Highs, 52 Week Lows, and more.</p>

      <div className="market-tables">
        <motion.div
          className="market-table"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="table-header">
            <h3>📈 52 Week High</h3>
            <div className="tabs">
              <span
                className={activeTab === "NSE" ? "active" : ""}
                onClick={() => setActiveTab("NSE")}
              >
                NSE
              </span>
              <span
                className={activeTab === "BSE" ? "active" : ""}
                onClick={() => setActiveTab("BSE")}
              >
                BSE
              </span>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>COMPANY</th>
                <th>PRICE Rs.</th>
                <th>DAY HIGH Rs.</th>
              </tr>
            </thead>
            <tbody>
              {highStocks.map((stock, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td>{stock.company}</td>
                  <td>{stock.price}</td>
                  <td>{stock.dayHigh}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="market-table"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="table-header">
            <h3>📉 52 Week Low</h3>
            <div className="tabs">
              <span
                className={activeTab === "NSE" ? "active" : ""}
                onClick={() => setActiveTab("NSE")}
              >
                NSE
              </span>
              <span
                className={activeTab === "BSE" ? "active" : ""}
                onClick={() => setActiveTab("BSE")}
              >
                BSE
              </span>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>COMPANY</th>
                <th>PRICE Rs.</th>
                <th>CHANGE %</th>
              </tr>
            </thead>
            <tbody>
              {lowStocks.map((stock, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td>{stock.company}</td>
                  <td>{stock.price}</td>
                  <td className="positive">{stock.change}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MarketMovers;