describe('TestProject', () => {
  const selectTool = "{ \"gripper1\": \"Open\", \"gripper2\": \"Open\", \"gripper3\": \"Open\", \"gripper4\": \"Open\", \"gripper5\": \"Open\" }";

  beforeEach(function() {
    cy.visit('http://localhost:8080');
  });

  it('Select and deselect a tool from a dropDown list', () => {
    cy.get('[data-cy=selectToolDropDown]')
      .select(selectTool)
      .should('have.value', selectTool);
    
    cy.get('[data-cy=selectToolButton]').click();
    cy.get('[data-cy=unSelectToolButton]').contains('Unselect tool');
    cy.get('[data-cy=unSelectToolButton]').click();    
  });

  it('Add new joint to the list', () => {
    // add new joint element
    cy.get('[data-cy=addJointButton]').click();
    cy.get('[data-cy=jointElements]').should('have.length', 4);
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
    .select(selectTool)
    .should('have.value', selectTool);
    cy.get('[data-cy=selectToolButton]').click();

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
      .select('gripper1').should('have.value', 'gripper1');
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
      .select('gripper2').should('have.value', 'gripper2');
    cy.get('[data-cy=selectMoveDropDown]')
      .select('Close').should('have.value', 'Close');
    cy.get('[data-cy=selectGripperCommand]').click();

    cy.get('[data-cy=runCommandSteps]').click();
  });
});
