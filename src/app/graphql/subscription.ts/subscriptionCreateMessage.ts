import gql from 'graphql-tag';

export default gql`
subscription OnCreateMessage {
    onCreateMessage {
      id
      email
      content
      createdAt
      updatedAt
    }
  }
`;
