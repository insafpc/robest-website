<template>
  <div>
    <banner-color
      :title="storeItem.title"
      :description="storeItem.description"
      :color="storeItem.store.technology.color"
      :preview="storeItem.images[0].url"
      :isFullscreen="true"
    />

  </div>
</template>

<script>

  import BannerColor from "@/components/Banner/BannerColor";
  import axios from "axios";

  export default {
    components: {BannerColor},
    async asyncData({ params }) {
      let {data} = await axios.post(process.env.apiUrl, {
        "query": `
        {
          storeItems(where:{seo: "${params.store_item}"}){id, title, description, store{title, technology{Title, color}}, images{url}}
        }
      `,
        headers: {"Content-Type": "application/json"}
      });

      return {storeItem: data.data.storeItems[0]}
    },
    head() {
      return {
        title: this.storeItem.title,
        meta: [
          {hid: 'description', name: 'description', content: this.storeItem.description}
        ]
      }
    }
  }
</script>

