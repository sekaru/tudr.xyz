<template>
  <div id="app">
    <h1>Tudor Sandulescu</h1>

    <ul>
      <li><a class="nav-link" href="https://github.com/sekaru">GitHub</a></li>
      <li><a class="nav-link" href="https://twitter.com/sekaru_">Twitter</a></li>
      <li><a class="nav-link" href="https://www.linkedin.com/in/tudor-sandulescu-257bb5130">LinkedIn</a></li>
    </ul>

    <div class="content">
      <h2>I'm a final year Computer Science student.</h2>
      <h3>
        I'm particularly interested in network communication, apps for connectivity/discovery and game development. 
        
        Below you can find my personal projects, each of which is available on GitHub. 
        My games and anything related to those are available at <a class="nav-link" href="http://sleepystudios.net">Sleepy Studios</a>.
      </h3>

      <h2>Contact me</h2>
      <h3>firstlast@outlook.com</h3>

      <h2>CV</h2>
      <h3><a class="nav-link" href="cv.pdf">The latest copy of my CV is available here</a></h3>
    </div>
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
  color: limegreen;
  text-decoration: none;
}

.nav-link:hover {
  font-style: italic;
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
