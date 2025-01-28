Cypress.Commands.add('createUser', (user) => {
    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: user
    }).then((response) => {
      expect(response.status).to.eq(201); // Valida que o usuário foi criado com sucesso
    });
  });
  
  Cypress.Commands.add('login', (email, password) => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: { email, password }
    }).then((response) => {
      expect(response.status).to.eq(200); // Login bem-sucedido
      return response.body.authorization; // Retorna o token de autorização
    });
  });
  
  Cypress.Commands.add('deleteUser', (userId) => {
    cy.request({
      method: 'DELETE',
      url: `/usuarios/${userId}`
    }).then((response) => {
      expect(response.status).to.eq(200); // Valida que o usuário foi deletado
    });
  });
  