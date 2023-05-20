import { useState } from 'react';
import { Container, Card, Form, Stack, Button } from 'react-bootstrap';

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        className="mt-5"
        style={{
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <Card.Header as="h5" className="text-center">
          Login
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Stack gap={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
      <p>
        Don't have an account? <a href="#">Register</a>
      </p>
    </Container>
  );
};
