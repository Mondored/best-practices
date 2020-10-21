import { Parts } from '../../src/data/tool';

describe('TestProject', () => {
  beforeEach(function() {
    cy.visit('http://localhost:8080');
  });

  it('Do something', () => {
    /* cy.get('[data-cy=selectToolDropDown]').wait(200)
      .select("{ \"gripper1\": true, \"gripper2\": true, \"gripper3\": true, \"gripper4\": true, \"gripper5\": true }");

    cy.get('[data-cy=selectToolDropDown]')
      .should('contain.value', parts); */
  });

  it('Add new joint to the list', () => {
    cy.get('[data-cy=addJointButton]').click();
    cy.get('[data-cy=jointElements]').should('have.length',4);

    cy.get('[data-cy=selectJointDropDown]').select('2');
    cy.get('[data-cy=selectXAxis]').type("20");
  });

  const test = "{gripper1: true, gripper2: true, gripper3: true, gripper4: true, gripper5: true}";
  const parts = [{
    gripper1: true,
    gripper2: true,
    gripper3: true,
    gripper4: true,
    gripper5: true,
  },];
});
