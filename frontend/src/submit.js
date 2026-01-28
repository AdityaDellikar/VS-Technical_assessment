import { useStore } from "./store";

export const submitPipeline = async () => {
  const { nodes, edges } = useStore.getState();

  try {
    const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nodes,
        edges,
      }),
    });

    const result = await response.json();

    alert(
      `Pipeline Summary:\n\n` +
      `Nodes: ${result.num_nodes}\n` +
      `Edges: ${result.num_edges}\n` +
      `Is DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}`
    );
  } catch (err) {
    alert("Failed to submit pipeline");
    console.error(err);
  }
};
