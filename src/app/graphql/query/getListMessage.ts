import gql from 'graphql-tag';

export default gql`
query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      content
      createdAt
      updatedAt
    }
    nextToken
  }
}`;
