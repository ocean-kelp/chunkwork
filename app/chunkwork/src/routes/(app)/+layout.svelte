<!--
  App Group Layout
  ================
  This layout is applied to all routes inside the (app) group.
  It renders the global Header component and adds top padding
  to prevent content from sliding under the fixed header.

  Routes in this group:
  - /           (home)
  - /dashboard
  - /settings
-->
<script lang="ts">
  import { type Snippet } from "svelte";

  // Global navigation header
  import Header from "$lib/components/Header.svelte";

  /** Child page content passed by SvelteKit */
  let { children }: { children: Snippet } = $props();
</script>

<!-- Fixed navigation bar -->
<Header />

<!--
  Content wrapper
  pt-16 (padding-top: 4rem) offsets the fixed header height
  so page content starts below it, not underneath it.
-->
<div class="pt-16 min-h-screen">
  {@render children()}
</div>