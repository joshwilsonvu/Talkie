import styled from 'styled-components';


export const PostBase = styled.div`
  display: flex;
  align-items: flex-start;
  border-style: hidden;
  border-radius: ${props => props.theme.rounding};
  padding: ${props => props.theme.padding};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${props => props.theme.postColor}
`;

export const PostBody = styled.span`
  flex: 1;
  align-self: flex-center;
`;