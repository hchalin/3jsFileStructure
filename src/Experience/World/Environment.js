import * as THREE from 'three'
import Experience from '../Experience';

export default class Environment{
  constructor(){
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.setSunLight()
    this.setEnvironmentMap()

  }
  setSunLight(){
    this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
    this.sunLight.castShadow = true
    this.sunLight.shadow.camera.far = 15
    this.sunLight.shadow.mapSize.set(1024, 1024)
    this.sunLight.shadow.normalBias = 0.05
    this.sunLight.position.set(3.5, 2, - 1.25)
    this.scene.add(this.sunLight)
  }
  setEnvironmentMap(){
    this.environmentMap = {}
    this.environmentMap.intensity = .4;
    this.environmentMap.texture = this.resources.items.environmentMapTexture
    // console.log(this.environmentMap);
    console.log(this.environmentMap.texture.colorSpace); // und
    this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace
    this.scene.environment = this.environmentMap.texture
  }
}