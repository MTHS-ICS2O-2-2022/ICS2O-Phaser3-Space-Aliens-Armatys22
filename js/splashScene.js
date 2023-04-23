/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: dom
// Created on: Sep 2020
// This is Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/spalshSceneImage.png')
  }

  ceate (data) {
    this.SplashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.SplashSceneBackgroundImage.x = 1920 / 2
    this.SplashSceneBackgroundImage.y = 1080 / 2
  }

  update (time, delta) {
    if (time > 3000) {
    this.scene.switch('titleScene')
    }
  }
  }

  export default SplashScene
  