import { useState } from "react";
import logo from "../assets/images/Group.svg";
import pablo from "../assets/images/pablo-sign-in 1.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const ForgotPassword = (props: Props) => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [disable, setDisable] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShow(true);
    setDisable(true);

    
    setTimeout(() => {
      toast.success("Reset password has been sent to your email address");
      setShow(false)
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }, 1000);
  };

  

  return (
    <div className="container">
      <ToastContainer autoClose={2000} />
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
          <h1 className="mx-5">Reset Password</h1>
          <p className="mx-5">Enter your email to reset password below.</p>
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
              <div></div>
              <button type="submit" disabled={disable}>
                {show ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "RESET PASSWORD"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
