import { useState } from 'react';
import useHint from 'common/hooks/useHint';
import { DepositButton, DepositIcon, MoneyContainer, Wrapper } from './Wallet.styles';

// TODO -> useBalanceFeed();
const Wallet = () => {
  const [isDepositHintVisible, setDepositHintVisible] = useState(false);
  const [isMoneyHintVisible, setMoneyHintVisible] = useState(false);

  const { Hint: MoneyHint, parentRef: moneyRef } = useHint({
    isVisible: isMoneyHintVisible,
    hintText: 'Balance',
    timeToVisibility: 500
  });

  const { Hint: DepositHint, parentRef: depositRef } = useHint({
    isVisible: isDepositHintVisible,
    hintText: 'Deposit',
    timeToVisibility: 500
  });

  const handleMoneyClick = () => {
    setMoneyHintVisible(false);
  };

  const handleDepositClick = () => {
    setDepositHintVisible(false);
  };

  return (
    <>
      <Wrapper>
        <MoneyContainer
          ref={moneyRef}
          onClick={handleMoneyClick}
          onMouseEnter={() => setMoneyHintVisible(true)}
          onMouseLeave={() => setMoneyHintVisible(false)}>
          €42.80
        </MoneyContainer>
        <DepositButton
          ref={depositRef}
          onClick={handleDepositClick}
          onMouseEnter={() => setDepositHintVisible(true)}
          onMouseLeave={() => setDepositHintVisible(false)}>
          <DepositIcon />
        </DepositButton>
      </Wrapper>
      {MoneyHint}
      {DepositHint}
    </>
  );
};

export default Wallet;
