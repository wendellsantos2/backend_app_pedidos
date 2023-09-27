export class CreateItemClientesPedidosDTO {
    id?: number; // Opcional, pois pode ser gerado automaticamente pelo banco de dados.
    id_pedido: number;
    id_cliente: number;
    status_pedido: string;
  }