import React from 'react';
import { getUsers } from '../../api/campingApi';
import { useQuery } from 'react-query';

function Table() {
  //useQuery === select
  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery('users', getUsers, {
    select: (res) => res.data.sort((a, b) => b.userNumber - a.userNumber),
  });

  let html;
  let bodyData;
  if (isLoading) {
    html = <p>Loading...</p>;
  } else if (isError) {
    html = <p>{error.message}</p>;
  } else {
    bodyData = users.map((response) => {
      return (
        <tr key={response.userNumber}>
          <td>{response.userNumber}</td>
          <td>{response.userName}</td>
          <td>{response.userEmail}</td>
          <td>{response.userTel}</td>
          <td>{response.userBirth}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      {html}
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>이메일</th>
            <th>연락처</th>
            <th>생년월일</th>
          </tr>
        </thead>
        <tbody>{bodyData}</tbody>
      </table>
    </div>
  );
}

export default Table;
