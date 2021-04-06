/*
 * Copyright 2021 Google Inc. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const GRID_SIZE_PROPERTY = '--alien-grid-size';
const BG_COLOR_PROPERTY = '--alien-bg-color';
const FG_COLOR_PROPERTY = '--alien-fg-color';

class AlienPainter {
  static get inputProperties() {
    return [GRID_SIZE_PROPERTY, BG_COLOR_PROPERTY, FG_COLOR_PROPERTY];
  }
  
  paint(ctx, geom, properties) {
    const bgColor = properties.get(BG_COLOR_PROPERTY)
    const fgColor = properties.get(FG_COLOR_PROPERTY)
    const size = properties.get(GRID_SIZE_PROPERTY).value;
    
    ctx.fillStyle = fgColor;
    ctx.fillRect(0, 0, geom.width, geom.height);
    ctx.fillStyle = bgColor;

    ctx.beginPath();
    for(let y = 0; y < (geom.height / size); y++) {
      for(let x = 0; x < (geom.width / size); x++) {
        if ((x ^ y) % 9) {          
          ctx.rect(x * size, y * size, size, size);
        } 
      }
    }
    ctx.fill();
  }
}
registerPaint('alien', AlienPainter);
