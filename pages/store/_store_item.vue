<template>
  <div>
    <banner-color
      :title="store.title"
      :description="store.technology.description"
      :color="store.technology.color"
    />

    <b-container class="quick-navigation">
      <b-row class="flex-nowrap">
        <b-col :class="nav.classes" v-for="nav in quickNavigations" :key="nav.icon">
          <card-left-icon
            :title="nav.title"
            :content="nav.content"
            :icon="nav.icon"
            :class="nav.classes"
            :color="store.technology.color"
            :url="nav.url"
          />
        </b-col>
      </b-row>
    </b-container>


    <b-container>
      <card-logo-container
        :logo="store.technology.Logo[1].url"
        :items="filterLinks"
      />
    </b-container>

    <b-container fluid>
      <b-row>
        <item-card
          v-for="storeItem in store.store_items"
          :key="storeItem.key"
          :title="storeItem.title"
          :seo="'/store/'+storeItem.seo"
          :downloads="storeItem.downloads"
          :price="storeItem.price"
          :images="storeItem.thumbnail"
        />
      </b-row>
    </b-container>


  </div>
</template>

<script>

  import axios from "axios";

  import BannerColor from "@/components/Banner/BannerColor";
  import CardLeftIcon from "@/components/Card/CardLeftIcon";
  import CardLogoContainer from "@/components/Card/CardLogoContainer";
  import ItemCard from "@/components/Card/ItemCard";

  export default {
    components: {ItemCard, CardLogoContainer, CardLeftIcon, BannerColor},
    data() {
      return {
        quickNavigations: [
          {
            title: "Case study",
            content: "See our works for our clients",
            icon: "class",
            classes: '',
            url: '/store'
          },
          {
            title: "Store",
            content: "Collection of Templates and Layouts",
            icon: "store",
            classes: 'active d-none d-sm-block',
            url: '/store'
          },
          {
            title: "Submit Ticket",
            content: "Get a support, Quote for project etc..",
            icon: "contact_support",
            classes: '',
            url: '/store'
          }
        ]
      }
    },
    async asyncData({ params }) {
      let {data} = await axios.post(process.env.apiUrl, {
        "query": `
        {
          stores(where:{seo: "${params.store_item}"}){id, title,seo,store_items{id, title, seo, price, downloads, thumbnail{ url}},technology{Title, description,Logo{ url}, color, stores{id, title, seo}}}
        }
      `,
        headers: {"Content-Type": "application/json"}
      });

      return {store: data.data.stores[0]}
    },
    computed: {
      filterLinks: function () {
        let filterLinks = [];
        (this.store.technology.stores).forEach(function (val) {
          filterLinks.push({
            id: val.id,
            title: val.title,
            link: '/store/' + val.seo
          })
        });
        return filterLinks;
      }
    },
    head() {
      return {
        title: this.store.title,
        meta: [
          {hid: 'description', name: 'description', content: this.store.description}
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
</style>

