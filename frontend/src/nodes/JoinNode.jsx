import BaseNode from "./BaseNode";

export default function JoinNode() {
  return (
    <BaseNode
      title="Join"
      inputs={["inputA", "inputB"]}
      outputs={["output"]}
    >
      <div>Join inputs</div>
    </BaseNode>
  );
}