import React from 'react';
import { useRecoilState } from 'recoil';
import { store } from '../state/atoms';
import Children from './Children';

//부모 컴포넌트
const Parents = () => {
  const [mail, setMail] = useRecoilState(store);
  console.log('디폴트 값은?  ==> ' + mail);

  return (
    <>
      <div>
        <select value={mail} onChange={(e) => setMail(e.target.value)}>
          <option value="xxx@naver.com">네이버</option>
          <option value="yyy@gmail.com">지메일</option>
        </select>
      </div>
      <div>
        {/* 자식컴포넌트 호출 */}
        <Children></Children>
      </div>
    </>
  );
};

export default Parents;
