import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('PEDIDO')
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @Column({ length: 50 })
  metodo_pagamento: string;

  @Column({ length: 50 })
  status: string;
}
