<script>
import AppCard from './components/AppCard.vue';
import axios from "axios";
import { store } from "./store";
export default {
  data() {
    return {
      store,
      manyCard: 0
    }
  },
  components: {
    AppCard
  },
  mounted() {
    axios
      .get(store.getUrl)
      .then((resp) => {
        this.store.cardsArray = resp.data.data;
      }),
      axios
        .get(store.getUrl)
        .then((resp) => {
          this.manyCard = resp.data.meta;
        })
  }
}
</script>

<template>
  <header class="header">
    <h1 class="p-2">Yu-Gi-Oh Api</h1>

  </header>

  <body>
    <section class="select p-4">
      <select class="rounded-1" name="card-type" id="">
        <option value="0">Alien</option>
      </select>
    </section>

    <section class="selected-card ">
      <div class="container">
        <h3 class="founded"> Founded <span>{{ manyCard.current_rows }}</span> cards</h3>
        <div class="row row-cols-5 gx-4 gy-2">
          <div class="col" v-for="(item, index) in store.cardsArray" :key="item.id">
            <AppCard :cards="item" />
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<style lang="scss">
@use "./scss/general.scss"
</style>