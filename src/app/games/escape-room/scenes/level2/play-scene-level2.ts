import Phaser from 'phaser';

export class PlayLevel2Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'play-level2-scene' });
  }

  config: Phaser.Types.Core.GameConfig | any;
  init(data: { config: Phaser.Types.Core.GameConfig }) {
    this.config = data.config;
  }

  create() {

  }

  override update() {
  }

}
