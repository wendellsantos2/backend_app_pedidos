import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('PRODUTOS')
export class Produto {
  @PrimaryGeneratedColumn()
  id_produto: number;

  @Column({ length: 255 })
  descricao: string;
}
