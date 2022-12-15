<template>
  <div>
    <!--Header-->
    <header>
      <nav-bar/>
    </header>

    <!--Main Content section-->
    <main>
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar/MainNavBar";
  import axios from "axios";

  export default {
    components: {
      NavBar
    }
  }
</script>
