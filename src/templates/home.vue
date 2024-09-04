<script setup lang="ts">
    import { ref } from 'vue';
    import CardMd from '@/components/_card-md.vue';
    import TitleArea from '@/components/_title-area.vue';
    import { apiConnetionMethods } from "@/assets/js/api-exports";
    import '@/assets/scss/templates/section-film.scss';
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

<template v-if="!isLoading">
    <section style="padding: 50px;">
        <TitleArea
            :title="'Trending Now'"
            :qtd_sections="3"
        />

        <div class="filmes">
            <CardMd v-for="film in films" :key="film.id"  
                :image_src="film.image_src" 
                :image_alt="film.image_alt" 
                :time_duration="film.time_duration" 
                :qtd_views="film.qtd_views"
                :only_views_and_time="true"
            />
        </div>
    </section>
    <section style="padding: 50px;">
        <TitleArea
            :title="'New Releases'"
            :qtd_sections="3"
        />

        <div class="filmes">
            <CardMd v-for="film in films" :key="film.id"  
                :image_src="film.image_src" 
                :image_alt="film.image_alt" 
                :only_text_released="true"
                :release_date="film.release_date"
            />
        </div>
    </section>
    <section style="padding: 50px;">
        <TitleArea
            :title="'Must - Watch Movies'"
            :qtd_sections="3"
        />

        <div class="filmes">
            <CardMd v-for="film in films" :key="film.id"  
                :image_src="film.image_src" 
                :image_alt="film.image_alt" 
                :time_duration="film.time_duration" 
                :qtd_views="film.qtd_views"
                :only_views_rating_and_time="true"
            />
        </div>
    </section>
</template>