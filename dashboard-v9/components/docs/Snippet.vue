<script setup lang="ts">
const snippets = `
<SidebarItem title="Dashboard" to="/">
    <DashboardIcon /> <!--slot as icon-->
 </SidebarItem>
 <SidebarItem title="Projects" to="/admin/projects">
    <ProjectsIcon />
 </SidebarItem>`;
</script>

<template>
  <pre
    class="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-black"
  >
    {{ snippets }}
  </pre>
</template>
