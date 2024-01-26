import React, { useState } from 'react'
import { Table, Progress, ConfigProvider } from 'antd'
import SubComponent from '../subcomponent';
export default function Skills() {
    const renderSkills = (props) => (
        <div>
            {props.map((info, index) => {
                return (
                    <div key={index}>
                        <p>
                            <strong> how much i coverd</strong>
                        </p>
                        <Progress percent={info.percentage} />
                        <p  >
                            <strong>info about </strong>
                        </p>
                        <p>{info.info}</p>


                    </div>
                )

            })}
        </div>
    )
    const columns = [
        {
            title: "Name",
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Info',
            dataIndex: 'value',
            key: 'value',
            render: (info) => renderSkills(info)
        },

    ];

    const tableSource = [
        {
            "name": "React JS",
            "value": [
                {
                    "info":
                        "reactjs is good for development and other stuffs.",
                    "percentage": 10
                },
            ]
        }
    ]
    return (
        <SubComponent>
            <h1>
                Skills 
            </h1>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            headerBg: "blue",
                            headerColor: "white",
                            borderColor: "grey"
                        },
                    },
                }}
            >
                <Table
                    bordered={true}
                    pagination={false}
                    dataSource={tableSource}
                    columns={columns} />
            </ConfigProvider>
    </SubComponent>

    )
}
