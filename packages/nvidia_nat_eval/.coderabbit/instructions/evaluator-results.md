---
id: evaluator-result-contracts
name: Evaluator result contracts
paths:
  - "src/nat/plugins/eval/**/*.py"
---

<!-- SPDX-License-Identifier: Apache-2.0 -->

Keep failed evaluations distinguishable from successfully judged answers. Check
that item-level errors survive aggregation and the CLI summary continues to show
the error count next to the score. Preserve the current averaging policy unless
the change deliberately updates its consumers and tests.

The `num_items` and `num_errors` properties are derived and are not serialized
fields. Flag accidental changes to the stored evaluator-output shape.

When changing aggregation, inspect empty results, mixed success/failure results,
and duck-typed output objects supported by `count_evaluator_errors`. Explain the
specific incorrect result instead of requesting generic additional testing.

Source evidence: `packages/nvidia_nat_eval/src/nat/plugins/eval/data_models/evaluator_io.py`
and `packages/nvidia_nat_eval/tests/eval/test_evaluator_error_counts.py`.
