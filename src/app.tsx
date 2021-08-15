import React from 'react';
import './app.css';
import Sidebar from './components/sidebar';
import ComingSoon from './components/coming-soon';
import Expenses from './pages/expenses';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Switch>
        <Route path="/expenses" component={Expenses} />
        <Route path="*">
          <ComingSoon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
