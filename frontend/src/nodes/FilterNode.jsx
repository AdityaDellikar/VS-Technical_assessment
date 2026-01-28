import BaseNode from "./BaseNode";

export default function FilterNode() {
  return (
    <BaseNode
      title="Filter"
      inputs={["input"]}
      outputs={["filtered"]}
    >
      <div>Apply filter</div>
    </BaseNode>
  );
}