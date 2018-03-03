<template>
  <div id="app">
    <h1>Tudor Sandulescu</h1>

    <ul>
      <li><a class="nav-link" href="https://github.com/sekaru">GitHub</a></li>
      <li><a class="nav-link" href="https://twitter.com/sekaru_">Twitter</a></li>
      <li><a class="nav-link" href="https://www.linkedin.com/in/tudor-sandulescu-257bb5130">LinkedIn</a></li>
    </ul>
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
  text-align: center;
}

h3 {
  font-weight: normal;
}

ul {
  list-style: none;
  text-align: center;
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
  margin: 30px 0;

  animation: 0.5s slidein linear;
  animation-iteration-count: 1;
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
  color: #00e5ff;
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
