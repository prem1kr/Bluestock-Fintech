import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FiSearch, FiSettings, FiHelpCircle } from "react-icons/fi";
import { AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { BsGraphUp, BsBuilding } from "react-icons/bs";
import axios from "axios";

const Dashboard = () => {
  const [ipos, setIpos] = useState([]);
  const [totalIpos, setTotalIpos] = useState(0);
  const [iposInGain, setIposInGain] = useState(0);
  const [iposInLoss, setIposInLoss] = useState(0);
  const [upcomingIpos, setUpcomingIpos] = useState(0);
  const [newListedIpos, setNewListedIpos] = useState(0);
  const [ongoingIpos, setOngoingIpos] = useState(0);
  const [quickLinks, setQuickLinks] = useState([]);
  const [user, setUser] = useState({ name: "Guest" }); // Default user data


  useEffect(() => {
    const fetchIpos = async () => {
      try {
        const response = await axios.get("https://bluestock-fintech-bw90.onrender.com/api/ipos");
        const iposData = response.data;
        setIpos(iposData);
        setTotalIpos(iposData.length);
        setIposInGain(iposData.filter((ipo) => ipo.listingGain > 0).length);
        setIposInLoss(iposData.filter((ipo) => ipo.listingGain <= 0).length);
        setUpcomingIpos(iposData.filter((ipo) => ipo.status === "Upcoming").length);
        setNewListedIpos(iposData.filter((ipo) => ipo.status === "New Listed").length);
        setOngoingIpos(iposData.filter((ipo) => ipo.status === "Ongoing").length);
      } catch (error) {
        console.error("Error fetching IPOs:", error);
      }
    };

    fetchIpos();
  }, []);

   // Fetch user data
   useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("hhttps://bluestock-fintech-bw90.onrender.com/api/user/1"); // Replace "1" with the actual user ID
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchQuickLinks = async () => {
      try {
        const response = await axios.get("https://bluestock-fintech-bw90.onrender.com/api/ipos");
        setQuickLinks(response.data);
      } catch (error) {
        console.error("Error fetching quick links:", error);
      }
    };

    fetchQuickLinks();
  }, []);

  return (
    <Container>
      <Sidebar>
        <Logo>Bluestock Fintech</Logo>
        <Menu>
          <MenuItem className="active">
            <AiOutlineAppstore /> Dashboard
          </MenuItem>
          <MenuItem>
            <BsGraphUp />
            <a href="/manageipo">Manage IPO</a>
          </MenuItem>
          <MenuItem>
            <BsBuilding /> IPO Subscription
          </MenuItem>
          <MenuItem>
            <AiOutlineUser /> IPO Allotment
          </MenuItem>
        </Menu>
        <Others>
          <MenuItem>
            <FiSettings /> Settings
          </MenuItem>
          <MenuItem>
            <AiOutlineUser /> API Manager
          </MenuItem>
          <MenuItem>
            <BsBuilding /> Accounts
          </MenuItem>
          <MenuItem>
            <FiHelpCircle /> Help
          </MenuItem>
        </Others>
      </Sidebar>

      <MainContent>
        <Header>
          <SearchBar type="text" placeholder="Search" />
          <UserProfile>
          <AiOutlineUser /> Hi, {user.name} {/* Display user's name */}
          </UserProfile>
        </Header>

        <DashboardSection>
          <DashboardContent>
            <BubbleChart>
              <Bubble className="total">
                {totalIpos}
                <br />
                Total IPO
              </Bubble>
              <Bubble className="gain">
                {iposInGain}
                <br />
                IPO in Gain
              </Bubble>
              <Bubble className="loss">
                {iposInLoss}
                <br />
                IPO in Loss
              </Bubble>
            </BubbleChart>

            <QuickLinks>
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <img src={link.logoUrl} alt={link.companyName} /> {link.companyName} - Visit Now
                  </li>
                ))}
              </ul>
            </QuickLinks>

            <MainBoardIPO>
              <h3>Main Board IPO</h3>
              <p>From 01 Jan 2024</p>
              <DonutChart>
                <Tooltip>Afternoon IPO NSE & BSE - {upcomingIpos}</Tooltip>
              </DonutChart>
              <IPOList>
                <IPOListItem>
                  <span>Upcoming:</span> {upcomingIpos}
                </IPOListItem>
                <IPOListItem>
                  <span>New Listed:</span> {newListedIpos}
                </IPOListItem>
                <IPOListItem>
                  <span>Ongoing:</span> {ongoingIpos}
                </IPOListItem>
              </IPOList>
            </MainBoardIPO>
          </DashboardContent>
        </DashboardSection>
      </MainContent>
    </Container>
  );
};

export default Dashboard;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 250px;
  background: #2c3e50;
  padding: 20px;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 20px;
  color: #3498db;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

const Others = styled(Menu)`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const MenuItem = styled.li`
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #34495e;
  }
  &.active {
    background: #34495e;
    border-left: 4px solid #3498db;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
  }
`;

const SearchBar = styled.input`
  padding: 10px;
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  &:focus {
    border-color: #3498db;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DashboardSection = styled.section`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const DashboardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const BubbleChart = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Bubble = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  animation: ${bounce} 2s infinite;
  &:hover {
    transform: scale(1.1);
  }
  &.total {
    background: #3498db;
    color: white;
  }
  &.gain {
    background: #2ecc71;
    color: white;
  }
  &.loss {
    background: #e74c3c;
    color: white;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 14px;
  }
`;

const QuickLinks = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;

  ul {
    list-style: none;
    padding: 0;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const MainBoardIPO = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const DonutChart = styled.div`
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, #3498db 60%, #f0f0f0 40%);
  border-radius: 50%;
  position: relative;
  animation: ${rotate} 5s linear infinite;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
`;

const IPOList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const IPOListItem = styled.li`
  padding: 15px;
  background: #f9f9f9;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateX(10px);
  }
  span {
    font-weight: bold;
    color: #3498db;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;
