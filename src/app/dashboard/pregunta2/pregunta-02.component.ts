import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-pregunta-02',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta-02.component.html',
  styleUrl: './pregunta-02.component.css'
})
export class Pregunta02Component {
  descuentos = null;
  precio = null;
  cantidad = null
  montos = null;
  resultadofinal= ""

  calcular():void{
    let cant = Number(this.cantidad)
    let monto = Number(this.precio) * (cant)
    let descuento = 0
    if(monto >= 200){
      descuento = 0.20 * monto
    }else{
      descuento = 0.00 * monto
    }
    this.resultadofinal= "su descuento es = " + monto;
  }
}


