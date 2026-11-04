import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Waybound - Stealth Platformer", "img/projects/wayboundicon.png", 
    `
    <div class="paragraph">
     <strong>Waybound</strong> is a narrative-driven 3D puzzle game. You play as Nellie, a young red panda searching for her lost mother in a stark black-and-white film noir modern industrial city. 
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/2c39TJWrx7w" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features I programmed:
        <ul>
        <li><strong>Guard AI with a detection meter</strong>: guards stop and track the player
            instead of chasing, filling a per-guard perception meter that catches her at 100%.
            If she breaks line of sight, they hold their gaze on her last-seen position before
            returning to patrol. Built on the team's Behaviour Tree / Blackboard setup.</li>
        <li><strong>Stealth camera system</strong>: a reusable <code>BP_StealthTrigger</code>
            class swaps the third-person camera to fixed, Ocarina of Time-style angles in stealth
            rooms, so new stealth rooms can be added just by placing a trigger.</li>
        <li><strong>Third-person camera</strong>: restored the inherited project's camera to a
            standard third-person setup and tuned it to a Stray-like feel.</li>
        <li><strong>Controller-first movement</strong>: run, sprint and jump, with a turn radius
            that scales with speed (driven by a curve asset), and movement direction taken from
            the camera manager so controls stay correct under fixed cameras.</li>
        <li><strong>Playtest-driven jump</strong>: first built as a committed, Stray-style pounce;
            playtesting showed it made parkour too hard, so I reworked it into a vertical jump
            that keeps run-up momentum and allows full air control.</li>
        <li><strong>AI test gym</strong>: a dedicated level for testing and demonstrating guard
            behaviour in isolation.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Downloadable on <a href="https://griffith-games-studio.itch.io/waybound" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/waybound1.png" alt="Waybound Screenshot" />
        <img class="phone-screenshot" src="img/projects/waybound2.png" alt="Waybound Screenshot" />
    </div>
    `, "#c0392b", true, false),
    new ProjectData("project-3", "Batoven - Rhythm Game", "img/projects/batoven.png", `
    <div class="paragraph">
        <strong>Batoven</strong> is a rhythm game I made for the Griffith Film School 48-Hour Game Jam alongside 3 artists.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/VmKMNbCWsc0" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Note charts synced to music with FMOD timeline markers</li>
        <li>Timing-based accuracy, combos and end-of-song ranks</li>
        <li>Tap and hold notes across two lanes</li>
        <li>Animated Paper2D enemies, menus and a looping song select</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Downloadable on <a href="https://misschatterbox.itch.io/bathoven" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/DeclanTanner/MonsterMashup" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/batoven.gif" alt="Batoven Screenshot" />
        <img class="pc-screenshot" src="img/projects/batoven2.png" alt="Batoven Screenshot" />
        <img class="pc-screenshot" src="img/projects/batoven1.png" alt="Batoven Screenshot" />
    </div>
    `, "#2E3A8C", true, false),
];