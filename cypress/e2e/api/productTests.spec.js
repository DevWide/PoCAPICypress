import { faker } from '@faker-js/faker';

describe('API - Testes de Produtos', () => {
  const baseUrl = 'https://serverest.dev';
  let token;

  before(() => {
    // Login e obtenção do token
    const email = faker.internet.email();
    const password = faker.internet.password();

    // Cria usuário administrador
    cy.request({
      method: 'POST',
      url: `${baseUrl}/usuarios`,
      body: {
        nome: faker.name.fullName(),
        email: email,
        password: password,
        administrador: 'true',
      },
    }).then(() => {
      // Faz login e armazena o token
      cy.request({
        method: 'POST',
        url: `${baseUrl}/login`,
        body: { email, password },
      }).then((response) => {
        token = response.body.authorization;
        expect(token).to.exist;
      });
    });
  });

  it('Deve cadastrar um novo produto com sucesso', () => {
    const productPayload = {
      nome: `Produto ${faker.commerce.productName()}`,
      preco: Math.round(Number(faker.commerce.price(10, 100))), // Garante preço inteiro
      descricao: faker.commerce.productDescription(),
      quantidade: faker.number.int({ min: 1, max: 100 }), // Quantidade como número inteiro
    };

    cy.log('Payload:', productPayload);

    cy.request({
      method: 'POST',
      url: `${baseUrl}/produtos`,
      headers: {
        authorization: token, // Usa o token do login
      },
      body: productPayload,
    }).then((response) => {
      cy.log('Response:', response.body); // Log para debug
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });
});

