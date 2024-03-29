import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const Welcome = styled.div`
  margin-bottom: 1rem;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;
