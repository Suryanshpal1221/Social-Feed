import { Input } from "../../Components/index";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [forgotPassord, setForgotPassword] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleLogin = () => {
    if (!isDisabled) {
      navigate("/homepage");
    } else {
      alert("Invalid Username or Password!");
    }
  };

  const handleForgotPassword = () => {
    setForgotPassword(false);
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLoginNavigation = () => {
    setForgotPassword(true);
  };

  const handleSendLink = () => {
    if (email) {
      alert("Reset link has been sent to your registered Email.");
      setForgotPassword(true);
    } else {
      alert("Invalid Email Id!");
    }
  };

  useEffect(() => {
    if (username && password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [username, password]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.add}>
          <h1>SocialFeed</h1>
          <h2>Connect with friends and the world around you on SocialFeed.</h2>
        </div>
        {forgotPassord ? (
          <div className={styles.loginCard}>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.btn1} onClick={handleLogin}>
              Login
            </button>
            <span className={styles.forgotText} onClick={handleForgotPassword}>
              Forgot Password?
            </span>
            <button className={styles.btn2} onClick={handleSignup}>
              Create new Account
            </button>
          </div>
        ) : (
          <div className={styles.loginCard}>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={styles.btn1} onClick={handleSendLink}>
              Forgot Password
            </button>
            <span className={styles.forgotText} onClick={handleLoginNavigation}>
              Login?
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
