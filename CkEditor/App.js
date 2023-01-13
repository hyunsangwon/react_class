import React, { useState } from 'react';
import MyEditor from './components/Ckeditor/MyEditor';

const App = () => {
  const [editor, setEditor] = useState(null);
  return (
    <>
      <MyEditor
        handleChange={(data) => {
          setEditor(data);
        }}
        data={editor}
      />
    </>
  );
};

export default App;
