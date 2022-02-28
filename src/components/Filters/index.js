import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
// import { searchFilterChange, statusFilterChange, priorityFilterChange } from '../../redux/actions';
import filterSlice from './filterSlice';
const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('')
  const [statusRadio, setStatusRadio] = useState('All')
  const [priority, setPriority] = useState([])
  const dispatch = useDispatch();

  const handleStatusRadioChange = (e) => {
    setStatusRadio(e.target.value); //filters/statusFilterChange
    dispatch(filterSlice.actions.statusFilterChange(e.target.value))
  }
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(filterSlice.actions.searchFilterChange(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
    dispatch(filterSlice.actions.priorityFilterChange(value))
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search value={searchText} onChange={handleSearchTextChange} placeholder='input search text' />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusRadio} onChange={handleStatusRadioChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          value={priority}
          onChange={handlePriorityChange}
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
