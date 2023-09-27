
export class CreateItemProdutosPedidosDTO {
    id?: number; // Opcional, pois pode ser gerado automaticamente pelo banco de dados.
    id_produto: number;
    id_pedido: number;
    qrcode: string;
    status_pagamento: string;
    item_status_pedido_produto: string;
  }