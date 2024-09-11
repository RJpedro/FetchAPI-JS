<script setup lang="ts">
    import NavigationArea from '@/components/_navigation.vue';
</script>

<style>
    @import '@/assets/scss/components/_title-area.scss';
</style>

<template>
    <div class="title-area">
        <h2 class="title-text">{{title}}</h2>
        <NavigationArea :qtd_sections="qtd_sections" :have_arrows="have_arrows" />
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            title: String,
            qtd_sections: Number,
            have_arrows: Boolean
        }
    }
</script>