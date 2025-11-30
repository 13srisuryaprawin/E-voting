import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Rgesitration.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [VoterIdNumber, setVoterIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [booth, setBooth] = useState("");
  const [error, setError] = useState("");
  const [tiruppur, setTiruppur] = useState([]);

  useEffect(() => {
    axios
      .get("/json-Files/tiruppurbooth.json")
      .then((tup) => setTiruppur(tup.data));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("Registration Data")) || [];

    if (users.length === 0) {
      setError("No user data found. Please register first.");
      navigate("/register");
      return;
    }

    const validUser = users.find(
      (u) =>
        u.FullName === fullname &&
        u.VoterIdNumber === VoterIdNumber &&
        u.Password === password
    );

    if (validUser) {
      alert("Login Successful!");

      const loggedUserData = {
        ...validUser,
        Booth: booth,
      };

  
      let loggedUsers = JSON.parse(localStorage.getItem("loggedUsers")) || [];

   
      if (!Array.isArray(loggedUsers)) {
        loggedUsers = [loggedUsers];
      }

      loggedUsers.push(loggedUserData);

      localStorage.setItem("loggedUsers", JSON.stringify(loggedUsers));
  

      const boothRoutes = {
        Dharapuram: "/votingbooth/dharapuram",
        Kangayam: "/votingbooth/kangayam",
        Avanashi: "/votingbooth/avanashi",
        TiruppurNorth: "/votingbooth/tiruppurnorth",
        TiruppurSouth: "/votingbooth/tiruppursouth",
        Palladam: "/votingbooth/palladam",
        Udumalaipettai: "/votingbooth/udumalaipettai",
        Madathukulam: "/votingbooth/madathukulam",
      };

      navigate(boothRoutes[booth.trim()]);
    } else {
      setError("Invalid Full Name, Voter ID or Password");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-5">
          <div className="card shadow p-4 p-md-5">
            <h3 className="text-center mb-4 fw-bold text-success">
              User Login
            </h3>

            {error && <p className="text-danger text-center">{error}</p>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Enter Your Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter Your Voter ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={VoterIdNumber}
                  onChange={(e) => setVoterIdNumber(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Enter Your Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Select Your Booth</label>
                <select
                  className="form-control"
                  value={booth}
                  onChange={(e) => setBooth(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Booth
                  </option>
                  {tiruppur.map((t) => (
                    <option key={t.name} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              <button className="btn btn-success w-100 py-2 fw-bold">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
