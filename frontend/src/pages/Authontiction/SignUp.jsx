import React, { useState } from "react";
import styled from "styled-components";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const generateUsername = (name) => {
    return name.toLowerCase().replace(/\s+/g, "") + Math.floor(Math.random() * 1000);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!isRobotChecked) {
      setError("Please verify that you are not a robot.");
      return;
    }

    const username = generateUsername(name);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, username }), // ✅ Include username
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed.");
      }

      setSuccess("Signup successful! Please log in.");
      setName("");
      setEmail("");
      setPassword("");
      setIsRobotChecked(false);
    } catch (error) {
      console.error("Signup Error:", error);
      setError(error.message);
    }
  };

  return (
    <Container>
      <Logo src="https://s3-alpha-sig.figma.com/img/a384/6617/a1755a8fd24fe96ee0699859b1972ef1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hiWjiD0Ndkb15El3-7mPNf2gXKshX-wrfm2BYd~bkJ-r7FOtsUfDGeYpjsO~sMlbWm7kz6atlc2V2ATotGuYnsQKZBkS82S~SDKMR3qOU61G-I9b8jTK87uBNue8IzOmNXudFpsJ1RI6WguonPJTKzOVm6lftlhouX93JdFh3PvgfUd2GatC-jCw8wTHDzfSkeleq7ovXzIkmzT23-vR~pU24j~JdXihRcmmq-qyFpfXZ4ed2rlgHZbR8S3tjGXKS4aKkv0t4LB~gVE37xwIVPhecPnn6kvbNQx3FQqmbaNza658Dla-EDCeTT~Efs-dn2aiY9aXrZtPYxn8L3P9mA__" alt="Bluestock Logo" />
      <Title>Create an account</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}

      <Form onSubmit={handleSignUp}>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />

        <Label>Email Address</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@bluestock.in" />

        <Label>Password</Label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />

        <ReCAPTCHA>
          <Checkbox type="checkbox" checked={isRobotChecked} onChange={() => setIsRobotChecked(!isRobotChecked)} />
          I'm not a robot
        </ReCAPTCHA>

        <SignUpButton type="submit">Sign up</SignUpButton>
      </Form>
    </Container>
  );
};

export default SignUp;

// Styled Components
const Container = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
  padding: 100px 20px;
`;

const Logo = styled.img`
  width: 140px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
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
  font-size: 14px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const ReCAPTCHA = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const SignUpButton = styled.button`
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
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  margin-top: 10px;
`;
