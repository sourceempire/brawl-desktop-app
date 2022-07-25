import { StatusCircle, StatusText, Wrapper } from './UserStatus.styles';
import { Props } from './UserStatus.types';

const UserStatus = ({ status, size, hideText, className }: Props) => {
  return (
    <Wrapper>
      <StatusCircle status={status} size={size} className={className} />
      {!hideText && <StatusText>{status}</StatusText>}
    </Wrapper>
  );
};

export default UserStatus;
