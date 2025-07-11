import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';

const main = async () => {
  // Create an MCP server
  const server = new McpServer({
    name: 'Node Sandbox Test',
    version: '1.0.0',
  });

  // Add an addition tool
  server.tool('node-version-detect', {  }, async ({  }) => ({
    content: [{ type: 'text', text: process?.versions?.node || ''}],
  }));

  // Start receiving messages on stdin and sending messages on stdout
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log('Server started');
};

main();