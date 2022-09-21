import { useRef, useState } from 'react';
import useHint from 'common/hooks/useHint';
import { DepositButton, DepositIcon, MoneyContainer, Wrapper } from './Wallet.styles';

// TODO -> useBalanceFeed();
const Wallet = () => {
  const [isDepositHintVisible, setDepositHintVisible] = useState(false);
  const [isMoneyHintVisible, setMoneyHintVisible] = useState(false);

  const moneyContainerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { Hint: MoneyHint } = useHint({
    isVisible: isMoneyHintVisible,
    hintText: 'Balance',
    timeToVisibility: 500,
    relatedElementRef: moneyContainerRef
  });

  const depositButtonRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { Hint: DepositHint } = useHint({
    isVisible: isDepositHintVisible,
    hintText: 'Deposit',
    timeToVisibility: 500,
    relatedElementRef: depositButtonRef
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
          ref={moneyContainerRef}
          onClick={handleMoneyClick}
          onMouseEnter={() => setMoneyHintVisible(true)}
          onMouseLeave={() => setMoneyHintVisible(false)}>
          €42.80
        </MoneyContainer>
        <DepositButton
          ref={depositButtonRef}
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
