<script lang="ts">
    // Puedes agregar props, estado, etc.
</script>

<header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#1a1a2e]/90 backdrop-blur-sm border-b border-white/10">
    <div class="flex items-center gap-3">
        <span class="text-xl font-bold text-white">Chunkwork</span>
    </div>
    
    <nav class="flex items-center gap-6">
        <a href="/" class="text-sm text-gray-300 hover:text-white transition-colors">Home</a>
        <a href="/dashboard" class="text-sm text-gray-300 hover:text-white transition-colors">Dashboard</a>
        <a href="/settings" class="text-sm text-gray-300 hover:text-white transition-colors">Settings</a>
    </nav>
    
    <div class="flex items-center gap-3">
        <button class="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors">
            Profile
        </button>
    </div>
</header>