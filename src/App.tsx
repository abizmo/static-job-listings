import React from 'react';

import { Footer } from './components';
import Jobs from './pages/Jobs';
import Theme from './Theme';

function App() {
  return (
    <Theme>
      <Jobs />
      <Footer />
    </Theme>
  );
}

export default App;
