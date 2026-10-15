import { useState } from "react";

export default function Question3() {
  const [options, setOptions] = useState([
    { id: 1, name: "React", votes: 0 },
    { id: 2, name: "Angular", votes: 0 },
    { id: 3, name: "Vue", votes: 0 },
    { id: 4, name: "Svelte", votes: 0 },
  ]);

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  function vote(id) {
    setOptions((previous) =>
      previous.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option,
      ),
    );
  }

  return (
    <div style={{ fontFamily: "Arial", maxWidth: 600, margin: "30px auto" }}>
      <h1>Online Poll</h1>
      <h3>Which frontend framework do you prefer?</h3>

      {options.map((option) => {
        const percentage =
          totalVotes === 0 ? 0 : (option.votes / totalVotes) * 100;

        return (
          <div key={option.id} style={{ margin: "20px 0" }}>
            <button onClick={() => vote(option.id)}>
              Vote for {option.name}
            </button>

            <p>
              {option.name}: {percentage.toFixed(1)}% ({option.votes} votes)
            </p>

            <div style={{ height: 18, background: "#ddd", borderRadius: 10 }}>
              <div
                style={{
                  height: "100%",
                  width: `${percentage}%`,
                  background: "#16a34a",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
        );
      })}

      <h3>Total votes: {totalVotes}</h3>
    </div>
  );
}
