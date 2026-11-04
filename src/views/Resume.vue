<template>
  <div>
    <h1>Resume</h1>
    <div class="resume-intro"> 
      <div class="paragraph">
        <br /><br />
        My resume covers my education, projects and technical skills. For a closer look at my work,
        see <router-link to="/game-projects">games</router-link> and
        <router-link to="/other-projects">tools and experiments</router-link> or my <a href="https://github.com/stars/DeclanTanner/lists/game-dev-portfolio" target="_blank">GitHub</a>.

        <div style="margin-top:20px; margin-bottom:20px;">
          <a class="download-link" href="d/declan-tanner-resume.pdf" target="_blank">
            <i class="fa fa-download fa-lg fa-fw"></i> Download Resume (PDF)
          </a>
          <div style="clear:both"></div>
        </div>
      </div>

      <div class="photo">
        <img src="img/resume-photo.png" alt="Photo of Declan Tanner" />
      </div>
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: auto;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }

  .resume-intro {
  display: flex;
  align-items: flex-start;
  gap: 60px;
  }

  .resume-intro .photo {
    margin-top: 0;
    padding: 0;
  }
}
</style>