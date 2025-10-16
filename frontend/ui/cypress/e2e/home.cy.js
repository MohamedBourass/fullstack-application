describe('HomePage', () => {
  it('should check the header', () => {
    cy.visit('/');
    cy.get('nav > a').should('have.length', 5);
  });
  it('should check the content', () => {
    cy.visit('/');
    cy.contains('Home works!').should('be.visible');
  });
});
