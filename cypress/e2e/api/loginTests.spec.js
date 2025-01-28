import { faker } from '@faker-js/faker';

describe('API - Testes de Login', () => {
  const baseUrl = 'https://serverest.dev';
  let email, password;

  before(() => {
    // Gera credenciais dinâmicas com o Faker
    email = faker.internet.email();
    password = faker.internet.password();

    // Cria o usuário com as credenciais geradas
    cy.request({
      method: 'POST',
      url: `${baseUrl}/usuarios`,
      body: {
        nome: faker.name.fullName(),
        email: email,
        password: password,
        administrador: 'true',
      },
    }).then((response) => {
      expect(response.status).to.eq(201); // Verifica se o usuário foi criado com sucesso
    });
  });

  it('Deve realizar login com credenciais válidas', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        email: email,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200); // Login bem-sucedido
      expect(response.body.message).to.eq('Login realizado com sucesso');
      expect(response.body).to.have.property('authorization'); // Token retornado
    });
  });

  it('Deve falhar ao tentar login com credenciais inválidas', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      failOnStatusCode: false, // Permite capturar erros 4xx
      body: {
        email: faker.internet.email(), // Email inexistente
        password: faker.internet.password(), // Senha inválida
      },
    }).then((response) => {
      expect(response.status).to.eq(401); // Login não autorizado
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });
});
