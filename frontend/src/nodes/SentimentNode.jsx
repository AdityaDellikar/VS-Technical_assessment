import BaseNode from "./BaseNode";

export default function SentimentNode() {
  return (
    <BaseNode
      title="Sentiment"
      inputs={["text"]}
      outputs={["sentiment"]}
    >
      <div>Analyze sentiment</div>
    </BaseNode>
  );
}