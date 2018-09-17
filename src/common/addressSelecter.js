import React, {Component} from 'react'
import {Select, Spin} from 'antd';
const Option = Select.Option;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: [
        'Hangzhou', 'Ningbo', 'Wenzhou'
    ],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
};
export default class AddressSelect extends Component {

    constructor() {
        super()
        this.state = {
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0]
        }
    }
    handleProvinceChange = (value) => {
        this.setState({cities: cityData[value], secondCity: cityData[value][0]
        });
    }

    onSecondCityChange = (value) => {
        this.setState({secondCity: value});
    }

    render() {

        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
        const cityOptions = this
            .state
            .cities
            .map(city => <Option key={city}>{city}</Option>);
        return (
            <div
                style={{
                width: "100%",
                height: "100%"
            }}>
                <label style={{
                    marginRight: 10
                }}>省</label>
                <Select
                    defaultValue={provinceData[0]}
                    style={{
                    width: 100
                }}
                    onChange={this.handleProvinceChange}>
                    {provinceOptions}
                </Select>
                <label style={{
                    marginLeft:10,
                    marginRight: 10
                }}>市</label>
                <Select
                    value={this.state.secondCity}
                    style={{
                    width: 100
                }}
                    onChange={this.onSecondCityChange}>
                    {cityOptions}
                </Select>

                 <label style={{
                    marginLeft:10,
                    marginRight: 10
                }}>区/县</label>
                <Select
                    value={this.state.secondCity}
                    style={{
                    width: 100
                }}
                    onChange={this.onSecondCityChange}>
                    {cityOptions}
                </Select>
            </div>
        );
    }

}