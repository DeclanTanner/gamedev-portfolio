import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "PCG Map Editor - C++ Tool", "img/projects/pcgicon.png", `
    <div class="paragraph">
      <strong>PCG Map Editor</strong> is a standalone procedural cave-generation tool written in C++
      with Raylib. You can choose a generation algorithm, generate a map, then use cellular automata to 
      smooth a map step by step, and export the result as a PNG.
      <br/>Solo Project - C++ - Raylib - raygui
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="img/projects/pcg.gif" alt="Cellular automata smoothing random noise into caves" />
    </div>

    <div class="paragraph">
      What I built:
      <ul>
        <li><strong>Four swappable generators</strong> (random, Perlin noise, cellular automata and
        Game of Life) behind a common MapGenerator interface using the
        Strategy pattern, so new algorithms plug in without touching existing code.</li>
        <li><strong>Cellular automata cave generation</strong> based on RogueBasin's approach, using a
        two-buffer update so each smoothing pass reads the previous state cleanly, and treating
        off-map tiles as rock to form natural cave walls.</li>
        <li><strong>Real-time step animation</strong>, so you can watch the automata turn noise into caves.</li>
        <li><strong>Save, load and PNG export</strong> using C++ file streams.</li>
      </ul>
    </div>

    <div class="paragraph">
      <div class="notice">
        Source code available on <a href="https://github.com/DeclanTanner/PCG-Editor---The-Construct" target="_blank">GitHub</a>.
        <br/>Cellular automata approach adapted from RogueBasin; Perlin noise via Raylib; UI via raygui.
      </div>
    </div>`, "#7b2cbf"),
    new ProjectData("project-7", "Black Hole Gun - Physics Prototype", "img/projects/blackholeicon.png", `
    <div class="paragraph">
      <strong>Black Hole Gun</strong> is a physics mechanic prototype built in Unreal Engine 5's
      first-person template. Projectiles spawn a black hole where they hit, which pulls in physics
      objects and fractured debris and grows as it feeds.
      <br/>Solo prototype - UE 5.4 - Blueprint - Chaos Physics
    </div>
    <div class="paragraph center">
      <img class="pc-screenshot" src="img/projects/blackhole.gif" alt="Black Hole Gun pulling objects in to be destroyed" />
    </div>

    <div class="paragraph">
      Main features :
      <ul>
        <li><strong>Gravity pull:</strong> the black hole applies acceleration-based force
        to every simulating component in its range, with distance-based falloff scaled by a
        tunable gravity strength.</li>
        <li><strong>Destruction integration:</strong> extended the pull to Chaos Geometry Collections
        using a Field System radial force, so fractured debris is pulled in alongside
        regular physics props.</li>
        <li><strong>Feeding growth system:</strong> the black hole grows while objects inside it are
        still being consumed. A smaller kill core sits inside a larger feeding zone, so debris
        spirals in long enough to feed growth before it's removed.</li>
      </ul>
    </div>

    <div class="paragraph">
      <div class="notice">
        Source code available on <a href="https://github.com/DeclanTanner/A1PhysicsGameGym" target="_blank">GitHub</a>.
      </div>
    </div>`, "#e67e22"),
    new ProjectData("sekiro-eeg", "Sekiro EEG Study - Research", "img/projects/sekiroicon.png", `
    <div class="paragraph">
      This is an experimental research project where I used a consumer
      EEG headset to map my own engagement, excitement and stress while fighting a boss in
      <em>Sekiro: Shadows Die Twice</em>, as groundwork for a biometric adaptive difficulty prototype.
      <br/>Solo university research project - Emotiv EPOC X - EmotivPRO - DaVinci Resolve
    </div>

    <div class="paragraph">
      <strong>Research question:</strong> How does EEG-measured arousal distinguish moments of
      engagement from boredom across Sekiro's mechanics, and how could this be used to develop
      adaptive difficulty systems?
    </div>

    <div class="paragraph center">
      <iframe class="youtube" src="https://www.youtube.com/embed/HR5uMgApovA" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
      What I did:
      <ul>
        <li><strong>Captured 7 attempts</strong> against Gyoubu Masataka Oniwa across 3 sessions,
          recording EEG performance metrics alongside gameplay and a facecam, through to defeating the boss.</li>
        <li><strong>Synced the EEG data with gameplay</strong> using clear spoken start and stop markers,
          then read changes in Engagement, Excitement and Stress against in-game events
          like deaths and phase changes.</li>
        <li><strong>Produced a highlight edit</strong> showing the metric lines alongside the
          gameplay, so the data can be read moment by moment.</li>
      </ul>
    </div>

    <div class="paragraph">
      <strong>What the data showed:</strong> Stress rose before each death and on both resurrection use and the death itself, 
      the delay on recording markers meant I'm unable to confirm for the exact moment of death so I consider this inconclusive. 
      Excitement simiarly spiked during close deflect exchanges and when entering the bosses second phase for the first time 
      but similarly I cannot confirm spikes for individual deflects and only overall exchanges. The clearest boredom contrast 
      came after each death, engagement dipped substantially during the runback and loading screens. Across the 7 attempts I recorded, 
      Stress trended down as I learned the boss's patterns while Engagement remained high, which suggests the fight was shifting 
      from overwhelming towards flow. This point is where the adaptive difficulty system would hold the player. 
      Finally, the winning attempt ended with a large Excitement spike before a drop in Stress.
    </div>

    <div class="paragraph">
      <strong>Constraints:</strong> Without an EmotivPRO licence I couldn't
      export the raw data, so I screen-recorded the software's playback and analysed it visually.
      Sensor contact through thick hair took trial and error, and syncing the two recordings
      pushed me to build clear start and stop markers into my capture process. Midway through,
      I rescoped from several mechanics to a single boss fight to keep the study focused.
    </div>

    <div class="paragraph">
      <div class="notice">
        Exploratory study: one participant, consumer-grade hardware, and Emotiv's proprietary metrics,
        so these are EEG-derived indicators of engagement and arousal, not direct measures of emotion.
      </div>
    </div>

    <div class="paragraph center">
      <img class="full-screenshot" src="img/projects/sekiro1.png" alt="EEG Data Screenshot" />
    </div>`, "#9b1b1b"),
];