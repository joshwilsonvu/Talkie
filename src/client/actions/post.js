

export const postCreate = (username, text) => ({
  type: 'POST:CREATE',
  username: username,
  text: text,
  id: id,
  votes: votes,
  userDidVote: userDidVote,
});

export const postVote = (username, id, vote = true) => ({
  type: 'POST:VOTE',
  username: username,
  id: id,
  vote: vote
});
