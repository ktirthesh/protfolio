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
            "name": "Django/DjangoRestFramework,",
            "value": [
                {
                    "info":"ORM,Model,Request,Response,QuerySet,Transaction,Class Based views, RESTful APIs,Pytest,Open API validation testing, deployment with uWSGI,Performance and Optimization,Logging ,Serilization,Caching,Signals,Throtlling ",
                    "percentage": 60
                },
            ]
        },
        {
            "name": "Reactjs",
            "value": [
                {
                    "info":"Class Componets,Functional Components,Hoock Lifecycyle Methods,AXIOS for API integration,Antd for support,Async-await/Promises for api call , react-router-dom , ",
                    "percentage": 70
                },
            ]
        },
       
    ]
    return (
        <SubComponent>
            <h1>
                Techinical Skills 
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
