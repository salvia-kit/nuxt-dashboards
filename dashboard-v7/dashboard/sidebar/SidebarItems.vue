<script setup lang="ts">
import DocIcon from "./icons/DocIcon.vue";
import SidebarItem from "./SidebarItem.vue";
import UsersIcon from "./icons/UsersIcon.vue";
import MediaIcon from "./icons/MediaIcon.vue";
import ServerIcon from "./icons/ServerIcon.vue";
import ContactIcon from "./icons/ContactIcon.vue";
import TerminalIcon from "./icons/TerminalIcon.vue";
import RecycleBinIcon from "./icons/RecycleBinIcon.vue";
import SidebarItemSection from "./SidebarItemSection.vue";
</script>

<template>
  <div>
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
    </SidebarItemSection>

    <SidebarItemSection name="Monitoring">
      <SidebarItem title="Terminal" to="/admin/terminal">
        <TerminalIcon />
      </SidebarItem>
      <SidebarItem title="Recycle Bin" to="/admin/recycle-bin">
        <RecycleBinIcon />
      </SidebarItem>
      <SidebarItem title="Servers" to="/admin/servers">
        <ServerIcon />
      </SidebarItem>
    </SidebarItemSection>

    <SidebarItemSection name="Guides">
      <SidebarItem title="Documentation" to="/admin/documentation">
        <DocIcon />
      </SidebarItem>
    </SidebarItemSection>
  </div>
</template>
