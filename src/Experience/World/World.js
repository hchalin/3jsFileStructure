import Experience from "../Experience";
import Environment from "./Environment";
import * as THREE from "three";
import Floor from "./Floor";


export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      //Setup
      this.floor = new Floor();
      this.environment = new Environment();
    });
  }
}
