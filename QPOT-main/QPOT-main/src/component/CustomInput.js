import React from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
const CustomInput = (props) => {
    const { type, label, i_id, i_class}=props;

  return (
    <div className="form-floating mb-3">
    {/* <label htmlFor={label}>{label}</label> */}
    <input type={type}  className={`form-control ${i_class}`} id={i_id} placeholder={label}    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
  </div>
  )
}

export default CustomInput
