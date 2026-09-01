# Neon Enterprise MCP Gateway
**The Zero-Trust Firewall for Claude & AI Agents**

Neon Gateway allows you to securely connect your Claude Desktop or custom AI agents to internal Enterprise databases (Postgres) and Knowledge Bases (Notion) without exposing root credentials or risking data destruction.

## Features
- **Zero-Trust Postgres:** Execute remote SQL queries forced into READ-ONLY transaction blocks. Agents cannot drop tables or delete data.
- **Notion Enterprise Search:** Let Claude search your internal wikis and documents securely.
- **Audit Logging & Routing:** All MCP traffic is routed through a secure Python Gateway.

## Get Access
This is a hosted, premium MCP Gateway for Enterprise and Agency teams. 
1. Purchase an API Key here: [https://neoninnovationlab.com/mcp-gateway]
2. You will receive an `mcp_live_...` key instantly via email.
3. Configure your Claude Desktop using the instructions below.

## Claude Desktop Configuration
Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "neon-enterprise-gateway": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/client-cli",
        "sse",
        "--header",
        "Authorization: Bearer YOUR_API_KEY_HERE",
        "https://api.neoninnovationlab.com/sse"
      ]
    }
  }
}
```
