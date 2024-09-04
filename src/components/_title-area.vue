<script setup lang="ts">
    import LeftArrow from '@/assets/icons/LeftArrow.vue';
    import RightArrow from '@/assets/icons/RightArrow.vue';
</script>

<style>
    @import '@/assets/scss/components/_title-area.scss';
</style>

<template>
    <div class="title-area">
        <h2 class="title-text">{{title}}</h2>
        <div class="navigation-area">
            <div class="navigation-arrow"><LeftArrow /></div>
            <div class="navigation-section">
                <div v-for="n in qtd_sections" :class="`navigation-section-${n}`"></div>
            </div>
            <div class="navigation-arrow"><RightArrow /></div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            title: String,
            qtd_sections: Number
        }
    }
</script>