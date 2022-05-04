import './App.css';
import {motion} from 'framer-motion';
import {useState} from 'react';


function App() {
  const [isopen,setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div className='card' onClick={() => setIsOpen(!isopen)} layout>
        <motion.h2>Framer Motion</motion.h2>
        {isopen &&  <motion.div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi cumque doloremque. Culpa nam ex ipsam, iure laborum reprehenderit laudantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quidem!</p>
        </motion.div>}
      </motion.div>
     
    </div>
  );
}

export default App;
