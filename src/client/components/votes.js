import React from 'react';
import connect from 'react-redux';
import styled from 'styled-components';

const VotesFlex = styled.div`
  display: flex;
  align-self: flex-center;
`;

const VotesBase = styled.span`
  min-width: ${props => props.theme.votesWidth};
  margin-right: ${props => props.theme.padding};
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  line-height: 1;
  font-size: 150%;
  color: ${props => props.theme.dimColor};
`;

const VoteCount = styled.div`
  font-weight: bold;
`;

export const Votes = connect(
  state => {
    votes: state.post.posts[]
  }
)(({onUpvote, onDownvote, votes, userDidVote} = {userDidVote: 0, votes: 0}) => (
  <VotesFlex>
    <VotesBase>
      <div onClick={userDidVote ? onUnvote : onVote}>
        &#9650;
      </div>
      <VoteCount>
        {Number(votes)}
      </VoteCount>
    </VotesBase>
  </VotesFlex>
));