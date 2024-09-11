<script setup lang="ts">
    import NavigationArea from '@/components/_navigation.vue';
    import PlayNowIcon from '@/assets/icons/PlayNowIcon.vue';
    import PlusIcon from '@/assets/icons/PlusIcon.vue';
    import LikeIcon from '@/assets/icons/LikeIcon.vue';
    import SoundIcon from '@/assets/icons/SoundIcon.vue';
</script>

<style>
    @import '@/assets/scss/components/_card-destaque.scss';
</style>

<template>
    <article class="card-destaque">
        <img :src="image_src" :alt="image_alt">
        <div class="info">
            <h1 class="title">{{ title }}</h1>
            <p class="description">{{ description }}</p>
            <div class="buttons-area">
                <div>
                    <button><PlayNowIcon /> Play Now</button>
                </div>
                <div>
                    <button><PlusIcon /> </button>
                    <button><LikeIcon /></button>
                    <button><SoundIcon /></button>
                </div>
            </div>
            <NavigationArea :qtd_sections="4" :have_arrows="false"/>
        </div>
    </article>
</template>

<script lang="ts">
    export default {
        props: {
            image_src: String,
            image_alt: String,
            title: String,
            description: String,
        }
    }
</script>