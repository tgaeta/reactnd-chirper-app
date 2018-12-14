export const RECEIEVE_USERS = 'RECEIEVE_USERS'

export function receieveUsers (users) {
  return {
    type: RECEIEVE_USERS,
    users,
  }
}
