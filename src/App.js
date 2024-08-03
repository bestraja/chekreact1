
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
    
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const firstname="raja"
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
      
          <Card.Body>
            <Card.Title> <Name/></Card.Title>
            <Card.Text>
            <Description/>
            <Price/>
            {firstname?<Image/>:null}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          {firstname?<p>{firstname}</p>:<p>Hell , there!</p>}
        </Card>
        
    </div>
    
    
    
  );
}

export default App;
