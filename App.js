
import Todo from "./components/Todo";

import Topst from "./components/Topst";


function App() {
  return (
    <div>
     
      <h1> ToDos </h1>
      <Todo text= 'buy groceries' desc='Get money and go to the stor to buy ingredents' />
      <Todo text='cook food' desc='Cut up ingredents and use it to cook'/>
      <Todo text='eat food' desc='Enjoy the meal you cooked'/>
      

    </div>
    

  );
}

export default App;
