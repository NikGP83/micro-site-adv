import React from 'react';
import { useHistory } from 'react-router-dom';
import './promo-video.scss';

const PromoVideoPage = () => {
 
       const history = useHistory()
       const toAnotherPage = () => history.push("/appointment-form");

       setTimeout(toAnotherPage , 2000)
  
    return (
        <section className="promo">   
 

        </section>
    )
}

export default PromoVideoPage;