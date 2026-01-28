import { useState } from "react";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { submitPipeline } from "./submit";

function App() {
  const [summary, setSummary] = useState(null);

  const handleSubmit = async () => {
    const result = await submitPipeline();
    if (result) {
      setSummary(result);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div
        style={{
          height: "56px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          fontWeight: 600,
          fontSize: "16px",
        }}
      >
        <div>AI Workflow Builder</div>

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Submit Pipeline
        </button>
      </div>

      {/* Node Library Toolbar */}
      <div
        style={{
          borderBottom: "1px solid #e5e7eb",
          padding: "6px 12px",
          backgroundColor: "#f9fafb",
        }}
      >
        <PipelineToolbar />
      </div>

      {/* Main Content */}
        {/* Canvas */}
        <div style={{ flex: 1, position: "relative" }}>
          <PipelineUI />

          {summary && (
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
                background: "white",
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                width: "260px",
                textAlign: "center",
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: "8px" }}>
                Pipeline Summary
              </div>

              <div>Nodes: {summary.num_nodes}</div>
              <div>Edges: {summary.num_edges}</div>
              <div>
                DAG:{" "}
                {summary.is_dag ? (
                  <span style={{ color: "green" }}>Yes ✓</span>
                ) : (
                  <span style={{ color: "red" }}>No ✕</span>
                )}
              </div>

              <button
                style={{
                  marginTop: "10px",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#2563eb",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => setSummary(null)}
              >
                OK
              </button>
            </div>
          )}
        </div>
      </div>
  );
}

export default App;
