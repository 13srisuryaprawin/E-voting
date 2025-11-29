import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell
} from "recharts";
import axios from "axios";
import "../styles/Winner.css";

function ElectionResult() {
  const [data, setData] = useState([]);
  const [winner, setWinner] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("/public/charaters.json/strong.json").then((res) => {
      setCharacters(res.data);
    });

    const votes = JSON.parse(localStorage.getItem("vote_list")) || [];

    const count = votes.reduce((acc, v) => {
      acc[v.votedFor] = (acc[v.votedFor] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.keys(count).map((name) => ({
      name,
      votes: count[name],
    }));

    setData(chartData);

    if (chartData.length > 0) {
      const max = Math.max(...chartData.map((d) => d.votes));
      setWinner(chartData.find((d) => d.votes === max));
    }
  }, []);

  const color = (votes) => {
    const max = Math.max(...data.map((d) => d.votes));
    const min = Math.min(...data.map((d) => d.votes));
    if (votes === max) return "#4CAF50";
    if (votes === min) return "#F44336";
    return "#FFC107";
  };

  const winnerImage = characters.find((c) => c.topic === winner?.name);

  return (
    <div className="results-container">

      <h2 className="results-title">Election Results</h2>

      {winner && (
        <div className="winner-card">
          <img src={winnerImage?.character_image} alt={winner.name} />
          <h3>{winner.name}</h3>
          <p>Total Votes: {winner.votes}</p>
          <span className="badge">🏆 Winner</span>
        </div>
      )}

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />

            <Bar dataKey="votes" barSize={40}>
              {data.map((d, i) => (
                <Cell key={i} fill={color(d.votes)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ElectionResult;
