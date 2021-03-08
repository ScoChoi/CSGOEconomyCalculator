import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { FaMinus } from 'react-icons/fa';
import {Route, Link} from 'react-router-dom';
import './side.css';

function side() {
    return(
        <div>
            <button class="tsidebutton" onClick={tClick}>
            </button>
            <button class="ctsidebutton" onClick={ctClick}>
            </button>
        </div>
    );
}

function tClick(){
    alert('T side Chosen!');
}

function ctClick(){
    alert('CT side Chosen!');
}

export default side;
