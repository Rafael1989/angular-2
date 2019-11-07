import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido' // vai exportar uma instancia da diretiva
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @Input('appCampoColorido') cor = 'gray';

  // acesso ao elemento que colocar a diretiva
  // constructor(private elementRef: ElementRef, private rederer: Renderer2) {  }

  // ao ganhar foco irá ficar amarelo
  @HostListener('focus') colorir() {
    // this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.corDeFundo = this.cor;
  }

  // ao perder foco irá ficar transparente
  @HostListener('blur') descolorir() {
    // this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.corDeFundo = 'transparent';
  }

}
