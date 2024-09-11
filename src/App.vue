<script setup lang="ts">
  import Home from '@/templates/home.vue';
  import Navbar from '@/components/_navbar.vue';
  import Footer from '@/components/_footer.vue';
</script>

<template>
  <Navbar />
  <main>
    <Home />
  </main>
  <Footer />
</template>

<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #141414;
  }

  body > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  body main {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    body main {
      width: calc(100% - 160px);
      padding: 0 80px;
    }
  }
  
  @media screen and (min-width: 1920px) {
    body main {
      width: calc(100% - 480px);
      padding: 0 240px;
    }
  }
</style>