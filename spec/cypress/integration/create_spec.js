describe('Create Article Data', function() {
  it('successfully create articles ', function() {
    cy.visit('http://localhost:5002/articles/new') 
    // cy.get('input[name="article[Title]"]').type("Testing from cypress");
    cy.contains('Create Article')
  })
})
