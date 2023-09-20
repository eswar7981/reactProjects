import React from 'react';
import DemoList from '../../Demo/DemoList';
import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');
  return (
    <>
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
    {props.value}
    </button>
    {props.value?<DemoList title={props.title} items={props.items} value={props.value}></DemoList>:console.log("no")}

    </>
  );
};

export default (Button);