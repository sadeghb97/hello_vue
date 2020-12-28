//matnhaei ke mostaghim darune component gharar migirand --> darune <slot><slot>
//agar darune component chand bakhsh dashte bashad baghie bakhsh ha ba nam bayad gharar dahim
/*mitavanim matne gharar dade shode darune component ra darune yek elemente digar 
ya agar niazi be elemente digar nist va mikhahim nam gozari konim darune template gharar midahim*/

Vue.component("my-cart", {
    props: ['src', 'alt'],
    template: `
        <div class="card" style="width: 18rem; margin: 8px;">
            <img v-bind:src="src" class="card-img-top" v-bind:alt="alt">
            <div class="card-body">
                <h5 class="card-title"><slot name="title"></slot></h5>
                <p class="card-text"><slot></slot></p>
                <a href="#" class="btn btn-primary"><slot name="button"></slot></a>
            </div>
        </div>
    `
});

var app = new Vue({
    el : "#app",
    data: {
        games:[
            {
                img: "img/gtav.jpg",
                alt: "GTA V",
                title: "Grand Theft Auto V",
                description: `Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games.
                It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV.`
            },
            {
                img: "img/rdr2.jpg",
                alt: "RDR2",
                title: "Red dead redemption 2",
                description: `Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games.
                The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption.`
            },
            {
                img: "img/p5r.jpg",
                alt: "P5",
                title: "Persona 5 Royal",
                description: `Persona®5 Royal presents a unique visual style and award nominated composer Shoji Meguro returns with an all-new soundtrack.
                Explore Tokyo, unlock new Personas, customize your own personal Thieves Den, discover a never-before-seen story arc, cutscenes, alternate endings, and more! Platform: PS4 Release: 3/30/2020.`
            },
            {
                img: "img/tlour.jpg",
                alt: "TLOU",
                title: "The last of us Remastered",
                description: `Winner of over 200 game of the year awards, The Last of Us has been remastered for the PlayStation®4.
                Now featuring higher resolution character models, improved shadows and lighting, in addition to several other gameplay improvements.
                Abandoned cities reclaimed by nature. A population decimated by a modern plague.`
            }
        ]
    }
});