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
  }

  ceate (data) {
  }

  update (time, delta) {
  }
  }

  export default SplashScene
  