<template>
  <div class="py-8 max-w-full bg-white text-gray-700 shadow">
    <h2 class="text-3xl pl-7 font-medium mb-10">Documentation</h2>
    <section class="mb-16 px-3 md:px-8 pt-8">
      <h2 class="text-2xl font-medium">Features</h2>
      <ul class="list-disc pl-6 mt-4">
        <li class="mb-4">Support of the active route (styled by default).</li>
        <li class="mb-4">
          Fully customizable and without external dependencies.
        </li>
        <li class="mb-4">
          No vendor lock-in, you can export it and integrate it in your project.
        </li>
        <li>
          Sidenav aligned left or right according to your preferences (on
          mobile).
        </li>
      </ul>
    </section>

    <section class="mb-16 px-3 md:px-8">
      <h2 class="text-2xl font-medium">File Structure</h2>
      <div class="pl-2">
        <div class="flex mt-4 mb-3">
          <folder-icon />
          <span class="pl-2">components</span>
        </div>
        <div class="pl-5 flex mb-3">
          <folder-icon />
          <span class="pl-2">dashboard</span>
        </div>
        <div class="pl-11 flex mb-3">
          <folder-icon />
          <span class="pl-2">sidenavigation</span>
        </div>
        <div class="pl-16 flex mb-3">
          <folder-icon />
          <span class="pl-2">accordion</span>
        </div>
        <div class="pl-16 flex mb-3">
          <folder-icon />
          <span class="pl-2">icons</span>
        </div>
        <div class="pl-16 flex mb-3">
          <vue-icon />
          <span class="pl-2">Header.vue</span>
        </div>
        <div class="pl-16 flex mb-3">
          <vue-icon />
          <span class="pl-2">Index.vue</span>
        </div>
        <div class="pl-16 flex mb-3">
          <vue-icon />
          <span class="pl-2">Item.vue</span>
        </div>
        <div class="pl-16 flex mb-3">
          <vue-icon />
          <span class="pl-2">Items.vue</span>
        </div>
        <div class="pl-11 flex mb-3">
          <folder-icon />
          <span class="pl-2">topnavigation</span>
        </div>
        <div class="pl-16 flex mb-3">
          <vue-icon />
          <span class="pl-2">Index.vue</span>
        </div>
        <div class="pl-11 flex mb-3">
          <vue-icon />
          <span class="pl-2">Layout.vue</span>
        </div>
      </div>
      <div class="flex mt-4 mb-3">
        <folder-icon />
        <span class="pl-2">layouts</span>
      </div>
      <div class="flex mt-4 mb-3">
        <folder-icon />
        <span class="pl-2">pages</span>
      </div>
      <div class="flex mt-4 mb-3">
        <folder-icon />
        <span class="pl-2">static</span>
      </div>
    </section>

    <section class="mb-16 px-3 md:px-8">
      <h2 class="text-2xl font-medium">File Structure explained</h2>
      <p class="mt-5">
        We will focus on <strong>dashboard</strong> folder and its
        <strong>subfolders</strong> which contain all the logic.
      </p>

      <div class="mt-5 mb-12">
        <div class="flex">
          <folder-icon /> <strong class="px-1">provider</strong>
        </div>
        <div class="flex flex-wrap md:flex-nowrap pl-6 mt-4">
          <vue-icon extend-class="h-7 w-7" />
          <span class="px-2 font-medium">Context.vue</span> :
          <p class="pl-2">
            contains the
            <strong>dashboard-provider</strong> component where all the
            dashboard logic is placed. this will then be reused in other
            components. it handles the closing of the sidenav when the route
            changes or on click outside.
          </p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap pl-6 mt-6">
          <vue-icon />
          <span class="px-2 font-medium">Overlay.vue</span> :
          <p class="pl-2">
            displays an overlay that will only be visible on small screens to
            emphasize the focus on the sidenav when it is open
          </p>
        </div>
      </div>

      <div class="mb-8">
        <div class="flex">
          <folder-icon /> <strong class="px-1">sidenavigation</strong>
        </div>
        <div class="flex flex-wrap md:flex-nowrap pl-6 mt-4">
          <folder-icon extend-class="h-5 w-5" />
          <span class="px-2 font-medium">accordion</span> :
          <p class="pl-1">
            contains the <strong>Accordion</strong> component which is used to
            toggle each section of sidenav.
          </p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap pl-6 mt-4">
          <folder-icon extend-class="h-7 w-7" />
          <span class="px-2 font-medium">icons</span> :
          <p class="pl-1">
            As each <strong>sidenav-item</strong> has an icon, this sub-folder
            contains the icons of each sidenav-item. You don't need this folder
            if you are using a package for icons such as
            <strong>font-awesome</strong>
            or other
          </p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap pl-6 mt-10">
          <vue-icon /> <span class="px-2 font-medium">Header.vue</span> :
          <p class="pl-1">
            The <strong> sidenav-header</strong> component contains the logo
            that is displayed on top of the sidenav
          </p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap pl-6 mt-6">
          <vue-icon /><span class="px-2 font-medium">Item.vue</span> :
          <p class="pl-1">
            Contains the <strong>sidenav-item</strong> component which
            represents each item of the sidenav.
          </p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap pl-6 mt-6">
          <vue-icon /><span class="px-2 font-medium">Items.vue</span> :
          <p class="pl-1">
            This <strong>sidenav-items</strong> component contains the
            <strong> accordion</strong> and
            <strong> sidenav-item</strong> components
          </p>
        </div>
        <div class="flex flex-wrap mt-8 pl-8 mb-12">
          <div class="md:w-8/12">
            <Snippet />
          </div>
          <ul class="pt-8 md:pt-4 md:pl-4 md:w-6/12">
            <li class="mb-2">
              <strong class="px-1">template #item :</strong> contains the name
              of the section
            </li>
            <li class="mb-2">
              <strong class="px-1">template #panel :</strong> content of the
              accordion (sidenav-item)
            </li>
            <li class="mt-4 mb-3">
              <span class="px-1 font-bold">Props :</span>
            </li>
            <li class="mb-2">
              <strong class="px-1">title :</strong> text that indicate the route
            </li>
            <li class="mb-2">
              <strong class="px-1">to :</strong> name of the route
            </li>
          </ul>
        </div>
        <div class="flex flex-wrap md:flex-nowrap pl-6 mt-6">
          <vue-icon /> <span class="px-2 font-medium">Index.vue</span> :
          <p class="pl-1">
            This <strong>side-navigation</strong> component contains all the
            logic of the sidenav.
          </p>
        </div>
      </div>

      <div>
        <div class="flex mt-8">
          <folder-icon /> <strong class="px-1">topnavigation</strong>
        </div>
        <div class="flex flex-wrap md:flex-nowrap pl-6 mt-4">
          <vue-icon /> <span class="px-2 font-medium">Index.vue</span> :
          <p class="pl-1">
            Contains the
            <strong> top-navigation</strong> component. You can customize it or
            replace it with your own navbar but don't forget to add a button to
            toggle sidenav on mobile
          </p>
        </div>
      </div>

      <div>
        <div class="flex flex-wrap md:flex-nowrap mt-8">
          <vue-icon /> <strong class="px-1">Layout.vue :</strong> Contains the
          <strong class="px-1">dashboard-layout</strong> component used as the
          layout of the application
        </div>
      </div>
    </section>

    <section class="mb-16 px-3 md:px-8">
      <h2 class="text-2xl font-medium">How it works ?</h2>
      <ul class="pl-6 list-disc mt-4">
        <li class="mb-3">
          Add your routes and items in the
          <strong>dashboard/sidenavigation/items.vue</strong>
          file
        </li>
        <li class="mb-3">
          If your routes don't exist yet, create your routes in the
          <strong>pages</strong> directory.
        </li>
        <li class="mb-3">
          Wrap the <strong>layouts/default.vue</strong> by the
          <strong>dashboard-layout</strong> component
        </li>
      </ul>
    </section>

    <section class="mb-16 px-3 md:px-8">
      <h2 class="text-2xl font-medium">Auto Format and Linting</h2>
      <div class="mt-4">
        The dashboard is provided with <strong>eslint</strong>,
        <strong>prettier</strong>, <strong>lint-staged</strong> and
        <strong>husky.</strong> Before each commit, the
        <strong>pre-commit</strong> hook will be triggered to run prettier to
        format the code and eslint to analyze the code for possible errors.
      </div>
    </section>

    <section class="mb-16 px-3 md:px-8">
      <h2 class="text-2xl font-medium">Export</h2>
      <p class="mt-4">
        As there is no vendor lock-in, if you already have a dashboard, you can
        just copy the small configuration from
        <strong>tailwind.config.js</strong> and paste it into your
        <strong>tailwind.config.js</strong> configuration file. then copy the
        <strong>dashboard</strong> folder into your project
      </p>
      <div class="mt-8">
        <ul class="pl-6 list-disc mt-4">
          <li class="mb-3">
            Add your routes and items in the
            <strong class="px-1">dashboard/sidenavigation/Items.vue</strong>
            file
          </li>
          <li class="mb-3">
            Replace your layout by the<strong class="px-1"
              >dashboard-layout</strong
            >component
          </li>
        </ul>
      </div>
    </section>

    <section class="px-3 md:px-8">
      <h2 class="text-2xl font-medium">Customization</h2>
      <p class="mt-5">
        You can customize everything according to your preferences if it doesn't
        suit you. What we have done is just provide a solid structure for better
        scalability and readability of the code.
      </p>
      <p class="mt-5">
        The sidenav scrollbar is hidden by default but you can still scroll with
        the keyboards if you have several sidenav-items. If you are not a fan of
        this approach, you can always change its style in the
        <strong>dashboard/sidenavigation/Index.vue</strong> file
      </p>
      <p class="mt-5">
        In the <strong> dashboard/Layout.vue</strong> file, the
        <strong>Sidenavigation</strong> component has as prop
        <strong>mobile-position</strong>, which indicates the positioning of the
        sidenav on mobile.
      </p>
      <p class="pt-5">This prop can have two possible values :</p>
      <ul class="pl-6 mt-4 list-disc">
        <li class="mb-3">
          <strong>left :</strong> sidenav will be aligned to the left
        </li>
        <li><strong>right :</strong> sidenav will be aligned to the right</li>
      </ul>
    </section>
  </div>
</template>

<script>
import Snippet from './Snippet.vue'
import VueIcon from './icons/VueIcon.vue'
import FolderIcon from './icons/FolderIcon.vue'
export default {
  name: 'Doc',
  components: { Snippet, FolderIcon, VueIcon },
}
</script>
