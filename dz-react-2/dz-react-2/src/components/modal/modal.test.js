import React from 'react';
import ModalEl from './ModalEl.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../store/reducer.js';

const propsElement = {
  header: 'header',
  text: 'text',
  active: true,
  disable: false,
};

const store = createStore(rootReducer);

describe('<ModalEl component>', () => {
  it('Modal render', () => {
    const { container } = render(
      <Provider store={store}>
        <ModalEl
          active={propsElement.active}
          header={propsElement.header}
          text={propsElement.text}
        />
      </Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should be active', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ModalEl
          active={propsElement.active}
          header={propsElement.header}
          text={propsElement.text}
        />
      </Provider>
    );
    expect(getByText(/text/i)).toBeInTheDocument();
  });
});
