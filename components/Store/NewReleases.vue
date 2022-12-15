<template>
  <section class="w-100">
    <!--Title-->
    <b-row>
      <b-col>
        <title-h3>{{title}}</title-h3>
      </b-col>
    </b-row>

    <!--Item filter-->
    <b-row class="mb-2">
      <b-col>
        <color-button
          title="All"
          class="mr-2 active mb-2"
        />
        <color-button
          v-for="item in items"
          :key="item.id"
          :title="item.name"
          :color="item.color"
          class="mr-2 mb-2"
        />
      </b-col>
    </b-row>

    <!--Item list-->
    <b-row>
<!--      <item-card-->
<!--        v-for="item in items"-->
<!--        :key="item.id"-->
<!--        :item="item"-->
<!--      />-->
    </b-row>
  </section>
</template>

<script>
  import TitleH3 from "@/components/Title/TitleH3";
  import ColorButton from "../Actions/ColorButton";
  import ItemCard from "../Card/ItemCard";

  export default {
    name: "NewReleases",
    components: {ItemCard, ColorButton, TitleH3},
    props: {
      title: {type: String, default: null},
    },

    data() {
      return {

        items: [
          {
            id: 1,
            name: 'Vue',
            image: 'product-sample-image',
            price: 'Free',
            color: '#42b883'
          },
          {
            id: 2,
            name: 'React JS',
            image: 'product-sample-image',
            price: 'Free',
            color: '#00a6c4'
          },
          {
            id: 3,
            name: 'Magento',
            image: 'product-sample-image',
            price: 'Free',
            color: '#f46f25'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
