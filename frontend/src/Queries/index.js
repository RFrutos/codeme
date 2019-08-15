import gql from 'graphql-tag'


export const LOGIN_QUERY= gql`query{loginUser(name: "j" password: "sj"){token}}`


export const EXERCISE_QUERY= gql`
    query{exercise{
      name
      description
}}`