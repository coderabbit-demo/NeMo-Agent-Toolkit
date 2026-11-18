---
id: core-configuration-contracts
name: Configuration contracts
paths:
  - "src/nat/data_models/**/*.py"
---

<!-- SPDX-License-Identifier: Apache-2.0 -->

Review changes to the public configuration models for compatibility with existing
workflow files. Flag renamed or removed fields, changed defaults, and altered
`_type` discriminator serialization when existing consumers are not migrated.
Use concrete callers, fixtures, or documentation to establish a compatibility issue.

Preserve the distinction between serializing secrets for runtime use and masking
them for display. Check that changes to `_serialize_secret` continue to honor
`context={"mask_secrets": True}`. Flag paths that expose unmasked credentials to
logs or user-facing output. Do not flag intentional internal secret serialization
merely because it returns a plain string.

Source evidence: `packages/nvidia_nat_core/src/nat/data_models/common.py`, including
`TypedBaseModel` and `_serialize_secret`. These are existing code contracts.
