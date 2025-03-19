import React, { useState } from "react";

const About1= () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        Bluestock is a mobile app for stock market learning, analytics & club
      </h2>
      <p style={styles.description}>
        We are passionate about helping you succeed in the stock market by
        providing cutting-edge tools and a supportive community of traders.
        <br />
        Join us on this journey, and let's make your stock trading experience
        better.
      </p>

      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>5 Thousand</h3>
          <p style={styles.statLabel}>Customers</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>20+</h3>
          <p style={styles.statLabel}>Team Members</p>
        </div>
        <div style={styles.statCard}>
          <h3 style={styles.statNumber}>4.9</h3>
          <p style={styles.statLabel}>Rating</p>
        </div>
      </div>

      <h2 style={styles.subHeading}>Recent News</h2>
      <div style={styles.newsContainer}>
        <div style={styles.newsCard}>
          <h4 style={styles.newsTitle}>Business Standard</h4>
          <p>Rs 20 Trillion & rising AUM of active equity mutual funds surges</p>
        </div>
        <div style={styles.newsCard}>
          <h4 style={styles.newsTitle}>Medium</h4>
          <p>Bluestock is a mobile app for stock market learning & analytics.</p>
        </div>
        <div style={styles.newsCard}>
          <h4 style={styles.newsTitle}>Business World</h4>
          <p>Mutual funds experience fourfold surge in Q2 collections.</p>
        </div>
      </div>
      <a href="#" style={styles.link}>Media & Press Release →</a>

      <div style={styles.joinUsContainer}>
        <h2>Want to join us?</h2>
        <p>
          We’re taking complicated stuff and making it super simple. Our teams
          are full of smart and savvy folks working on challenging tasks.
        </p>
        <p>
          Think you’re customer-focused enough? Write to us at{" "}
          <a href="mailto:hello@bluestock.in" style={styles.email}>
            hello@bluestock.in
          </a>
        </p>
        <button style={styles.button}>APPLY NOW</button>
      </div>

      <h2 style={styles.subHeading}>Frequently Asked Questions</h2>
      <div style={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <div
              style={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question} {openIndex === index ? "▲" : "▼"}
            </div>
            {openIndex === index && (
              <div style={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  { question: "What is Bluestock?", answer: "Bluestock is a stock market learning and analytics platform." },
  { question: "What platforms does Bluestock support?", answer: "Bluestock is available on Web, iOS, and Android." },
  { question: "Is there educational content on the app?", answer: "Yes, Bluestock provides tutorials, insights, and real-time analysis." },
  { question: "Is Bluestock free to use?", answer: "Bluestock offers both free and premium plans." },
  { question: "How can I get technical support for the app?", answer: "You can reach us at support@bluestock.in for assistance." },
];

// Styles


const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    with:"95%",
    marginTop:"8%",
    marginLeft:"2.5%",

  },
  heading: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.5",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  statCard: {
    background: "#5b6efc",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "150px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  statNumber: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: "14px",
  },
  subHeading: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "40px 0 20px",
    color: "#333",
  },
  newsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  newsCard: {
    background: "#f5f5f5",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  newsTitle: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  link: {
    display: "block",
    marginTop: "10px",
    color: "#5b6efc",
    textDecoration: "none",
    fontWeight: "bold",
  },
  joinUsContainer: {
    background: "#5b6efc",
    color: "white",
    padding: "30px",
    borderRadius: "15px",
    margin: "40px auto",
    maxWidth: "600px",
    textAlign: "center",
  },
  email: {
    color: "#fff",
    textDecoration: "underline",
  },
  button: {
    background: "#333",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
    cursor: "pointer",
  },
  faqContainer: {
    maxWidth: "600px",
    margin: "20px auto",
    textAlign: "left",
  },
  faqItem: {
    background: "#f9f9f9",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  faqQuestion: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  faqAnswer: {
    marginTop: "5px",
    fontSize: "14px",
    color: "#555",
  },
};

export default About1;
