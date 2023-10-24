
  
  class VisitanteComida extends Visitante {
    constructor(
      nombre: string,
      atraccion: AtraccionComida,
      zona: string,
      ubicacion: string,
      productosConsumidos: string[],
      public comidaPedido: string[]
    ) {
      super(nombre, atraccion, zona, ubicacion, productosConsumidos);
    }
  }
  
