const soma = require('./soma');

test('Soma 1 + 2 é igual  3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('Ao chamar soma deve retornar 0', ()=>{
  expect(soma()).toBe(0);
});

test('Ao chamaer soma (1), deve retornar 1', ()=>{
  expect(soma(1)).toBe(1);
})


test('Soma 1 + 2 + 3 é igual  6', () => {
  expect(soma(1, 2, 3)).toBe(6);
});
