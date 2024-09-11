<script setup lang="ts">
    import { ref } from 'vue';
    import CardMd from '@/components/_card-md.vue';
    import CardDestaque from '@/components/_card-destaque.vue';
    import TitleArea from '@/components/_title-area.vue';
    import { apiConnetionMethods } from "@/assets/js/api-exports";
    import LeftArrow from '@/assets/icons/LeftArrow.vue';
    import RightArrow from '@/assets/icons/RightArrow.vue';
    const films = ref<any[]>([]);
    let isLoading = true;
    
    async function listOfFilms() {
        try {
            const data = await apiConnetionMethods.catchListOfFilmsAPI();
            films.value = data;
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
        } finally {
            isLoading = false;
        }
    }

    listOfFilms();
</script>

<style>
    @import '@/assets/scss/templates/section-film.scss';
</style>

<template v-if="!isLoading">
    <section style="margin-bottom: 180px;" v-for="film in films">
        <CardDestaque
            v-if="film.id === 1"
            :image_src="film.image_src" 
            :image_alt="film.image_alt" 
            :description="film.description" 
            :title="film.title" 
        />
    </section>
    <section class="section-films-area">
        <div class="title-area">
            <p class="title">Movies</p>
        </div>
        <section class="section-films-div">
            <TitleArea
                :title="'Our Genres'"
                :qtd_sections="3"
                :have_arrows="true"
            />

            <div class="film">
                <CardMd v-for="film in films" :key="film.id"  
                    :image_src="film.image_src" 
                    :image_alt="film.image_alt" 
                    :gender="film.gender" 
                    :only_gender_and_icon="true"
                />
            </div>
        </section>
        <section class="section-films-div">
            <TitleArea
                :title="'Popular Top 10 In Genres'"
                :qtd_sections="3"
                :have_arrows="true"
            />

            <div class="film">
                <CardMd v-for="film in films" :key="film.id"  
                    :image_src="film.image_src" 
                    :image_alt="film.image_alt" 
                    :gender="film.gender" 
                    :only_gender_button_and_icon="true"
                />
            </div>
        </section>
        <section class="section-films-div">
            <TitleArea
                :title="'Trending Now'"
                :qtd_sections="3"
                :have_arrows="true"
            />

            <div class="film">
                <CardMd v-for="film in films" :key="film.id"  
                    :image_src="film.image_src" 
                    :image_alt="film.image_alt" 
                    :time_duration="film.time_duration" 
                    :qtd_views="film.qtd_views"
                    :only_views_and_time="true"
                />
            </div>
        </section>
        <section class="section-films-div">
            <TitleArea
                :title="'New Releases'"
                :qtd_sections="3"
                :have_arrows="true"
            />

            <div class="film">
                <CardMd v-for="film in films" :key="film.id"  
                    :image_src="film.image_src" 
                    :image_alt="film.image_alt" 
                    :only_text_released="true"
                    :release_date="film.release_date"
                />
            </div>
        </section>
        <section class="section-films-div">
            <TitleArea
                :title="'Must - Watch Movies'"
                :qtd_sections="3"
                :have_arrows="true"
            />

            <div class="film">
                <CardMd v-for="film in films" :key="film.id"  
                    :image_src="film.image_src" 
                    :image_alt="film.image_alt" 
                    :time_duration="film.time_duration" 
                    :qtd_views="film.qtd_views"
                    :only_views_rating_and_time="true"
                />
            </div>
        </section>
    </section>
</template>