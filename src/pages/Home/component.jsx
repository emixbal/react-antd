import React, {  } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Upload,
  Card,
} from 'antd';

import Layout from "../../layout"

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const App = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Layout>
      <Card>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}
        >
          <Form.Item label="Input" name={"inputValue"}>
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select name="selectDemo">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
              ]}
            />
          </Form.Item>
          <Form.Item label="Cascader">
            <Cascader
              options={[
                {
                  value: 'zhejiang',
                  label: 'Zhejiang',
                  children: [
                    {
                      value: 'hangzhou',
                      label: 'Hangzhou',
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="RangePicker">
            <RangePicker />
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="TextArea">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Switch" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <div style={{ float: 'right' }}>
            <Button type="primary" style={{ marginRight: 2 }} htmlType="submit">Simpan Data Jamaah</Button>
          </div>
        </Form>
      </Card>

    </Layout>
  );
};

export default App;