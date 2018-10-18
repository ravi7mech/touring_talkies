import { NgModule } from '@angular/core';
import * as MATERIAL_MODULES from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

export function mapMaterialModules() {
  return Object.keys(MATERIAL_MODULES)
    .filter(k => {
      const asset = MATERIAL_MODULES[k];
      return (
        typeof asset === 'function' &&
        asset.name.startsWith('Mat') &&
        asset.name.includes('Module')
      );
    })
    .map(k => MATERIAL_MODULES[k]);
}
const modules = mapMaterialModules();

@NgModule({
  imports: [...modules, FlexLayoutModule],
  exports: [...modules, FlexLayoutModule]
})
export class AppSharedModule {}
