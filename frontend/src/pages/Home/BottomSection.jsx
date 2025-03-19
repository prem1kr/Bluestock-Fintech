import React, { useState } from "react";
import { motion } from "framer-motion";
import "./BottomSection.css";

const brokers = [
  { name: "Angel One" },
  { name: "Zerodha" },
  { name: "Upstox", logo: "path_to_upstox_logo" },
  { name: "Groww", logo: "path_to_groww_logo" },
];

const BottomSection = () => {
  const [broker1, setBroker1] = useState(brokers[0]);
  const [broker2, setBroker2] = useState(brokers[1]);

  return (
    <motion.div
      className="bottom-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="content">
        <motion.div
          className="text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>Compare and choose</p>
          <h2>Best Stock Broker for you</h2>
          <div className="dropdowns">
            <motion.div
              className="dropdown"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="https://s3-alpha-sig.figma.com/img/c6d0/e2c1/bd7aa1c57667d272401df6c825b0ab5f?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V2R0g3YcRg5pj58EqiPzTvsGMdv6hv1WwApT4WaY9LWXUxje929e-CSDXgesmlDhuQb6g3WfaUzx73bS6TARl9J0DzQJt6D4Mvmx0M0~ceSS3GIjmwwkVEmHUfdtLqCsklLWPqrbBzea7T8PePVU2Y19zO49mHH1bsLAWEbPfC-ElorbT2hqqBb03dsm9WCeCBQX0nBtwmiyLe~FAKXnv6R-NQgQLPen7h171V~oaqOiAws2BinB7ARV2izRycuuTkhSAupfNnJ65aINQkdYnPbI7gcwYbTvhDoHQNLwc7lld7efRyOWWzNgjjT4TGFSdc8yLvRX8NeG~I4qEZWbvg__" alt={broker1.name} />
              <select className="name"
                value={broker1.name}
                onChange={(e) =>
                  setBroker1(brokers.find((b) => b.name === e.target.value))
                }
              >
                {brokers.map((broker, index) => (
                  <option key={index} value={broker.name}>
                    {broker.name}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div
              className="dropdown"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src="https://s3-alpha-sig.figma.com/img/06d8/62ba/e7fecb6c3065ecb3f9b0c25e38612a6a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h2UAzIiBN5kNtPGkrQ9mK~WjGJ139rKUws00~SiuQKRdlN5wU8PSTmpIkjG7ZbLmJ22KM-YVCnQFCGg0LCfAXk21x4w3~dmt1eTE-y5-SXbvu5YcRVdr3kzfErD-k7Eo4vgiAhkuSD~MNA7nz52HKUSw3ketlU3zSslR~~PWsPwwwhMAhGHY4-ftDseAqzb~zWQ-JAyd239zXXeCVH~vLJNEewPraP8fDcttqwvwDLbY7JVTtczmVUNK1ngQZhLWUoLNuiLF9HDWSL26Jvl3AhD6UoIWalvsLpZvEg8yWsuSihOtloruUKRNrNbeTDMUPMj05CmGa7VjGzakHBFfWg__" alt={broker2.name} />
              <select className="name"
                value={broker2.name}
                onChange={(e) =>
                  setBroker2(brokers.find((b) => b.name === e.target.value))
                }
              >
                {brokers.map((broker, index) => (
                  <option key={index} value={broker.name}>
                    {broker.name}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
          <motion.button
            className="compare-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a className="Compare-button" href="/BrokerCompare">Compare</a>
          </motion.button>
        </motion.div>
        <motion.div
          className="image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img src="https://s3-alpha-sig.figma.com/img/2f28/cfcd/8fe66635a48b407134e13947830512dc?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O6gU7Zz9BhFrq4XgBKDmn2av~~SJNcR2LYbWgNhU5-IxNOxq2u9DoYxClvpyb4HyJQPaiACxBVR9-qSrvXhClR8zg4k~vRlgBjy5UX-9O5bHdl4wtGd4vDiq~6f~zBOvqPnk0i-yxXbJ3BBq10XqGm3mTbXXvpFCoqBunyg5LZYL5qHaWEnt3KzG6Mm5J4y5tGgZNLL3LwIWeOf-YZGXiaxsQap3qOdtS4SrsWSnv0gKkjCvU6kmnBw76XJM0QFrfO6Rn-eYXEdyyIbT1Z9bGM-i~oRb9wkm60QqacYbQ~nQa5WG5HJV2TDGsHb64aGCga19i42phf9pv5NVNIZTWA__" alt="Stock Analysis" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BottomSection;