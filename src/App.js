import { useState } from "react";
import "./App.css";
import Container from "./components/container/Container";
import List from "./components/list/List";

 function App() {
  const [userInfo, setListAgeName] = useState([])
  const saveAgeName=(data) => {
    const nameAgeData=[...userInfo];
    nameAgeData.push(data);
    setListAgeName(nameAgeData);
   
  }
  userInfo.sort(function(a,b){
    return b.age - a.age;
  })

  return <div className="App">
    <Container saveAgeNameHandler={saveAgeName}/>
    <List userInfo={userInfo}/>
  </div>;
}
export default App