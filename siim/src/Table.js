import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import data1 from './sample_submission.json';
import data2 from './train_image_level.json';
import data3 from './train_study_level.json';
import {Train1,Train2,Train3,Train4} from "./chart";
import './Table.css';
import {train} from './count';
import { Progress } from '@ant-design/charts';

var num1,num2,sum1,sum2,sum3,negative1,other,none1,none2;
num1=parseInt(train.total1[0]);
num2=parseInt(train.total1[1]);
sum1=num1+num2;
none1=Math.ceil(num2/sum1*100);
negative1=100-none1;

num1=parseInt(train.total2[0]);
num2=parseInt(train.total2[1]);
sum2=num1;
none2=Math.floor(num2/sum2*100);
other=100-none2;

num1=parseInt(train.total3[0]);
num2=parseInt(train.total3[1]);
sum3=num1+num2;

var config10 = {
  height: 20,
  width: 600,
  autoFit: false,
  percent: 1,
  color: ['#00C0A3', '#DA5957']
};
var config06 = {
  height: 20,
  width: 600,
  autoFit: false,
  percent: 0.68,
  color: ['#00C0A3', '#DA5957']
};

let frist1=[
  {'id':
    <div class='u'><center>
      <h2 class='sum'>{sum1}</h2>
      unique values
    </center></div>
  ,'PredictionString':
  <div class='u'>
    none 1 0 0 1 1&emsp;&emsp;{none1}%<br/>
    negative 1 0 0 1 1&ensp;{negative1}%
  </div>
  ,'column':
  <div>
    <Progress {...config10} />
    Valid&emsp;2477&emsp;100%<br/>
    Mismatched&emsp;0&emsp;0%<br/>
    Missing&emsp;0&emsp;0%<br/><br/>
    Unique&emsp;2477<br/>
    Most Common&emsp;00188a671292_study&emsp;0%
  </div>
  }
];
let ffrist1=frist1;
frist1 = frist1.concat(data1);

let frist2=[
  {'id':
  <div><center>
    <h2 class='sum'>{sum2}</h2>
    unique values
  </center></div>
  ,'boxes':
  <div>
    [null]&emsp;&emsp;&emsp;&emsp;{none2}%<br/>
    ['x': 789.28...&emsp;0%<br/>
    Other (42...&ensp;&emsp;{other}%
  </div>
  ,
  'label':
  <div>
    none 1 0 0 1 1  &emsp;32%<br/>
    opacity 1 789...&emsp;20%<br/>
    Other (4293)... &emsp;68%
  </div>
  ,
  'StudyInstanceUID':
  <div><center>
    <h2 class='sum'>{sum3}</h2>
    unique values
  </center></div>
  ,
  'column':
  <div>
    <Progress {...config10} />
    Valid&emsp;6334&emsp;100%<br/>
    Mismatched&emsp;0&emsp;0%<br/>
    Missing&emsp;0&emsp;0%<br/><br/>
    Unique&emsp;6334<br/>
    Most Common&emsp;000a312787f2_image&emsp;0%
  </div>
  ,
  'column2':
  <div>
    <Progress {...config06} />
    Valid&emsp;4294&emsp;68%<br/>
    Mismatched&emsp;0&emsp;0%<br/>
    Missing&emsp;2040&emsp;32%<br/><br/>
    Unique&emsp;4294<br/>
    Most Common&emsp;['x': 789.28...&emsp;0%
  </div>
  ,
  'column3':
  <div>
    <Progress {...config10} />
    Valid&emsp;4294&emsp;68%<br/>
    Mismatched&emsp;0&emsp;0%<br/>
    Missing&emsp;2040&emsp;32%<br/><br/>
    Unique&emsp;4295<br/>
    Most Common&emsp;none 1 0 0 1 1&emsp;0%
  </div>
  ,
  'column4':
  <div>
    <Progress {...config10} />
    Valid&emsp;6334&emsp;100%<br/>
    Mismatched&emsp;0&emsp;0%<br/>
    Missing&emsp;0&emsp;0%<br/><br/>
    Unique&emsp;6054<br/>
    Most Common&emsp;0fd2db233deb&emsp;0%
  </div>
  }
];
let ffrist2=frist2;
frist2 = frist2.concat(data2);

let love=[
  {'id':
  <div class='u'><center>
    <h2 class='sum'>{sum3}</h2>
    unique values
  </center></div>,
  'Negative for Pneumonia':<Train1/>,
  'Typical Appearance':<Train2/>,
  'Indeterminate Appearance':<Train3/>,
  'Atypical Appearance':<Train4/>,
  'column':
    <div>
      <Progress {...config10} />
      Valid&emsp;6054&emsp;100%<br/>
      Mismatched&emsp;0&emsp;0%<br/>
      Missing&emsp;0&emsp;0%<br/><br/>
      Unique&emsp;6054<br/>
      Most Common&emsp;00086460a852_study&emsp;0%
    </div>
  ,
  'column2':
    <div>
      <Progress {...config10} />
      Valid&emsp;6054&emsp;100%<br/>
      Mismatched&emsp;0&emsp;0%<br/>
      Missing&emsp;0&emsp;0%<br/><br/>
      Mean&emsp;0.28<br/>
      Std. Deviation&emsp;0.45<br/><br/>
      Quantiles<br/>
      <div class='l'>
      0&emsp;Min&emsp;&emsp;<br/>
      0&emsp;25%&emsp;&emsp;<br/>
      0&emsp;50%&emsp;&emsp;<br/>
      1&emsp;75%&emsp;&emsp;<br/>
      1&emsp;Max&emsp;&emsp;</div>
    </div>
  ,
  'column3':
  <div>
    <Progress {...config10} />
    Valid&emsp;6054&emsp;100%<br/>
    Mismatched&emsp;0&emsp;0%<br/>
    Missing&emsp;0&emsp;0%<br/><br/>
    Mean&emsp;0.47<br/>
    Std. Deviation&emsp;0.5<br/><br/>
    Quantiles<br/>
    <div class='l'>
    0&emsp;Min&emsp;&emsp;<br/>
    0&emsp;25%&emsp;&emsp;<br/>
    0&emsp;50%&emsp;&emsp;<br/>
    1&emsp;75%&emsp;&emsp;<br/>
    1&emsp;Max&emsp;&emsp;</div>
  </div>
  ,
  'column4':
  <div>
    <Progress {...config10} />
    Valid&emsp;6054&emsp;100%<br/>
    Mismatched&emsp;0&emsp;0%<br/>
    Missing&emsp;0&emsp;0%<br/><br/>
    Mean&emsp;0.17<br/>
    Std. Deviation&emsp;0.38<br/><br/>
    Quantiles<br/>
    <div class='l'>
    0&emsp;Min&emsp;&emsp;<br/>
    0&emsp;25%&emsp;&emsp;<br/>
    0&emsp;50%&emsp;&emsp;<br/>
    0&emsp;75%&emsp;&emsp;<br/>
    1&emsp;Max&emsp;&emsp;</div>
  </div>
  ,
  'column5':
    <div>
      <Progress {...config10} />
      Valid&emsp;6054&emsp;100%<br/>
      Mismatched&emsp;0&emsp;0%<br/>
      Missing&emsp;0&emsp;0%<br/><br/>
      Mean&emsp;0.08<br/>
      Std. Deviation&emsp;0.27<br/><br/>
      Quantiles<br/>
      <div class='l'>0&emsp;Min&emsp;&emsp;<br/>
      0&emsp;25%&emsp;&emsp;<br/>
      0&emsp;50%&emsp;&emsp;<br/>
      0&emsp;75%&emsp;&emsp;<br/>
      1&emsp;Max&emsp;&emsp;
      </div>
    </div>
}
];
const dog=data3;
let ffrist3=love;
love = love.concat(dog);


const detail1 = [
  {
    title: 'id',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'PredictionString',
    dataIndex: 'PredictionString',
    sorter: (a, b) => a.PredictionString.length - b.PredictionString.length,
  },
];
const compact1 = [
  {
    title: 'id',
    dataIndex: 'id', 
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'PredictionString',
    dataIndex: 'PredictionString',
    sorter: (a, b) => a.PredictionString.length - b.PredictionString.length,
  },
];
const column1 = [
  {
    title: 'id',
    dataIndex:'id'
  },
  {
    dataIndex: 'column',
  }
];
const column1_2 = [
  {
    title: 'PredictionString',
    dataIndex: 'PredictionString',
  },
  {
    dataIndex: 'column',
  }
];
const detail2 = [
  {
    title: 'id',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'boxes',
    dataIndex: 'boxes',
    sorter: (a, b) => a.boxes.length - b.boxes.length,
  },
  {
    title: 'label',
    dataIndex: 'label',
    sorter: (a, b) => a.label.length - b.label.length,
  },
  {
    title: 'StudyInstanceUID',
    dataIndex: 'StudyInstanceUID',
    sorter: (a, b) => a.StudyInstanceUID - b.StudyInstanceUID,
  },
];

const compact2 = [
  {
    title: 'id',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id, 
  },
  {
    title: 'boxes',
    dataIndex: 'boxes',
    sorter: (a, b) => a.boxes.length - b.boxes.length,
  },
  {
    title: 'label',
    dataIndex: 'label',
    sorter: (a, b) => a.label.length - b.label.length,
  },
  {
    title: 'StudyInstanceUID',
    dataIndex: 'StudyInstanceUID',
    sorter: (a, b) => a.StudyInstanceUID - b.StudyInstanceUID,
  },
];
const column2 = [
  {
    title: 'id',
    dataIndex:'id'
  },
  {
    dataIndex: 'column',
  }
];
const column2_2 = [
  {
    title: 'boxes',
    dataIndex: 'boxes',
  },
  {
    dataIndex: 'column2',
  }
];
const column2_3 = [
  {
    title: 'label',
    dataIndex: 'label',
  },
  {
    dataIndex: 'column3',
  }
];
const column2_4 = [
  {
    title: 'StudyInstanceUID',
    dataIndex: 'StudyInstanceUID',
  },
  {
    dataIndex: 'column4',
  }
];
const detail3 = [
  {
    title: 'id',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id, 
  },
  {
    title: '#Negative for Pneumonia',
    dataIndex: 'Negative for Pneumonia',
    sorter: (a, b) => a[`Negative for Pneumonia`]-b[`Negative for Pneumonia`],
  },
  {
    title: '#Typical Appearance',
    dataIndex: 'Typical Appearance',
    sorter: (a, b) => a[`Typical Appearance`]-b[`Typical Appearance`],
  },
  {
    title: '#Indeterminate Appearance',
    dataIndex: 'Indeterminate Appearance',
    sorter: (a, b) => a[`Indeterminate Appearance`]-b[`Indeterminate Appearance`],
  },
  {
    title: '#Atypical Appearance',
    dataIndex: 'Atypical Appearance',
    sorter: (a, b) => a[`Atypical Appearance`]-b[`Atypical Appearance`],
  },
];
const compact3 = [
  {
    title: 'id',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id, 
  },
  {
    title: '#Negative for Pneumonia',
    dataIndex: 'Negative for Pneumonia',
    sorter: (a, b) => a[`Negative for Pneumonia`]-b[`Negative for Pneumonia`],
  },
  {
    title: '#Typical Appearance',
    dataIndex: 'Typical Appearance',
    sorter: (a, b) => a[`Typical Appearance`]-b[`Typical Appearance`],
  },
  {
    title: '#Indeterminate Appearance',
    dataIndex: 'Indeterminate Appearance',
    sorter: (a, b) => a[`Indeterminate Appearance`]-b[`Indeterminate Appearance`],
  },
  {
    title: '#Atypical Appearance',
    dataIndex: 'Atypical Appearance',
    sorter: (a, b) => a[`Atypical Appearance`]-b[`Atypical Appearance`],
  },
];
const column3 = [
  {
    title: 'id',
    dataIndex:'id'
  },
  {
    dataIndex: 'column',
  }
];
const column3_2 = [
  {
    title: '#Negative for Pneumonia',
    dataIndex:'Negative for Pneumonia'
  },
  {
    dataIndex: 'column2',
  }
];
const column3_3 = [
  {
    title: '#Typical Appearance',
    dataIndex:'Typical Appearance'
  },
  {
    dataIndex: 'column3',
  }
];
const column3_4 = [
  {
    title: '#Indeterminate Appearance',
    dataIndex:'Indeterminate Appearance'
  },
  {
    dataIndex: 'column4',
  }
];
const column3_5 = [
  {
    title: '#Atypical Appearance',
    dataIndex:'Atypical Appearance'
  },
  {
    dataIndex: 'column5',
  }
];
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

export function Table1_1() {
  return(
      <div class='t'>
        <Table columns={detail1} dataSource={frist1} onChange={onChange}/>
      </div>
  );
}
export function Table1_2() {
return(
  <div class='t'>
    <Table columns={compact1} dataSource={data1} onChange={onChange}/>
    </div>
);
}
export function Table1_3() {
  return(
    <div class='t'>
      <Table columns={column1} dataSource={ffrist1} onChange={onChange} pagination={false}/>
      <Table columns={column1_2} dataSource={ffrist1} onChange={onChange} pagination={false}/>
    </div>
  );
}
export function Table2_1() {
  return(
    <div class='t'>
    <Table columns={detail2} dataSource={frist2} onChange={onChange}/></div>
  );
}
export function Table2_2() {
return(
  <div class='t'>
    <Table columns={compact2} dataSource={data2} onChange={onChange}/></div>
);
}
export function Table2_3() {
  return(
    <div class='t'>
      <Table columns={column2} dataSource={ffrist2} onChange={onChange} pagination={false}/>
      <Table columns={column2_2} dataSource={ffrist2} onChange={onChange} pagination={false}/>
      <Table columns={column2_3} dataSource={ffrist2} onChange={onChange} pagination={false}/>
      <Table columns={column2_4} dataSource={ffrist2} onChange={onChange} pagination={false}/>
    </div>
  );
}
export function Table3_1() {
    return(
      <div class='t'>
        <Table columns={detail3} dataSource={love} onChange={onChange}/></div>
    );
}
export function Table3_2() {
  return(
    <div class='t'>
      <Table columns={compact3} dataSource={data3} onChange={onChange}/></div>
  );
}
export function Table3_3() {
  return(
    <div class='t'>
      <Table columns={column3} dataSource={ffrist3} onChange={onChange} pagination={false}/>
      <Table columns={column3_2} dataSource={ffrist3} onChange={onChange} pagination={false}/>
      <Table columns={column3_3} dataSource={ffrist3} onChange={onChange} pagination={false}/>
      <Table columns={column3_4} dataSource={ffrist3} onChange={onChange} pagination={false}/>
      <Table columns={column3_5} dataSource={ffrist3} onChange={onChange} pagination={false}/>
    </div>
  );
}