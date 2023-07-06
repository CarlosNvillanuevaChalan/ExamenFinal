describe('Vetagile Login', () => {
    it('Visitar la página', () => {
      cy.visit('http://demo.vetagile.com/login');
    });

    it('Iniciar sesión', () => {
        cy.visit('http://demo.vetagile.com/login');
    
        // escribir el usuario
        cy.get('input[name="email"]').type('ludk17@gmail.com');
    
        // Escribir contraseña
        cy.get('input[name="password"]').type('123456qwerty');
    
        // Verifica que los campos de email y contraseña tengan los valores correctos
        cy.get('input[name="email"]').should('have.value', 'ludk17@gmail.com');
        cy.get('input[name="password"]').should('have.value', '123456qwerty');
        cy.get('button.btn-primary').click();
      });
 
  });