import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Exercise from './components/Exercise/Exercise';

function App() {
  return (
    <div>
      <Header></Header>
      <Exercise></Exercise>
      <div className='text-section'>
          <h1>How does React Work</h1>
            <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
      </div>
      <div className='text-section'>
        <h1>What are the differences between props and state ?</h1>
        <p>Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>
        <p>State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
      </div>
      <div className='text-section'>
        <h1>Where to use useeffect in react</h1>
        <p>The useEffect Hook allows you to perform side effects in your components.
          Some examples of side effects are: fetching data, directly updating the DOM, and timers.
          useEffect accepts two arguments. The second argument is optional.</p>
      </div>
    </div>
  );
}

export default App;
