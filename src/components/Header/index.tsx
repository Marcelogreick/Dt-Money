import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModalOpen: () => void;
}

export function Header({onOpenNewTransactionModalOpen}: HeaderProps) {
  return (
    <Container>
        <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransactionModalOpen}>
            Nova transação
        </button>
        </Content>
    </Container>
  );
}
