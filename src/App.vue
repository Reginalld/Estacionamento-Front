<template>



 




  <Navbar />
  <router-view/>
  <Footer />


</template>



<script lang="ts">

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'


export default{

components: {

Navbar,
Footer

}

}

</script>
<style lang="scss">



  * {

margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'poppins', sans-serif;

  }



</style>
