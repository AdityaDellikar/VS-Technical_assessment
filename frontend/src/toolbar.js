// toolbar.js
import { DraggableNode } from "./draggableNode";

const baseStyle = {
  padding: "8px 14px",
  borderRadius: "8px",
  backgroundColor: "#111827",
  color: "white",
  fontSize: "13px",
  cursor: "grab",
  userSelect: "none",
};

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "12px" }}>
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div
          style={baseStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f2937")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#111827")}
        >
          <DraggableNode type="customInput" label="Input" />
        </div>

        <div
          style={baseStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f2937")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#111827")}
        >
          <DraggableNode type="text" label="Text" />
        </div>

        <div
          style={baseStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f2937")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#111827")}
        >
          <DraggableNode type="llm" label="LLM" />
        </div>

        <div
          style={baseStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f2937")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#111827")}
        >
          <DraggableNode type="sentiment" label="Sentiment" />
        </div>

        <div
          style={baseStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f2937")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#111827")}
        >
          <DraggableNode type="summarizer" label="Summarizer" />
        </div>

        <div
          style={baseStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f2937")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#111827")}
        >
          <DraggableNode type="translator" label="Translator" />
        </div>

        <div
          style={baseStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f2937")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#111827")}
        >
          <DraggableNode type="filter" label="Filter" />
        </div>

        <div
          style={baseStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f2937")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#111827")}
        >
          <DraggableNode type="join" label="Join" />
        </div>

        <div
          style={baseStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f2937")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#111827")}
        >
          <DraggableNode type="customOutput" label="Output" />
        </div>
      </div>
    </div>
  );
};