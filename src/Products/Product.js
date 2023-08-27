import React, { useState } from 'react';
import { mobilesData } from './PoductData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
  const [items, setItems] = useState(mobilesData);
  const decQty=(id)=>{
      const newItem= items.map((item)=>
        item.id===id && item.qty>1 ? {...item,qty:item.qty-1} : item
      )
      setItems(newItem);
  };
  const incQty=(id)=>{
        const newItem= items.map((item)=>
          item.id===id ? {...item,qty:item.qty+1} : item
        )
        setItems(newItem);
  };
  return (
    <div style={{ justifyContent: 'center', paddingLeft: '2rem' }}>
      <h1 className='bg-info text-white text-center'>Products</h1>
      {
        items.map((item) => (
          <div className='d-inline-flex' key={item.id}>
            <Card className="shadow p-3 m-2 bg-body rounded" style={{ width: '12.5rem' }}>
              <Card.Img style={{ height: '11rem' }} variant="top" className='p-2'
                src={require(`./Mobiles/${item.image}.jpg`)} />
              <Card.Body style={{ width: '10rem' }} className="text-center">
                <Card.Title className='text-primary' style={{ height: '4rem' }}>{item.model}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <h6>Price:₹{item.price} </h6>
                <div>
                  <p>Qty :
                    <Button variant="success" size="sm" className='m-1'
                     onClick={()=>decQty(item.id)}>-</Button>
                          {item.qty}
                    <Button variant="success" size="sm" className='m-1'
                     onClick={()=>incQty(item.id)}>+</Button>
                  </p>

                </div>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))
      }
    </div>
  );
}

export default Product;