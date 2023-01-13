import React from 'react';
import { useRecoilState } from 'recoil';
import { store } from '../state/atoms';

//자식컴포넌트
const Children = () => {
  const [mail, setMail] = useRecoilState(store);

  return (
    <>
      <h3>당신의 직업은?</h3>
      {/* 부모에서 변경한 mail을 자식에서 사용 */}
      <div>{mail}</div>
    </>
  );
};

export default Children;
