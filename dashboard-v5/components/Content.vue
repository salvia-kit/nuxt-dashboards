<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="flex flex-col flex-wrap sm:flex-row">
    <div class="relative mx-auto mb-12 max-w-screen-xl">
      <div
        class="mx-auto max-w-lg overflow-hidden rounded-lg shadow lg:flex lg:max-w-none"
      >
        <div class="bg-white px-6 py-8 lg:p-12">
          <h3
            class="text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9"
          >
            Zero Commission by {{ title || "Usage" }}
          </h3>
          <p class="mt-6 text-base leading-6 text-gray-500">
            Start selling online for free with all the features you need to
            launch your local delivery and pick-up service, nothing more. We
            don&#x27;t charge commission or monthly fees, keep all your margin.
          </p>
          <div class="mt-8">
            <div class="flex items-center">
              <h4
                class="shrink-0 bg-white pr-4 text-sm font-semibold uppercase leading-5 tracking-wider text-indigo-600"
              >
                What&#x27;s included
              </h4>
              <div class="flex-1 border-t-2 border-gray-200" />
            </div>
            <ul class="mt-8 lg:grid lg:grid-cols-2">
              <li class="flex items-start lg:col-span-1">
                <div class="shrink-0">
                  <svg
                    class="mr-2 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm leading-5 text-gray-700">
                  All unlimited components
                </p>
              </li>
              <li class="flex items-start lg:col-span-1">
                <div class="shrink-0">
                  <svg
                    class="mr-2 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm leading-5 text-gray-700">
                  Own custom Tailwind styles
                </p>
              </li>
              <li class="flex items-start lg:col-span-1">
                <div class="shrink-0">
                  <svg
                    class="mr-2 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm leading-5 text-gray-700">
                  Unlimited Templates
                </p>
              </li>
              <li class="flex items-start lg:col-span-1">
                <div class="shrink-0">
                  <svg
                    class="mr-2 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm leading-5 text-gray-700">
                  Free premium dashboard
                </p>
              </li>
              <li class="flex items-start lg:col-span-1">
                <div class="shrink-0">
                  <svg
                    class="mr-2 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm leading-5 text-gray-700">Best ranking</p>
              </li>
              <li class="flex items-start lg:col-span-1">
                <div class="shrink-0">
                  <svg
                    class="mr-2 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm leading-5 text-gray-700">Premium svg</p>
              </li>
              <li class="flex items-start lg:col-span-1">
                <div class="shrink-0">
                  <svg
                    class="mr-2 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm leading-5 text-gray-700">My wife</p>
              </li>
            </ul>
          </div>
          <div class="mt-8">
            <div class="flex items-center">
              <h4
                class="shrink-0 bg-white pr-4 text-sm font-semibold uppercase leading-5 tracking-wider text-indigo-600"
              >
                &amp; What&#x27;s not
              </h4>
            </div>
            <ul class="mt-8 lg:grid lg:grid-cols-2">
              <li class="flex items-start lg:col-span-1">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    class="mr-2 h-6 w-6"
                    fill="red"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm leading-5 text-gray-700">
                  No Contracts. No monthly, setup, or additional payment
                  processor fees
                </p>
              </li>
              <li class="flex items-start lg:col-span-1">
                <div class="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    class="mr-2 h-6 w-6"
                    fill="red"
                    viewBox="0 0 1792 1792"
                  >
                    <path
                      d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
                    />
                  </svg>
                </div>
                <p class="ml-3 text-sm leading-5 text-gray-700">
                  No 2-week on-boarding, it takes 20 minutes!
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="bg-white px-6 py-8 text-center lg:flex lg:shrink-0 lg:flex-col lg:justify-center lg:p-12"
        >
          <p class="text-lg font-bold leading-6 text-gray-900">Free</p>
          <div
            class="mt-4 flex items-center justify-center text-5xl font-extrabold leading-none text-gray-900"
          >
            <span>$0/mo</span>
          </div>
          <p class="mt-4 text-sm leading-5">
            <span class="block font-medium text-gray-500">
              Card payments:
            </span>
            <span class="inline-block font-medium text-gray-500">
              2.9% + 20p per transaction
            </span>
          </p>
          <div class="mt-6">
            <div class="rounded-md shadow">
              <button
                type="button"
                class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
              >
                Create your store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-6 w-full md:mb-0 md:w-4/12 md:px-2">
      <div class="rounded-2xl bg-white p-4 shadow-lg">
        <p class="mb-4 text-xl font-medium text-gray-800">Entreprise</p>
        <p class="text-3xl font-bold text-gray-900">
          $0
          <span class="text-sm text-gray-300">/ month</span>
        </p>
        <p class="mt-4 text-xs text-gray-600">
          For most businesses that want to optimize web queries.
        </p>
        <ul class="my-6 w-full text-sm text-gray-600">
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            All unlimited components
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Own custom Tailwind styles
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Unlimited Templates
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Free premium dashboard
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Best ranking
          </li>
          <li class="mb-3 flex items-center opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              class="mr-2 h-6 w-6"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Premium svg
          </li>
          <li class="mb-3 flex items-center opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              class="mr-2 h-6 w-6"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            My wife
          </li>
        </ul>
        <button
          type="button"
          class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
        >
          Choose plan
        </button>
      </div>
    </div>
    <div class="mb-6 w-full md:mb-0 md:w-4/12 md:px-2">
      <div class="rounded-2xl bg-indigo-500 p-4 shadow-lg">
        <div class="flex items-center justify-between text-white">
          <p class="mb-4 text-4xl font-medium">Pro</p>
          <p class="flex flex-col text-3xl font-bold">
            $99
            <span class="text-right text-sm font-thin">month</span>
          </p>
        </div>
        <p class="mt-4 text-white">Plan include :</p>
        <ul class="my-6 w-full text-sm text-white">
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            All unlimited components
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Own custom Tailwind styles
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Unlimited Templates
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Free premium dashboard
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Best ranking
          </li>
          <li class="mb-3 flex items-center opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              class="mr-2 h-6 w-6"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Premium svg
          </li>
          <li class="mb-3 flex items-center opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              class="mr-2 h-6 w-6"
              fill="white"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            My wife
          </li>
        </ul>
        <button
          type="button"
          class="w-full rounded-lg bg-white p-3 text-sm text-indigo-500 shadow hover:bg-gray-100"
        >
          Choose plan
        </button>
      </div>
    </div>
    <div class="mb-6 w-full md:mb-0 md:w-4/12 md:px-2">
      <div class="rounded-2xl bg-white p-4 shadow-lg">
        <p class="text-3xl font-bold text-black">Pay as you go</p>
        <p class="mb-4 text-sm text-gray-500">For the basics tailwind</p>
        <p class="text-3xl font-bold text-black">$99</p>
        <p class="mb-4 text-sm text-gray-500">Per agent per month</p>
        <button
          type="button"
          class="m-auto w-56 rounded-lg border border-black bg-white p-3 text-sm text-black shadow hover:bg-black hover:text-white"
        >
          Request demo
        </button>
        <ul class="my-6 w-full text-sm text-black">
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            All unlimited components Tailwind
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            Own analytics templates
          </li>
          <li class="mb-3 flex items-center">
            <svg
              class="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
              />
            </svg>
            24/24 support link
          </li>
        </ul>
        <span class="my-2 block h-1 w-56 rounded-lg bg-gray-100" />
        <ul class="my-6 w-full text-sm text-black">
          <li class="mb-3 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
              />
            </svg>
            <div>
              All free dashboard
              <a href="#" class="pl-1 font-semibold text-red-500">
                free plan
              </a>
            </div>
          </li>
          <li class="mb-3 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
              />
            </svg>
            <div>Best ranking</div>
          </li>
          <li class="mb-3 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path
                d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
              />
            </svg>
            <div>Chocolate and meal</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
