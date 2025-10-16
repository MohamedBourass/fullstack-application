describe('RegisterPage', () => {
  beforeEach(() => {
    cy.intercept('POST', '/api/v1/auth/register', {
      statusCode: 200,
      body: { message: 'Inscription réussie' },
    }).as('registerUser');

    cy.visit('/register');
  });


  it('should check the registration', () => {
    cy.visit('/register');
    cy.get('input[name="name"]').type('Mohamed');
    cy.get('input[name="email"]').type('mohamed@example.com');
    cy.get('input[name="password"]').type('mohamed@example.com');
    cy.get('button[type="submit"]').click();

    // Vérifie qu’un message de confirmation apparaît
    //cy.contains('Merci pour votre message').should('be.visible');
  });
});
