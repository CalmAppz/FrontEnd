import { Pregunta } from "./Pregunta";
import { TestsPsicologico } from "./TestsPsicologico";

export class PuntajesPorPregunta{
    id: number=0;
    puntaje: number=0;
    testsPsicologico: TestsPsicologico= new TestsPsicologico();
    pregunta: Pregunta=new Pregunta()
}