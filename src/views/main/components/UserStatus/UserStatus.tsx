import { StatusCircle, StatusText, Wrapper } from './UserStatus.styles';
import { Props } from './UserStatus.types';

const UserStatus = ({ status, hideText, className }: Props) => {
  return (
    <Wrapper>
      <StatusCircle status={status} className={className} />
      {!hideText && <StatusText>{status}</StatusText>}
    </Wrapper>
  );
};

export default UserStatus;
