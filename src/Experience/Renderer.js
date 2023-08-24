import * as THREE from "three";
import Experience from "./Experience";
export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.sizes = this.experience.sizes;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    // this.instance.useLegacyLights = false;
    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setClearColor("#211d20");
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);


  }
    resize(){
      this.instance.setSize(this.sizes.width, this.sizes.height);
      this.instance.setPixelRatio(this.sizes.pixelRatio);


    }
    update(){
      this.instance.render(this.scene, this.camera.instance)
    }
}
