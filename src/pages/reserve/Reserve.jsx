import React, { useState } from "react";
import "../../pages/reserve/reserve.css";
import image from "../../assets/backgroundimage1.jpg";
import backmg from "../../assets/Logo.png";

const Collaborate = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [event, setEvent] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleEventChange = (event) => {
    setEvent(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="reserve-cont">
      <div className="outta-container">
        <div className="inner-container">
          <div className="first-inner-cont">
            <div className="form-table">
              <div className="inputs">
                <div className="inputs-title">Full Name</div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={handleFullNameChange}
                  id="fullName"
                  name="FullName"
                />
              </div>
              <div className="inputs">
                <div className="inputs-title">Date Of Birth</div>
                <input
                  type="date"
                  placeholder="Date Of Birth"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleDateChange}
                />
              </div>

              <div className="inputs">
                <div className="inputs-title" htmlFor="email">
                  Email Address
                </div>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="e.g @example.com"
                  id="email"
                  name="email"
                />
              </div>

              <div className="inputs">
                <div className="inputs-title" htmlFor="phoneNumber">
                  Phone Number
                </div>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="phone number"
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </div>

              <div className="inputs">
                <div className="inputs-title" htmlFor="phoneNumber">
                  Type of Event
                </div>
                <select
                  name="event"
                  id="event"
                  value={event}
                  onChange={handleEventChange}
                  style={{
                    width: "250px",
                    height: "50px",
                    borderRadius: "7px",
                    backgroundColor: "rgb(225, 208, 182)",
                  }}
                >
                  <option value="">Select type of event...</option>
                  <option>Birthday</option>
                  <option>Buffet</option>
                  <option>Friends Hangout</option>
                  <option>Office Hangout</option>
                  <option>Couple Special</option>
                  <option>Proposal</option>
                  <option>Bridal Shower</option>
                </select>
              </div>
              <div className="inputs">
                <div className="inputs-title" htmlFor="">
                  Attendees
                </div>
                <input
                  type="number"
                  placeholder="Number of people Attending"
                  id="attendees"
                  name="attendees"
                />
              </div>

              <div className="submit-contai">
                <a className="submits-text" href="">
                  SUBMIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-outta-cont">
        <div className="tomove"></div>
        <img src={backmg} alt="" />
      </div>
    </div>
  );
};

export default Collaborate;
