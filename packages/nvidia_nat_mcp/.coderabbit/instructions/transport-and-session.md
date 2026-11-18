---
id: mcp-transport-and-session
name: MCP transport and session contracts
paths:
  - "src/**/*.py"
---

<!-- SPDX-License-Identifier: Apache-2.0 -->

# MCP transport and session contracts

Check transport-specific configuration against `MCPServerConfig.validate_model`.
Stdio requires a command and rejects URL, auth provider, and custom headers.
HTTP transports require a URL and reject stdio command, args, and env fields.
SSE currently rejects auth provider and custom headers. If a change intentionally
adds support, require matching client handling and tests before flagging it.

For changes to token storage or per-user sessions, trace the user/session key
through storage, retrieval, and cleanup. Flag a concrete cross-user credential
reuse or leaked session, not a hypothetical issue with no reachable path.

Check retry configuration preserves nonnegative backoff and a maximum at least
as large as the initial backoff. Look for tests at invalid boundaries.

Source evidence: `packages/nvidia_nat_mcp/src/nat/plugins/mcp/client/client_config.py`
and `packages/nvidia_nat_mcp/tests/client/test_mcp_token_storage.py`.
