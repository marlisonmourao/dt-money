import styled from 'styled-components';

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const TrasactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.2rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme["gray-600"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) => variant === 'income' ? theme['green-300'] : theme['red-300']};
`;