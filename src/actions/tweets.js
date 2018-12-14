export const RECEIEVE_TWEETS = 'RECEIEVE_TWEETS'

export function receieveTweets (tweets) {
  return {
    type: RECEIEVE_TWEETS,
    tweets,
  }
}
