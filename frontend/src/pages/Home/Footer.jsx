import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-top">
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li className="text1">Trading View</li>
              <li className="text1">NSE Holidays</li>
              <li className="text1">e-Voting CDSL</li>
              <li className="text1">e-Voting NSDL</li>
              <li className="text1">Market Timings</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
            <li><a className="text1" href="/Carrers">Careers</a></li>

              <li>
                <a className="text1" href= "/Contact">
                   ContactUS
                </a>
              </li>
              <li><a className="text1" href="/about">About Us</a></li>
              <li><a className="text1" href="/community">Community</a></li>
              <li><a className="text1" href="/Blog">Blogs</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Offerings</h4>
            <ul>
              <li><a className="text1" href="BrokerCompare">Compare Broker</a></li>
              <li>Fin Calculators</li>
              <li><a className="text1" href="/ipo">IPO</a></li>
              <li><a className="text1" href="/Broker">All Brokers</a></li>
              <li><a className="text1" href="/Product">Products</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Links</h4>
            <ul>
              <li>
                <a className="text1" href="/Shark">Shark Investor</a></li>
              <li><a className="text1" href="/MuthodFund">Muthod Fund</a></li>
              <li className="text1" >Sitemap</li>
              <li className="text1">Indian Indices</li>
              <li className="text1">
                <a href="/school">Bug Bounty Program</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Policy</h4>
            <ul>
              <li className="text1">Terms & Conditions</li>
              <li className="text1">Privacy Policy</li>
              <li className="text1">Refund Policy</li>
              <li className="text1">Disclaimer</li>
              <li className="text1">Trust & Security</li>
            </ul>
          </div>
        </div>

        <div className="footer-middle">
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedinIn />
            <FaInstagram />
            <FaTelegramPlane />
          </div>
          <div className="footer-brand">
            <img src="https://s3-alpha-sig.figma.com/img/f2bb/0d5a/c303809a2994263415f5532bb2d2011d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MrPwwht2Z6xUgoZ0BiqbFk8rSBeFZ0pZXpiQDDDsg3XM6amDb~jvzS7GTquaYjnwNSzC876BnXue3MbZiX7e-bCbLUZ1~La48mecsZUEg3Ut-yZRur2GdXBiqSLBfJVu~5jdZhl9OBe~e5en9crZ-VvbQ2Yy9y2OpbYvr5rrfnqlL1u10Q7CdX1J45bTF1~LF~tClnNfcxwK0wwUEYLWFqNBYfBXM2eppGda48WoeHgGWwHbXiEqrD16bOTgGq0gV8xohu5o6lWv6gmH432Hu3w9NwWtlJLWgryhZtSsBodLSWtFKSeqgj~yUT0SDvNvEj-Aya4GoX9xel6Zzv3wCQ__" alt="Bluestock Logo" />
            <p>Bluestock Fintech<br />Pune, Maharashtra</p>
          </div>
          <div className="footer-info">
            <p>MSME Registration No:<br /> UDYAM-MH-01-0138001</p>
            <img src="https://s3-alpha-sig.figma.com/img/8d45/5001/a95002faa088ab5477fe53d16b87c4b7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E0mYtLBpKMCpTpeIBKI48Nf458pry5rwPyrrqa2nW0WgY~7W464P-FE59Li~Y1I5cGywBmoxOLjsrEPU4uvlaHYursNUVqE1sQuDtHKNfuVD3n7ntQfEmwZ7Frgz-fRGXZzRWy9PskGaZAErAKJugqr2qr4Ruajnb6BbfWqE8MH~zROipCICWQaH9oexU1o619PbdgcJfTf9GpvLaHd1bMX9JfvXDTLrwDgRLPjkpWsd~VGnAt1COStm1qakY6LXNkkvg6~ZBu46Fc5VEoDdOTTQVggMuQrv~VAYO~0bbib2p4TRQxhRvfACtQMfPO6swtY6IrdUNDvZHyWOXvlbBQ__" alt="Startup India Logo" />
          </div>
        </div>

       
        <div className="footer-disclaimer">
          <p>
            Investment in securities markets are subject to market risks, read all the related documents carefully before investing as prescribed by SEBI. Issued in the interest of the investors.
          </p>
          <p>
            The users can write to <a href="mailto:help@bluestock.in">help@bluestock.in</a> for any app, website related queries. Also, you can send IT / Tech related feedback to <a href="mailto:cto@bluestock.in">cto@bluestock.in</a>
          </p>
          <p>
            <strong>Disclaimer:</strong> We are not a SEBI registered research analyst company. We do not provide any kind of stock recommendations, buy/sell stock tips, or investment and trading advice. All stock scripts shown in the Bluestock app, website, and social media handles are for educational purposes only.
          </p>
        </div>

        <div className="footer-bottom">
          <p>Bluestock Fintech All Rights Reserved.</p>
          <p>Made with ❤️ in Pune, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
