// frontend/src/nodes/BaseNode.jsx
import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div
      style={{
        padding: 14,
        borderRadius: 10,
        //border: "1px solid #ddd",
        background: "#ffffff",
        minWidth: 220,
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        position: "relative",
      }}
    >
      <div style={{ 
        fontWeight: 600, 
        marginBottom: 8,
        fontSize: 14,
        color: "#111827",
         }}>
        {title}
      </div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <div
        key={input}
        style={{
            position: "absolute",
            left: -90,
            top: 32 + index * 24,
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            gap: 6,
        }}
        >
            <span>{input}</span>
        <Handle
          type="target"
          position={Position.Left}
          id={input}
          style={{ 
            position: "relative",
            background: "#3b82f6",
            width: 10,
            height: 10,
           }}
        />
        </div>
      ))}

      <div style={{color:"#374151", fontSize: 13}} >
        {children}
        </div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ 
            top: 40 + index * 20,
            background: "#10b981",
            width: 10,
            height: 10,
         }}
        />
      ))}
    </div>
  );
}