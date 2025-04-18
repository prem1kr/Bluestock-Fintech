import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://bluestock-fintech-bw90.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save token and user info in localStorage
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data));

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Logo src="https://s3-alpha-sig.figma.com/img/a384/6617/a1755a8fd24fe96ee0699859b1972ef1?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hiWjiD0Ndkb15El3-7mPNf2gXKshX-wrfm2BYd~bkJ-r7FOtsUfDGeYpjsO~sMlbWm7kz6atlc2V2ATotGuYnsQKZBkS82S~SDKMR3qOU61G-I9b8jTK87uBNue8IzOmNXudFpsJ1RI6WguonPJTKzOVm6lftlhouX93JdFh3PvgfUd2GatC-jCw8wTHDzfSkeleq7ovXzIkmzT23-vR~pU24j~JdXihRcmmq-qyFpfXZ4ed2rlgHZbR8S3tjGXKS4aKkv0t4LB~gVE37xwIVPhecPnn6kvbNQx3FQqmbaNza658Dla-EDCeTT~Efs-dn2aiY9aXrZtPYxn8L3P9mA__" alt="Bluestock Logo" />
      
      <Form onSubmit={handleLogin}>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Label>Email Address</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndoe@gmail.com" required />

        <Label>
          Password <ForgotPassword href="/forgot">Forgot Password?</ForgotPassword>
        </Label>
        <PasswordWrapper>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <EyeIcon>👁</EyeIcon>
        </PasswordWrapper>

        <CheckboxWrapper>
          <Checkbox type="checkbox" checked={keepSignedIn} onChange={() => setKeepSignedIn(!keepSignedIn)} />
          Keep me signed in
        </CheckboxWrapper>

        <LoginButton type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </LoginButton>

        <Divider>or sign in with</Divider>

        <GoogleButton>
          <GoogleIcon>🟢</GoogleIcon> Continue with Google
        </GoogleButton>

        <CreateAccount href="/signup">Create an account</CreateAccount>
      </Form>
    </Container>
  );
};

export default Login;

// Styled Components
const Container = styled.div`
  width: 95%;
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 100px 20px;
`;

const Logo = styled.img`
  width: 140px;
  margin-bottom: 20px;
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
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 12px;
  cursor: pointer;
`;

const ForgotPassword = styled.a`
  float: right;
  font-size: 12px;
  color: #007bff;
  text-decoration: none;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
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

const Divider = styled.div`
  margin: 15px 0;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  line-height: 0.1em;
  width: 100%;
  position: relative;

  &:before {
    content: " ";
    display: block;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #f1f1f1;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

const GoogleIcon = styled.span`
  margin-right: 8px;
`;

const CreateAccount = styled.a`
  display: block;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
