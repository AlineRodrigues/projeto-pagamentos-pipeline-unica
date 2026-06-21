class ServicoDePagamento {

  pagamentos = [];

  pagar(codigoBarras, empresa, valor) {

    const pagamento = {
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor
    };

    if (valor > 100) {
      pagamento.categoria = 'cara';
    } else {
      pagamento.categoria = 'padrão';
    }

    this.pagamentos.push(pagamento);
  }

  consultarUltimoPagamento() {
    return this.pagamentos[this.pagamentos.length - 1];
  }

}

module.exports = ServicoDePagamento;
