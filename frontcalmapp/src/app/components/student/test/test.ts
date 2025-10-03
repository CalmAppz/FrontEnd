import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {
  // Preguntas de ansiedad
  preguntasAnsiedad = [
    { texto: '¿Te sientes nervioso o inquieto?' },
    { texto: '¿Te cuesta relajarte?' },
    { texto: '¿Tienes pensamientos negativos sin poder controlarlos?' },
    { texto: '¿Sientes que tus preocupaciones son excesivas?' },
    { texto: '¿Te cuesta concentrarte por los nervios?' },
    { texto: '¿Tienes dificultades para dormir debido a la ansiedad?' },
    { texto: '¿Sientes palpitaciones o aceleración del corazón?' },
    { texto: '¿Evitas situaciones por miedo o ansiedad?' },
    { texto: '¿Tienes miedos irracionales que afectan tu vida diaria?' },
    { texto: '¿Sientes tensión muscular frecuente?' }
  ];

  // Preguntas de estrés
  preguntasEstres = [
    { texto: '¿Sientes que tienes demasiadas responsabilidades?' },
    { texto: '¿Te sientes abrumado por tus tareas diarias?' },
    { texto: '¿Tienes problemas para desconectar del trabajo o estudios?' },
    { texto: '¿Te resulta difícil relajarte después de un día ocupado?' },
    { texto: '¿Te sientes agotado, tanto física como mentalmente?' },
    { texto: '¿Experimentas dolores de cabeza o musculares debido al estrés?' },
    { texto: '¿Sientes que el estrés afecta tu bienestar emocional?' },
    { texto: '¿Te cuesta organizar tus actividades diarias por el estrés?' },
    { texto: '¿Sientes que no tienes tiempo suficiente para ti mismo?' },
    { texto: '¿Te resulta difícil controlar tu nivel de estrés?' }
  ];

  // Respuestas de los cuestionarios (por defecto, todas en 0)
  respuestasAnsiedad = Array(10).fill(0);
  respuestasEstres = Array(10).fill(0);

  // Resultados de los cuestionarios
  resultadoAnsiedad: string = '';
  resultadoEstres: string = '';

  // Método para calcular los resultados de ansiedad y estrés
  calcularResultado(tipo: string) {
    let puntuacion = 0;

    if (tipo === 'ansiedad') {
      puntuacion = this.respuestasAnsiedad.reduce((a, b) => a + b, 0);
      this.resultadoAnsiedad = this.obtenerResultado(puntuacion, 'ansiedad');
      this.mostrarResultado('ansiedad', puntuacion);
    } else if (tipo === 'estres') {
      puntuacion = this.respuestasEstres.reduce((a, b) => a + b, 0);
      this.resultadoEstres = this.obtenerResultado(puntuacion, 'estres');
      this.mostrarResultado('estres', puntuacion);
    }
  }

  // Función para obtener el resultado (de acuerdo con el puntaje)
  obtenerResultado(puntuacion: number, tipo: string): string {
    let resultado = '';

    if (tipo === 'ansiedad') {
      if (puntuacion <= 10) resultado = 'No ansiedad';
      else if (puntuacion <= 20) resultado = 'Ansiedad leve';
      else if (puntuacion <= 30) resultado = 'Ansiedad moderada';
      else resultado = 'Ansiedad grave';
    }

    if (tipo === 'estres') {
      if (puntuacion <= 10) resultado = 'No estrés';
      else if (puntuacion <= 20) resultado = 'Estrés leve';
      else if (puntuacion <= 30) resultado = 'Estrés moderado';
      else resultado = 'Estrés grave';
    }

    return resultado;
  }

  // Mostrar el resultado con SweetAlert2
  mostrarResultado(tipo: string, puntuacion: number) {
    let mensaje = '';
    let icono: 'success' | 'warning' | 'error' | 'info' = 'info'; // Aseguramos que sea uno de los tipos válidos

    if (tipo === 'ansiedad') {
      if (puntuacion <= 10) {
        mensaje = 'No ansiedad';
        icono = 'success';
      } else if (puntuacion <= 20) {
        mensaje = 'Ansiedad leve';
        icono = 'warning';
      } else if (puntuacion <= 30) {
        mensaje = 'Ansiedad moderada';
        icono = 'warning';
      } else {
        mensaje = 'Ansiedad grave';
        icono = 'error';
      }
    }

    if (tipo === 'estres') {
      if (puntuacion <= 10) {
        mensaje = 'No estrés';
        icono = 'success';
      } else if (puntuacion <= 20) {
        mensaje = 'Estrés leve';
        icono = 'warning';
      } else if (puntuacion <= 30) {
        mensaje = 'Estrés moderado';
        icono = 'warning';
      } else {
        mensaje = 'Estrés grave';
        icono = 'error';
      }
    }

    // Mostrar SweetAlert2 con el mensaje y el icono adecuado
    Swal.fire({
      title: mensaje,
      text: `Tu puntuación de ${tipo} es: ${puntuacion}`,
      icon: icono,
      confirmButtonText: 'Aceptar'
    });
  }
}