import { Component, OnInit } from '@angular/core';
import { Users } from '../../services/users.service';
import { Router } from '@angular/router';
import { user } from '../../models/user';
import { MatLabel } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit {
  uusers: user = new user();
  signupForm: FormGroup = new FormGroup({});

  constructor(
    private usersService: Users,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  // Inicializar formulario con validaciones
  initForm(): void {
    this.signupForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.pattern('[0-9]{8}')]  // Validar que sea solo números y 8 dígitos
      ],
      nombresapellidos: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],  // Validar correo
      password: ['', [Validators.required, Validators.minLength(8)]],  // Contraseña con mínimo 8 caracteres
      confirmPassword: ['', [Validators.required]],  // Confirmación de contraseña  // Validación de términos y condiciones
      enabled: [false, [Validators.requiredTrue]],  // Campo habilitado por defecto
    }, { validators: this.passwordMatcher });
  }

  // Método para validar que las contraseñas coincidan
  passwordMatcher(group: FormGroup): any {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Método para enviar el formulario de registro
  aceptar(): void {
    if (this.signupForm.valid) {
      this.uusers = this.signupForm.value;

      // Verificar que las contraseñas no estén vacías antes de enviarlas
      if (!this.uusers.password) {
        console.error('La contraseña no puede estar vacía');
        return;
      }

      // Realizar la solicitud POST al backend
      this.usersService.insert(this.uusers).subscribe({
        next: (response: any) => {
          console.log('User created:', response);
          this.router.navigate(['login']);  // Redirigir al login después de registro
        },
        error: (err) => {
          console.error('Error while creating user:', err);
          Swal.fire('Error', 'Hubo un problema al crear el usuario', 'error');
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }

  // Método para cambiar la visibilidad de las contraseñas
  togglePasswordVisibility(field: string) {
    const passwordField = document.getElementById(field) as HTMLInputElement;
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  }
}