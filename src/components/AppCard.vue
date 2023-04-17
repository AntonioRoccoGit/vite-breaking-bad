<script>
export default {
    props: {
        cards: Object
    }
}
</script>

<template>
    <div class="ms_card">
        <img :src="cards.card_images[0].image_url" alt="">
        <h2>{{ cards.name }}</h2>
        <span class="type">{{ cards.archetype }}</span>
    </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables.scss" as *;

.ms_card {
    background-color: $bg_main_color;
    text-align: center;
    min-height: 100%;

    h2 {
        font-size: .8rem;
        font-weight: 700;
        color: white;
        text-transform: uppercase;
    }
}
</style>