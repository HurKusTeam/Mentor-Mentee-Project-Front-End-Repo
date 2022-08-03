<template>
<<<<<<< HEAD
  <p>main page</p>
=======
  <div>
  <Navbar/>
    <Landing/>
    
    <section class="py-20 bg-gray-50 shadow-inner">
      <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-accent sm:text-4xl md:text-5xl xl:text-6xl">
          THE BEST PROGRAM
        </h2>
      </div>

      <div class="container max-w-6xl mx-auto">
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-4 lg:grid-cols-12 sm:px-8 xl:px-0">
          <div class="relative flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-4 overflow-hidden">
            
            <div class="p-3 text-white bg-primary shadow-primary rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-medium text-accent">
             FAST
            </h4>
            <p class="text-base text-center text-gray-500">
              ....
            </p>
          </div>

          <div class="relative flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-4 overflow-hidden">
            <div class="p-3 text-white bg-primary shadow-primary rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-medium text-accent">
              THE BEST
            </h4>
            <p class="text-base text-center text-gray-500">
             asd
            </p>
          </div>

          <div class="relative flex flex-col items-center justify-start col-span-4 px-8 py-12 space-y-4 overflow-hidden">
            <div class="p-3 text-white bg-primary shadow-primary rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-xl font-medium text-accent">
              RELIABLE
            </h4>
            <p class="text-base text-center text-gray-500">
              asd
            </p>
          </div>
          
        </div>
      </div>
    </section>
  
  </div>
>>>>>>> LandingPage
</template>

<script>
import Landing from '~/components/LandingPageComp/Landing.vue';
import Navbar from '~/components/LandingPageComp/Navbar.vue';




export default {
  components: {
    Landing,
    Navbar,
    
},

}
</script>
