<template>



 




  <Navbar />
  <router-view/>
  <Footer></Footer>


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

  button{
  margin-top: 20px;
  margin-bottom: 40px;
}

#volta{
  margin-top: 20px;
}

#home{
    margin-bottom: 25%;
  }



</style>
