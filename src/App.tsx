import React from 'react';
import DownloadFile from './components/Download/DownloadFile';
import Plus from './components/DownloadPlus/Plus';
import BasicModal from './components/Modal/BasicModal';

function App() {

  return (
    <div>
      <DownloadFile fileName="Myfile.png" />
      <Plus fileName="Myfile.png" />
      <BasicModal />
    </div>
  );
}

export default App;
