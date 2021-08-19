import React from 'react';
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';
import './ho-ho.scss';

const PromoVideoPage = () => {

    const opts = {
        width: `1280`,
        height: `760`,
    }    
       const history = useHistory()
       const toAnotherPage = () => history.push("/appointment-form");

       setTimeout(toAnotherPage , 4000)
  
    return (
        <section>
            
            <div className="ho-ho">
                
                <YouTube videoId="dbvi_S3fy2M" opts={opts}/>
                
            </div>

        </section>
    )
}

export default PromoVideoPage;