<template>
  <div class="hello">
    <div id="cards">
      <div class="card" 
           v-for="project in projects"           
           v-bind:class="{expanded: project.expanded, flipable: !project.expanded, 'expanded-anim': project.expanded && !project.slides[project.slideIndex].img}" 
           v-on:click="clickProject(project)"        
           v-bind:style="{'background-color': project.color, cursor: !project.expanded ? 'pointer' : project.slides[project.slideIndex].text.length===0 ? 'pointer': 'default'}">

        <transition-group name="img-fade" mode="out-in" v-if="project.expanded">
          <img 
            v-for="slide of project.slides" 
            v-if="showImg(slide.img, project)" 
            :src="slide.img" 
            :key="slide.img"
            v-bind:style="{'object-fit': slide.imgFit ? slide.imgFit : 'contain'}">          
        </transition-group>
        
        <p class="info-container" v-if="(project.slides[project.slideIndex].text.length>0 && project.expanded) || !project.expanded">
          <span v-if="project.expanded && project.showText" v-on:click="closeProject(project)" class="control close">X</span>
          
          <span class="title">{{project.title}}</span>

          <span v-if="project.expanded && project.showText">
            <div class="slide-container">
              <transition name="fade" mode="out-in">
                <span :key="project.slideIndex" v-html="project.slides[project.slideIndex].text"></span>
              </transition>
            </div>

            <br>
            Built with <span class="techs">{{project.builtWith.join(', ')}}</span>

            <br>
            <span v-if="project.url">{{project.learnText ? project.learnText : 'Learn more at'}} <a :href="'http://' + project.url">{{project.url}}</a></span>

            <br>
            <span v-if="project.slides.length>1" class="slide-num">
              <span v-show="notFirstSlide(project)" v-on:click="prevSlide(project)" class="control"><</span> 
              {{project.slideIndex+1}}/{{project.slides.length}} 
              <span v-show="notLastSlide(project)" v-on:click="nextSlide(project)" class="control">></span>
            </span>

          </span>
          <span v-else>
            <br>
            {{project.date}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      projects: require('./projects.js')
    }
  },

  created: function() {
    this.projects.forEach(project => {
      this.$set(project, 'expanded', false);
      this.$set(project, 'slideIndex', 0);
      this.$set(project, 'slideInterval', null);
      this.$set(project, 'closeLock', false);
      this.$set(project, 'controlLock', false);
      this.$set(project, 'showText', false);
    });
  },

  methods: {
    clickProject: function(project) {
      if(project.closeLock || project.controlLock) return;

      if(project.expanded) {
        if(project.slides[project.slideIndex].text.length===0) {
          if(this.notLastSlide(project)) {
            this.nextSlide(project);
          } else {
            for(var i=0; i<project.slides.length-1; i++) this.prevSlide(project);
          }
        }
        return;
      }

      this.projects.forEach(project => {
        project.expanded = false;
        project.slideIndex = 0;
        project.showText = false;
        clearInterval(project.interval);
      });

      this.createSlideInterval(project);
      project.expanded = true;

      setTimeout(() => {
        project.showText = true;
      }, 350)
    },

    closeProject: function(project) {
      project.expanded = false;
      project.closeLock = true;

      setTimeout(() => {
        project.closeLock = false;
      }, 200);
    },

    notFirstSlide: function(project) {
      return project.slideIndex!==0;
    },

    notLastSlide: function(project) {
      return project.slideIndex!==project.slides.length-1;
    },

    prevSlide: function(project) {
      clearInterval(project.interval);
      project.slideIndex--;
      this.setControlLock(project);
      this.createSlideInterval(project);
    },

    nextSlide: function(project) {
      clearInterval(project.interval);
      project.slideIndex++;
      this.setControlLock(project);
      this.createSlideInterval(project);
    },

    setControlLock: function(project) {
      project.controlLock = true;
      setTimeout(() => {
        project.controlLock = false;
      }, 200);
    },

    createSlideInterval: function(project) {
      project.interval = setInterval(() => {
        // increment which slide to show
        if(project.expanded) {
          project.slideIndex = project.slideIndex<project.slides.length-1 ? project.slideIndex+1 : 0; 
        }
      }, 6000);
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
  width: 300px;
  height: 15vw;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s;
}

.title {
  text-transform: uppercase;
  font-weight: bold;
}

.flipable {
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  transition: all 0.2s;
}

.flipable:hover {
  animation: 0.25s flip ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  font-size: 1.5rem;
}

@keyframes flip {
  from {
    transform: translateY(0) scale(1);
    z-index: 3;    
  }

  80% {
    transform: scale(1.2);
  }

  to {
    transform: translateY(0) scale(1);
    filter: saturate(150%);
    z-index: 3;
  }
}

.expanded {
  width: 600px;
  height: 50vh;
  font-size: 1.25rem;
  text-align: left;
}

.expanded img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
}

.expanded-anim {
  animation: 1s hue ease;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes hue {
  0% {
    filter: saturate(100%);
  }

  50% {
    filter: saturate(150%);
  }

  100% {
    filter: saturate(100%);
  }
}

.info-container {
  width: 80%;
  z-index: 1;
}

.techs {
  font-style: italic;
}

.slide-container {
  height: 18vh;
}

.slide-num {
  float: right;
  font-size: 1rem;
}

.control {
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s;    
  opacity: 0.5;  
}

.control:hover {
  opacity: 1;
}

.close {
  float: right;
  opacity: 1;
}

.close:hover {
  color: SALMON;
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
</style>
