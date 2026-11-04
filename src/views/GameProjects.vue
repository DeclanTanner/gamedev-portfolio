<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 20px;">
      The following are projects I have built or been a core programmer on.
    </div>

    <ProjectsList v-bind:projects="projects" :columns="2" :row-height="330" />

    <div style="margin-top: 10px;">
      See more on <a target="_blank" href="https://github.com/stars/DeclanTanner/lists/game-dev-portfolio">GitHub!</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
