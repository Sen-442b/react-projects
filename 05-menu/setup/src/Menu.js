import React from "react";

const Menu = ({ item }) => {
  const { title, price, img, desc } = item;

  return (
    <article className="menu-item">

      
      
        <img src={img} alt={title} className="photo" />
        <div className="item-info">
          <header> 
        <h4>{title}</h4>
        <h5 className="price">{price}</h5>
        </header>
        
        <p className="item-text">{desc}</p>
        </div>
     
      
    </article>
  );
};

export default Menu;
