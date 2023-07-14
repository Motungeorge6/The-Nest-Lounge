import React, { useState } from "react";
import "../../pages/reserve/reserve.css";

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
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();

    if (fullName && date && company && description) {
      alert("Successful!");
    } else {
      alert("Unsuccessful. Please fill in all the required fields.");
    }
  }

  return (
    <div className="collaborate-container">
      <div className="inner-container">
        <div>
          <h1>MAKE A RESERVATION</h1>
          <p>
            lorem ipsum ghsatgcfxgxd vydaaaa ftdea5ax dxaxvyxx garxa5xeaxax
            adxrca fxaxy axdadxaxagxdb fxtdaaxa.xdarxsaxacxtaba vbdarxxaxf
            faxdaxa x axfax
          </p>
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
              {" "}
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
              <label htmlFor="company">Company</label>
              <input
                type="text"
                value={company}
                onChange={handleCompanyChange}
                placeholder="Company"
                id="company"
                name="company"
              />
            </section>
            <section>
              {" "}
              <input
                type="text"
                value={company}
                onChange={handleCompanyChange}
                placeholder="Company"
                id="company"
                name="company"
              />
            </section>
          </div>

          <textarea
            className="form-description"
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
