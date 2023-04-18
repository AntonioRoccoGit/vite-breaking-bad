import { reactive } from "vue";
export const store = reactive({
    getUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=60&offset=0",
    cardsArray: []
})