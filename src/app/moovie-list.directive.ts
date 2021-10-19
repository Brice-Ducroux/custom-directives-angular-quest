import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMoovieList]',
})
export class MoovieListDirective {
  @Input() set appMoovieList(condition: boolean) {
    if (condition) {
      this.vwref.createEmbeddedView(this.tplRef);
    } else {
      this.vwref.clear();
    }
  }
  constructor(
    private tplRef: TemplateRef<any>,
    private vwref: ViewContainerRef
  ) {}
}
