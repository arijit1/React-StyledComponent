import React from 'react';
import './App.css';
import Government from './Person-Hooks/Government';
import Governments from './Person-Hook-Two-Way-Binding/Government';
import GovernmentsClass from './Person-Class-State-Two-Way-Binding/Government';
import GovernmentsClassList from './Person-Class-Conditional-lists/Government';
import GovernmentsClassListAdvance from './Person-Class-Conditional-lists-advance-arraynList/Government';
import GovernmentsClassListAdvanceRadium from './RADIUMSTYLECOMPONENT/Person-Class-Conditional-lists-advance-arraynList/Government';
import GovernmentsClassListAdvanceRadiumMediaQuery from './RADIUMSTYLECOMPONENT/Person-Class-Conditional-lists-advance-arraynList-mediaQuery/Government';
import GovernmentsClassListAdvanceStyledComponent from './Styled-Components/Person-Class-Conditional-lists-advance-arraynList-mediaQuery/Government';

const App = () => {
  return (<>
    <div className="App">
      <Government />
    </div>
    <div className="App">
      <Governments />
    </div>
    <div className="App">
      <GovernmentsClass />
    </div>
    <div className="App">
      <GovernmentsClassList />
    </div>
    <div className="App">
      <GovernmentsClassListAdvance />
    </div>
    <div className="App">
      <GovernmentsClassListAdvanceRadium />
    </div>
    <div className="App">
      <GovernmentsClassListAdvanceRadiumMediaQuery />
    </div>
    <hr />
    <div className="App">
      <GovernmentsClassListAdvanceStyledComponent />
    </div>
  </>
  );
}

export default App;