<template>
<nav class="bg-black nav transition-colors duration-500 z-10 mb-2" :class="[page === 'article' ? 'fixed top-0 w-full'  : 'relative']">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <nuxt-link to="/" class="flex items-center text-tomorange">
            <Logo class="block lg:hidden "/>
            <Logo class="hidden lg:block "/>
          </nuxt-link>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex">
            <div class="relative flex ml-0">
              <nuxt-link to="/episodes/" href="#" class="px-3 py-2 rounded-md text-3xl font-h2 font-medium leading-5 text-white hover:underline focus:outline-none transition duration-150 ease-in-out group link-style">Episodes</nuxt-link>
              <nuxt-link to="/lokis/" href="#" class="px-3 py-2 rounded-md text-3xl font-h2 font-medium leading-5 text-white hover:underline focus:outline-none transition duration-150 ease-in-out group link-style">The Lokis</nuxt-link>
              <nuxt-link to="/about/" href="#" class="px-3 py-2 rounded-md text-3xl font-h2 font-medium leading-5 text-white hover:underline focus:outline-none transition duration-150 ease-in-out group link-style">About</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="-mr-2 flex sm:hidden">
        <!-- Mobile menu button -->
        <button type="button" @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showMobileMenu">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="mobile-menu fixed overflow-hidden inset-0 z-50" v-show="showMobileMenu">
    <button type="button" @click="toggleMobileMenu" class="z-50 absolute top-0 right-0 m-3 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="h-screen w-screen bg-darkteal absolute inset-0 opacity-75">

    </div>
    <div class="block">
      <nav class="">
        <div class="ml-12">
          <nuxt-link @click.native="showMobileMenu = false" to="/" class="mt-1 block px-3 py-2 rounded-md text-2xl font-h2 text-black hover:underline focus:outline-none transition duration-150 ease-in-out">Home</nuxt-link>
          <nuxt-link @click.native="showMobileMenu = false" to="/episodes/" class="mt-1 block px-3 py-2 rounded-md text-2xl font-h2 text-black hover:underline focus:outline-none transition duration-150 ease-in-out">Episodes</nuxt-link> 
          <nuxt-link @click.native="showMobileMenu = false" to="/lokis/" class="mt-1 block px-3 py-2 rounded-md text-2xl font-h2 text-black hover:underline focus:outline-none transition duration-150 ease-in-out">The Lokis</nuxt-link> 
          <nuxt-link @click.native="showMobileMenu = false" to="/about/" class="mt-1 block px-3 py-2 rounded-md text-2xl font-h2 text-black hover:underline focus:outline-none transition duration-150 ease-in-out">About</nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</nav>

</template>

<script>
export default {
  props: ['page'],
  mounted() {
    this.showNavControls = true;
  },
  data() {
    return {
      showMobileMenu: false,
      showNavControls: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
}
}
</script>

<style>
.mobile-menu {
  backdrop-filter: blur(30px);
}
.mobile-menu nav {
  position: absolute;
  left: 0px;
  bottom: 100px;
  width: 75%;
  height: 75%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
</style>