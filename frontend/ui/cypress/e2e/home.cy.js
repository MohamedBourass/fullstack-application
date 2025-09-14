describe('Page d’accueil', () => {
  it('devrait afficher le titre', () => {
    cy.visit('/');
    cy.get('nav > a').should('have.length', 5);
    cy.contains('Home works!').should('be.visible');
  });
});
