import React from 'react';

type ReusableProps = {
  item: string;
  del: string;
  image: string;
};

const Reusable: React.FC<ReusableProps> = ({ item, del, image }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
      <img src={image} alt="Product" style={{ width: '100%', height: 'auto' }} />
      <p>Discount: {item}</p>
      <p>Delivery: {del}</p>
    </div>
  );
};

export default Reusable;
