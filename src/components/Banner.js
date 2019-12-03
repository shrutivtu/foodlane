import React from 'react';
import '../main.css';
function Banner(){
    return(
        <div className="banner">
            <div className="headingcontainer"><h1 className="bannerheading">Have no time to prepare food?</h1></div>
            <div className="foodpara">
                <h3>
                    Choose one of out plans, enter delivery time and enjoy delicious food without leaving your home!
                </h3>
            </div>
            <div className="orderfoodbtnsec">
                <button className="foodbtnsec">Order Food</button>
            </div>
        </div>
    )
}
export default Banner;