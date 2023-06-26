import { AbstractEntity } from "./abstract-entity"
import { Cor } from "./cor"
import { Modelo } from "./modelo"
import { Tipo } from "./tipo"

export class Veiculo extends AbstractEntity{

    placa!: String
    
    modelo!: Modelo

    ano!: Int16Array

    cor!: Cor

    tipo!: Tipo


}