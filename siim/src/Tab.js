import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Table1_1,Table1_2,Table1_3,Table2_1,Table2_2,Table2_3,Table3_1,Table3_2,Table3_3} from './Table';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export function Tab1() {
    return(
        <div>
            <h5>sample_submission.csv (89.09 kB)</h5>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Detail" key="1"> 
                    <Table1_1/>
                </TabPane>

                <TabPane tab="Compact" key="2">
                    <Table1_2/>    
                </TabPane>
                
                <TabPane tab="Column" key="3">
                    <Table1_3/>
                </TabPane>
            </Tabs>
        </div>
      
    );
}
export function Tab2() {
    return(
        <div>
            <h5>train_image_level.csv (1.27 MB)</h5>
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Detail" key="1"> 
            <Table2_1/>
        </TabPane>

        <TabPane tab="Compact" key="2">
            <Table2_2/>    
        </TabPane>
        
        <TabPane tab="Column" key="3">
            <Table2_3/>
        </TabPane>
    </Tabs>
      </div>
    );
}
export function Tab3() {
    return(
        <div>
        <h5>train_study_level.csv (163.55 kB)</h5>
    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Detail" key="1"> 
            <Table3_1/>
        </TabPane>

        <TabPane tab="Compact" key="2">
            <Table3_2/>    
        </TabPane>
        
        <TabPane tab="Column" key="3">
            <Table3_3/>
        </TabPane>
    </Tabs></div>
      
    );
}
