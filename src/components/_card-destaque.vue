<script setup lang="ts">
</script>

<style>
    @import '@/assets/scss/components/_card-destaque.scss';
</style>

<template>
    <article class="card-md">
        <img :src="image_src" :alt="image_alt">
        <div class="info-only-views-and-time" v-if="only_views_and_time">
            <div class="duration">
                <ClockIcon />
                <p>{{time_duration}}</p>
            </div>
            <div class="views">
                <EyesIcon />
                <p>{{qtd_views}}</p>
            </div>
        </div>
        <div class="info-only-text-released" v-if="only_text_released">
            <p>{{`Release at ${formatDateToCustomFormat(release_date)}`}}</p>
        </div>
        <div class="info-only-views-rating-and-time" v-if="only_views_rating_and_time">
            <div class="duration">
                <ClockIcon />
                <p>{{time_duration}}</p>
            </div>
            <div class="views">
                <section class="rating">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </section>
                <p>{{qtd_views}}</p>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
    export default {
        props: {
            image_src: String,
            image_alt: String,
            time_duration: String,
            qtd_views: String,
            only_views_and_time: Boolean,
            only_text_released: Boolean,
            only_views_rating_and_time: Boolean,
            description: String,
            release_date: Date,
        }
    }
</script>