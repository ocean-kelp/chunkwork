<!--
  Root Layout
  ===========
  This layout wraps the entire application. It is responsible for:
  - Importing global CSS (Tailwind, custom variables)
  - Loading the Poppins font family via @fontsource
  - Rendering child layouts via the SvelteKit children prop

  This layout does NOT render the Header. Header visibility is handled
  by the (app) group layout to keep auth pages (login, register) clean.
-->

<script lang="ts">
    import { type Snippet } from "svelte";

    // Global CSS entry point — includes Tailwind v4 directives
    import "../app.css";
    
    // Poppins font weights — loaded locally for offline Tauri support
    import '@fontsource/poppins/400.css';
    import '@fontsource/poppins/500.css';
    import '@fontsource/poppins/600.css';
    import '@fontsource/poppins/700.css';
    
    /** Child layout or page content passed by SvelteKit */
    let { children }: { children: Snippet } = $props();
</script>

<!-- Render the active route's layout or page -->
{@render children()}