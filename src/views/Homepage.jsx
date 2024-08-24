import { useDispatch, useSelector } from "react-redux"
import { removeExercise } from "../redux.js/exerciseSlice"
import { Button, Container, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import exercises from "../data/exercises"



const Homepage = () => {

    const exercise = useSelector((state) => state.exercise)
    const dispatch = useDispatch()

    const handleRemoveExercise = (id) => {
        dispatch(removeExercise({id}))
    }
    
    const getExerciseName = (id) => {
        const exercise = exercises.find((exercise) => {
            return Number(id) === exercise.id
        })

        return exercise ? exercise.exercise: "Exercise not Found"
    }

  return (
    <Container>
        <h1>Wecome to EZ-Fit!</h1>
        <h3>The Primetime way to use body weight to stay in shape</h3>

        <Link to={'/exercises'}>
        <Button>Exercise Catalog</Button>
        </Link>

        {Object.entries(exercise.workouts).map(([id, quantity], idx) => (
        <ListGroupItem key={idx}>
          <span>{getExerciseName(id)} - Quantity: {quantity}</span>
          <div>
            <Button variant="outline-danger" onClick={() => handleRemoveExercise(id)}>Complete and Remove</Button>
          </div>
        </ListGroupItem>
      ))}

      

    </Container>
  )
}

export default Homepage