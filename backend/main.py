from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list
    graph = {node["id"]: [] for node in nodes}
    for edge in edges:
        graph[edge["source"]].append(edge["target"])

    # DAG check using DFS
    visited = set()
    rec_stack = set()

    def has_cycle(node):
        if node in rec_stack:
            return True
        if node in visited:
            return False

        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph.get(node, []):
            if has_cycle(neighbor):
                return True

        rec_stack.remove(node)
        return False

    is_dag = True
    for node_id in graph:
        if has_cycle(node_id):
            is_dag = False
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }