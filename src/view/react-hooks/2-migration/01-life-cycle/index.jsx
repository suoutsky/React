import React, { useState, useEffect }  from 'react';
import { Button } from 'antd';

const Input = (props) => {
    useEffect(() => {
        console.log('props.value-------->', props.value);
    }, [props.value])
    return <input value={props.value}/>
};
export default () => {
    const [count, setCount] = useState(0);
    console.info('father.render----------');
    return (
        <>
            <Input value={count}/>
            <Button onClick={() => setCount(x => x+1)}> test </Button>
        </>
    );
}