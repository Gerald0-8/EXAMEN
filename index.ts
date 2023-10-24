const parque = new ParqueDeDiversiones();
  
  const montanaRusa = new Atraccion('MontañaRusa',"laberinto","carruseles","rueda");
  montanaRusa.areas.push(new Area('Área 1', 'Mañana'));
  montanaRusa.aperitivos.push('Globos', 'Mapas del parque');
  
  const montanaRusaComida = new AtraccionComida('Montaña Rusa Comida', ['Palomitas de maíz', 'Refresco']);
  
  const visitante1 = new Visitante('Juan', montanaRusa, 'Área 1', 'Asiento 5', ['Palomitas de maíz', 'Refresco']);
  const visitante2 = new VisitanteComida('Ana', montanaRusaComida, 'Área 2', 'Asiento 10', ['Globos', 'Refresco'], ['Helado']);
  
  parque.agregarAtraccion(montanaRusa);
  parque.agregarAtraccion(montanaRusaComida);
  parque.registrarVisitante(visitante1);
  parque.registrarVisitante(visitante2);
  
  parque.mostrarResumenVisitante();