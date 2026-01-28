// textNode.js
import { useEffect, useRef, useState } from "react";
import BaseNode from "./BaseNode";

// Regex for {{ validVariable }}
const VARIABLE_REGEX = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;

export default function TextNode({ id }) {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);
  const textarearef = useRef(null);

  // Auto resizing logic:
  useEffect(() => {
    if (textarearef.current) {
      textarearef.current.style.height = "auto";
      textarearef.current.style.height = textarearef.current.scrollHeight + "px";
    }
  }, [text]);

    // Extract variables whenever text changes
    useEffect (() => {
      const matches = [...text.matchAll(VARIABLE_REGEX)];
      const uniqueVars = Array.from(
        new Set(matches.map((m) => m[1]))
      );
      setVariables(uniqueVars);
    }, [text]);

  return (
    <BaseNode
      title="Text"
      inputs={variables}
      outputs={["output"]}
    >
      <textarea 
      ref={textarearef}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter text..." 
      style={{
        width: "100%",
        resize: "none",
        overflow: "hidden",
      }}
      />
    </BaseNode>
  );
}