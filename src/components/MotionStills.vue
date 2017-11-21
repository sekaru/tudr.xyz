<template>
  <div class="motion-stills">
    <div class="content">
      <h3><router-link class="nav-link" :to="'/'">Back to Portfolio</router-link></h3>
    </div>

    <div class="header" v-bind:style="{'background': 'url(' + require('../assets/ms/pheader.jpg') + ') no-repeat center center fixed', 'background-size': 'cover'}">
      <h2>Perturbator @ ULU</h2>
    </div>

    <div id="ms-container">
      <img v-for="i in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]" :key="i" :src="require('../assets/ms/p' + i + '.gif')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MotionStills',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
img {
  height: 14vw;
  transition: 0.2s all;  
}

img:hover {
  transform: scale(1.8, 1.8);
}

#ms-container {
  background: black;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.header {
  width: 100%;
  height: 50vh;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header h2 {
  color: white;
  text-align: center;
  background: rgba(0,0,0,0.3);
  padding: 1em;
}

@media (max-width: 768px) {
  img {
    width: 100vw;
    height: auto;
  }

  img:hover {
    transform: none;
  }

  .content {
    text-align: center;
  }
}
</style>