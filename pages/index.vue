<template>
  <div>

    <!--Main Banner-->
    <banner-big
      :title="bannerTitle" :content="bannerContent"
      :serviceActions="serviceActions"
      :serviceActionIconsUrl="serviceActionIconsUrl"
      :serviceActionIconsMap="serviceActionIconsMap"
    />

    <!--Container-->
    <b-container>
      <!--Banner Links-->
      <b-row class="position-relative top-100">
        <div class="col-sm-6 col-lg-3">
          <card
            class="cursor-pointer"
            @click.native="setBannerContent('design')"
            type="icon-large"
            icon="material-icons md-36"
            icon-content="brush"
            icon-class="pink-bg--light robest--shape d-flex align-items-center justify-content-center text-dark">
            <h4 class="mt-4 text-center">
              UI/ UX <br>
              Design and Branding
            </h4>
          </card>
        </div>
        <div class="col-sm-6 col-lg-3">
          <card
            class="cursor-pointer"
            type="icon-large"
            @click.native="setBannerContent('web')"
            icon="material-icons md-36"
            icon-content="web"
            icon-class="green-bg--light robest--shape d-flex align-items-center justify-content-center text-dark">
            <h4 class="mt-4 text-center">
              Web
              Design and Development
            </h4>
          </card>
        </div>
        <div class="col-sm-6 col-lg-3">
          <card
            class="cursor-pointer" type="icon-large"
            @click.native="setBannerContent('mobile')"
            icon="material-icons md-36" icon-content="phonelink"
            icon-class="purple-bg--light robest--shape d-flex align-items-center justify-content-center text-dark">
            <h4 class="mt-4 text-center">
              Mobile and Web App <br>
              Development
            </h4>
          </card>
        </div>
        <div class="col-sm-6 col-lg-3">
          <card
            class="cursor-pointer"
            type="icon-large"
            @click.native="setBannerContent('support')"
            icon="material-icons md-36" icon-content="chat"
            icon-class="orange-bg--light robest--shape d-flex align-items-center justify-content-center text-dark">
            <h4 class="mt-4 text-center" title="">
              Premium <br>
              Customer Support
            </h4>
          </card>
        </div>
      </b-row>
    </b-container>


    <b-container fluid>
      <!--New Releases -->
<!--        <new-releases-->
<!--          title="New Releases"-->
<!--          :technologies="technologies"-->
<!--        />-->
    </b-container>
  </div>
</template>

<script>
  import BannerBig from "@/components/Banner/BannerBig";
  import Card from "@/components/Card/Card";
  import NewReleases from "@/components/Store/NewReleases";

  export default {
    components: {
      NewReleases,
      Card,
      BannerBig
    },
    data() {
      return {
        bannerTitle: 'We together make it happen.',
        bannerContent: 'We provide best collections of ready to use Templates for your website, Themes for your e-commerce website, Components for Vue and React project and lot more... That you can download and use in your existing project, also we are here to help to make your new idea in to real.',
        serviceActionIconsUrl: '',
        serviceActionIconsMap: [],
        serviceActions: [
          {
            router: '/',
            title: ' Get Start',
            classes: 'btn btn-primary mr-2'
          },
          {
            router: '/',
            title: 'Submit your ticket',
            classes: 'btn btn-secondary mr-2'
          }
        ],
        bannerServices: {
          design: {
            title: 'UI/ UX Design and Branding',
            description: 'Design content',
            serviceActionIconsUrl: '/images/graphic-design-icons.png',
            serviceActions: []
          },
          web: {
            title: 'Web Development and Templates',
            description: 'Web Design and Development content',
            serviceActionIconsUrl: '/images/web-development-icons.png',
            serviceActionIconsMap: [
              {
                shape: 'rect',
                coords: '5,0,45,39',
                router: 'test'
              }
            ]
          },
          mobile: {
            title: 'Mobile and Web App Development',
            description: 'Mobile and Web App Development content',
            serviceActionIconsUrl: '/images/app-development-icons.png'
          },
          support: {
            title: 'Premium Customer Support',
            description: 'Premium Customer Support content',
            serviceActions: [
              {
                router: '/',
                title: 'Submit your ticket',
                classes: 'btn btn-secondary mr-2'
              }
            ],
          },
        },
      }
    },

    methods: {
      setBannerContent: function (serviceType) {
        const service = this.bannerServices[serviceType];
        this.bannerTitle = service['title'];
        this.bannerContent = service['description'];
        this.serviceActionIconsUrl = service['serviceActionIconsUrl'];
        this.serviceActionIconsMap = service['serviceActionIconsMap'];
        this.serviceActions = service['serviceActions'];
      }
    },
  }
</script>

<style lang="scss" scoped>
  .top-100 {
    top: -100px
  }
</style>
