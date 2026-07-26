<!-- Home Page -->

<script lang="ts">
    import ServerList from "$lib/components/ServerList.svelte";
</script>

<main class="flex-1 flex-col flex items-center justify-center text-center">

    <div class="max-w-2xl">
        <h1 class="text-4xl font-bold text-white">Welcome to Chunkwork!</h1>

        <h2 class="mt-4 text-lg text-gray-400">
            Create servers and share mods easier than never before.
        </h2>
    </div>

    <div class="mt-8">
        
        <!-- Server list -->
        <ServerList />

    </div>

</main>