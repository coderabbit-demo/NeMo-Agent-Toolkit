---
id: example-workflow-compatibility
name: Runnable example workflows
paths:
  - "**/configs/*.{yml,yaml}"
  - "**/configs/**/*.{yml,yaml}"
  - "**/src/**/*.py"
---

<!-- SPDX-License-Identifier: Apache-2.0 -->

For changed workflow configurations, verify referenced function, LLM, and other
component names against the registered implementation and the example's declared
dependencies. Do not invent a replacement `_type` when the registration cannot
be established from available evidence.

Check that configuration changes agree with the example's Python implementation
and documented invocation. Flag broken references or missing required fields with
the exact consumer that fails. Treat intentionally illustrative placeholders as
placeholders, and report credentials only when they appear to be real secrets.

Source evidence: `AGENTS.md`, `skills/nat-user-rules/SKILL.md`, and the relevant
example's `pyproject.toml`, registration code, and README. Existing naming and
formatting guidelines remain in their original files.
