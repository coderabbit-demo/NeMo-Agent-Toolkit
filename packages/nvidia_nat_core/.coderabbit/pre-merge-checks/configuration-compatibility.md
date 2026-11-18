---
id: core-config-compatibility
name: Public configuration compatibility
paths:
  - "src/nat/data_models/**/*.py"
mode: warning
report: platform
---

<!-- SPDX-License-Identifier: Apache-2.0 -->

Inspect changes to public workflow-configuration fields and `_type` discriminators.

Pass when there is no breaking change to accepted configuration, or when a
compatibility alias/default preserves previously valid input. Also pass an
intentional break when the PR includes both a migration note explaining the old
and new forms and a regression test demonstrating the new behavior.

Fail when a concrete previously valid configuration becomes invalid and neither
compatibility handling nor the migration note and regression test are present.
Identify the changed field and the affected input. If the available evidence
cannot establish the old contract, return Inconclusive and explain what is missing.

Inspect committed tests as evidence; do not claim to execute the test suite.

This is a proposed demo policy, motivated by the configuration contracts in
`packages/nvidia_nat_core/src/nat/data_models/common.py`, rather than an asserted
upstream contribution requirement.
