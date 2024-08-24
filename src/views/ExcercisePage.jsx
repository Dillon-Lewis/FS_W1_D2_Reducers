import { Accordion, Button, Container, ListGroup, ListGroupItem } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { addExercise} from "../redux.js/exerciseSlice";
import exercises from "../data/exercises";
import { Link } from "react-router-dom";

const ExcercisePage = () => {
  const dispatch = useDispatch()
  const handleAddtoHome = (id) => {
    dispatch(addExercise({id}))
  }

  
  return (
    <Container>
      <h1>Personal Bodyweight exercises</h1>
      <Link to={'/'}>
        <Button>Exercise Catalog</Button>
        </Link>
      <ListGroup>
        {exercises.map((exercise, idx) => (
          <ListGroupItem key={idx}>
            <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{exercise.exercise}</Accordion.Header>
              <Accordion.Body>
              <h3>Reps to be done</h3>
              <h4>{exercise.reps}</h4>
              <Button variant="outline-primary" onClick={() => handleAddtoHome(exercise.id)}>Set to Home</Button>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
          </ListGroupItem>
        ))}
      </ListGroup>
      
    </Container>
  )
};

export default ExcercisePage