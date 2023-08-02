<script setup lang="ts">
import Snippet from "./Snippet.vue";
import TsIcon from "./icons/TsIcon.vue";
import VueIcon from "./icons/VueIcon.vue";
import FolderIcon from "./icons/FolderIcon.vue";
</script>

<template>
  <div class="max-w-full py-8 text-white">
    <h2 class="mb-10 text-3xl font-medium">Documentation</h2>
    <section
      class="mb-16 px-3 py-8 md:px-8"
      style="background-color: rgb(146 151 179 / 13%)"
    >
      <h2 class="text-2xl font-medium">Features</h2>
      <ul class="mt-4 list-disc pl-6">
        <li class="mb-4">Support of the active route (styled by default).</li>
        <li class="mb-4">
          Fully customizable and without external dependencies.
        </li>
        <li class="mb-4">
          No vendor lock-in, you can export it and integrate it in your project.
        </li>
        <li>
          Sidebar can be aligned left or right according to your preferences (on
          mobile).
        </li>
      </ul>
    </section>

    <section
      class="mb-16 px-3 py-8 md:px-8"
      style="background-color: rgb(146 151 179 / 13%)"
    >
      <h2 class="mb-3 text-2xl font-medium">File Structure</h2>
      <div class="pl-2">
        <div class="mb-3 flex pl-5">
          <FolderIcon class="h-6 w-6" />
          <span class="pl-2">dashboard</span>
        </div>
        <div class="mb-3 flex pl-11">
          <FolderIcon />
          <span class="pl-2">sidebar</span>
        </div>
        <div class="mb-3 flex pl-16">
          <FolderIcon />
          <span class="pl-2">icons</span>
        </div>
        <div class="mb-3 flex pl-16">
          <VueIcon />
          <span class="pl-2">Sidebar.vue</span>
        </div>
        <div class="mb-3 flex pl-16">
          <VueIcon />
          <span class="pl-2">SidebarHeader.vue</span>
        </div>
        <div class="mb-3 flex pl-16">
          <VueIcon />
          <span class="pl-2">SidebarItem.vue</span>
        </div>
        <div class="mb-3 flex pl-16">
          <VueIcon />
          <span class="pl-2">SidebarItems.vue</span>
        </div>
        <div class="mb-3 flex pl-16">
          <VueIcon />
          <span class="pl-2">SidebarItemSection.vue</span>
        </div>
        <div class="mb-3 flex pl-11">
          <VueIcon />
          <span class="pl-2">Layout.vue</span>
        </div>
        <div class="mb-3 flex pl-11">
          <VueIcon />
          <span class="pl-2">Overlay.vue</span>
        </div>
        <div class="mb-3 flex pl-11">
          <VueIcon />
          <span class="pl-2">TopBar.vue</span>
        </div>
        <div class="mb-3 flex pl-11">
          <TsIcon />
          <span class="pl-3">store.ts</span>
        </div>
      </div>
    </section>

    <section
      class="mb-16 px-3 py-8 md:px-8"
      style="background-color: rgb(146 151 179 / 13%)"
    >
      <h2 class="text-2xl font-medium">File Structure explained</h2>

      <div class="mb-8 mt-4">
        <div class="flex">
          <FolderIcon /> <strong class="px-1">sidebar</strong>
        </div>
        <div class="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
          <FolderIcon class="h-7 w-7" />
          <span class="px-2 font-medium">icons</span> :
          <p class="pl-1">
            Icons used for each sidebar-item. You don't need this folder if you
            can provide your own icons.
          </p>
        </div>
        <div class="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
          <VueIcon /> <span class="px-2 font-medium">Sidebar.vue</span> :
          <p class="pl-1">responsable of the sidebar.</p>
          <p class="pl-1">
            compose <strong>SidebarHeader</strong> and
            <strong>SidebarItems</strong> components.
          </p>
        </div>
        <div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
          <VueIcon /> <span class="px-2 font-medium">SidebarHeader.vue</span>:
          <p class="pl-1">contains the logo displayed on top of the sidebar</p>
        </div>
        <div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
          <VueIcon /> <span class="px-2 font-medium">SidebarItem.vue</span> :
          <p class="pl-1">represents each sidebar-item of the sidebar.</p>
        </div>
        <div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
          <VueIcon />
          <span class="px-2 font-medium">SidebarItemSection.vue</span> :
          <p class="pl-1">represents each section of sidebar-items.</p>
        </div>
        <div class="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
          <VueIcon /> <span class="px-2 font-medium">SidebarItems.vue</span> :
          <p class="pl-1">compose many SidebarItem components</p>
        </div>
        <div class="mt-8 flex flex-wrap pl-8">
          <div>
            <Snippet />
          </div>
        </div>
      </div>

      <div>
        <div class="mt-8 flex flex-wrap md:flex-nowrap">
          <VueIcon /> <span class="px-1 font-medium">Layout.vue :</span>
          contains the
          <strong class="px-1">DashboardLayout</strong>
          component used as the layout of the application
        </div>
      </div>

      <div>
        <div class="mt-8 flex flex-wrap md:flex-nowrap">
          <VueIcon /> <span class="px-1 font-medium">Overlay.vue :</span>
          displays an overlay that will only be visible on small screens to
          emphasize the focus on sidebar when it is open. it's also used to
          close sidebar on click outside
        </div>
      </div>

      <div>
        <div class="mt-8 flex flex-wrap md:flex-nowrap">
          <VueIcon /> <span class="px-1 font-medium">TopBar.vue :</span>
          You can customize it or replace it with your own TopBar but don't
          forget to add a button to toggle sidebar on mobile
        </div>
      </div>

      <div class="mt-8 flex flex-wrap md:flex-nowrap">
        <TsIcon class="h-5 w-5" />
        <span class="pl-3 font-medium">store.ts</span> :
        <p class="pl-1">
          where all states for handling opening and closing sidebar are defined
        </p>
      </div>
    </section>

    <section
      class="mb-16 px-3 py-8 md:px-8"
      style="background-color: rgb(146 151 179 / 13%)"
    >
      <h2 class="text-2xl font-medium">Export</h2>
      <p class="mt-4">
        As there is no vendor lock-in, if you already have a dashboard, you can
        copy the
        <strong class="px-1">dashboard</strong>folder into your project
      </p>
      <div class="mt-8">
        <ul class="mt-4 list-disc pl-6">
          <li class="mb-3">
            Add your routes in the
            <strong class="px-1">dashboard/sidebar/SidebarItems.vue</strong>
            file
          </li>
          <li class="mb-3">
            Replace your layout by the
            <strong class="px-1">DashboardLayout</strong>component
          </li>
        </ul>
      </div>
    </section>

    <section
      class="mb-16 px-3 py-8 md:px-8"
      style="background-color: rgb(146 151 179 / 13%)"
    >
      <h2 class="text-2xl font-medium">Customization</h2>
      <p class="mt-5">
        You can customize everything according to your preferences if it doesn't
        suit you. What we have done is just provide a solid structure for better
        scalability and readability of the code.
      </p>
      <p class="mt-5">
        The sidebar scrollbar is hidden by default but you can still scroll with
        the keyboards if you have several sidebar-items.
      </p>
      <p class="mt-5">
        In the <strong> dashboard/Layout.vue</strong> file,
        <strong class="pl-1">Sidebar</strong> component has as prop
        <strong class="pl-1">mobile-orientation</strong>, which indicates the
        orientation of the sidebar on small devices (viewport {{ "<" }} 1024px).
      </p>
      <p class="pt-5">That prop can have two possible values :</p>
      <ul class="mt-4 list-disc pl-6">
        <li class="mb-3">
          <strong>start :</strong> sidebar will be aligned to the left
        </li>
        <li><strong>end :</strong> sidebar will be aligned to the right</li>
      </ul>
    </section>
  </div>
</template>
