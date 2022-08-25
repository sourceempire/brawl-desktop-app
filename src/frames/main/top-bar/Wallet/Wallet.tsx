import { DepositButton, DepositIcon, MoneyContainer, Wrapper } from './Wallet.styles';

const Wallet = () => {
  // useBalanceFeed();
  // useHint(); -> should open a hint like in action buttons, this hook could be used in ActionButton aswell

  return (
    <Wrapper>
      <MoneyContainer>€42.80</MoneyContainer>
      <DepositButton>
        <DepositIcon />
      </DepositButton>
    </Wrapper>
  );
};

export default Wallet;
