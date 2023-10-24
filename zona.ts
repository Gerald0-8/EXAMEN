class Area {
    constructor(public nombre: string, public disponibilidad: string) {}
  }
  
  class Visitante {
    constructor(
      public nombre: string,
      public atraccion: Atraccion,
      public zona: string,
      public ubicacion: string,
      public productosConsumidos: string[]
    ) {}
  }