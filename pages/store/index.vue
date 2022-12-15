<template>
  <div>
    <banner-color
      :title="title"
      :description="description"
    />

    <b-container class="quick-navigation">
      <b-row class="flex-nowrap">
        <b-col :class="nav.classes" v-for="nav in quickNavigations" :key="nav.icon">
            <card-left-icon
              :title="nav.title"
              :content="nav.content"
              :icon="nav.icon"
              :class="nav.classes"
            />
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <card-logo-container
        :items="filterLinks"
      />
    </b-container>

    <b-container fluid>
      <b-row>
        <item-card
          v-for="storeItem in storeItems"
          :key="storeItem.key"
          :title="storeItem.title"
          :seo="'/store/download/'+storeItem.seo"
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
  import {mapGetters} from 'vuex'

  import BannerColor from "@/components/Banner/BannerColor";
  import CardLeftIcon from "@/components/Card/CardLeftIcon";
  import CardLogoContainer from "@/components/Card/CardLogoContainer";
  import NewReleases from "@/components/Store/NewReleases";
  import ItemCard from "@/components/Card/ItemCard";

  export default {
    components: {ItemCard, NewReleases, CardLogoContainer, CardLeftIcon, BannerColor},
    async asyncData() {
      let {data} = await axios.post(process.env.apiUrl, {
        "query": `
        {
         storeItems{ id, title,seo, downloads, thumbnail{ url}, price}
        }
      `,
        headers: {"Content-Type": "application/json"}
      });
      return {storeItems: data.data.storeItems}
    },
    computed: {
      filterLinks: function () {
        let filterLinks = [];
        (this.navigation.stores).forEach(function (val, i) {
          filterLinks.push({
            id: val.id,
            title: val.title,
            link: '/store/' + val.seo
          })
        });
          return filterLinks;
      },
      ...mapGetters({
        navigation: 'GET_NAVIGATION',
      })
    },
    data() {
      return {
        title: "Store",
        description: "We provide best collections of ready to use Templates for your website,  Themes for your e-commerce website, Components for Vue and React project and lot more... That you can download and use in your existing project, also we are here to help to make your new idea in to real.",
        quickNavigations: [
          {
            title: "Case study",
            content: "See our works for our clients",
            icon: "class",
            classes: ''
          },
          {
            title: "Store",
            content: "Collection of Templates and Layouts",
            icon: "store",
            classes: 'active d-none d-sm-block'
          },
          {
            title: "Submit Ticket",
            content: "Get a support, Quote for project etc..",
            icon: "contact_support",
            classes: ''
          }
        ]
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {hid: 'description', name: 'description', content: this.description}
        ]
      }
    }
  }
</script>

