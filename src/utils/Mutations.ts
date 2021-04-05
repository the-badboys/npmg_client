import { gql } from "@urql/svelte"

export const CREATE_USER = gql`
  mutation createUser($data: SingUpUserInput!) {
    signup(data: $data) {
      id
    }
  }
`

export const NEW_NPMG = gql`
  mutation newNpmg($data: NewNpmg!) {
    newNpmg(data: $data) {
      id
      name
    }
  }
`

export const NEW_FAMILY = gql`
  mutation addNewFamily($familyInput: NewFamily!) {
    addNewFamily(data: $familyInput) {
      id
      family_name
    }
  }
`

export const NEW_REPORT = gql`
  mutation NewReport($reportInput: NewReport!) {
    NewReport(data: $reportInput) {
      id
      gorilla
    }
  }
`

export const NEW_NAMER = gql`
  mutation addNewNamer($namerInput: NewNamer!) {
    addNewNamer(data: $namerInput) {
      id
      fullname
    }
  }
`
