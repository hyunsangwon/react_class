import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

function Form() {
  //https://react-hook-form.com/api/useform/register

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ criteriaMode: 'all' });
  //한 필드에 여러 에러를 보여주고 싶을 떄 criteriaMode를 all로 한다. (디폴트는 하나임)

  useEffect(() => {
    //에러 메세지를 미리 커스텀 세팅
    setError('fromErrors', {
      types: {
        required: '필수입력란 입니다.',
        minLength: '4글자 이상으로 입력해주세요.',
        maxLength: '10글자 이하로 입력해주세요.',
        emailPattern: '이메일 형식으로 입력해주세요.',
      },
    });
  }, [setError]);

  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data, e) => {
    setUserInfo(data);
    console.log(data, e);
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h1>Form 연습하기</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>이름 : </label>
            <input
              type="text"
              placeholder="이름을 입력해주세요..."
              {...register('username', { required: true })}
            />
          </div>
          {errors.username && errors.username.types && (
            <p>{errors.fromErrors.types.required}</p>
          )}
          <div className="field">
            <label>이메일 : </label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요..."
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          {errors.email && errors.email.types && (
            <p>{errors.fromErrors.types.required}</p>
          )}
          {errors.email && errors.email.types && (
            <p>{errors.fromErrors.types.emailPattern}</p>
          )}
          <div className="field">
            <label>비밀번호 : </label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요..."
              {...register('password', {
                required: true,
                minLength: 3,
                maxLength: 10,
              })}
            />
          </div>
          {errors.password && errors.password.types && (
            <p>{errors.fromErrors.types.required}</p>
          )}
          {errors.password && errors.password.types && (
            <p>{errors.fromErrors.types.minLength}</p>
          )}
          {errors.password && errors.password.types && (
            <p>{errors.fromErrors.types.maxLength}</p>
          )}
          <button className="fluid ui button blue" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
