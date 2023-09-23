import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './domain/cliente/cliente.module';
import { ItemModule } from './domain/item/item.module';
import { PagamentoModule } from './domain/pagamento/pagamento.module';
import { PedidoModule } from './domain/pedido/pedido.module';
import { ProdutoModule } from './domain/produto/produto.module';
import { Produto } from './domain/produto/produto.entity';
import { Cliente } from './domain/cliente/cliente.entity';
import { Pedido } from './domain/pedido/pedido.entity';
import { Pagamento } from './domain/pagamento/pagamento.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de banco de dados que você está usando
      host: 'localhost', // Endereço do servidor do banco de dados
      port: 3306, // Porta do servidor do banco de dados
      username: 'root', // Nome de usuário para acessar o banco de dados
      password: '', // Senha para acessar o banco de dados
      database: 'db_pedido', // Nome do banco de dados
      entities: [Produto,Cliente,Pedido,ItemModule,Pagamento], // Localização das entidades
      synchronize: true, // Habilita a sincronização do esquema do banco de dados
    }),
    ProdutoModule,
    ClienteModule,
    PedidoModule,
    PagamentoModule,
    ItemModule,
  ],
})
export class AppModule {}