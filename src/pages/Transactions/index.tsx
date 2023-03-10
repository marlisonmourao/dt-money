import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { useTransactions } from '../../hooks/useTransactions';
import { SearchForm } from './components/SearchForm';

import { PriceHighlight, TransactionsTable, TrasactionsContainer } from './styles'

export function Transactions() {
  const { transactions } = useTransactions()

  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>{transaction.price}</PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TrasactionsContainer>
    </div>
  );
}