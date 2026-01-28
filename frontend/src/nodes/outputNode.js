// outputNode.js
import BaseNode from "./BaseNode";

export default function OutputNode() {
  return (
    <BaseNode
      title="Output"
      inputs={["input"]}
      outputs={[]}
    >
      <button>Output</button>
    </BaseNode>
  );
}
