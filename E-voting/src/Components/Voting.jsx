import { useState, useEffect } from "react";
import axios from "axios";

function Voting() {
  const [user, setUser] = useState({});
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedUser);
  }, []);

  useEffect(() => {
    axios
      .get("/json-Files/Cmcandidates.json")
      .then((res) => setCandidates(res.data));
  }, []);

  const vote = (candidateId) => {
    if (user?.voted) {
      alert("You already voted!");
      return;
    }

    alert("Vote submitted!");

    const updatedUser = { ...user, voted: true, votedFor: candidateId };
    setUser(updatedUser);

    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
  };

  return (
    <>
      <div className="container my-4 mt-5 pt-5 mb-5">
        <div className="row g-4">
          {Array.isArray(candidates) &&
            candidates.map((c) => (
              <div className="col-12 col-md-6 col-lg-3" key={c.name}>
                <div
                  className="card position-relative text-center p-3 "
                  style={{ backgroundColor: "#f10a0a32", border: "2px solid" }}
                >
                  <div className="mt-3">
                    <img
                      src={c.leader_image}
                      alt="Leader"
                      style={{
                        width: "180px",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "12px",
                        border: "2px solid black",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "50%",
                      height: "80px",
                      overflow: "hidden",
                      borderRadius: "2%",
                    }}
                    className="mx-auto mt-2"
                  >
                    <img
                      src={c.flag_image}
                      alt="Background"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        border: "2px solid white",
                      }}
                    />
                  </div>

                  <h5 className="mt-3">{c.name}</h5>
                  <button className="btn-primary">Vote</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Voting;
