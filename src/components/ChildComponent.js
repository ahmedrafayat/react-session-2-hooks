import React from 'react';

const ChildComponent = React.memo((props) => {
  return (
    <div
      style={{ width: '100px', backgroundColor: '#6495ED', marginTop: '10px' }}
    >
      {props.name} is {props.value}
    </div>
  );
});

export default ChildComponent;
