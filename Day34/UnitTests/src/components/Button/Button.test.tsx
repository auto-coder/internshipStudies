import Button from './Button';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import styles from './Button.style';
test('should match with snapshot', () => {
  const comp = render(<Button />);
  expect(comp).toMatchSnapshot();
});

test('should render title correctly', () => {
  const testTitle = 'Test';
  const comp = render(<Button title={testTitle} />);

  const buttonText = comp.getByTestId('button-title').children[0];
  expect(buttonText).toBe(testTitle);
  console.log(buttonText);
});

test('should trigger onPress', () => {
  const mockFunction = jest.fn();
  const comp = render(<Button onClick={mockFunction} />);
  const buttonTouchable = comp.getByTestId('button-touchable');
  fireEvent(buttonTouchable, 'press');
  expect(mockFunction).toBeCalledTimes(1);
});

test('should render default theme style', () => {
  const comp = render(<Button  />);
  const buttonStyle = comp.getByTestId('button-touchable').props.style;
  expect(buttonStyle).toMatchObject(styles.primary.container);
});

test('should render given theme style', () => {
  const selectedTheme = 'primary';
  const comp = render(<Button theme={selectedTheme} />);
  const buttonStyle = comp.getByTestId('button-touchable').props.style;
  expect(buttonStyle).toMatchObject(styles[selectedTheme].container);
});
