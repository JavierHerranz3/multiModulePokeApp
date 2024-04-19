import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginForm } from '../../../../core/models/authentication.model';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatInputModule, MatButtonModule, 
    MatProgressSpinnerModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {
  loginForm: FormGroup<LoginForm>;

  loading: boolean;

  constructor(private authenticationService: AuthenticationService, private router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    this.loading = false;
  }
  async onLogin(event: SubmitEvent){
    event.preventDefault();
    this.loading = true;
     //Añadir llamada al servicio de autenticación para
    // realizar la petición de login
   await this.authenticationService.login(this.loginForm.value as LoginForm);

   this.loading = false;

   this.router.navigateByUrl('/pokemon');

   //redireccionar alguna página

   

  }
}
