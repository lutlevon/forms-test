import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   data = [
    {
      title: 'microsoft',
      number: 1
    },
    {
      title: 'oracle',
      number: 2
    }
  ]

  dataForm:FormGroup = new FormGroup({
    Compras: new FormArray ([]),
    Ventas: new FormArray ([])
  })

  get Ventas(): FormArray {
    return this.dataForm.get('Ventas') as FormArray;
  }

  nuevaVenta(): FormGroup {
    return new FormGroup({
      title: new FormControl(''),
      number: new FormControl('')
    })
  }

  addVentas(){
    this.Ventas.push(this.nuevaVenta());
  }

  ngOnInit(): void {
    for(let i = 0; i < this.data.length; i++ ){
      const aux = this.nuevaVenta();
      aux.controls['title'].setValue(this.data[i].title);
      aux.controls['number'].setValue(this.data[i].number);
      this.Ventas.push(aux);
    }
  }

  onSubmit(){
    console.log(this.dataForm);
  }

}
