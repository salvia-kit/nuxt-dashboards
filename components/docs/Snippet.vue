<template>
  <pre
    class="
      font-mono
      text-sm
      px-4
      py-1
      rounded
      overflow-x-auto
      max-w-full
      bg-gray-100
      text-blue-600
      border
    "
  >
    {{ snippets }}
  </pre>
</template>

<script>
export default {
  name: 'Snippet',
  data() {
    return {
      snippets: `<sidenav-items-section name="Apps">
      <sidenav-item title="All Apps" to="/">
        <all-apps-icon />
      </sidenav-item>
      <sidenav-item title="Updates" to="/admin/updates">
        <updates-icon />
      </sidenav-item>
    </sidenav-items-section>`,
    }
  },
}
</script>
