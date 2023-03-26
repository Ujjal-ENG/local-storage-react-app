import React from 'react';

const Card = (props) => {
    const { balance, gender, name, _id } = props.data;

    return (
        <div className="border-2 border-orange-500 rounded-md p-5 space-y-4">
            <h2 className="text-2xl font-bold">
                Buy this: <span className="text-red-600">{name}</span>
            </h2>
            <h5 className="text-xl font-bold">
                Price: <span className="text-cyan-600">{balance}</span>
            </h5>
            <h5 className="text-xl font-bold">
                Customer Gender: <span className="text-cyan-600">{gender}</span>
            </h5>

            <button type="button" className="border px-4 py-1 font-bold text-xl">
                Add to Cart
            </button>
        </div>
    );
};

export default Card;
