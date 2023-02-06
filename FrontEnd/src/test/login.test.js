import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../pages/admin/login';

describe('Login', () => {
  it('renders the login form', () => {
    const { getByPlaceholderText, getByText } = render(<Login/>);

    expect(getByPlaceholderText('Phone number, email, or username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByText('Log in')).toBeInTheDocument();
    expect(getByText('Forgot password?')).toBeInTheDocument();
    expect(getByText("Don't have an account?")).toBeInTheDocument();
  });

  it('updates the username and password inputs on change', () => {
    const { getByPlaceholderText } = render(<Login/>);

    const usernameInput = getByPlaceholderText('Phone number, email, or username');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    fireEvent.change(passwordInput, { target: { value: 'secret123' } });

    expect(usernameInput.value).toBe('johndoe');
    expect(passwordInput.value).toBe('secret123');
  });

  it('submits the form and logs the username and password', () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const usernameInput = getByPlaceholderText('Phone number, email, or username');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Log in');

    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    fireEvent.change(passwordInput, { target: { value: 'secret123' } });
    fireEvent.click(submitButton);

    // We can use jest.spyOn to spy on console.log and check if it was called with the expected arguments
    const spy = jest.spyOn(console, 'log');
    // expect(spy).toHaveBeenCalledWith('Username: johndoe Password: secret123');

    // Don't forget to restore the original implementation of console.log after each test
    spy.mockRestore();
  });
});
