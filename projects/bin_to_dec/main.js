class App {
  constructor() {
    this._inputBin = document.querySelector('.input-bin')
    this._inputDec = document.querySelector('.input-dec')
    Object.freeze(this)
  }

  setListeners() {

    this._inputBin.addEventListener('input', event => this.setDec(event.target.value))

    this._inputDec.addEventListener('input', event => this.setBin(event.target.value))

  }

  setDec(input) {
    let bin = input.replace(/[^(1|0)]/, '')
    this._inputBin.value = bin
    this._inputDec.value = bin != '' ? parseInt(bin, 2) : ''
  }

  setBin(input) {
    let dec = input.replace(/[^(\d)]/, '')
    this._inputDec.value = dec
    this._inputBin.value = dec != '' ? parseInt(dec).toString(2) : ''
  }

}


const app = new App()
app.setListeners()
