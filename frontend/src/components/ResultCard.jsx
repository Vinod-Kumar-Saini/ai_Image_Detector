// import React from "react";

// export default function ResultCard({ result }) {
//   if (result.error) {
//     return <div className="card error">❌ {result.error}</div>;
//   }

//   return (
//     <div className="card success">
//       <h2>Detection Result</h2>
//       <pre>{JSON.stringify(result, null, 2)}</pre>
//     </div>
//   );
// }





import React from "react";
import "./ResultCard.css";

export default function ResultCard({ result }) {
  if (result.error) {
    return <div className="card error">❌ {result.error}</div>;
  }

  return (
    <div className="stats-container">
  {Object.entries(result)
    .filter(([key]) => key !== "request" && key !== "media") // 🚫 skip unwanted sections
    .map(([key, value]) => (
      <div key={key} className="stat-card">
        <div className="stat-icon">😊</div>
        <div className="stat-value">
          {typeof value === "object"
            ? Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(", ")
            : value}
        </div>
        <div className="stat-label">{key}</div>
      </div>
    ))}
</div>

  );
}
