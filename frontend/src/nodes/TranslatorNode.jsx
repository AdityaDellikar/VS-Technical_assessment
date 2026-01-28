import BaseNode from "./BaseNode";

export default function TranslatorNode() {
  return (
    <BaseNode
      title="Translator"
      inputs={["text"]}
      outputs={["translated"]}
    >
      <div>Translate language</div>
    </BaseNode>
  );
}