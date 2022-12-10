import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import { Form, Input } from './RegisterForm.styled';
import { Container } from 'components/common.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <Input type="text" name="name" />
        </label>
        <label>
          Email
          <Input type="email" name="email" />
        </label>
        <label>
          Password
          <Input type="password" name="password" autoComplete="off" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Container>
  );
};
