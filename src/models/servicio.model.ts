import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Ruta} from './ruta.model';

@model()
export class Servicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora_inicio: string;

  @property({
    type: 'string',
    required: true,
  })
  hora_fin: string;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_conductor: string;

  @property({
    type: 'number',
    required: true,
  })
  dinero: number;

  //se cambia propiedad por tener relacion con otra entidad (ruta con servicio)
  /*@property({
    type: 'string',
    required: true,
  })
  ruta: string;
*/
//pertenece a
  @belongsTo(() => Ruta, {name: 'rutaFk'})
  ruta: string;

  constructor(data?: Partial<Servicio>) {
    super(data);
  }
}

export interface ServicioRelations {
  // describe navigational properties here
}

export type ServicioWithRelations = Servicio & ServicioRelations;
