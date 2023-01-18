import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' });

  const onSubmit = (data, e) => {
    console.log(values);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values.email);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Form 연습하기</h1>
        <div className="ui divider" />
        <div className="ui form">
          <div className="field">
            <label>이름 : </label>
            <input name="name" type="text" placeholder="이름을 입력해주세요..." onChange={onChange} />
          </div>
          <div className="field">
            <label>이메일 : </label>
            <input name="email" type="email" placeholder="이메일을 입력해주세요..." onChange={onChange} />
          </div>
          <div className="field">
            <label>비밀번호 : </label>
            <input name="password" type="password" placeholder="비밀번호를 입력해주세요..." onChange={onChange} />
          </div>
          <button className="fluid ui button blue" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
