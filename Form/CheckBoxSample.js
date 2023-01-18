import React, { useState } from 'react';
import './Form.css';

const CheckBoxSample = () => {
  const [values, setValues] = useState({
    convenienceStore: '',
    barbecue: '',
    parkingLot: '',
    wifi: '',
    showerRoom: '',
    swimmingPool: '',
    animal: '',
    restroom: '',
  });
  const onSubmit = (data, e) => {
    console.log(data);
    //API전송!~!
  };

  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    if (value === 'true') {
      setValues({ ...values, [name]: true });
    }
    console.log(values);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Check Sample</h1>
        <div className="ui divider" />
        <div className="ui form">
          <div>
            <div>
              <input onChange={onChange} name="convenienceStore" value="true" type="checkbox" />
              <label>편의점</label>
              <input onChange={onChange} name="barbecue" value="true" type="checkbox" />
              <label>바베큐</label>
              <input onChange={onChange} name="parkingLot" value="true" type="checkbox" />
              <label>주차장</label>
            </div>
            <div>
              <input onChange={onChange} name="wifi" value="true" type="checkbox" />
              <label>와이파이</label>
              <input onChange={onChange} name="showerRoom" value="true" type="checkbox" />
              <label>샤워장</label>
              <input onChange={onChange} name="swimmingPool" value="true" type="checkbox" />
              <label>수영장</label>
            </div>
            <div>
              <input onChange={onChange} name="animal" value="true" type="checkbox" />
              <label>반려동물</label>
              <input onChange={onChange} name="restroom" value="true" type="checkbox" />
              <label>개인화장실</label>
            </div>
          </div>
          <button className="fluid ui button blue" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckBoxSample;
