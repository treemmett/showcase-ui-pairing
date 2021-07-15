/* global cy */
import * as React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders the header', () => {
  mount(<App />);
  cy.contains(/Wikimedia image browser/i);
});

it('searches for images', () => {
  mount(<App />);
  cy.get('input').click().type('dog');
  cy.get('img').should('exist');
});
