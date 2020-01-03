import { Directive, ElementRef, HostListener } from '@angular/core';
import { StickyDirection } from '@angular/cdk/table';

@Directive({
  selector: '[appOnlynumbers]'
})
export class OnlynumbersDirective {
 private regex: RegExp = new RegExp('^[a-zA-Z]*$');
  private specialKeys: Array<string> = ['Backspace', 'ArrowRight', 'ArrowLeft'];
  constructor(private elementref: ElementRef) { }
@HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
  const inputValue: string = this.elementref.nativeElement.value.concat(event.key);
  if (this.specialKeys.indexOf(event.key) !== -1) {
    return;
  }
  console.log(event.key);
  if (inputValue && !String(inputValue).match(this.regex)) {
    event.preventDefault();
    }
  return;
}


@HostListener('paste', ['$event']) onPaste(event) {
  const clipboardData = (event.originalEvent || event).clipboardData.getData('text/plain');
  if (clipboardData) {
    const regEx = new RegExp('^[a-zA-Z]*$');
    if (!regEx.test(clipboardData)) {
   event.preventDefault();
    }
  }
  return;
}
}
