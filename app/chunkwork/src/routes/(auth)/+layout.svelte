<!--
  Auth Group Layout
  =================
  This layout is applied to all routes inside the (auth) group.
  It intentionally does NOT render a Header, providing a clean,
  distraction-free surface for authentication flows.

  Routes in this group:
  - /login
  - /register
-->
<script lang="ts">
  import { type Snippet } from "svelte";

  /** Child page content passed by SvelteKit */
  let { children }: { children: Snippet } = $props();
</script>

<!--
  Full-height flex container to center auth forms
  both vertically and horizontally on the screen.
-->
<div class="flex items-center justify-center min-h-screen">
  {@render children()}
</div>