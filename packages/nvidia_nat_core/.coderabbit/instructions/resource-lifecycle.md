---
id: core-resource-lifecycle
name: Builder resource lifecycle
paths:
  - "src/nat/builder/**/*.py"
---

<!-- SPDX-License-Identifier: Apache-2.0 -->

# Builder resource lifecycle

Trace acquired resources through successful setup, partial setup failure,
cancellation, and teardown. Flag changes that leave an entered async context,
client, or logging configuration active after the workflow exits.

In particular, Python does not call `__aexit__` when `__aenter__` fails. Preserve
the explicit cleanup on failed workflow entry. Prefer the established exit stack
when adding managed resources, and check teardown order against dependencies.

When lifecycle behavior changes, look for tests covering failure during setup as
well as normal completion. Name the resource and failure path in any finding.

Source evidence: `packages/nvidia_nat_core/src/nat/builder/workflow_builder.py`,
especially `__aenter__`, `__aexit__`, and its `AsyncExitStack` registrations.
