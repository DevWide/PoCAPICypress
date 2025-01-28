import { faker } from '@faker-js/faker';

describe('API - Testes de Usuários', () => {
  const baseUrl = 'https://serverest.dev';

  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/usuarios`,
      body: {
        nome: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: 'true',
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });

  it('Deve listar os usuários cadastrados', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/usuarios`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.usuarios).to.be.an('array');
    });
  });

  it('Deve excluir um usuário pelo ID', () => {
    // Primeiro cria um usuário para deletar
    cy.request({
      method: 'POST',
      url: `${baseUrl}/usuarios`,
      body: {
        nome: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: 'true',
      },
    }).then((createResponse) => {
      const userId = createResponse.body._id;

      // Agora deleta o usuário criado
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/usuarios/${userId}`,
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
        expect(deleteResponse.body.message).to.eq('Registro excluído com sucesso');
      });
    });
  });
});
