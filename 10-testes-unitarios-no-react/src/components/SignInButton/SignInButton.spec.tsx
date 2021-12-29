import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { useSession } from 'next-auth/client';
import { SignInButton } from '.';

jest.mock('next-auth/client');

describe('SignInButton component', () => {
  it('should render correctly when user is not authenticated', () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);

    expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument();
  });

  it('should render correctly when user is authenticated', () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValue([
      {
        user: {
          name: 'John Doe',
        },
        expires: 'fake-expires'
      },
      false
    ]);

    render(<SignInButton />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});