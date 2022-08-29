import { useRef, useState } from 'react';
import useHint from 'common/hooks/useHint';
import { DepositButton, DepositIcon, MoneyContainer, Wrapper } from './Wallet.styles';

// TODO -> useBalanceFeed();
const Wallet = () => {
  const depositContainerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const moneyContainerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [isDepositHintVisible, setDepositHintVisible] = useState(false);
  const [isMoneyHintVisible, setMoneyHintVisible] = useState(false);

  const { Hint: MoneyHint } = useHint({
    isVisible: isMoneyHintVisible,
    hintText: 'Balance',
    parentElementRef: moneyContainerRef
  });

  const { Hint: DepositHint } = useHint({
    isVisible: isDepositHintVisible,
    hintText: 'Deposit',
    parentElementRef: depositContainerRef
  });

  return (
    <>
      <Wrapper>
        <MoneyContainer
          ref={moneyContainerRef}
          onMouseEnter={() => setMoneyHintVisible(true)}
          onMouseLeave={() => setMoneyHintVisible(false)}>
          €42.80
        </MoneyContainer>
        <DepositButton
          ref={depositContainerRef}
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
