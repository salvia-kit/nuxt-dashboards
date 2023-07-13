<script setup lang="ts">
const snippets = `
<SidebarItemSection name="Applications">
  <SidebarItem title="Users" to="/">
     <UsersIcon />
   </SidebarItem>
   <SidebarItem title="Medias" to="/admin/medias">
      <MediaIcon />
   </SidebarItem>
   <SidebarItem title="Contacts" to="/admin/contacts">
      <ContactIcon />
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
