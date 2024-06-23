import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,MaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router:Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ){

  }

  salir(): void{
    this.authService.logout(); 
    this.router.navigateByUrl("/login") 
  }

  irHome():void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irPregunta2():void{
    this.router.navigate(["pregunta-02"], {relativeTo: this.route})
  }
  irPregunta3():void{
    this.router.navigate(["pregunta-03"], {relativeTo: this.route})
  }
  irPregunta4():void{
    this.router.navigate(["pregunta-04"], {relativeTo: this.route})
  }

}
