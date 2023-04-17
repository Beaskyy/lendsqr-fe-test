import "../Styles/user-details.css";
import back from "../assets/images/back.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

type Props = {};

type UserDetail = {
  accountBalance: string;
  accountNumber: string;
  education: {
    level: string;
    duration: string;
    employmentStatus: string;
    loanRepayment: string;
    monthlyIncome: {
      0: string;
      1: string;
    };
    officeEmail: string;
    sector: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    gender: string;
  };
  phoneNumber: string;
  email: string;
  profile: {
    avatar: string;
    firstName: string;
    lastName: string;
    bvn: string;
    currency: string;
    gender: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
};

const UserDetails = (props: Props) => {
  const [user, setUser] = useState<UserDetail | null>(null);

  const { id } = useParams();

  // Fetch Data from api
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchUsers = async () => {
      try {
        const baseURL = process.env.REACT_APP_URL;
        const response = await fetch(`${baseURL}/users/${id}`);
        const data = await response.json();
        console.log(data, "fetched data here");
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [id]);
  return (
    <div className="user-details">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/users"><img src={back} alt="back" className="img-fluid" />
            <span className="mx-4">Back to Users</span></Link>
          </div>
        </div>
        <div className="details">
          <div>
            <h4>User Details</h4>
          </div>
          <div>
            <button className="blacklist-user mb-4">BLACKLIST USER</button>
            <button className="activate-user">ACTIVATE USER</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card my-5">
              <div className="card-body">
                <div className="row user-info">
                  <div className="col-md-8">
                    <div className="row m-2 mt-3">
                      <div className="col-md-2 ">
                        <img
                          src={user?.profile?.avatar}
                          alt="avatar"
                          className="img-fluid mb-3"
                        />
                      </div>
                      <div className="col-md-4 mb-4 name">
                        <h5>
                          {user?.profile?.firstName} {user?.profile?.lastName}
                        </h5>
                        <small>{user?.accountNumber}</small>
                      </div>
                      <div className="col-md-2 px-4 mb-4 tier">
                        <h5>User’s Tier</h5>
                        <small>
                          <AiFillStar />
                          <AiOutlineStar />
                          <AiOutlineStar />
                        </small>
                      </div>
                      <div className="col-md-4 mb-3 amount">
                        <h5>₦ {user?.accountBalance}</h5>
                        <small>9912345678/Providus Bank</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row"></div>
                <div className="general">
                  <div className="row text-center">
                    <div className="row">
                      <div className="col-md-2">
                        <span className="details general-details pb-2">General Details</span>
                      </div>
                      <div className="col-md-2">
                        <span className="general-details pb-2">Documents</span>
                      </div>
                      <div className="col-md-2">
                        <span className="general-details pb-2">Bank Details</span>
                      </div>
                      <div className="col-md-2">
                        <span className="general-details pb-2">Loans</span>
                      </div>
                      <div className="col-md-2">
                        <span className="general-details pb-2">Savings</span>
                      </div>
                      <div className="col-md-2">
                        <span className="general-details pb-2">App and System</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row info">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body px-5">
                <h5>Personal Information</h5>
                <div className="row">
                  <div className="col">
                    <h6>FULL NAME</h6>
                    <p>
                      {user?.profile?.firstName} {user?.profile?.lastName}
                    </p>
                  </div>
                  <div className="col">
                    <h6>PHONE</h6>
                    <p>{user?.phoneNumber}</p>
                  </div>
                  <div className="col">
                    <h6>EMAIL ADDRESS</h6>
                    <p>{user?.email}</p>
                  </div>
                  <div className="col">
                    <h6>BVN</h6>
                    <p>{user?.profile?.bvn}</p>
                  </div>
                  <div className="col">
                    <h6>GENDER</h6>
                    <p>{user?.profile?.gender}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>MARITAL STATUS</h6>
                    <p>Single</p>
                  </div>
                  <div className="col">
                    <h6>CHILDREN</h6>
                    <p>None</p>
                  </div>
                  <div className="col">
                    <h6>TYPE OF RESIDENCE</h6>
                    <p>Parent’s Apartment</p>
                  </div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <hr />
                </div>
                <h5>Education and Employment</h5>
                <div className="row">
                  <div className="col">
                    <h6>level of education</h6>
                    <p>{user?.education?.level}</p>
                  </div>
                  <div className="col">
                    <h6>employment status</h6>
                    <p>{user?.education?.employmentStatus}</p>
                  </div>
                  <div className="col">
                    <h6>sector of employment</h6>
                    <p>{user?.education?.sector}</p>
                  </div>
                  <div className="col">
                    <h6>Duration of employment</h6>
                    <p>{user?.education?.duration}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>office email</h6>
                    <p>{user?.education?.officeEmail}</p>
                  </div>
                  <div className="col">
                    <h6>Monthly income</h6>
                    <p>
                      ₦{user?.education?.monthlyIncome[0]} - ₦
                      {user?.education?.monthlyIncome[1]}
                    </p>
                  </div>
                  <div className="col">
                    <h6>loan repayment</h6>
                    <p>{user?.education?.loanRepayment}</p>
                  </div>
                  <div className="col"></div>
                  <hr />
                </div>
                <h5>Socials</h5>
                <div className="row">
                  <div className="col">
                    <h6>Twitter</h6>
                    <p>{user?.socials?.twitter}</p>
                  </div>
                  <div className="col">
                    <h6>Facebook</h6>
                    <p>{user?.socials?.facebook}</p>
                  </div>
                  <div className="col">
                    <h6>Instagram</h6>
                    <p>{user?.socials?.instagram}</p>
                  </div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <hr />
                </div>
                <h5>Guarantor</h5>
                <div className="row">
                  <div className="col">
                    <h6>full Name</h6>
                    <p>
                      {user?.guarantor?.firstName} {user?.guarantor?.lastName}
                    </p>
                  </div>
                  <div className="col">
                    <h6>Phone Number</h6>
                    <p>{user?.guarantor?.phoneNumber}</p>
                  </div>
                  <div className="col">
                    <h6>Email Address</h6>
                    <p>debby@gmail.com</p>
                  </div>
                  <div className="col">
                    <h6>Relationship</h6>
                    <p>Sister</p>
                  </div>
                  <div className="col"></div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
