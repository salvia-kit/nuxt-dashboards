<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <div class="container mx-auto">
      <div class="py-8">
        <div
          class="mb-1 flex w-full flex-row flex-wrap justify-between sm:mb-0"
        >
          <h2 class="text-2xl leading-tight text-white md:pr-0">
            {{ title }}
          </h2>
          <div class="text-end">
            <form class="flex w-full space-x-3">
              <div class="relative">
                <input
                  id="form-subscribe-Filter"
                  type="text"
                  class="w-full flex-1 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-gray-700 shadow-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="name"
                />
              </div>
              <button
                class="shrink-0 rounded-lg bg-gray-600 px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div>
        </div>
        <div class="py-4">
          <div class="max-w-full overflow-x-auto rounded-lg shadow">
            <table class="w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-normal uppercase text-gray-800"
                  >
                    User
                  </th>
                  <th
                    scope="col"
                    class="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-normal uppercase text-gray-800"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    class="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-normal uppercase text-gray-800"
                  >
                    Created at
                  </th>
                  <th
                    scope="col"
                    class="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-normal uppercase text-gray-800"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    class="border-b border-gray-200 bg-white px-5 py-3 text-left text-sm font-normal uppercase text-gray-800"
                  />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/2.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap text-gray-900">Jean marc</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <p class="whitespace-nowrap text-gray-900">Admin</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <p class="whitespace-nowrap text-gray-900">12/09/2020</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span class="relative">active</span>
                    </span>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/3.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap text-gray-900">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <p class="whitespace-nowrap text-gray-900">Designer</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <p class="whitespace-nowrap text-gray-900">01/10/2012</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span class="relative">active</span>
                    </span>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/4.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap text-gray-900">Eric marc</p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <p class="whitespace-nowrap text-gray-900">Developer</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <p class="whitespace-nowrap text-gray-900">02/10/2018</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span class="relative">active</span>
                    </span>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <div class="flex items-center">
                      <div class="shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/5.jpg"
                            class="mx-auto h-10 w-10 rounded-full object-cover"
                          />
                        </a>
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-nowrap text-gray-900">
                          Julien Huger
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <p class="whitespace-nowrap text-gray-900">User</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <p class="whitespace-nowrap text-gray-900">23/09/2010</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
                    >
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span class="relative">active</span>
                    </span>
                  </td>
                  <td class="border-b border-gray-200 bg-white p-5 text-sm">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="xs:flex-row xs:justify-between flex flex-col items-center bg-white p-5"
            >
              <div class="flex items-center">
                <button
                  type="button"
                  class="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  class="w-full border-y bg-white px-4 py-2 text-base text-indigo-500 hover:bg-gray-100"
                >
                  1
                </button>
                <button
                  type="button"
                  class="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  class="w-full border-y bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  class="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  class="w-full rounded-r-xl border-y border-r bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex-wrap items-center justify-center gap-8 text-center sm:flex"
    >
      <div
        class="mt-6 w-full rounded-lg bg-white p-4 shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4"
      >
        <div class="shrink-0">
          <div
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-gray-600 text-white"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="h-6 w-6"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
              />
            </svg>
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
          Website Design
        </h3>
        <p class="py-4 text-gray-500">
          Encompassing today’s website design technology to integrated and build
          solutions relevant to your business.
        </p>
      </div>
      <div
        class="mt-6 w-full rounded-lg bg-white p-4 shadow-lg sm:mt-16 sm:w-1/2 md:mt-20 md:w-1/2 lg:mt-24 lg:w-1/4"
      >
        <div class="shrink-0">
          <div
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-gray-600 text-white"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="h-6 w-6"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
              />
            </svg>
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
          Branding
        </h3>
        <p class="py-4 text-gray-500">
          Share relevant, engaging, and inspirational brand messages to create a
          connection with your audience.
        </p>
      </div>
      <div
        class="mt-6 w-full rounded-lg bg-white p-4 shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4"
      >
        <div class="shrink-0">
          <div
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-gray-600 text-white"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="h-6 w-6"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
              />
            </svg>
          </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
          SEO Marketing
        </h3>
        <p class="py-4 text-gray-500">
          Let us help you level up your search engine game, explore our
          solutions for digital marketing for your business.
        </p>
      </div>
    </div>
  </div>
</template>
