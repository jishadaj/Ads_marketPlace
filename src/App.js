import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <AppRoutes /> 
      <Footer />
    </div>
  </Router>
);

export default App;
