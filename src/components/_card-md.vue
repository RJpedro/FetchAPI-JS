<script setup lang="ts">
    import ClockIcon from '@/assets/icons/ClockIcon.vue';
    import EyesIcon from '@/assets/icons/EyesIcon.vue';
    import StarIcon from '@/assets/icons/StarIcon.vue';
    import RightArrow from '@/assets/icons/RightArrow.vue';
    import ButtonSm from '@/components/_button-sm.vue';

    function formatDateToCustomFormat(date: Date) {
        date = new Date(date);
        date.setDate(date.getDate() + 1);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }
</script>

<style>
    @import '@/assets/scss/components/_card-md.scss';
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
        <div class="info-only-gender-and-icon" v-if="only_gender_and_icon">
            <p>{{gender}}</p>
            <RightArrow />
        </div>
        <div class="info-only-gender-button-and-icon" v-if="only_gender_button_and_icon">
            <div>
                <ButtonSm 
                :classes="'top-ten'"
                :description="'Top 10 in'"/>
                <p>{{gender}}</p>
            </div>
            <RightArrow />
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
            gender: String,
            only_views_and_time: Boolean,
            only_text_released: Boolean,
            only_views_rating_and_time: Boolean,
            only_gender_and_icon: Boolean,
            only_gender_button_and_icon: Boolean,
            description: String,
            release_date: Date,
        }
    }
</script>