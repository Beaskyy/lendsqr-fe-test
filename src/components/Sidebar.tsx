import "../Styles/sidebar.css";
import { Link } from "react-router-dom";
import briefcase from "../assets/images/briefcase 1.png";
import home from "../assets/images/home 1.png";
import users from "../assets/images/user-friends 1.png";
import guarantors from "../assets/images/users 1.png";
import loans from "../assets/images/sack 1.png";
import decisions from "../assets/images/handshake-regular 1.png";
import savings from "../assets/images/piggy-bank 1.png";
import request from "../assets/images/request.png";
import whitelist from "../assets/images/user-check 1.png";
import karma from "../assets/images/user-times 1.png";
import savingsProduct from "../assets/images/savings-product.png";
import fees from "../assets/images/coins-solid 1.png";
import transactions from "../assets/images/transactions.png";
import services from "../assets/images/galaxy 1.png";
import account from "../assets/images/user-cog 1.png";
import settlements from "../assets/images/scroll 1.png";
import reports from "../assets/images/chart-bar 2.png";
import preferences from "../assets/images/sliders-h 1.png";
import pricing from "../assets/images/badge-percent 1.png";
import logs from "../assets/images/clipboard-list 1.png";
import systems from "../assets/images/tire 1.png";
import logout from "../assets/images/sign-out 1.png";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="sidebar">
      <p className="mt-4">
        <img src={briefcase} alt="switch" className="mx-2" />
        Switch Organisation
      </p>
      <p>
        <Link to="/">
          <img src={home} alt="dashboard" className="mx-2" /> Dashboard
        </Link>
      </p>
      <div>
        <div className="side-header">
          <h6>CUSTOMERS</h6>
          <Link to="/users">
            <small>
              <img src={users} alt="users" className="mx-2" />
              Users
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={guarantors} alt="guarantors" className="mx-2" />
              Guarantors
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={loans} alt="loans" className="mx-2" />
              Loans
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={decisions} alt="decisions" className="mx-2" />
              Decision Model
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={savings} alt="savings" className="mx-2" />
              Savings
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={request} alt="request" className="mx-2" />
              Loan Requests
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={whitelist} alt="whitelist" className="mx-2" />
              Whitelist
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={karma} alt="karma" className="mx-2" />
              Karma
            </small>
          </Link>
        </div>
        <div className="side-header">
          <h6>BUSINESS</h6>
          <Link to="/users">
            <small>
              <img src={briefcase} alt="organization" className="mx-2" />
              Organization
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={request} alt="loan products" className="mx-2" />
              Loan Products
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img
                src={savingsProduct}
                alt="savings-product"
                className="mx-2"
              />
              Savings Products
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={fees} alt="fees" className="mx-2" />
              Fees and Charges
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={transactions} alt="transactions" className="mx-2" />
              Transactions
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={services} alt="services" className="mx-2" />
              Services
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={account} alt="account" className="mx-2" />
              Service Accoount
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={settlements} alt="settlements" className="mx-2" />
              Settlements
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={reports} alt="reports" className="mx-2" />
              Reports
            </small>
          </Link>
        </div>
        <div className="side-header mb-5">
          <h6>SETTINGS</h6>
          <Link to="/users">
            <small>
              <img src={preferences} alt="preferences" className="mx-2" />
              Preferences
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={pricing} alt="pricing" className="mx-2" />
              Fees and Pricing
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={logs} alt="logs" className="mx-2" />
              Audit Logs
            </small>
          </Link>
          <Link to="/users">
            <small>
              <img src={systems} alt="systems" className="mx-2" />
              Systems Messages
            </small>
          </Link>
        </div>
        <div className="side-header">
          <hr />
          <Link to="/login">
            <small
              className="mt-1"
              onClick={() => (window.location.href = "/")}
            >
              <img src={logout} alt="logout" className="mx-2" />
              Logout
            </small>
          </Link>
        </div>
      </div>
      <div></div>
      <p className="mb-5 mt-3 mx-2">v.1.2.0</p>
    </div>
  );
};

export default Sidebar;
