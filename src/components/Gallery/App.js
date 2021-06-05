import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function Trap() {
  const [selectedImg, setSelectedImg] = useState(null);
  //Components 'Title' and 'UploadForm' are optional, the form rather to upload pictures.
  return (
    <div className="Trap" style={{ color: '#fff' }}>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default Trap;
