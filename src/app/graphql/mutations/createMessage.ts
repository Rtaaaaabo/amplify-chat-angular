import gql from 'graphql-tag';

export default gql`
mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    email
    content
    createdAt
    updatedAt
  }
}`;
