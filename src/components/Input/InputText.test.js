/* eslint-disable no-undef */

import React from 'react';
import {
  render, screen, // fireEvent,
} from '@testing-library/react';
import InputTxt from './inputTxt';

it('Deve renderizar o input com  o texto', () => {
  const placeholder = 'Digite seu E-mail';
  render(<InputTxt inputPlaceholder={placeholder} />);
  const input = screen.getByPlaceholderText(placeholder);
  // screen.debug();
  expect(input).toBeInTheDocument();
});

/*
it('Password Id Test', () => {
  const passwordITest = 'passwordTest';
  const encontrarPassword = screen.queryByTestId(passwordITest);
  expect(encontrarPassword).toBeInTheDocument();
});
*/
/*
import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import Button from './button';

it('Deve renderizar o botao com o texto fornecido', () => {
  const label = 'Login';
  render(<Button> { label } </Button>);
  const encontrado = screen.getByText(label);
  expect(encontrado).toBeInTheDocument();
});
it('Deve executar a funçao de click ao clicar', () => {
  const label = 'Click';
  const fn = jest.fn();
  render(<Button buttonOnClick={fn}> { label } </Button>);
  const clicado = screen.getByText(label);
  fireEvent.click(clicado);
  expect(fn).toHaveBeenCalledTimes(1);
});

*/
