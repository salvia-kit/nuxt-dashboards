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
      snippets: `<Accordion>
    <template #item>
      <document-icon /> <span class="pl-3">Documents</span>
    </template>
    <template #panel>
      <sidenav-item title="Taxes" to="/documents/taxes" />
      <sidenav-item title="Travel" to="/documents/travel" />
      <sidenav-item title="Insurance" to="/documents/insurance" />
    </template>
   </Accordion>`,
    }
  },
}
</script>
