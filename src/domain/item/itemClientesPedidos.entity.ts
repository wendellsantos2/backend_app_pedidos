import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';
import { Pedido } from '../pedido/pedido.entity';

@Entity('ITEM_CLIENTES_PEDIDOS')
export class ItemClientesPedidos {
  @Column()
  id_pedido: number;

  @Column()
  id_cliente: number;

  @Column({ length: 50 })
  status_pedido: string;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;

  @ManyToOne(() => Pedido)
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;
}
