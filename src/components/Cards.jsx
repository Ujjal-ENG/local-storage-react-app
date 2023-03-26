import React, { useState } from 'react';
import { data } from '../data';
import Card from './Card';

const Cards = () => {
    const [datas, setDatas] = useState(data);
    return (
        <div className="grid grid-cols-4 gap-6 p-4">
            {datas &&
                datas.map((el) => {
                    return <Card key={el._id} data={el} />;
                })}
        </div>
    );
};

export default Cards;
