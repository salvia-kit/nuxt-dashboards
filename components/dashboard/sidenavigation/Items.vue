<template>
  <div>
    <Accordion>
      <template #item>
        <document-icon /> <span class="pl-3">Documents</span>
      </template>
      <template #panel>
        <sidenav-item title="Taxes" to="/documents/taxes" />
        <sidenav-item title="Travel" to="/documents/travel" />
        <sidenav-item title="Insurance" to="/documents/insurance" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <messages-icon /> <span class="pl-3">Messages</span>
      </template>
      <template #panel>
        <sidenav-item title="Unbox" to="/messages/unbox" />
        <sidenav-item title="Unread" to="/messages/unread" />
        <sidenav-item title="Archived" to="/messages/archived" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <pictures-icon /> <span class="pl-3">Pictures</span>
      </template>
      <template #panel>
        <sidenav-item title="Vacations" to="/pictures/vacations" />
        <sidenav-item title="Anniversary" to="/pictures/anniversary" />
        <sidenav-item title="University" to="/pictures/university" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <statistics-icon /> <span class="pl-3">Statistics</span>
      </template>
      <template #panel>
        <sidenav-item title="Finances" to="/statistics/finances" />
        <sidenav-item title="Call Stats" to="/statistics/call-stats" />
        <sidenav-item title="Trip Logs" to="/statistics/trip-logs" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <events-icon /> <span class="pl-3">Events</span>
      </template>
      <template #panel>
        <sidenav-item title="Weddings" to="/events/weddings" />
        <sidenav-item title="Networking" to="/events/networking" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <guides-icon /> <span class="pl-3">Guides</span>
      </template>
      <template #panel>
        <sidenav-item title="Documentation" to="/guides/documentation" />
      </template>
    </Accordion>
  </div>
</template>

<script>
import SidenavItem from './Item.vue'
import Accordion from './accordion/Accordion.vue'

/* ICONS */
import EventsIcon from './icons/Events.vue'
import GuidesIcon from './icons/Guides.vue'
import MessagesIcon from './icons/Messages.vue'
import PicturesIcon from './icons/Pictures.vue'
import DocumentIcon from './icons/Documents.vue'
import StatisticsIcon from './icons/Statistics.vue'

export default {
  name: 'SidenavItems',
  components: {
    Accordion,
    EventsIcon,
    GuidesIcon,
    SidenavItem,
    MessagesIcon,
    PicturesIcon,
    DocumentIcon,
    StatisticsIcon,
  },
}
</script>
