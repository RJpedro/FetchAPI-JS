<style>
    @import '@/assets/scss/components/_button-sm.scss';
</style>

<template>
    <button :class="classes">{{ description }}</button>
</template>

<script lang="ts">
    export default {
        props: {
            classes: String,
            description: String
        }
    }
</script>