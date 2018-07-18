<template>
  <div class="hello">
    <intro id="intro"></intro>

    <div id="cards">
      <div class="card" 
           v-for="project in projects"
           :key="project.name"           
           v-on:click="clickProject(project)"        
           v-bind:class="[{expanded: true}, project.additionalClasses]"           
           v-bind:style="{background: project.color, cursor: project.slides[project.slideIndex].text.length===0 ? 'pointer': 'default'}">
          
        <!-- Slide background(s) -->
        <transition-group name="img-fade" mode="out-in">
          <img 
            v-for="slide of project.slides" 
            v-if="showImg(slide.img, project)" 
            :src="slide.img" 
            :key="slide.img"
            v-bind:style="{'object-fit': slide.imgFit ? slide.imgFit : 'contain'}">          
        </transition-group>
        
        <div class="info-container" v-if="project.slides[project.slideIndex].text.length>0">
          <!-- Title -->
          <div class="title">
            {{project.title}}
            <br>
            <span class="date">{{project.date}}</span>
            <span v-if="project.wip" class="wip"><strong>Work in progress<br></strong></span>
          </div>
          
          <div class="slide-container">
            <!-- Slide text -->
            <transition name="fade" mode="out-in">
              <span :key="project.slideIndex" v-html="project.slides[project.slideIndex].text"></span>
            </transition>
          </div>

          <div style="margin-bottom: 1em">
            <!-- Tech -->
            <div>
              Built with <span class="techs">{{project.builtWith.join(', ')}}</span>
            </div>

            <!-- Links -->
            <span v-if="project.url">{{project.learnText ? project.learnText : 'Learn more at'}} <a :href="'http://' + project.url">{{project.url}}</a></span>
          </div>
          
          <!-- Slide controls -->
          <div v-if="project.slides.length>1" class="slide-num">
            <span v-on:click="prevSlide(project)" class="control"><</span> 
            Slide {{project.slideIndex+1}}/{{project.slides.length}} 
            <span v-on:click="nextSlide(project)" class="control">></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: require('./projects.js')
    }
  },

  created: function() {
    this.projects.forEach(project => {
      this.$set(project, 'slideIndex', 0);
      this.$set(project, 'slideInterval', null);
      this.$set(project, 'closeLock', false);
      this.$set(project, 'controlLock', false);
    });
  },

  methods: {
    clickProject: function(project) {
      if(project.closeLock || project.controlLock) return;

      if(project.slides[project.slideIndex].text.length===0) {
        if(this.notLastSlide(project)) {
          this.nextSlide(project);
        } else {
          for(var i=0; i<project.slides.length-1; i++) this.prevSlide(project);
        }
      }
      return;
    },

    notLastSlide: function(project) {
      return project.slideIndex!==project.slides.length-1;
    },

    prevSlide: function(project) {
      project.slideIndex = project.slideIndex===0 ? project.slides.length-1 : project.slideIndex-1;
      this.setControlLock(project);
    },

    nextSlide: function(project) {
      project.slideIndex = project.slideIndex===project.slides.length-1 ? 0 : project.slideIndex+1;
      this.setControlLock(project);
    },

    setControlLock: function(project) {
      project.controlLock = true;
      setTimeout(() => {
        project.controlLock = false;
      }, 200);
    },

    showImg: function(img, project) {
      return img.length>0 && img===project.slides[project.slideIndex].img;
    }
  }
}
</script>

<style scoped>
a {
  color: white;
}

#cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.card {
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
}

.title {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
}

.date {
  font-size: 0.9rem;
}

.wip {
  font-size: 0.9rem;
  margin-left: 0.5em;
}

.expanded {
  width: 30vw;
  height: 25vw;
  font-size: 1rem;
  text-align: left;
  transition: all 0.4s;
  margin: 1em;
  border-bottom: 0.5em solid rgba(255, 255, 255, 0.1);
}

.expanded img {
  position: absolute;
  width: 100%;
  height: calc(100% + 0.5em);
  left: 0;
  top: 0;
  z-index: 0;
}

.info-container {
  width: 90%;
  z-index: 1;
  min-height: 50%;
}

.techs {
  font-style: italic;
  font-weight: 500;
}

.slide-container {
  height: 15vh;
}

.slide-num {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.control {
  cursor: pointer;
  transition: 0.5s;    
  opacity: 0.5;  
  margin: 0 0.5em;
}

.control:hover {
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.img-fade-enter-active, .img-fade-leave-active {
  transition: opacity 0.4s ease;
}

.img-fade-enter, .img-fade-leave-active {
  opacity: 0;
}

.party {
  animation: party-anim 2s infinite ease-out;
}

@keyframes party-anim {
  0%   {background: hsl(0, 80%, 50%)}
  20%  {background: hsl(30, 100%, 60%);}
  40%  {background: hsl(120, 80%, 50%);}
  60%  {background: hsl(180, 80%, 50%);}
  70%  {background: hsl(220, 80%, 50%);}
  80%  {background: hsl(300, 80%, 50%);}
  100% {background: hsl(360, 80%, 50%);}
}

@media (max-width: 1024px) {
  .card {
    width: 40vw;
    height: 35vw;
    font-size: 0.75rem;
  }
}

@media (max-width: 768px) {
  .card {
    width: 90vw;
    height: 85vw;
    margin-bottom: 1em;
    font-size: 0.9rem;
  }
}
</style>
