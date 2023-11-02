import Popup from "reactjs-popup";
import "./index.css";
import { MdGroups2 } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const ReactPopUp = () => {
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phonenumberError, setPhoneNumberError] = useState("");
  const [error, setError] = useState("");

  const onSubmitSuccess = (event) => {
    event.preventDefault();
  };

  const onEnterFirstName = (event) => {
    if (event.target.value) {
      setFirstNameError("");
    } else {
      setFirstNameError("Please complete this required field.");
    }
  };

  const onEnterLastName = (event) => {
    if (event.target.value) {
      setLastNameError("");
    } else {
      setLastNameError("Please complete this required field.");
    }
  };
  const onEnterPhoneNumber = (event) => {
    if (event.target.value) {
      setPhoneNumberError("");
    } else {
      setPhoneNumberError("Please complete this required field.");
    }
  };

  const onEnterMail = (event) => {
    if (event.target.value.endsWith("@gmail.com")) {
      setError(
        "Please enter your business email address. This form does not accept addresses from gmail.com."
      );
    } else {
      setError("");
    }
  };

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <div type="button" className="trigger-button">
            <MdGroups2 className="react-icon1" />
            SECURE YOUR SEAT
          </div>
        }
      >
        {(close) => (
          <>
            <div className="login-bg">
              <div style={{ textAlign: "end" }}>
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <IoMdClose />
                </button>
              </div>
              <center>
                <h1 className="popup-heading">Register For The FREE Webinar</h1>
              </center>
              <form onSubmit={onSubmitSuccess}>
                <div className="input-flex">
                  <div>
                    <label id="firstname" className="label">
                      First Name<span className="for-span">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      htmlFor="firstname"
                      className="input2"
                      placeholder="First Name"
                      onChange={onEnterFirstName}
                    />
                    <p className="error">{firstNameError}</p>
                  </div>
                  <div>
                    <label id="lastname" className="label">
                      Last name<span className="for-span">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      htmlFor="lastname"
                      className="input2"
                      placeholder="Last name"
                      onChange={onEnterLastName}
                    />
                    <p className="error">{lastNameError}</p>
                  </div>
                </div>
                <label id="businessemail" className="label">
                  Business Email<span className="for-span">*</span>
                </label>
                <br />
                <input
                  type="email"
                  htmlFor="businessemail"
                  className="input2"
                  placeholder="Business Email"
                  onChange={onEnterMail}
                />
                <p className="error">{error}</p>
                <label id="phonenumber" className="label">
                  Phone Number
                </label>
                <br />
                <input
                  type="tel"
                  htmlFor="phonenumber"
                  className="input"
                  placeholder="Phone Number"
                  onChange={onEnterPhoneNumber}
                />
                <p className="error">{phonenumberError}</p>
                <center>
                  <a
                    href="https://resources.commlabindia.com/webinar/corporate-training-with-ai-exclusive-jan2024?submissionGuid=6983f554-83ea-4168-acb0-11a1956de947"
                    className="secure-your-seat-button"
                  >
                    SECURE YOUR SEAT
                  </a>
                </center>
              </form>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
};

export default ReactPopUp;
