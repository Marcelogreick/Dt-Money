import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const sumary = transactions.reduce((acumulator, transaction) => {
    if(transaction.type === 'deposit') {
      acumulator.deposits += transaction.value;
      acumulator.total += transaction.value
    } else {
      acumulator.withdraws += transaction.value;
      acumulator.total -= transaction.value;
    }

    return acumulator;
  },{
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
          }).format(sumary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>
          - {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
          }).format(sumary.withdraws)}
          </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
          }).format(sumary.total)}
        </strong>
      </div>
      </Container>
  );
}

