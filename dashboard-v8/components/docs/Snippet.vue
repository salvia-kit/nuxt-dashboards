<script setup lang="ts">
const snippets = `
<Collapse>
   <template #item>
      <DocIcon /> <span class="pl-3">Documents</span>
   </template>
   <template #panel>
      <SidebarItem title="Taxes" to="/documents/taxes" />
      <SidebarItem title="Travel" to="/documents/travel" />
      <SidebarItem title="Insurance" to="/documents/insurance" />
   </template>
</Collapse>`;
</script>

<template>
  <pre
    class="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-black"
  >
    {{ snippets }}
  </pre>
</template>
