<script setup lang="ts">
import DocIcon from "./icons/DocIcon.vue";
import SidebarItem from "./SidebarItem.vue";
import UsersIcon from "./icons/UsersIcon.vue";
import MediaIcon from "./icons/MediaIcon.vue";
import ServerIcon from "./icons/ServerIcon.vue";
import ContactIcon from "./icons/ContactIcon.vue";
import SettingsIcon from "./icons/SettingsIcon.vue";
import TerminalIcon from "./icons/TerminalIcon.vue";
import RecycleBinIcon from "./icons/RecycleBinIcon.vue";
</script>

<template>
  <ul class="md:pl-6">
    <SidebarItem title="Users" to="/">
      <UsersIcon />
    </SidebarItem>

    <SidebarItem title="Medias" to="/admin/medias">
      <MediaIcon />
    </SidebarItem>

    <SidebarItem title="Contacts" to="/admin/contact">
      <ContactIcon />
    </SidebarItem>

    <SidebarItem title="Servers" to="/admin/servers">
      <ServerIcon />
    </SidebarItem>

    <SidebarItem title="Settings" to="/admin/settings">
      <SettingsIcon />
    </SidebarItem>

    <SidebarItem title="Terminal" to="/admin/terminal">
      <TerminalIcon />
    </SidebarItem>

    <SidebarItem title="Recycle Bin" to="/admin/recycle-bin">
      <RecycleBinIcon />
    </SidebarItem>

    <SidebarItem title="Documentation" to="/admin/documentation">
      <DocIcon />
    </SidebarItem>
  </ul>
</template>
