import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations';

import { Container } from 'components/common.styled';
import { Form, Input } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <label>
          Email
          <Input type="email" name="email" />
        </label>
        <label>
          Password
          <Input type="password" name="password" autoComplete="off" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Container>
  );
};
