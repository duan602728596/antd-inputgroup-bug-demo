import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Input, Select } from 'antd';
import './index.css';

function Demo(props) {
  return (
    <Fragment>
      {/* 错误的 */}
      <div className="box">
        <Input.Group className="group" compact={ true }>
          <Select className="select">
            <Select.Option>选项1</Select.Option>
            <Select.Option>选项2</Select.Option>
          </Select>
          <Input />
        </Input.Group>
      </div>

      {/* 正确的 */}
      <div className="box">
        <Input.Group className="group" compact={ true }>
          <Select className="select">
            <Select.Option>选项1</Select.Option>
            <Select.Option>选项2</Select.Option>
          </Select>
          <Input className="input" />
        </Input.Group>
      </div>
    </Fragment>

  );
}

render(<Demo />, document.getElementById('app'));
