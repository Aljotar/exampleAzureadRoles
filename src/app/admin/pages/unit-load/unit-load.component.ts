import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-load',
  templateUrl: './unit-load.component.html',
  styles: [
    `
      h2 {
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(#7A2180,#E40276);
        font-size: 1.8rem;
        font-weight: 500;
        text-align: center;
      }
    `
  ]
})
export class UnitLoadComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    userId: [ '', [Validators.required, Validators.minLength(3)]],
    profileId: [  , [Validators.required, Validators.min(0)]],
    clientId: [  , [Validators.required, Validators.min(0)]],
    name: [ '', [Validators.required, Validators.minLength(3)]],
    active: [ , [Validators.required]],
    country: [ '', [Validators.required, Validators.minLength(3)]],
    pbxExt: [ , [Validators.required, Validators.minLength(3)]]
  })

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      userId: '',
      profileId: ''
    })
  }

  campoEsValido( campo: string) {
    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }


  guardar() {
    
      if( this.miFormulario.invalid ) {
        this.miFormulario.markAllAsTouched();
        return
      }
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
  }

}
