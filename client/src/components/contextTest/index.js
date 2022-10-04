import { CTXProvider } from './testCtx'
import Animal from './animal'

const CatDogCount = () => (
  <CTXProvider>
    <h2>React Context Test</h2>
    <div className="row">
      <Animal animalType="cats" />
      <Animal animalType="dogs" />
    </div>
  </CTXProvider>
)

export default CatDogCount