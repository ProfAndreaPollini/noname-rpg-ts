
import * as PIXI from "pixi.js"
import {TileMap} from "./TileMap"


import imageUrl from "url:../noname-rpg-base/assets/tiles/lpc-tile-atlas/terrain_atlas.png"
import testMap from "url:../tmp/prova.json"

const t = (msg: String) => {
    console.log(msg)
}
t("it worksnpm ")


 

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application();

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);



// load the texture we need
app.loader
    .add('bunny', imageUrl)
    .add('map', testMap);
    
app.loader.load((loader, resources) => {
    console.log(resources.bunny)
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(resources.bunny.texture);
    const map: TileMap = new TileMap(resources.map?.data)

    console.log(map)

    // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // Add the bunny to the scene we are building
    app.stage.addChild(bunny);

    // Listen for frame updates
    app.ticker.add(() => {
         // each frame we spin the bunny around a bit
        bunny.rotation += 0.01;
    });
});