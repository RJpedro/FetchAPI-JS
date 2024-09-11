<script setup lang="ts">
    import BellIcon from '@/assets/icons/BellIcon.vue';
    import SearchIcon from '@/assets/icons/SearchIcon.vue';
    import MenuListIcon from '@/assets/icons/MenuListIcon.vue';
</script>

<style>
    @import '@/assets/scss/components/_navbar.scss';
</style>

<template>
    <header>
        <div>
            <img class="logo" src="@/assets/img/Logo.png" alt="Logo">
        </div>
        <nav class="nav-options-desktop">
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Movies & Shows</a>
                </li>
                <li>
                    <a href="">Support</a>
                </li>
                <li>
                    <a href="">Subscriptions</a>
                </li>
            </ul>
        </nav>
        <div class="nav-icons-desktop">
            <SearchIcon />
            <BellIcon />
        </div>
        <div class="nav-icons-mobile">
            <MenuListIcon />
        </div>
    </header>
</template>