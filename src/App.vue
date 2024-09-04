<script setup lang="ts">
import Home from '@/templates/home.vue';
import Navbar from '@/components/_navbar.vue';
</script>

<template>
  <Navbar />
  <main>
    <section style="
      display: flex; 
      flex-direction: column; 
      gap: 50px; 
      border: 1px solid #1F1F1F;
      border-radius: 12px;
      position: relative;
      width: 100%;
    ">
      <div style="position: absolute; left: 50px; top: -24px; display: flex; justify-content: center; align-items: center; border-radius: 8px; background-color: #E50000; width: 116px; height: 50px;">
        <p style="color: #FFFFFF; margin: 0px;">Movies</p>
      </div>
      <Home />
    </section>
  </main>
</template>

<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #141414;
  }

  body > div {
    width: 1600px;
  }
</style>