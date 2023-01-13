import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const API_URL = 'http://localhost:8080';
const UPLOAD_ENDPOINT = 'api/v1/image';

export default function MyEditor({ handleChange }) {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append('image', file);
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: 'post',
              body: body,
            })
              .then((res) => res.json())
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }
  return (
    <div className="App">
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin],
        }}
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          handleChange(editor.getData());
        }}
      />
    </div>
  );
}
