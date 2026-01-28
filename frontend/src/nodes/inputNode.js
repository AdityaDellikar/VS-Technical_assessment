// inputNode.js
import BaseNode from "./BaseNode";

export default function InputNode() {
  return (
    <BaseNode
      title="Input"
      inputs={[]}
      outputs={["output"]}
    >
      <button>Input</button>
    </BaseNode>
  );
}
