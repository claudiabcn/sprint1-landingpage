class Coche {
  constructor(marca, modelo, potencia, cilindrada, color) {
    this._marca = marca;
    this._modelo = modelo;
    this._potencia = potencia;
    this._cilindrada = cilindrada;
    this._color = color;
  }
  get marca() {
    return this._marca;
  }
  get modelo() {
    return this._modelo;
  }
  get potencia() {
    return this._potencia;
  }
  get cilindrada() {
    return this._cilindrada;
  }
  get color() {
    return this._color;
  }
  set potencia(potencia) {
    this._potencia = potencia;
  }
  set cilindrada(cilindrada) {
    this._cilindrada = cilindrada;
  }
  set color(color) {
    this._color = color;
  }
  arrancar() {
    return "Arrancando el coche";
  }
  acelerar() {
    console.log(`Acelerando el coche.`);
  }
  girar() {
    console.log(`Girando el coche.`);
  }
  frenar() {
    console.log(`Frenando el coche.`);
  }
  toString() {
    return (
      "Este coche tiene: <br> Marca: " +
      this._marca +
      ", Modelo: " +
      this._modelo +
      ", Potencia: " +
      this._potencia +
      ", Color: " +
      this._color +
      ", Cilindrada: " +
      this._cilindrada
    );
  }
}
