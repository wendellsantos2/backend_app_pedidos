import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Produto } from '../produto/produto.entity';
import { Pedido } from '../pedido/pedido.entity';

@Entity('ITEM_PRODUTOS_PEDIDOS')
export class ItemProdutosPedidos {
  @Column()
  id_produto: number;

  @Column()
  id_pedido: number;

  @Column({ length: 255 })
  qrcode: string;

  @Column({ length: 50 })
  status_pagamento: string;

  @Column({ length: 50 })
  item_status_pedido_produto: string;

  @ManyToOne(() => Produto)
  @JoinColumn({ name: 'id_produto' })
  produto: Produto;

  @ManyToOne(() => Pedido)
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;
}
