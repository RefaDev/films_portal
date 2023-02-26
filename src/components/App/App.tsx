import { BrowserRouter as Router } from 'react-router-dom'
import AppContent from 'components/AppContent'

import './App.css'

function App() {
   return (
      <div className='App'>
         <Router>
            <AppContent />
         </Router>
      </div>
   )
}

export default App
