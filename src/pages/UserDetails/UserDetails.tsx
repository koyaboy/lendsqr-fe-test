import React, { useEffect, useState } from "react";
import type { Users } from "../../models/Users";
import "./UserDetails.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [users, setUsers] = useState<Users[]>(
    JSON.parse(localStorage.getItem("Users") || "")
  );

  const [user, setUser] = useState<Users>();
  const { userId } = useParams();

  useEffect(() => {
    const user = users.find((user) => user._id == userId);
    setUser(user);
  }, []);

  return (
    <>
      <Link to={"/"}>
        <button className="back-btn">
          <svg
            width="28"
            height="10"
            viewBox="0 0 28 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z"
              fill="#545F7D"
            />
          </svg>

          <span>Back to Users</span>
        </button>
      </Link>

      {user && (
        <>
          <div className="heading-container">
            <h1>User Details</h1>

            <div className="actions">
              <button className="blacklist">BLACKLIST USER</button>
              <button className="activate">ACTIVATE USER</button>
            </div>
          </div>
          <section className="details details-one">
            <div className="profile-container">
              <div className="user-container">
                <div className="img-container">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.04053 31.1796C2.47961 28.2202 3.79365 25.6264 5.97961 23.4C8.74053 20.6 12.0732 19.2 15.9796 19.2C19.886 19.2 23.2204 20.6 25.9796 23.4C28.1796 25.6266 29.5062 28.2204 29.9593 31.1796M24.1405 10.0204C24.1405 12.247 23.3468 14.1532 21.7593 15.7408C20.1734 17.3408 18.253 18.1408 16.0001 18.1408C13.7594 18.1408 11.8409 17.3408 10.2409 15.7408C8.65337 14.1533 7.85965 12.247 7.85965 10.0204C7.85965 7.76727 8.65341 5.84679 10.2409 4.25959C11.8409 2.67367 13.7596 1.87991 16.0001 1.87991C18.2532 1.87991 20.1737 2.67367 21.7593 4.25959C23.3468 5.84711 24.1405 7.76739 24.1405 10.0204Z"
                      stroke="#213F7D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="user-info">
                  <h2>{user.username}</h2>
                  <p>{user.ref}</p>
                </div>
              </div>

              <div className="tier-container">
                <h2>User's Tier</h2>
                <div className="stars">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.98572 0.287513C7.85197 0.293138 7.73572 0.381263 7.69447 0.508761L6.18759 5.17996L1.28071 5.16996C1.14196 5.16996 1.01821 5.25934 0.975716 5.39121C0.932591 5.52371 0.980091 5.66809 1.09259 5.74996L5.06891 8.62676L3.54203 13.293C3.49891 13.4249 3.54578 13.5699 3.65828 13.6511C3.77016 13.733 3.92265 13.733 4.03454 13.6511L7.9995 10.758L11.9657 13.6511C12.0776 13.733 12.2301 13.733 12.342 13.6511C12.4545 13.5699 12.5014 13.4249 12.4582 13.293L10.9314 8.62676L14.9077 5.74996C15.0202 5.66809 15.0677 5.52371 15.0246 5.39121C14.9814 5.25933 14.8583 5.16996 14.7196 5.17059L9.81269 5.18059L8.30393 0.509385V0.50876C8.25956 0.371885 8.12957 0.28188 7.98581 0.287512L7.98572 0.287513Z"
                      fill="#E9B200"
                    />
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                      fill="#E9B200"
                    />
                  </svg>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                      fill="#E9B200"
                    />
                  </svg>
                </div>
              </div>

              <div className="bank-info-container">
                <p className="amount">₦{user.loan_repayment}.00</p>
                <p className="bank-account">
                  {user.account_number}/{user.bank}
                </p>
              </div>
            </div>

            <nav>
              <ul>
                <li>
                  <a href="" className="active">
                    General Details
                  </a>
                </li>
                <li>
                  <a href="">Documents</a>
                </li>
                <li>
                  <a href="">Bank Details</a>
                </li>
                <li>
                  <a href="">Loans</a>
                </li>
                <li>
                  <a href="">Savings</a>
                </li>
                <li>
                  <a href="">App and System</a>
                </li>
              </ul>
            </nav>
          </section>

          <section className="details">
            <section>
              <h3>Personal Information</h3>

              <div className="info-container">
                <div className="info">
                  <h3 className="title">FULL NAME</h3>
                  <p className="desc">{user.username}</p>
                </div>
                <div className="info">
                  <h3 className="title">PHONE NUMBER</h3>
                  <p className="desc">{user.phone}</p>
                </div>
                <div className="info">
                  <h3 className="title">EMAIL ADDRESS</h3>
                  <p className="desc">{user.email}</p>
                </div>
                <div className="info">
                  <h3 className="title">BVN</h3>
                  <p className="desc">{user.bvn}</p>
                </div>
                <div className="info">
                  <h3 className="title">GENDER</h3>
                  <p className="desc">{user.gender}</p>
                </div>
                <div className="info">
                  <h3 className="title">MARTIAL STATUS</h3>
                  <p className="desc">{user.marital_status}</p>
                </div>
                <div className="info">
                  <h3 className="title">CHILDREN</h3>
                  <p className="desc">{user.children}</p>
                </div>
                <div className="info">
                  <h3 className="title">TYPE OF RESIDENCE</h3>
                  <p className="desc">{user.type_of_residence}</p>
                </div>
              </div>
            </section>

            <section>
              <h3>Education and Employment</h3>

              <div className="info-container">
                <div className="info">
                  <h3 className="title">LEVEL OF EDUCATION</h3>
                  <p className="desc">{user.level_of_education}</p>
                </div>
                <div className="info">
                  <h3 className="title">EMPLOYMENT STATUS</h3>
                  <p className="desc">{user.employment_status}</p>
                </div>
                <div className="info">
                  <h3 className="title">SECTOR OF EMPLOYMENT</h3>
                  <p className="desc">{user.sector_of_employment}</p>
                </div>
                <div className="info">
                  <h3 className="title">DURATION OF EMPLOYMENT</h3>
                  <p className="desc">{user.duration_of_employment}</p>
                </div>
                <div className="info">
                  <h3 className="title">OFFICE EMAIL</h3>
                  <p className="desc">{user.office_email}</p>
                </div>
                <div className="info">
                  <h3 className="title">MONTHLY INCOME</h3>
                  <p className="desc">{user.monthly_income}</p>
                </div>
                <div className="info">
                  <h3 className="title">LOAN REPAYMENT</h3>
                  <p className="desc">{user.loan_repayment}</p>
                </div>
                <div className="info">
                  <h3 className="title">TYPE OF RESIDENCE</h3>
                  <p className="desc">{user.type_of_residence}</p>
                </div>
              </div>
            </section>

            <section>
              <h3>SOCIALS</h3>

              <div className="info-container">
                <div className="info">
                  <h3 className="title">TWITTER</h3>
                  <p className="desc">{user.twitter}</p>
                </div>
                <div className="info">
                  <h3 className="title">FACEBOOK</h3>
                  <p className="desc">{user.facebook}</p>
                </div>
                <div className="info">
                  <h3 className="title">INSTAGRAM</h3>
                  <p className="desc">{user.instagram}</p>
                </div>
              </div>
            </section>

            <section>
              <h3>GUARANTOR</h3>

              <div className="info-container">
                <div className="info">
                  <h3 className="title">FULL NAME</h3>
                  <p className="desc">{user.guarantor_full_name}</p>
                </div>
                <div className="info">
                  <h3 className="title">PHONE NUMBER</h3>
                  <p className="desc">{user.guarantor_phone}</p>
                </div>
                <div className="info">
                  <h3 className="title">EMAIL ADDRESS</h3>
                  <p className="desc">{user.guarantor_email}</p>
                </div>
                <div className="info">
                  <h3 className="title">RELATIONSHIP</h3>
                  <p className="desc">{user.guarantor_relationship}</p>
                </div>
              </div>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default UserDetails;
