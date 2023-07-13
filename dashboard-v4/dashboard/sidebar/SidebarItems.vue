<script setup lang="ts">
import DocIcon from "./icons/DocIcon.vue";
import SidebarItem from "./SidebarItem.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import StatusIcon from "./icons/StatusIcon.vue";
import ArchivesIcon from "./icons/ArchiveIcon.vue";
import CreditsIcon from "./icons/Crediticon.vue";
import SettingsIcon from "./icons/SettingsIcon.vue";
</script>

<template>
  <ul class="md:pl-3">
    <SidebarItem title="Home" to="/">
      <HomeIcon />
    </SidebarItem>

    <SidebarItem title="Status" to="/admin/status">
      <StatusIcon />
    </SidebarItem>

    <SidebarItem title="Archives" to="/admin/archives">
      <ArchivesIcon />
    </SidebarItem>

    <SidebarItem title="Credits" to="/admin/credits">
      <CreditsIcon />
    </SidebarItem>

    <SidebarItem title="Settings" to="/admin/settings">
      <SettingsIcon />
    </SidebarItem>

    <SidebarItem title="Documentation" to="/admin/documentation">
      <DocIcon />
    </SidebarItem>
  </ul>
</template>
