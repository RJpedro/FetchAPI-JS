<script setup lang="ts">
    import LeftArrow from '@/assets/icons/LeftArrow.vue';
    import RightArrow from '@/assets/icons/RightArrow.vue';
</script>

<style>
    @import '@/assets/scss/components/_title-area.scss';
    @import '@/assets/scss/components/_navigation.scss';
</style>

<template>
    <div class="navigation-area">
        <div class="navigation-arrow" v-if="have_arrows"><LeftArrow /></div>
        <div class="navigation-section">
            <div v-for="n in qtd_sections" :class="`navigation-section-${n}`"></div>
        </div>
        <div class="navigation-arrow" v-if="have_arrows"><RightArrow /></div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            qtd_sections: Number,
            have_arrows: Boolean
        }
    }
</script>