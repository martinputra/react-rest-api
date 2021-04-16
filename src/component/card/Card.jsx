import React from 'react';
import "./card.css";

function Card({ id, nama, email, telepon, batch, date }) {
    return (

      <div className="card" key={id}>
        
        <div className="card_header">
          <h3 className="ch_title">{nama}</h3>
        </div>
  
        <div className="card_body">
          <img src={`https://picsum.photos/seed/${nama}/500`} alt="" loading='lazy'/>
          <p className="cb_content">
            email : {email} <br />
            telepon : {telepon} <br />
            batch : {batch} <br />
          </p>
        </div>
  
        <div className="card_footer">
          <small className="cf_text">
            {date.replace('T', " / ").replace('000Z', "")}
          </small>
        </div>
      </div>
    );
  }
export default Card;