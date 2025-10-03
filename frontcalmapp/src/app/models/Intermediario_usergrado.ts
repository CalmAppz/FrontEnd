import { GradoAcademico } from "./GradoAcademico";
import { user } from "./user";

export class Intermediario_usergrado{
    id: number=0;
    grados: GradoAcademico = new GradoAcademico()
    users: user = new user();
}