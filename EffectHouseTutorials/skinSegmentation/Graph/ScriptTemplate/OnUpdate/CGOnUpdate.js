/**
 * @file CGOnUpdate.js
 * @author
 * @date 2021/8/17
 * @brief CGOnUpdate.js
 * @copyright Copyright (c) 2021, ByteDance Inc, All Rights Reserved
 */

const {BaseNode} = require('./BaseNode');
const Amaz = effect.Amaz;

class CGOnUpdate extends BaseNode {
  constructor() {
    super();
  }

  onUpdate(sys, deltatime) {
    this.outputs[1] = deltatime;

    if (this.nexts[0] !== undefined) {
      this.nexts[0]();
    }
  }
}

exports.CGOnUpdate = CGOnUpdate;
