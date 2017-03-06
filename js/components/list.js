// js/components/person-list.js
import React from 'react';
import Card from './card';

export default function List() {
    return (
        <div className="card-list">
            <Card />
            <Card />
            <Card />
        </div>
    );
}
