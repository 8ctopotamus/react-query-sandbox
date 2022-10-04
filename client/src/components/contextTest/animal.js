import { useCTX } from "./testCtx"

const Animal = ({ animalType }) => {
  const { state, dispatch } = useCTX()

  const handleClick = animal => {
    dispatch({
      type: 'INCREASE_COUNT',
      payload: animal,
    })
  }
  return (
    <div className="column">
      <h3>{animalType.toUpperCase()}: {state[animalType]}</h3>
      <button className="button" onClick={() => handleClick(animalType)}>+ Add</button>
    </div>
  )
}

export default Animal