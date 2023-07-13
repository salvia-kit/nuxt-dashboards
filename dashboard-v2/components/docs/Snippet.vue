<script setup lang="ts">
const snippets = `
<SidebarItemSection name="Apps">
  <SidebarItem title="All Apps" to="/">
     <AllAppIcon />
   </SidebarItem>
   <SidebarItem title="Updates" to="/admin/updates">
      <UpdatesIcon />
   </SidebarItem>
</SidebarItemSection>`;
</script>

<template>
  <pre
    class="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-black"
  >
    {{ snippets }}
  </pre>
</template>
