import Animal from './animal'

const CatDogCount = () => (
  <>
    <h2>React Context Test</h2>
    <div className="row">
      <Animal animalType="cats" />
      <Animal animalType="dogs" />
    </div>
  </>
)

export default CatDogCount