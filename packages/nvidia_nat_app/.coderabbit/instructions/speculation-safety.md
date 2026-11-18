---
id: app-speculation-safety
name: Speculative execution safety
paths:
  - "src/nat_app/speculation/**/*.py"
---

<!-- SPDX-License-Identifier: Apache-2.0 -->

# Speculative execution safety

Check that changes preserve the documented meaning of speculation-unsafe nodes:
nodes that modify tool calls, wait for human approval, or transform/redact content
that downstream nodes depend on must not be speculated unless explicitly
overridden by the supported configuration.

Trace precedence between unsafe-node declarations, the decorator marker, and
explicit safe overrides. Do not flag a documented explicit override as a bug
merely because it overrides an unsafe declaration.

Keep the framework-neutral safety primitives free of framework-specific imports.
When behavior changes, identify the affected execution path and test the relevant
safe/unsafe decision rather than only checking the marker exists.

Source evidence: `packages/nvidia_nat_app/src/nat_app/speculation/safety.py`.
