---
id: core-config-compatibility
name: Public configuration compatibility
paths:
  - "src/nat/data_models/**/*.py"
mode: warning
report: platform
---

<!-- SPDX-License-Identifier: Apache-2.0 -->

# Public configuration compatibility

Inspect changes to public workflow-configuration fields and `_type` discriminators.

Treat invalidated input, changed default behavior, and changed `_type` serialized
output as compatibility breaks, even if existing input still validates.

Pass when no such break exists, or when compatibility handling, such as an alias
or compatibility default, preserves previously valid input and behavior. Also
pass an intentional break when the PR includes both a migration note explaining
the old and new behavior or forms and a regression test demonstrating the change.

Fail when evidence establishes any such break and neither compatibility handling
nor both the migration note and regression test are present. Identify the changed
field, default, or serialized form and the concrete affected input or consumer.
If the available evidence cannot establish the old contract, return Inconclusive
and explain what is missing.

Inspect committed tests as evidence; do not claim to execute the test suite.

This is a proposed demo policy, motivated by the configuration contracts in
`packages/nvidia_nat_core/src/nat/data_models/common.py`, rather than an asserted
upstream contribution requirement.
