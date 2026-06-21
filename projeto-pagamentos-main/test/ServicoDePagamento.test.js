const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', function () {

  it('Deve realizar pagamento categoria cara', function () {

    const servicoDePagamento = new ServicoDePagamento();

    servicoDePagamento.pagar(
      '0987-7656-3475',
      'Samar',
      156.87
    );

    const ultimoPagamento =
      servicoDePagamento.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimoPagamento, {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 156.87,
      categoria: 'cara'
    });

  });

  it('Deve realizar pagamento categoria padrão', function () {

    const servicoDePagamento = new ServicoDePagamento();

    servicoDePagamento.pagar(
      '1111-2222-3333',
      'Empresa X',
      50
    );

    const ultimoPagamento =
      servicoDePagamento.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimoPagamento, {
      codigoBarras: '1111-2222-3333',
      empresa: 'Empresa X',
      valor: 50,
      categoria: 'padrão'
    });

  });

  it('Deve consultar apenas o último pagamento', function () {

    const servicoDePagamento = new ServicoDePagamento();

    servicoDePagamento.pagar(
      '1111',
      'Empresa 1',
      50
    );

    servicoDePagamento.pagar(
      '2222',
      'Empresa 2',
      200
    );

    const ultimoPagamento =
      servicoDePagamento.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimoPagamento, {
      codigoBarras: '2222',
      empresa: 'Empresa 2',
      valor: 200,
      categoria: 'cara'
    });

  });

});
