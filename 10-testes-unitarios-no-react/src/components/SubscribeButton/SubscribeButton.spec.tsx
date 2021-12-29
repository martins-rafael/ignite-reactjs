import { fireEvent, render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import { SubscribeButton } from '.';

jest.mock('next-auth/client');
jest.mock('next/router');

describe('Subscribe component', () => {
  it('should render correctly', () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SubscribeButton />);

    expect(screen.getByText('Subscribe now')).toBeInTheDocument();
  });

  it('should redirect user to sign in when not authenticated', () => {
    const signInMocked = jest.mocked(signIn);
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Subscribe now');
    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it('should redirect to posts when user already has a subscription', () => {
    const useRouterMocked = jest.mocked(useRouter);
    const useSessionMocked = jest.mocked(useSession);
    const pushMocked = jest.fn();

    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: 'John Doe',
        },
        activeSubscription: 'fake-active-subscription',
        expires: 'fake-expires'
      },
      false
    ]);

    useRouterMocked.mockReturnValueOnce({
      push: pushMocked
    } as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Subscribe now');
    fireEvent.click(subscribeButton);

    expect(pushMocked).toHaveBeenCalledWith('/posts');
  });
});