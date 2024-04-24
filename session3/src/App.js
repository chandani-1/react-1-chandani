import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <>
    <div class="container">
   <form  method="post">
   <div class="forma">
    <h1>login Form</h1><br></br>
    <label for="uname">username </label>
    <input type="text" name="uname" id="uname"/><br></br><br></br>
    <label for="pwd">password </label>
    <input type="password"name="pwd" id="pwd"/><br></br><br></br>
   <button type="button" >Login </button>
   </div>
   </form>
   </div>




</>
  );
}

export default App;
