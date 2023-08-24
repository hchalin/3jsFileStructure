import Experience from "../Experience";
import Environment from "./Environment";
import * as THREE from "three";
import Floor from "./Floor";
/**
 * World
 * This handles all physical objects in the 'world'
 */

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    //Test mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial()
    );
    this.scene.add(testMesh);

    this.resources.on("ready", () => {
      console.log("resources are loaded!");
      //Setup
      this.environment = new Environment();
      this.floor = new Floor();
    });
  }
}
