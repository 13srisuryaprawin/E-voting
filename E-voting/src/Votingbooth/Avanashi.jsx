import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/cardstyle.css";

function Avanashi() {
  const [avanash, setAvanash] = useState([]);
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUsers"));
    setUser(loggedUser);
  }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const av = await axios.get("/charaters/villains.json");
        setAvanash(av.data);
      } catch (error) {
        console.error("Error loading villains:", error);
      }
    };

    fetchData();
  }, []);

  
  const vote = (characterTopic) => {
    if (!user) {
      alert("User not found!");
      return;
    }

    if (user?.voted) {
      alert("You already voted!");
      return;
    }

    alert("Your vote has been submitted!");

  
    const newVote = {
      fullName: user.fullName,
      votedFor: characterTopic,
    };

    const voteList = JSON.parse(localStorage.getItem("vote_list")) || [];
    voteList.push(newVote);

    localStorage.setItem("vote_list", JSON.stringify(voteList));


    const updatedUser = { ...user, voted: true, votedFor: characterTopic };

    setUser(updatedUser);
    localStorage.setItem("loggedUsers", JSON.stringify(updatedUser));
  };

  return (
    <>
      <div className="container my-4 mt-5 my-5">
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {avanash.map((a) => (
            <div className="custom-card" key={a.topic}>
              <img
                src={a.character_image}
                className="fixed-img"
                alt={a.character_name}
              />

              <div className="card-body">
                <h5 className="card-title">{a.character_name}</h5>
                <p className="topic-text">{a.topic}</p>
                <p className="power">Powers: {a.powers}</p>
                <p className="strength">Strength: {a.strength_level}</p>

                <button
                  className="btn btn-primary w-50 mx-auto d-block mt-1"
                  onClick={() => vote(a.topic)}
                  disabled={user?.voted}
                >
                  {user?.voted ? "Voted" : "Vote"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Avanashi;
