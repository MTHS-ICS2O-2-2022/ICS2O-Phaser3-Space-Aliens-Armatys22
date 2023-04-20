/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: dom
// Created on: Sep 2020
// This is the phaser3 configuration file

//* Game scene */
const config = {
type: Phaser.AUTO,
width: 1920,
height: 1080,
physics: {
  default: 'arcade',
  arcade: {
debug: true
  }
},
// set background color
backgroundColor: 0x5f6e7a,
scale: {
  mode: Phaser.Scale.FIT,
  //WE place it in the middle of the page.
  autoCentre: Phaser.Scale.CENTER_BOTH
}
}

const game = new Phaser.Game(config)
console.log(game)
