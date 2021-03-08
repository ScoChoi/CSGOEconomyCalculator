import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';
import './side.css';

var enemy_is_t = true;

function side() {
    return(
        <div >
            <button class="tsidebutton" onClick={tClick}>
            </button>
            <button class="ctsidebutton" onClick={ctClick}>
            </button>
            <button onClick={enemySide}>
            enemyside?
            </button>
            
        </div>
    );
}

function tClick(){
    //nextPath('/calculator')
    enemy_is_t = false;
    return <Redirect to='./calculator'/>;
}

function ctClick(){
    //nextPath('/calculator')
    enemy_is_t = true;
    return <Redirect to='./calculator'/>;
}

function enemySide(){
    //nextPath('/calculator')
    alert(enemy_is_t)
}

export default side;
