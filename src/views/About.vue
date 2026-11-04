<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Declan Tanner</strong>, a gameplay programmer from Brisbane, Australia, and a
        Game Design and Production graduate (Game Programming major) from Griffith University.<br/>
        I like building the systems that make a game feel good to play: movement, enemy AI, combat, timing, and physics-driven mechanics. 
        Most of these I've built using UE5 Blueprints, C++ or C#.
      </div>

      <div style="margin-top: 20px;">
        Recently I've been the sole programmer on a game jam team, built a Stray-inspired camera
        and guard AI for a stealth game, and written a procedural map generator in C++.
        You can see my <router-link to="/game-projects">games</router-link>,
        my <router-link to="/other-projects">tools and experiments</router-link>,
        and my <router-link to="/resume">resume</router-link>.
      </div>

      <div style="margin-top: 40px;">You can reach me at <a href="mailto:dttanner76@gmail.com">dttanner76@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Declan" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }

  .photo img {
  width: 224px;
  height: 224px;
  border-radius: 50%;
  object-fit: cover;
  }
}

</style>