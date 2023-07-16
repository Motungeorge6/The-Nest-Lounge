import React, { useState } from "react";
import "../../pages/reserve/reserve.css";
import image from "../../assets/backgroundimage1.jpg";

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
    <div className="collaborate-container">
      <div className="inner-container">
        <div>
          <img
            src={image}
            alt="image"
            style={{
              width: "49vw",
              height: "100vh",
              overflow: "hidden",
            }}
          />
        </div>
      </div>
      <div className="form-container">
        <div className="form-inner">
          <div className="form-row">
            <section>
              {" "}
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
                id="fullName"
                name="FullName"
              />{" "}
            </section>
            <section>
              <label>Date Of Birth</label>
              <input
                type="date"
                placeholder="Date Of Birth"
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
              />
            </section>
          </div>

          <div className="form-row">
            <section>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="e.g @example.com"
                id="email"
                name="email"
              />
            </section>
            <section>
              {" "}
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="phone number"
                id="phoneNumber"
                name="phoneNumber"
              />
            </section>
            <section
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "space-between",
                gap: "22%",
                marginTop: "12%",
              }}
            >
              <section>
                <label htmlFor="phoneNumber">Type of Event</label>
                <select
                  name="event"
                  id="event"
                  value={event}
                  onChange={handleEventChange}
                  style={{
                    width: "250px",
                    height: "50px",
                    marginTop: "10%",
                    borderRadius: "7px",
                    backgroundColor: "rgb(225, 208, 182)",
                  }}
                >
                  <option value="">Select...</option>
                  <option>Birthday</option>
                  <option>Buffet</option>
                  <option>Friends Hangout</option>
                  <option>Office Hangout</option>
                  <option>Couple Special</option>
                  <option>Proposal</option>
                  <option>Bridal Shower</option>
                </select>
              </section>
              <section>
                <label htmlFor="">Number of people Attending</label>
                <input
                  type="number"
                  placeholder="No of people Attending"
                  id="attendees"
                  name="attendees"
                />
              </section>
            </section>
          </div>

          <div>
            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmit}
              style={{
                marginTop: "130px",
                marginLeft: "500px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
