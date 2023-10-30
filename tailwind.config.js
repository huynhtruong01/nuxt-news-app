const dir = "./src"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    `${dir}/components/**/*.{js,vue,ts}`,
    `${dir}/layouts/**/*.vue`,
    `${dir}/pages/**/*.vue`,
    `${dir}/plugins/**/*.{js,ts}`,
    `${dir}/app.vue`,
    `${dir}/error.vue`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
