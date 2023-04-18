<script>
import AppCard from './components/AppCard.vue';
import axios from "axios";
import { store } from "./store";
export default {
  data() {
    return {
      store,
      manyCard: 0,
      archeType: ["Alien", "Ally of Justice", "Ancient Gear"],
      archeTypeSelected: ""
    }
  },
  components: {
    AppCard
  },
  mounted() {
    this.getCardRequest();
  },
  methods: {
    handleChange() {
      if (this.archeTypeSelected) {
        axios
          .get(store.getUrl, {
            params: {
              archetype: this.archeTypeSelected
            }
          })
          .then((resp) => {
            this.store.cardsArray = resp.data.data;
            this.manyCard = resp.data.meta.current_rows;
          })
      } else {
        this.getCardRequest();
      }
    },
    getCardRequest() {
      axios
        .get(store.getUrl)
        .then((resp) => {
          this.store.cardsArray = resp.data.data;
          this.manyCard = resp.data.meta.current_rows;
        });
    },
  }
}
</script>

<template>
  <header class="header">
    <h1 class="p-2">Yu-Gi-Oh Api</h1>

  </header>

  <body>
    <section class="select p-4">
      <select @change="handleChange" v-model="archeTypeSelected" class="rounded-1" name="card-type" id="">
        <option value="">All</option>
        <option v-for="type in archeType" :value=type>{{ type }}</option>
      </select>
    </section>

    <section class="selected-card ">
      <div class="container">
        <h3 class="founded"> Founded <span>{{ manyCard }}</span> cards</h3>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 gx-4 gy-2">
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