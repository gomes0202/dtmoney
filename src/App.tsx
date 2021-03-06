import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashbord";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext, TransactionsProvider } from '../src/hooks/useTransactions';
import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function handleOpenNewTransaction() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransaction() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransaction} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        OnRequestClose={handleCloseNewTransaction}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}