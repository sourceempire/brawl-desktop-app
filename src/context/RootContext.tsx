import { ServerEventsProvider } from './ServerEventsContext';
import { UserContextProvider } from './UserContext';

type Props = {
  children: React.ReactNode;
};

const RootContextProvider = ({ children }: Props) => {
  return (
    <UserContextProvider>
      <ServerEventsProvider>{children}</ServerEventsProvider>
    </UserContextProvider>
  );
};

export default RootContextProvider;
