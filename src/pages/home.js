import React from 'react';
import { useQuery, gql } from '@apollo/client';
import NoteFeed from '/components/NoteFeed';
import Button from '../components/Button';

const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <React.Fragment>
      <NoteFeed notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                cursor: data.noteFeed.cursor
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const {
                  noteFeed: { cursor, hasNextPage, notes }
                } = fetchMoreResult;
                return {
                  noteFeed: {
                    cursor,
                    hasNextPage,
                    notes: [...previousResult.noteFeed.notes, ...notes]
                  }
                };
              }
            })
          }
        >
          Load more
        </Button>
      )}
    </React.Fragment>
  );
};

export default Home;
