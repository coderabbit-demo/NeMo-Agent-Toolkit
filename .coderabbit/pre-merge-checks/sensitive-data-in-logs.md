---
id: sensitive-data-in-logs
name: Sensitive data in logs
mode: warning
report: coderabbit
---

<!-- SPDX-License-Identifier: Apache-2.0 -->

# Sensitive data in logs

Inspect production logging added or changed by this PR. Fail only
when repository evidence shows that credentials, authentication
tokens, private keys, payment-card data, government identifiers, or
data explicitly prohibited by repository policy can reach logs
without effective redaction. Trace the logged values and inspect
relevant sanitizers and logger redaction settings before failing.
Do not flag dummy fixtures, harmless identifiers, already-redacted
values, or hypothetical sensitive fields without evidence.
Pass when no relevant logging changes exist or the affected logging
satisfies this rule. Return Inconclusive when required data-flow or
redaction context is unavailable. Keep the result concise; for each
failure, cite the affected file and logging expression, identify the
sensitive field without reproducing its value, and give the smallest fix.
