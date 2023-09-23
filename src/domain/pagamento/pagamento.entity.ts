import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../pedido/pedido.entity';

@Entity('PAGAMENTO')
export class Pagamento {
  @PrimaryGeneratedColumn()
  id_pagamento: number;

  @Column()
  id_pedido: number;

  @ManyToOne(() => Pedido)
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;
}
