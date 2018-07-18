<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
h1 {
  text-align: right;
  font-size: 4rem;
}

h3 {
  font-weight: normal;
}

ul {
  margin-top: -2em;
  margin-bottom: 2em;
  list-style: none;
  text-align: right;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 1em;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  animation: 0.5s slidein linear;
  animation-iteration-count: 1;

  margin: 30px 0;
}

@keyframes slidein {
  from {
    margin-top: 100%;
  }

  to {
    margin-top: 0%;
  }
}

.content {
  width: 90%;
  margin: 0 auto;
}

.nav-link {
  color: #00a5dd;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

@keyframes crazy {
  from {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  to {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
</style>
