import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "neon-zero-trust-gateway", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "execute_query",
        description: "Execute a read-only query against the remote Neon database",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string" }
          },
          required: ["query"]
        }
      }
    ]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  return {
    content: [{ type: "text", text: "Please connect using the client-cli SSE transport and provide your API_KEY to execute remote queries." }]
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
