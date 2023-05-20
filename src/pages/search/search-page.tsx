import { useState } from 'react';
import { Container, Card, Button, Form, Stack } from 'react-bootstrap';
import { Header } from 'shared/ui/header';

export const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([1, 2]);

  return (
    <>
      <Header />

      <Container className="d-flex flex-column justify-content-center align-items-center pt-4">
        <SearchForm />
        <div className="mt-4 w-100 d-flex flex-column align-items-center">
          <h2 className="mb-4 text-center">Search results</h2>
          {searchResults.map((item) => (
            <Card className="mb-4" style={{ width: '50%' }}>
              <Card.Header>Ticket</Card.Header>
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Ticket data.</Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          ))}
          {/* <h3 className="mb-4 text-center text-secondary">
            Tickets not found..
          </h3> */}
        </div>
      </Container>
    </>
  );
};

const SearchForm = () => {
  return (
    <Card>
      <Card.Header as="h5" className="text-center">
        Search airline tickets
      </Card.Header>
      <Card.Body>
        <Form>
          <Stack direction="horizontal" className="align-items-end ">
            <Form.Group controlId="formOrigin" className="mr-sm-2">
              <Form.Label srOnly>Origin</Form.Label>
              <Form.Control
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px',
                }}
                type="text"
                placeholder="From"
              />
            </Form.Group>
            <Form.Group controlId="formDestination" className="mr-sm-2">
              <Form.Label srOnly>Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="To"
                className="rounded-0"
              />
            </Form.Group>
            <Form.Group controlId="formDeparture" className="mr-sm-2">
              <Form.Label srOnly>Departure</Form.Label>
              <Form.Control type="date" className="rounded-0" />
            </Form.Group>
            <Form.Group controlId="formReturn" className="mr-sm-2">
              <Form.Label srOnly>Return</Form.Label>
              <Form.Control type="date" className="rounded-0" />
            </Form.Group>
            <Form.Group controlId="formTicketClass" className="mr-sm-2">
              <Form.Label srOnly>Ticket Class</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Economy"
                className="rounded-0"
              >
                <option value="Economy">Economy</option>
                <option value="Comfort">Comfort</option>
                <option value="Business">Business</option>
              </Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                borderTopRightRadius: '8px',
                borderBottomRightRadius: '8px',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              className="mr-sm-2 rounded-right"
            >
              Search
            </Button>
          </Stack>
        </Form>
      </Card.Body>
    </Card>
  );
};
