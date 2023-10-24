class Atraccion {

    carruseles:string;
    laberintoEncantado:string;
    ruedaFortuna:string;
    montañaRusa:string;

    constructor(carruseles:string,
        laberintoEncantado:string,
        ruedaFortuna:string,
        montañaRusa:string) {
            this.carruseles=carruseles;
            this.laberintoEncantado=laberintoEncantado;
            this.ruedaFortuna=ruedaFortuna;
            this.montañaRusa=montañaRusa;

        }
    areas: Area[] = [];
    aperitivos: string[] = [];
  }