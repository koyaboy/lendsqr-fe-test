import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import "./FilterDropdown.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FilterDropdownProps {
  anchorEl: Element | (() => Element) | null | undefined;
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  onFilter: (filters: Record<string, any>) => void;
  onReset: () => void;
}

const FilterDropdown = ({
  anchorEl,
  onClose,
  onFilter,
  onReset,
}: FilterDropdownProps) => {
  const [organization, setOrganization] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [phone, setPhone] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const handleReset = () => {
    setOrganization("");
    setUsername("");
    setEmail("");
    setDate(null);
    setPhone("");
    setStatus("");

    onReset();
  };

  const handleFilter = (event: React.FormEvent) => {
    event.preventDefault();
    const filters = {
      organization,
      username,
      email,
      date,
      phone,
      status,
    };
    onFilter(filters);
    onClose({}, "backdropClick");
  };

  return (
    <div className="popover">
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="filter-dropdown-container">
          <Typography component="div" sx={{ p: 2 }}>
            <form className="form" onSubmit={handleFilter}>
              <div className="form-content-container">
                <div className="group">
                  <label htmlFor="organization">Organization</label>
                  <div className="custom-select-filter-wrapper">
                    <select
                      className="custom-select-filter"
                      name="organization"
                      id="organization"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="lendstar">Lendstar</option>
                      <option value="lendsqr">Lendsqr</option>
                      <option value="Kredi MFB">Kredi MFB</option>
                      <option value="Paycient">Paycient</option>
                      <option value="Irorun">Irorun</option>
                    </select>
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="User"
                    className="input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="date">Date</label>
                  <DatePicker
                    showIcon
                    selected={date}
                    onChange={(date) => setDate(date)}
                    placeholderText="Date"
                    icon={
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9919 2.16002H12.7037V0.768152C12.7037 0.560024 12.5437 0.400024 12.3356 0.400024H10.6562C10.4481 0.400024 10.2881 0.560024 10.2881 0.768152V2.16002H5.7118V0.768152C5.7118 0.560024 5.5518 0.400024 5.34367 0.400024H3.66367C3.45554 0.400024 3.29554 0.560024 3.29554 0.768152V2.16002H1.00802C0.816149 2.16002 0.639893 2.32002 0.639893 2.52815V15.2482C0.639893 15.4563 0.799893 15.6163 1.00802 15.6163H14.9917C15.1836 15.6163 15.3598 15.4563 15.3598 15.2482V2.52815C15.3598 2.32002 15.1836 2.16002 14.9917 2.16002H14.9919ZM11.0082 1.13628H11.9682V3.24812H11.0082V1.13628ZM4.01637 1.13628H4.97637V3.24812H4.01637V1.13628ZM14.6239 14.8638H1.37637V5.5038H14.6245L14.6239 14.8638Z"
                          fill="#545F7D"
                        />
                        <path
                          d="M3.19994 13.2164H4.91178C5.00803 13.2164 5.08803 13.1364 5.08803 13.0401V11.3119C5.08803 11.2157 5.00803 11.1357 4.91178 11.1357L3.19994 11.1363C3.10369 11.1363 3.02368 11.2163 3.02368 11.3126V13.0244C3.02368 13.1363 3.10368 13.2163 3.19994 13.2163V13.2164Z"
                          fill="#545F7D"
                        />
                        <path
                          d="M7.13635 13.2164H8.84819C8.94444 13.2164 9.02444 13.1364 9.02444 13.0401L9.02382 11.3119C9.02382 11.2157 8.94382 11.1357 8.84756 11.1357L7.13636 11.1363C7.04011 11.1363 6.96011 11.2163 6.96011 11.3126V13.0244C6.94386 13.1363 7.02386 13.2163 7.13636 13.2163L7.13635 13.2164Z"
                          fill="#545F7D"
                        />
                        <path
                          d="M11.0565 13.2164H12.7684C12.8646 13.2164 12.9446 13.1364 12.9446 13.0401L12.944 11.3119C12.944 11.2157 12.864 11.1357 12.7677 11.1357L11.0565 11.1363C10.9603 11.1363 10.8803 11.2163 10.8803 11.3126V13.0244C10.864 13.1363 10.944 13.2163 11.0565 13.2163L11.0565 13.2164Z"
                          fill="#545F7D"
                        />
                        <path
                          d="M3.19994 9.26372H4.91178C5.00803 9.26372 5.08803 9.18372 5.08803 9.08746V7.37627C5.08803 7.28002 5.00803 7.20001 4.91178 7.20001H3.19994C3.10369 7.20001 3.02368 7.28001 3.02368 7.37627V9.0881C3.02368 9.18373 3.10368 9.26374 3.19994 9.26374V9.26372Z"
                          fill="#545F7D"
                        />
                        <path
                          d="M7.13635 9.26372H8.84819C8.94444 9.26372 9.02444 9.18372 9.02444 9.08746L9.02382 7.37627C9.02382 7.28002 8.94382 7.20001 8.84756 7.20001H7.13636C7.04011 7.20001 6.96011 7.28001 6.96011 7.37627V9.0881C6.94386 9.18373 7.02386 9.26374 7.13636 9.26374L7.13635 9.26372Z"
                          fill="#545F7D"
                        />
                        <path
                          d="M11.0565 9.26372H12.7684C12.8646 9.26372 12.9446 9.18372 12.9446 9.08746L12.944 7.37627C12.944 7.28002 12.864 7.20001 12.7677 7.20001H11.0565C10.9603 7.20001 10.8803 7.28001 10.8803 7.37627V9.0881C10.864 9.18373 10.944 9.26374 11.0565 9.26374L11.0565 9.26372Z"
                          fill="#545F7D"
                        />
                      </svg>
                    }
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Phone Number"
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="group">
                  <label htmlFor="status">Status</label>
                  <div className="custom-select-filter-wrapper">
                    <select
                      className="custom-select-filter"
                      name="status"
                      id="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Blacklisted">Blacklisted</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="buttons-container">
                <button type="button" className="reset" onClick={handleReset}>
                  Reset
                </button>
                <button type="submit" className="filter">
                  Filter
                </button>
              </div>
            </form>
          </Typography>
        </div>
      </Popover>
    </div>
  );
};

export default FilterDropdown;
