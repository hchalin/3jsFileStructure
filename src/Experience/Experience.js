import * as THREE from "three";
import Time from "./Utils/Time";
import Sizes from "./Utils/Sizes";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";
import Environment from './World/Environment';
import Resources from './Utils/Resources';
import sources from "./sources";

//Convert to singleton
let instance = null;

export default class Experience {
  //CONSTRUCTOR
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;
    //Global access
    window.experience = this;
    //Options
    this.canvas = canvas;

    //Setups
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources)

    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();
    // this.environment = new Environment()


    //Sizes resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    //Time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }
  //----- END OF CONSTRUCTOR

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
  }
}
