import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {},
  },
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./dashboard/**/*.vue`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
};
