import React, {useState} from 'react';
import Status from '../components/status-label/status';

const DemoStatus = () => {
  const [statusState, setStatusState] = useState({
    allStatus: [
      {status: 'Awaiting Payment'},
      {status: 'Awaiting Fullfillment'},
      {status: 'Awaiting Shipment'},
      {status: 'Shipped'},
      {status: 'Partially Shipped'},
      {status: 'Refunded'},
      {status: 'Partially Refunded'}, {status: 'Cancelled'},
      {status: 'Declined'},
      {status: 'Awaiting Pickup'},
      {status: 'Completed'},
      {status: 'Attention Required'},
    ],
  });

  return (
    <div>
      <h1> <br/>Status Labels </h1>
      <Status status = { statusState.allStatus[0] } />
      <Status status = { statusState.allStatus[1] } />
      <Status status = { statusState.allStatus[2] } />
      <Status status = { statusState.allStatus[3] } />
      <Status status = { statusState.allStatus[4] } />
      <Status status = { statusState.allStatus[5] } />
      <Status status = { statusState.allStatus[6] } />
      <Status status = { statusState.allStatus[7] } />
      <Status status = { statusState.allStatus[8] } />
      <Status status = { statusState.allStatus[9] } />
      <Status status = { statusState.allStatus[10] } />
      <Status status = { statusState.allStatus[11] } />
    </div>
  );
};

export default DemoStatus;
