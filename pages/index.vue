<script setup lang="ts" type="module">
import type { CommitInfo } from "@/interfaces";
import { formatToRelative } from '@/helpers';

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
  <main class="container mx-auto">
    <section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <article
        v-for="commitInfo in commitList"
        :key="commitInfo.sha"
        class="p-4 rounded-sm bg-gray-50 border border-transparent hover:border-gray-200 transition hover:shadow cursor-pointer relative"
      >
        <h2 class="text-4xl leading-none mb-3">
          {{ commitInfo.commit.message }}
        </h2>
        <a
          :href="commitInfo.html_url"
          rel="noopener noreferrer"
          target="_blank"
          class="leading-none block text-xs text-gray-500 absolute top-2 right-2 py-1 px-2 hover:bg-gray-100"
        >
          <Icon name="ic:outline-commit" width="12" height="12" class="mr-1" />
          <small>Ver commit</small>
        </a>
        <div class="leading-none flex items-center">
          <em class="text-xs text-gray-500 flex items-center leading-none">
            <Icon name="mingcute:user-4-fill" width="16" height="12" />
            <a
              :href="commitInfo.author.html_url"
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:no-underline leading-none"
              >{{ commitInfo.commit.author.name }}</a
            ></em
          >
          <Icon
            name="mdi:checkbox-blank-circle"
            width="4"
            height="4"
            class="mx-2"
          />
          <span class="text-xs text-gray-500 leading-none flex items-center">
            <Icon
              name="mdi:clock-time-eight-outline"
              width="12"
              height="12"
              class="mr-1"
            />
            <em>{{ formatToRelative(commitInfo.commit.author.date) }}</em>
          </span>
        </div>
      </article>
    </section>
  </main>
</template>
