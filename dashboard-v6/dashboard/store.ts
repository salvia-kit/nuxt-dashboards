import { ref } from "vue";

const sidebarOpen = ref(false);

const openSidebar = () => {
  sidebarOpen.value = true;
};

const closeSidebar = () => {
  sidebarOpen.value = false;
};

export { sidebarOpen, openSidebar, closeSidebar };
