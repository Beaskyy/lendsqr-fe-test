import "../Styles/users.css";
import usersImage from "../assets/images/users.png";
import activeUsers from "../assets/images/users.png";
import loans from "../assets/images/loans.png";
import savings from "../assets/images/savings.png";
import filter from "../assets/images/filter.png";
import dot from "../assets/images/dot.png";
import { AiOutlineEye } from "react-icons/ai";
import { BiUserX } from "react-icons/bi";
import { FiUserCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="users">
      <div className="container">
        <div className="row">
          <h4 className="mt-5">Users</h4>
        </div>
        <div className="row">
          <div className="col-md-3 mb-4">
            <Link to="/users">
              <div className="card">
                <div className="card-body">
                  <div className="user">
                    <img src={usersImage} alt="users" className="img-fluid" />
                    <span>users</span>
                    <h3>2,453</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4">
            <Link to="/users">
              <div className="card">
                <div className="card-body">
                  <div className="user">
                    <img src={activeUsers} alt="users" className="img-fluid" />
                    <span>active users</span>
                    <h3>2,453</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4">
            <Link to="/users">
              <div className="card">
                <div className="card-body">
                  <div className="user">
                    <img src={loans} alt="users" className="img-fluid" />
                    <span>users with loans</span>
                    <h3>12,453</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-4">
            <Link to="/users">
              <div className="card">
                <div className="card-body">
                  <div className="user">
                    <img src={savings} alt="users" className="img-fluid" />
                    <span>users with savings</span>
                    <h3>102,453</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">
                          ORGANISATION
                          <span className="dropdown">
                            <span
                              className="btn"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img
                                src={filter}
                                alt="filter"
                                className="img-fluid"
                              />
                            </span>
                            <div className="dropdown-menu">
                              <div className="dropdown-item">
                                <form>
                                  <div className="my-3">
                                    <label htmlFor="organisation">
                                      organisation
                                    </label>
                                    <div className="mb-4">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example"
                                      >
                                        <option value="1">FintTech</option>
                                        <option value="2">Banking</option>
                                        <option value="3">Transport</option>
                                      </select>
                                    </div>
                                    <label htmlFor="username">Username</label>
                                    <div className="mb-4">
                                      <input
                                        type="text"
                                        className="form-control shadow-none"
                                        placeholder="User"
                                        style={{ width: "250px" }}
                                      />
                                    </div>
                                    <label htmlFor="email">Email</label>
                                    <div className="mb-4">
                                      <input
                                        type="email"
                                        className="form-control shadow-none"
                                        placeholder="Email"
                                        style={{ width: "250px" }}
                                      />
                                    </div>
                                    <label htmlFor="date">date</label>
                                    <div className="mb-4">
                                      <input
                                        type="date"
                                        className="form-control shadow-none"
                                        style={{ width: "250px" }}
                                      />
                                    </div>
                                    <label htmlFor="phone number">
                                      Phone Number
                                    </label>
                                    <div className="mb-4">
                                      <input
                                        type="Phone Number"
                                        className="form-control shadow-none"
                                        placeholder="Phone Number"
                                        style={{ width: "250px" }}
                                      />
                                    </div>
                                    <label htmlFor="status">Status</label>
                                    <div className="mb-4">
                                      <select
                                        className="form-select shadow-none"
                                        aria-label="Default select example"
                                      >
                                        <option
                                          value="active"
                                          className="text-active"
                                        >
                                          Active
                                        </option>
                                        <option
                                          value="pending"
                                          className="text-pending"
                                        >
                                          Pending
                                        </option>
                                        <option
                                          value="inactive"
                                          className="text-inactive"
                                        >
                                          Inactive
                                        </option>
                                        <option
                                          value="blacklisted"
                                          className="text-blacklisted"
                                        >
                                          Blacklisted
                                        </option>
                                      </select>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                      <div className="col text-center">
                                        <button className="reset">Reset</button>
                                      </div>
                                      <div className="col text-center">
                                        <button className="filter">
                                          Filter
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </span>
                        </th>
                        <th scope="col" className="pb-3">
                          USERNAME
                          <span>
                            <img
                              src={filter}
                              alt="filter"
                              className="img-fluid px-2"
                            />
                          </span>
                        </th>
                        <th scope="col" className="pb-3">
                          EMAIL{" "}
                          <span>
                            <img
                              src={filter}
                              alt="filter"
                              className="img-fluid px-2"
                            />
                          </span>
                        </th>
                        <th scope="col" className="pb-3">
                          PHONE{" "}
                          <span>
                            <img
                              src={filter}
                              alt="filter"
                              className="img-fluid px-2"
                            />
                          </span>
                        </th>
                        <th className="pb-3">
                          DATE JOINED{" "}
                          <span>
                            <img
                              src={filter}
                              alt="filter"
                              className="img-fluid px-2"
                            />
                          </span>
                        </th>
                        <th className="pb-3">STATUS </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td className="text-inactive">
                          <button className="btn-inactive">inactive</button>
                        </td>
                        <td className="dropdown">
                          <div className="">
                            <span
                              className="dots"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src={dot} alt="dot" className="img-fluid" />
                            </span>
                            <ul className="dropdown-menu">
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <AiOutlineEye /> View Details
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <BiUserX /> Blacklist User
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <FiUserCheck /> Activate User
                                </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td className="text-active">
                          <button className="btn-pending">pending</button>
                        </td>
                        <td className="dropdown">
                          <div className="">
                            <span
                              className="dots"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src={dot} alt="dot" className="img-fluid" />
                            </span>
                            <ul className="dropdown-menu">
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <AiOutlineEye /> View Details
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <BiUserX /> Blacklist User
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <FiUserCheck /> Activate User
                                </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td className="text-active">
                          <button className="btn-blacklisted">
                            blacklisted
                          </button>
                        </td>
                        <td className="dropdown">
                          <div className="">
                            <span
                              className="dots"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src={dot} alt="dot" className="img-fluid" />
                            </span>
                            <ul className="dropdown-menu">
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <AiOutlineEye /> View Details
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <BiUserX /> Blacklist User
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <FiUserCheck /> Activate User
                                </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td className="text-active">
                          <button className="btn-active">active</button>
                        </td>
                        <td className="dropdown">
                          <div className="">
                            <span
                              className="dots"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src={dot} alt="dot" className="img-fluid" />
                            </span>
                            <ul className="dropdown-menu">
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <AiOutlineEye /> View Details
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <BiUserX /> Blacklist User
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <FiUserCheck /> Activate User
                                </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Lendsqr</td>
                        <td>Adedeji</td>
                        <td>adedeji@lendsqr.com</td>
                        <td>08078903721</td>
                        <td>May 15, 2020 10:00 AM</td>
                        <td className="text-active">
                          <button className="btn-active">active</button>
                        </td>
                        <td className="dropdown">
                          <div className="">
                            <span
                              className="dots"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <img src={dot} alt="dot" className="img-fluid" />
                            </span>
                            <ul className="dropdown-menu">
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <AiOutlineEye /> View Details
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <BiUserX /> Blacklist User
                                </span>
                              </li>
                              <li className="view-details">
                                <span className="dropdown-item">
                                  <FiUserCheck /> Activate User
                                </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
