import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import './Calculator.css'

export default function Calculator(){
    
    const [num,setNum] = useState(0)
    const [oldNum, setOldNum] = useState()
    const [op, setOp] = useState()
    
    function inputNum(e) {
        
        if(num === 0 ) {
            setNum(e.target.value)
        }
        else {
        setNum(num + e.target.value)}
    }

    function clear(){
        setNum(0)
        setOldNum()
        setOp()
    }

    function porcentage(){
        setNum(num / 100)
    }

    function changeSign(){
        if(num > 0){
            setNum(-num)
        } else{
            setNum(Math.abs(num))
        }
    }

    function operatorHandler(e){
        if(num !== 0){
            setOldNum(num)
            setNum(0)
            setOp(e.target.value)
        }
    }

    function calculate(){
        if(op === 'mais'){
            setNum(parseFloat(oldNum) + parseFloat(num))
            setOldNum(`${oldNum} + ${num} =`)
        }

        if(op === 'menos'){
            setNum(oldNum - num)
            setOldNum(`${oldNum} - ${num} =`)
        }

        if(op === 'vezes'){
            setNum(oldNum * num)
            setOldNum(`${oldNum} X ${num} =`)
        }

        if(op === 'dividir') {
            setNum(oldNum / num)
            setOldNum(`${oldNum} / ${num} =`)
        }

    }

    return(
        <div>
            <Box m={5}/>
        <Container maxWidth="xs">
            <div className='wrapper'>
            <Box m={12}/>
                <h2 className='old'>{oldNum}</h2>
                <h1 className='result cw'>{num}</h1>
                <button className='esq ' onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={porcentage}>%</button>

                <button className='orange cw' onClick={operatorHandler} value={'dividir'}>/</button>

                <button className='gray cw esq' onClick={inputNum} value={7}>7</button>
                <button className='gray cw' onClick={inputNum} value={8}>8</button>
                <button className='gray cw' onClick={inputNum} value={9}>9</button>

                <button className='orange cw' onClick={operatorHandler} value={'vezes'}>X</button>

                <button className='gray cw esq' onClick={inputNum} value={4}>4</button>
                <button className='gray cw' onClick={inputNum} value={5}>5</button>
                <button className='gray cw' onClick={inputNum} value={6}>6</button>

                <button className='orange cw'  onClick={operatorHandler} value={'menos'}>-</button>

                <button className='gray cw esq' onClick={inputNum} value={1}>1</button>
                <button className='gray cw' onClick={inputNum} value={2}>2</button>
                <button className='gray cw' onClick={inputNum} value={3}>3</button>

                <button className='orange cw'  onClick={operatorHandler} value={'mais'}>+</button>

                <button className='gray cw zero esq' onClick={inputNum} value={0}>0</button>
                <button className='gray cw' onClick={inputNum} value={'.'}>,</button>
                
                <button onClick={calculate}>=</button>

            </div>
        </Container>
        </div>
    )
}