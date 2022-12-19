<script setup lang="ts" type="module">
import type { CommitInfo } from "@/interfaces";

const { data: commitList } = useAsyncData<CommitInfo[]>("commit-list", () =>
  $fetch(
    "https://api.github.com/repos/miloplacencia/fulltimeforce-test/commits",
    {
      headers: {
        Authorization: "token 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",
      },
    }
  )
);
</script>

<template>
  <main class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
    <pre class="col-span-2">{{ commitList }}</pre>
  </main>
</template>
