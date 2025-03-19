import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Logo src="https://s3-alpha-sig.figma.com/img/a384/6617/a1755a8fd24fe96ee0699859b1972ef1" alt="Bluestock Logo" />
      <Title>Forgot Password?</Title>
      <Subtitle>Enter your email address to get the password reset link.</Subtitle>

      <Form>
        <Label>Email Address</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@bluestock.in" />
        <ResetButton onClick={handlePasswordReset} disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </ResetButton>

        {message && <Message>{message}</Message>}

        <BackToLogin onClick={() => (window.location.href = "/login")}>Back to login</BackToLogin>
      </Form>
    </Container>
  );
};

export default Forgot;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: "Arial", sans-serif;
  padding: 100px 20px;
`;

const Logo = styled.img`
  width: 140px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Form = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  margin-top: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #6a5acd;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    background: #5a4abf;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  font-size: 14px;
  color: green;
  margin-top: 10px;
`;

const BackToLogin = styled.p`
  font-size: 14px;
  margin-top: 15px;
  color: #666;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #333;
  }
`;
