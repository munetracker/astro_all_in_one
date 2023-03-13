import React, { useState } from 'react';
import Person from './Person';
import Nationality from './Nationality';

export default function W3Schools(){
    const studentOne = new Person("MitZ");
    const studentTow = new Nationality("Jov", "Red");


    let sayAll = (insertedWord: string) => {
        return studentTow.sayName() + insertedWord + studentTow.myColor();
    }

    let old_sayAll = function(insertedWord: string) {
        return studentTow.sayName() + insertedWord + studentTow.myColor();
    }

    return (
        <div>
            {studentOne.sayName()}<br/>

            {studentTow.sayName()}<br/>
            {studentTow.myColor()}<br/>
            {sayAll(" AND ")}<br/>
            {old_sayAll(" Old - AND ")}<br/>

        </div>
    )
}