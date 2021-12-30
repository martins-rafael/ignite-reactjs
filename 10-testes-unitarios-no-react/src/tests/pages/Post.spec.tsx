import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import { getSession } from 'next-auth/client';
import { getPrismicClient } from '../../services/prismic';
import Post, { getServerSideProps } from '../../pages/posts/[slug]';

jest.mock('next-auth/client');
jest.mock('../../services/prismic');

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post content</p>',
  updatedAt: '18 de agosto de 2021'
}
  ;

describe('Post page', () => {
  it('should render correctly', () => {
    render(<Post post={post} />);

    expect(screen.getByText('My New Post')).toBeInTheDocument();
    expect(screen.getByText('Post content')).toBeInTheDocument();
  });

  it('should redirect use if no subscription is found', async () => {
    const getSessionMocked = jest.mocked(getSession);

    getSessionMocked.mockReturnValueOnce({
      activeSubscription: null
    } as any);

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post'
      }
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/'
        })
      })
    );
  });

  it('should load initial data', async () => {
    const getSessionMocked = jest.mocked(getSession);
    const getPrismicClientMocked = jest.mocked(getPrismicClient);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription'
    } as any);

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            {
              type: 'heading',
              text: 'My New Post'
            }
          ],
          content: [
            {
              type: 'paragraph',
              text: 'Post content'
            }
          ]
        },
        last_publication_date: '08-18-2021'
      })
    } as any);

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post'
      }
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My New Post',
            content: '<p>Post content</p>',
            updatedAt: '18 de agosto de 2021'
          }
        }
      })
    )
  });
});