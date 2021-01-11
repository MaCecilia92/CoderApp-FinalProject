import React from 'react';
import OwlColor from '../../assets/wisdom.svg';
import './Home.css';

export default function Home() {
    return (
        <div className="ContainerColumn">
            <img className="owlImg" src={OwlColor} alt="Owl-Home"/>
            <h1>Bienvenidos a mi Bookstore</h1>
        </div>
    )
}
