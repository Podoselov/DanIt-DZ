import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.js';
import '@testing-library/jest-dom';

const propsElement = { text: 'text' };
const onClick = jest.fn();

describe('<Button/> component', () => {
  beforeAll(() => {
    console.error = (error) => {
      throw new Error(error);
    };
  });
  it('button render', () => {
    render(<Button />);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
  it('button render text', () => {
    render(<Button onClick={onClick} text={propsElement.text} />);
    expect(screen.getByText(/text/i)).toBeInTheDocument();
  });
  it('button render without text', () => {
    render(<Button onClick={onClick} />);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
  it('button onClick works', () => {
    const { container } = render(
      <Button handlClick={onClick} text={propsElement.text} />
    );
    const button = container.firstChild;
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('button snapshot', () => {
    const buttonEl = render(<Button />);
    expect(buttonEl).toMatchSnapshot();
  });
});
