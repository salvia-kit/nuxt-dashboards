<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex flex-wrap">
    <div class="w-full rounded-3xl bg-gray-800 p-6 lg:w-8/12">
      <div class="mb-8 flex items-center justify-between text-white">
        <p class="text-2xl font-bold">{{ title }}</p>
        <p class="">December, 12</p>
      </div>
      <div class="flex flex-wrap items-center justify-between pb-8">
        <div class="flex flex-wrap text-white">
          <div class="pr-10">
            <div class="text-2xl font-bold">45</div>
            <div class="">In Progress</div>
          </div>
          <div class="pr-10">
            <div class="text-2xl font-bold">24</div>
            <div class="">Upcoming</div>
          </div>
          <div>
            <div class="text-2xl font-bold">62</div>
            <div class="">Total Projects</div>
          </div>
        </div>
        <div class="mt-4 flex items-center md:mt-0">
          <button class="bg-transparent text-white" title="List View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button class="ml-2 bg-gray-700 p-2 text-white" title="Grid View">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div
              class="rounded-3xl p-4"
              :style="{ backgroundColor: '#fee4cb' }"
            >
              <div class="justify-b flex items-center">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mb-4 mt-5 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="mx-0 my-2 h-1 w-full overflow-hidden rounded-md bg-white"
                >
                  <span class="block h-1 w-6/12 rounded-md bg-yellow-700" />
                </div>
                <p class="m-0 text-right text-sm font-bold">60%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-none bg-white p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="flex shrink-0 rounded-lg px-4 py-2 text-sm font-bold text-yellow-600"
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="rounded-3xl bg-gray-300 p-4">
              <div class="justify-b flex items-center">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mb-4 mt-5 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="mx-0 my-2 h-1 w-full overflow-hidden rounded-md bg-white"
                >
                  <span class="block h-1 w-5/12 rounded-md bg-indigo-700" />
                </div>
                <p class="m-0 text-right text-sm font-bold">50%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-none bg-white p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="flex shrink-0 rounded-lg px-4 py-2 text-sm font-bold text-indigo-700"
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="rounded-3xl bg-green-200 p-4">
              <div class="flex items-center">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mb-4 mt-5 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="mx-0 my-2 h-1 w-full overflow-hidden rounded-md bg-white"
                >
                  <span class="block h-1 w-7/12 rounded-md bg-green-700" />
                </div>
                <p class="m-0 text-right text-sm font-bold">70%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-none bg-white p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="flex shrink-0 rounded-lg px-4 py-2 text-sm font-bold text-green-700"
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="rounded-3xl bg-blue-200 p-4">
              <div class="flex items-center">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mb-4 mt-5 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="mx-0 my-2 h-1 w-full overflow-hidden rounded-md bg-white"
                >
                  <span class="block h-1 w-7/12 rounded-md bg-blue-700" />
                </div>
                <p class="m-0 text-right text-sm font-bold">70%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-none bg-white p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="flex shrink-0 rounded-lg px-4 py-2 text-sm font-bold text-blue-700"
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="rounded-3xl bg-red-200 p-4">
              <div class="flex items-center">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mb-4 mt-5 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="mx-0 my-2 h-1 w-full overflow-hidden rounded-md bg-white"
                >
                  <span class="block h-1 w-7/12 rounded-md bg-red-700" />
                </div>
                <p class="m-0 text-right text-sm font-bold">70%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-none bg-white p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="flex shrink-0 rounded-lg px-4 py-2 text-sm font-bold text-red-700"
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="p-2">
            <div class="rounded-3xl bg-purple-200 p-4">
              <div class="flex items-center">
                <span class="text-sm">December 10, 2020</span>
              </div>
              <div class="mb-4 mt-5 text-center">
                <p class="text-base font-bold opacity-70">Web Designing</p>
                <p class="mt-2 text-sm opacity-70">Prototyping</p>
              </div>
              <div>
                <p class="m-0 text-sm font-bold">Progress</p>
                <div
                  class="mx-0 my-2 h-1 w-full overflow-hidden rounded-md bg-white"
                >
                  <span class="block h-1 w-7/12 rounded-md bg-purple-700" />
                </div>
                <p class="m-0 text-right text-sm font-bold">70%</p>
              </div>
              <div class="relative flex justify-between pt-4">
                <div class="flex items-center">
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    alt="participant"
                  />
                  <img
                    class="h-5 w-5 overflow-hidden rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                    alt="participant"
                  />
                  <button
                    class="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-none bg-white p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </div>
                <div
                  class="flex shrink-0 rounded-lg px-4 py-2 text-sm font-bold text-purple-700"
                >
                  2 Days Left
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 w-full lg:mt-0 lg:w-4/12 lg:pl-4">
      <div class="rounded-3xl bg-gray-800 px-6 pt-6">
        <div class="flex pb-6 text-2xl font-bold text-white">
          <p>Client Messages</p>
        </div>
        <div>
          <div
            class="flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start"
          >
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="profile image"
              class="h-10 w-10 rounded-full object-cover"
            />
            <div class="w-full pl-4">
              <div class="flex w-full items-center justify-between">
                <div class="font-medium text-white">Stephanie</div>
                <div
                  class="flex h-7 w-7 cursor-pointer items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </div>
              </div>
              <p class="my-2 text-sm text-gray-400">
                I got your first assignment. It was quite good. 🥳 We can
                continue with the next assignment.
              </p>
              <p class="text-right text-sm text-gray-400">Dec, 12</p>
            </div>
          </div>
          <div
            class="flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start"
          >
            <img
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="profile image"
              class="h-10 w-10 rounded-full object-cover"
            />
            <div class="w-full pl-4">
              <div class="flex w-full items-center justify-between">
                <div class="font-medium text-white">Mark</div>
                <div
                  class="flex h-7 w-7 cursor-pointer items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </div>
              </div>
              <p class="my-2 text-sm text-gray-400">
                Hey, can tell me about progress of project? I'm waiting for your
                response.
              </p>
              <p class="text-right text-sm text-gray-400">Dec, 12</p>
            </div>
          </div>
          <div
            class="flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start"
          >
            <img
              src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="profile image"
              class="h-10 w-10 rounded-full object-cover"
            />
            <div class="w-full pl-4">
              <div class="flex w-full items-center justify-between">
                <div class="font-medium text-white">David</div>
                <div
                  class="flex h-7 w-7 cursor-pointer items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </div>
              </div>
              <p class="my-2 text-sm text-gray-400">
                Hey, can tell me about progress of project? I'm waiting for your
                response.
              </p>
              <p class="text-right text-sm text-gray-400">Dec, 12</p>
            </div>
          </div>
          <div
            class="flex w-full border-t border-gray-700 p-4 hover:bg-gray-700 2xl:items-start"
          >
            <img
              src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="profile image"
              class="h-10 w-10 rounded-full object-cover"
            />
            <div class="w-full pl-4">
              <div class="flex w-full items-center justify-between">
                <div class="font-medium text-white">Mark</div>
                <div
                  class="flex h-7 w-7 cursor-pointer items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-white"
                  >
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    />
                  </svg>
                </div>
              </div>
              <p class="my-2 text-sm text-gray-400">
                I am really impressed! Can't wait to see the final result.
              </p>
              <p class="text-right text-sm text-gray-400">Dec, 12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
