import React, { useState } from "react";
import { Link } from "react-router-dom";
import Homee from "../assets/computer-icons-home-house-martinez-building-house-removebg-preview.png";

function MyForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!firstName || !lastName || !email || !phone || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    // Perform further validation or form submission logic here

    console.log("Form submitted!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setError(""); // Clear error message
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" justify-start">
        <div className=" flex mt-28   ">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2   border-black border-2 mx-2 w-80 h-16  rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Second Name"
            value={lastName}
            className="p-2  border-black border-2  mx-2 w-80 h-16  rounded-lg"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="flex">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2  border-black border-2  mt-3  mx-2 w-80 h-16  rounded-lg"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2   mx-2 w-80 h-16 mt-3 rounded-lg  border-black border-2"
            required
          />
        </div>
        <textarea
          placeholder="Text Box"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-5 w-80 h-48  p-3 rounded border-black border-2
          "
          required
        />
        <br />
        <div className="flex">
          <button
            type="submit"
            className="w-40 h-16   font-bold mx-10 bg-black rounded-full  text-white p-3 mt-8 my-7"
          >
            Submit
          </button>
          {error && <p className="error">{error}</p>}

          <div className="w-40 h-16   bg-white rounded-full    p-3 mt-8 my-7">
            <Link to="/" className="flex">
              <img src={Homee} alt="" className="px-2 w-10 h-5" />
              <p className="text-orange-400 font-bold">Home</p>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default MyForm;
