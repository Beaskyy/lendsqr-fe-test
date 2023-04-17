import { useState } from "react";
import logo from "../assets/images/Group.svg";
import pablo from "../assets/images/pablo-sign-in 1.svg";

type Props = {};

const Login = (props: Props) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoggedIn(true);
    console.log(email, password, isLoggedIn);

    const logIn = JSON.stringify(isLoggedIn);
    sessionStorage.setItem("isLoggedIn", logIn);
    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="row">
        <nav className="my-5">
          <img src={logo} alt="logo" className="img-fluid" />
        </nav>
      </div>
      <div className="row">
        <div className="col-md-6 mt-5">
          <img src={pablo} alt="pablo-sign-in" className="img-fluid" />
        </div>
        <div className="col-md-6 welcome">
          <h1 className="mx-5">Welcome!</h1>
          <p className="mx-5">Enter details to login.</p>
          <div>
            <form onSubmit={handleSubmit} className="mx-5">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control shadow-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  className="form-control shadow-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="row">
                  <div className="col d-flex justify-content-end">
                  <small onClick={() => setShow(!show)}>SHOW</small>
                  </div>
                </div>
              </div>
              <span>FORGOT PASSWORD?</span>
              <button type="submit">LOG IN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
