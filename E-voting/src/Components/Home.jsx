import { IoFingerPrint } from "react-icons/io5";
import evote1 from "../assets/images/evote2.png";
import axios from "axios";
import { useState,useEffect } from "react";



function Home() {
  
  
  const [data, setData] = useState([]);

  useEffect(() => {
  axios.get("/json-Files/Home.json")
    .then(res => {
      console.log("Axios Response:", res.data);
      setData(res.data);
    })
    .catch(err => console.error("ERROR loading JSON:", err));
}, []);
  
  return (
    <>
      
      <div className="container text-center mt-5">
        <p className="display-3 fw-bold text-primary">
          <IoFingerPrint />
        </p>
        <p className="display-6 mt-2 fw-semibold">
          Secure, Fast, and Transparent Digital Voting
        </p>
      </div>

      
      <div className="container mt-5 d-flex justify-content-center">
        <div
          className="card shadow-lg rounded-4 overflow-hidden"
          style={{ maxWidth: "850px", border: "2px solid #0d6efd" }}
        >
          <div className="row g-0">
            <div className="col-md-5 d-flex align-items-center p-3" style={{ background: "#e8f9f6" }}>
              <img
                src={evote1}
                className="img-fluid rounded-4 shadow-sm"
                style={{ border: "5px solid white" }}
                alt="eVote"
              />
              
            </div>
           <div className="col-md-7">
  <div className="evote-card-body card-body">
    <h5 className="card-title display-6 text-center fw-bold text-success">
      E-Vote
    </h5>

    <p className="card-text lead mt-4 text-light">
      eVote is an election system that enables voters to securely cast 
      their secret ballots electronically. With a clean and intuitive 
      interface, voters can complete their voting process in just a few
      simple steps. We ensure voter authenticity, vote integrity, and 
      complete non-traceability of the cast vote.
    </p>

    <p className="card-text lead text-light">
      eVote’s robust architecture consistently proves to be reliable, 
      user-friendly, and economical — delivering a Simple and Accessible 
      voting experience that increases voter engagement and turnout. 
      Auditable, Easy To Use, Secure, and Reliable features set eVote 
      apart, enhancing trust, efficiency, scalability, and democratic 
      participation across the world.
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
     

<div className="container mt-5 mb-5">
  <h2 className="text-center fw-bold mb-4">How e-Voting Works</h2>
  <div className="row g-4">
    {data.map(d=>(
    <div className="col-md-4" key={d.title}>
      <div className="card shadow-lg h-100 rounded-4 border-0 p-3 text-center">
        <h3 className="fw-bold text-primary">{d.title}</h3>
        <p className="fs-5 text-light">
          {d.content}
        </p>
      </div>
    </div>  
))}
  </div>
</div>

    {/* <div className="container  mt-5 ">
      <div className="row justify-content-center ">
      <p className="h3 text-center" style={{color:"red"}}>
        If Existing User Click Login If Not Please Register
      </p>
      <button type="button" className="btn btn-primary fw-bold w-25 m-5"  onClick={()=>navigate("./register")}>Register</button>
          <button type="button" className="btn btn-primary fw-bold w-25 m-5" onClick={()=>navigate("./Login")}>Login</button>
      </div>
    </div> */}

    </>
  );
}

export default Home;
