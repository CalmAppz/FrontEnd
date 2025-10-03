import { TestsPsicologico } from "./TestsPsicologico";

export class Reporte{
    id: number=0;
    nombreReporte: string ="";
    resultado: string ="";
    fechaCreacion: Date = new Date();
    recomendacion: string ="";
    testsPsicologico: TestsPsicologico= new TestsPsicologico();
}