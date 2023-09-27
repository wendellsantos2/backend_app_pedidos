// src/clientes/cliente.entity.ts
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('CLIENTE')
export class Cliente {
  @PrimaryGeneratedColumn()
  id_cliente: number;
}
