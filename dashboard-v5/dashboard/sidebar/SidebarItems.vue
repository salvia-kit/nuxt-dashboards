<script setup lang="ts">
import DocIcon from "./icons/DocIcon.vue";
import AppIcon from "./icons/AppIcon.vue";
import SidebarItem from "./SidebarItem.vue";
import HomeIcon from "./icons/HomeIcon.vue";
import BillsIcon from "./icons/BillsIcon.vue";
import AnalyticIcon from "./icons/AnalyticIcon.vue";
import MonitoringIcon from "./icons/MonitoringIcon.vue";
import DemographicIcon from "./icons/DemographicIcon.vue";
</script>

<template>
  <ul class="md:pl-5">
    <SidebarItem title="Home" to="/">
      <HomeIcon />
    </SidebarItem>

    <SidebarItem title="Bills" to="/admin/bills">
      <BillsIcon />
    </SidebarItem>

    <SidebarItem title="Applications" to="/admin/applications">
      <AppIcon />
    </SidebarItem>

    <SidebarItem title="Monitoring" to="/admin/monitoring">
      <MonitoringIcon />
    </SidebarItem>

    <SidebarItem title="Demographics" to="/admin/demographics">
      <DemographicIcon />
    </SidebarItem>

    <SidebarItem title="Analytics" to="/admin/analytics">
      <AnalyticIcon />
    </SidebarItem>

    <SidebarItem title="Documentation" to="/admin/documentation">
      <DocIcon />
    </SidebarItem>
  </ul>
</template>
