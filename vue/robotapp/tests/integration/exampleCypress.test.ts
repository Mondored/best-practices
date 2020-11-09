describe('TestProject', () => {

  beforeEach(function() {
    cy.visit('http://localhost:8082');
  });

  it('Select and deselect a tool from a dropDown list', () => {
    cy.get('[data-cy=selectToolDropDown]')
      .select('Default_tool')
      .should('have.value', 'Default_tool')
      .trigger('click');
    
    cy.get('[data-cy=selectToolButton]').click();
    cy.get('[data-cy=unSelectToolButton]').contains('Unselect tool');
    cy.get('[data-cy=unSelectToolButton]').click();
  });

  it('Add new joint to the list', () => {
    // add new joint element
    cy.get('[data-cy=addJointButton]').click();
    cy.get('[data-cy=jointElements]').should('have.length', 4);
    
    cy.get('[data-cy=jointElements]').first().rightclick();
    cy.get('[data-cy=jointElements]').should('have.length', 3);
  });

  it('Create a move command, add it to the command to run list', () => {
    // enter values to a Move command section
    cy.get('[data-cy=selectJointDropDown]').select('2').should('have.value', '2');
    cy.get('[data-cy=selectXAxis]').clear().type("20").should('have.value', '20');
    cy.get('[data-cy=selectYAxis]').clear().type("10").should('have.value', '10');
    cy.get('[data-cy=selectZAxis]').clear().type("50").should('have.value', '50');

    // add Move command to the Command to run list
    cy.get('[data-cy=selectMoveCommand]').click();
    cy.get('[data-cy=commandSteps]').should('not.be.null');
  });

  it('Full functionality usage', () => {
    // select a tool from the dropdown list
    cy.get('[data-cy=selectToolDropDown]')
    .select('Default_tool')
    .should('have.value', 'Default_tool').trigger('click');
    cy.get('[data-cy=selectToolButton]').click();

    // add new joint element
    cy.get('[data-cy=addJointButton]').click();
    cy.get('[data-cy=jointElements]').should('have.length', 4);

    // enter values to a Move command section joint 1
    cy.get('[data-cy=selectJointDropDown]')
    .select('1').should('have.value', '1');
    cy.get('[data-cy=selectXAxis]').clear()
    .type("10").should('have.value', '10');
    cy.get('[data-cy=selectYAxis]').clear()
    .type("0").should('have.value', '0');
    cy.get('[data-cy=selectZAxis]').clear()
    .type("30").should('have.value', '30');
    cy.get('[data-cy=selectMoveCommand]').click();
    cy.get('[data-cy=commandSteps]').should('not.be.null');

    // enter gripper movement command on a dropdown for gripper1
    cy.get('[data-cy=selectedToolPartDropDown]')
      .select('1').should('have.value', '1');
    cy.get('[data-cy=selectMoveDropDown]')
      .select('Close').should('have.value', 'Close');
    cy.get('[data-cy=selectGripperCommand]').click();

    // enter values to a Move command section joint 2
    cy.get('[data-cy=selectJointDropDown]')
      .select('2').should('have.value', '2');
    cy.get('[data-cy=selectXAxis]').clear()
      .type("0").should('have.value', '0');
    cy.get('[data-cy=selectYAxis]').clear()
      .type("0").should('have.value', '0');
    cy.get('[data-cy=selectZAxis]').clear()
      .type("0").should('have.value', '0');
    cy.get('[data-cy=selectMoveCommand]').click();
    cy.get('[data-cy=commandSteps]').should('not.be.null');
    
    // enter gripper movement command on a dropdown for gripper2
    cy.get('[data-cy=selectedToolPartDropDown]')
      .select('2').should('have.value', '2');
    cy.get('[data-cy=selectMoveDropDown]')
      .select('Close').should('have.value', 'Close');
    cy.get('[data-cy=selectGripperCommand]').click();

    cy.get('[data-cy=runCommandSteps]').click().wait(8000);

    cy.get('[data-cy=jointElements]').contains('Joint1')
      .find('input').filter('[data-cy=jointAxisX]')
      .should('have.value', 10);
    cy.get('[data-cy=jointElements]').contains('Joint1')
      .find('input').filter('[data-cy=jointAxisY]')
      .should('have.value', 0);
    cy.get('[data-cy=jointElements]').contains('Joint1')
      .find('input').filter('[data-cy=jointAxisZ]')
      .should('have.value', 30);
  });
});
