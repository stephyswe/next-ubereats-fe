import { gql, useQuery } from '@apollo/client';

export const GET_DOG_QUERY = gql`
  query GetDog($name: String) {
    dog(name: $name) {
      id
      name
      breed
    }
  }
`;

export function DogPage({ name }: any) {
  const { loading, error, data } = useQuery(GET_DOG_QUERY, {
    variables: { name },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <p>
      {data.dog.name} is a {data.dog.breed}
    </p>
  );
}
