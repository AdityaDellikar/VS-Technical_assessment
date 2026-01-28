import BaseNode from "./BaseNode";

export default function SummarizerNode() {
  return (
    <BaseNode
      title="Summarizer"
      inputs={["input"]}
      outputs={["summary"]}
    >
      <div>Summarize text</div>
    </BaseNode>
  );
}