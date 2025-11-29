import { useState } from "react";
import * as Yup from "yup";
import "../styles/Rgesitration.css";
import { useNavigate } from "react-router-dom";




function Register() {
  const navigate=useNavigate()
  
  const [userdata, setUserdata] = useState({
    FullName: "",
    Age: "",
    Gender: "",
    PhoneNumber: "",
    Address: "",
    VoterIdNumber: "",
    Password: "",
    ComfirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateschema = Yup.object({
    FullName: Yup.string().required("Full Name Is Required"),

    Age: Yup.number()
      .typeError("Age Must Be A Number")
      .required("Age Is Required")
      .min(18, "You Must Be At least 18 Years Old")
      .max(100, "You Cannot Be Older Than 100 Years"),

    Gender: Yup.string().required("Gender Is Required"),

    PhoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),

    Address: Yup.string()
      .matches(/^[A-Za-z0-9\s,.-]{5,100}$/, "Address length must be 5–100 characters")
      .required("Enter the Address"),

    VoterIdNumber: Yup.string()
      .matches(/^[A-Z]{3}\d{7}$/, "Invalid Voter ID format (e.g., ABC1234567)")
      .required("Voter ID is required"),

    Password: Yup.string()
      .matches(
        /^(?=.*[A-Z])(?=.*\d).{6,}$/,
        "At least 1 uppercase + at least 1 number + minimum 6 characters"
      )
      .required("Enter the valid password"),

    ComfirmPassword: Yup.string()
      .oneOf([Yup.ref("Password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valid = await validateschema.isValid(userdata);


    if (valid) {
      setErrors({});
      alert("Form Submitted Successfully!");
      console.log("Form Data:", userdata);
      // localStorage.setItem("Registration Data", JSON.stringify(userdata));
      let existingData = JSON.parse(localStorage.getItem("Registration Data")) || [];
       if (!Array.isArray(existingData)) {
    existingData = [];
  }
       existingData.push(userdata);
      localStorage.setItem("Registration Data", JSON.stringify(existingData));

      navigate("/login")

      return
    }    

    const err = await validateschema
      .validate(userdata, { abortEarly: false })
      .catch((e) => e);

    const newErrors = {};
    err.inner.forEach((e) => {
      newErrors[e.path] = e.message;
    });

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  return (
    <div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-12 col-sm-10 col-md-8 col-lg-6">

      <div className="card shadow p-4 p-md-5">
        <h3 className="text-center mb-4 fw-bold text-success">
          User Registration
        </h3>

        <form onSubmit={handleSubmit}>

         
          <div className="mb-3">
            <label className="form-label">Enter Your Full Name</label>
            <input
              type="text"
              name="FullName"
              className="form-control"
              value={userdata.FullName}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.FullName}</small>
          </div>

          <div className="mb-3">
            <label className="form-label">Enter Your Age</label>
            <input
              type="text"
              name="Age"
              className="form-control"
              value={userdata.Age}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.Age}</small>
          </div>

      
          <div className="mb-3">
            <label className="form-label">Select Your Gender</label>
            <select
              name="Gender"
              className="form-select"
              value={userdata.Gender}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <small className="text-danger">{errors.Gender}</small>
          </div>

          
          <div className="mb-3">
            <label className="form-label">Enter Your Mobile Number</label>
            <input
              type="text"
              name="PhoneNumber"
              className="form-control"
              value={userdata.PhoneNumber}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.PhoneNumber}</small>
          </div>

          <div className="mb-3">
            <label className="form-label">Enter Your Address</label>
            <textarea
              name="Address"
              className="form-control"
              style={{ height: "80px" }}
              value={userdata.Address}
              onChange={handleChange}
            ></textarea>
            <small className="text-danger">{errors.Address}</small>
          </div>

    
          <div className="mb-3">
            <label className="form-label">Enter Your Voter ID Number</label>
            <input
              type="text"
              name="VoterIdNumber"
              className="form-control"
              value={userdata.VoterIdNumber}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.VoterIdNumber}</small>
          </div>

      
          <div className="mb-3">
            <label className="form-label">Create Your Password</label>
            <input
              type="password"
              name="Password"
              className="form-control"
              value={userdata.Password}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.Password}</small>
          </div>


          <div className="mb-4">
            <label className="form-label">Re-enter Password</label>
            <input
              type="password"
              name="ComfirmPassword"
              className="form-control"
              value={userdata.ComfirmPassword}
              onChange={handleChange}
            />
            <small className="text-danger">{errors.ComfirmPassword}</small>
          </div>

          <button type="submit" className="btn btn-success w-100 py-2 fw-bold">
            Register Your Details
          </button>
        </form>

      </div>

    </div>
  </div>


</div>
  );
}

export default Register;
