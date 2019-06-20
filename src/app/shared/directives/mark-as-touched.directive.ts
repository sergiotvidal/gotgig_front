import { Directive, Input, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appMarkAsTouched]'
})
export class MarkAsTouchedDirective {
  @Input() appMarkAsTouched: FormGroup;

  @HostListener('submit', ['$event'])
  onSubmit(event) {
    Object.values(this.appMarkAsTouched.controls).forEach(control =>
      control.markAsTouched()
    );
  }
}
