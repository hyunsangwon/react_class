import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const API_URL = 'http://localhost:8080'; //API주소
const UPLOAD_ENDPOINT = 'api/v1/image'; //업로드 URL 주소

export default function MyEditor() {
  const [editor, setEditor] = useState(null); //게시물 내용 담기
  const [isFile, setFile] = useState(null); //게시물 사진 담기

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise(() => {
          loader.file.then((file) => {
            setFile(file);
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    //Ckeditor에서 이미지 업로드 하려면 FileRepository라는 플러그인 필요
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  const doWrite = () => {
    if (isFile !== null) {
      const body = new FormData();
      //body.append할 때 백엔드 @RequestParam("image"), @RequestParam("contents") 이름과 동일하게
      body.append('image', isFile);
      body.append('contents', editor);
      new Promise((resolve, reject) => {
        //API 전송
        fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
          method: 'post',
          body: body,
        })
          .then((res) => res.json())
          .catch((err) => {
            reject(err);
          });
      });
    } else {
      alert('내용을 작성해주세요.');
    }
  };

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
          //게시물내용 수정될 때 마다 set해줌
          setEditor(editor.getData());
        }}
      />
      <div>
        <button onClick={doWrite}>Upload</button>
      </div>
    </div>
  );
}
