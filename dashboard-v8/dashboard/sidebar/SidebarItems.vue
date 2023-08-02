<script setup lang="ts">
import Collapse from "./Collapse.vue";
import DocIcon from "./icons/DocIcon.vue";
import SidebarItem from "./SidebarItem.vue";
import GuideIcon from "./icons/GuideIcon.vue";
import EventIcon from "./icons/EventIcon.vue";
import PictureIcon from "./icons/PictureIcon.vue";
import MessageIcon from "./icons/MessageIcon.vue";
import StatisticIcon from "./icons/StatisticIcon.vue";
</script>

<template>
  <div>
    <Collapse>
      <template #item>
        <DocIcon /> <span class="pl-3">Documents</span>
      </template>
      <template #panel>
        <SidebarItem title="Taxes" to="/documents/taxes" />
        <SidebarItem title="Travel" to="/documents/travel" />
        <SidebarItem title="Insurance" to="/documents/insurance" />
      </template>
    </Collapse>

    <Collapse>
      <template #item>
        <MessageIcon /> <span class="pl-3">Messages</span>
      </template>
      <template #panel>
        <SidebarItem title="Unbox" to="/messages/unbox" />
        <SidebarItem title="Unread" to="/messages/unread" />
        <SidebarItem title="Archived" to="/messages/archived" />
      </template>
    </Collapse>

    <Collapse>
      <template #item>
        <PictureIcon /> <span class="pl-3">Pictures</span>
      </template>
      <template #panel>
        <SidebarItem title="Vacations" to="/pictures/vacations" />
        <SidebarItem title="Anniversary" to="/pictures/anniversary" />
        <SidebarItem title="University" to="/pictures/university" />
      </template>
    </Collapse>

    <Collapse>
      <template #item>
        <StatisticIcon /> <span class="pl-3">Statistics</span>
      </template>
      <template #panel>
        <SidebarItem title="Finances" to="/statistics/finances" />
        <SidebarItem title="Call Stats" to="/statistics/call-stats" />
        <SidebarItem title="Trip Logs" to="/statistics/trip-logs" />
      </template>
    </Collapse>

    <Collapse>
      <template #item>
        <EventIcon /> <span class="pl-3">Events</span>
      </template>
      <template #panel>
        <SidebarItem title="Weddings" to="/events/weddings" />
        <SidebarItem title="Networking" to="/events/networking" />
      </template>
    </Collapse>

    <Collapse>
      <template #item>
        <GuideIcon /> <span class="pl-3">Guides</span>
      </template>
      <template #panel>
        <SidebarItem title="Documentation" to="/guides/documentation" />
      </template>
    </Collapse>
  </div>
</template>
