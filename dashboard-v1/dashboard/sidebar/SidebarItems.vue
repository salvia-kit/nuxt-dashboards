<script setup lang="ts">
import UxIcon from "./icons/UxIcon.vue";
import ArIcon from "./icons/ArIcon.vue";
import DocIcon from "./icons/DocIcon.vue";
import SidebarItem from "./SidebarItem.vue";
import VideoIcon from "./icons/VideoIcon.vue";
import AllAppIcon from "./icons/AllAppIcon.vue";
import UpdatesIcon from "./icons/UpdatesIcon.vue";
import SidebarItemSection from "./SidebarItemSection.vue";
import PhotographyIcon from "./icons/PhotographyIcon.vue";
import IllustrationIcon from "./icons/IllustrationIcon.vue";
import GraphicDesignIcon from "./icons/GraphicDesignIcon.vue";
</script>

<template>
  <div>
    <SidebarItemSection name="Apps">
      <SidebarItem title="All Apps" to="/">
        <AllAppIcon />
      </SidebarItem>
      <SidebarItem title="Updates" to="/admin/updates">
        <UpdatesIcon />
      </SidebarItem>
    </SidebarItemSection>

    <SidebarItemSection name="Categories">
      <SidebarItem title="Photography" to="/admin/photography">
        <PhotographyIcon />
      </SidebarItem>
      <SidebarItem title="Graphic Design" to="/admin/graphic-design">
        <GraphicDesignIcon />
      </SidebarItem>
      <SidebarItem title="Videos" to="/admin/videos">
        <VideoIcon />
      </SidebarItem>
      <SidebarItem title="Illustration" to="/admin/illustration">
        <IllustrationIcon />
      </SidebarItem>
      <SidebarItem title="UI/UX" to="/admin/ux">
        <UxIcon />
      </SidebarItem>
      <SidebarItem title="3D/AR" to="/admin/ar">
        <ArIcon />
      </SidebarItem>
    </SidebarItemSection>

    <SidebarItemSection name="Guides">
      <SidebarItem title="Documentation" to="/admin/documentation">
        <DocIcon />
      </SidebarItem>
    </SidebarItemSection>
  </div>
</template>
