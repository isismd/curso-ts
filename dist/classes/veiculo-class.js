"use strict";
exports.__esModule = true;
exports.Veiculo = void 0;
var Veiculo = /** @class */ (function () {
    function Veiculo(titulo, rodas) {
        if (titulo === void 0) { titulo = "Nome Carro"; }
        if (rodas === void 0) { rodas = 2; }
        this.titulo = titulo;
        this.rodas = rodas;
        this.titulo = titulo;
        this.rodas = rodas;
    }
    Veiculo.prototype.getTitulo = function () {
        return this.titulo;
    };
    Veiculo.prototype.getRodas = function () {
        return this.rodas;
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
