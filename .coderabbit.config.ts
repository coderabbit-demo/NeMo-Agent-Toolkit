// SPDX-License-Identifier: Apache-2.0
// Demo policy for NVIDIA NeMo Agent Toolkit.
// This uses the supported TypeScript schema, not the V3 YAML preview.
import { defineConfig, type CodeRabbitConfig } from "@coderabbitai/config";

export default defineConfig((ctx): CodeRabbitConfig => {
  const changed = ctx.pr?.changedFiles;
  let profile: "quiet" | "chill" | "assertive" = "assertive";

  if (changed?.status === "resolved" && changed.paths.length > 0) {
    const docsOnly = changed.paths.every((path) =>
      path.startsWith("docs/") || path === "README.md"
    );
    const sensitiveChange = changed.paths.some((path) =>
      path === ".coderabbit.config.ts" ||
      path.startsWith(".coderabbit/") ||
      path.includes("/.coderabbit/") ||
      path.startsWith("packages/nvidia_nat_core/src/nat/authentication/") ||
      path.startsWith("packages/nvidia_nat_core/src/nat/data_models/") ||
      path.startsWith("packages/nvidia_nat_mcp/") ||
      path.startsWith("packages/nvidia_nat_security/") ||
      path.startsWith("packages/nvidia_nat_app/src/nat_app/speculation/")
    );
    profile = sensitiveChange ? "assertive" : docsOnly ? "quiet" : "chill";
  }

  return {
    language: "en-US",
    inheritance: false,
    reviews: {
      profile,
      review_info: true,
      review_details: true,
      collapse_walkthrough: false,
      poem: false,
      sequence_diagrams: false,
      suggested_reviewers: false,
      auto_assign_reviewers: false,
      auto_apply_labels: false,
      auto_approvals: { enabled: false },
      path_filters: ["!external/**", "!**/uv.lock"],
      auto_review: {
        enabled: true,
        drafts: true, // Review draft PRs in this demo fork.
        base_branches: ["^develop$", "^demo/.*$"],
        auto_incremental_review: true,
      },
    },
  };
});
