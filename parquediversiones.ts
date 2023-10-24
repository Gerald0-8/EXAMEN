class ParqueDeDiversiones {
    atracciones: Atraccion[] = [];
    visitantes: Visitante[] = [];
  
    agregarAtraccion(atraccion: Atraccion) {
      this.atracciones.push(atraccion);
    }
  
    registrarVisitante(visitante: Visitante) {
      this.visitantes.push(visitante);
    }
  
    mostrarResumenVisitante() {
      for (const visitante of this.visitantes) {
        console.log(`Nombre del visitante: ${visitante.nombre}`);
        console.log(`Atracción elegida: ${visitante.atraccion.ruedaFortuna}`);
        console.log(`Zona de la atracción: ${visitante.zona}`);
        console.log(`Ubicación: ${visitante.ubicacion}`);
        console.log('Aperitivos o accesorios gratuitos:');
        for (const aperitivo of visitante.atraccion.aperitivos) {
          console.log(`- ${aperitivo}`);
        }
        console.log('Productos consumidos:');
        for (const producto of visitante.productosConsumidos) {
          console.log(`- ${producto}`);
        }
      }
    }
  }