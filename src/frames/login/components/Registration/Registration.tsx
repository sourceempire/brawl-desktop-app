import { useState } from 'react';
import { useAuth } from 'api/requests';
import { useNavigate } from 'react-router-dom';
import { Text } from 'common/ui';
import { LoginWrapper } from '../OpenIdLogin/OpenIdLogin.styles';
import { LoginInput } from '../PasswordLogin/PasswordLogin.styles';
import { Button, ButtonsWrapper } from './Registration.styles';

type Props = {
  active: boolean;
};

type Form = {
  username: string;
  usertag: string;
};

const initialState = {
  username: '',
  usertag: ''
};

const Registration = ({ active }: Props) => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [form, updateForm] = useState<Form>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const tabIndex = active ? 0 : -1;

  return (
    <LoginWrapper inactive={!active}>
      <Text.Header>Sign up</Text.Header>
      <LoginInput
        label="Email"
        onChange={handleChange}
        placeholder="Enter Email"
        value={form.username}
        name={'username'}
        tabIndex={tabIndex}
      />
      <LoginInput
        label="Usertag"
        onChange={handleChange}
        placeholder="Enter Usertag"
        value={form.usertag}
        name={'usertag'}
        tabIndex={tabIndex}
      />
      <ButtonsWrapper>
        <Button onClick={() => navigate(-1)} tabIndex={1}>
          Go Back
        </Button>
        <Button primary onClick={() => register(form)}>
          Sign up
        </Button>
      </ButtonsWrapper>
    </LoginWrapper>
  );
};

export default Registration;
