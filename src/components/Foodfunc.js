import React from 'react';
import '../App.css';
import data from '../Data';
let cartData = [];
class Foodfunc extends React.Component{
    state = {
        foodCart: [],
        addtocart: false,
        totalamt: 0,
    }
    foodaddtoCart(id){
        //console.log(id);
        let arr = [];
        if(this.state.foodCart.length){
            for(let i = 0; i < this.state.foodCart.length; i++){
                arr.push(this.state.foodCart[i]);
            }
            arr.push(id);
            this.setState({
                foodCart:arr,
                fooditemcolor:'#adbce6'
            })
        }else{
            arr.push(id);
            this.setState({
                foodCart:arr
            })
        }
    }
    addtocartBtn(){
        cartData = [];
        if(this.state.foodCart.length){
            for(let i = 0; i < data.length; i++){
                for(let j = 0; j < this.state.foodCart.length; j++){
                    if(this.state.foodCart[j] === data[i].id){
                        let obj = {
                            id: data[i].id,
                            title: data[i].title,
                            imageUrl: data[i].imageUrl,
                            price: data[i].price
                        }
                        this.setState((prevState) => ({
                            totalamt: prevState.totalamt + data[i].price
                        }));
                        cartData.push(obj)
                    }
                }
            }
            this.setState({addtocart:true});
        }
        //console.log(cartData);
    }
    foodremovefromCart(id){
        let arr = [];
        for(let i  = 0 ; i < this.state.foodCart.length ; i++){
            if(this.state.foodCart[i] !== id){
                arr.push(this.state.foodCart[i]);
            }
        }
        this.setState({
            foodCart:arr
        });
    }
    removefromcartBtn(){
        cartData = [];
        this.setState({
            totalamt:0
        })
        if(this.state.foodCart.length){
            for(let i = 0; i < data.length; i++){
                for(let j = 0; j < this.state.foodCart.length; j++){
                    if(this.state.foodCart[j] === data[i].id){
                        let obj = {
                            id: data[i].id,
                            title: data[i].title,
                            imageUrl: data[i].imageUrl,
                            price: data[i].price
                        }
                        this.setState((prevState) => ({
                            totalamt: prevState.totalamt - (-data[i].price)
                        }));
                        cartData.push(obj)
                    }
                }
            }
            this.setState({addtocart:true});
        }else{
            this.setState({
                addtocart:false
            })
        }
    }
  render(){
      //console.log(data);
    //console.log(this.state.foodCart);
    return(
        <div className="foodordercontainer">
            <ul className = "foodlist">
            {
                data.map(item => {
                    return(
                        <li className="fooditem" key={item.id} onClick={() => {this.foodaddtoCart(item.id)}}>
                            <img className = "foodimg" src={item.imageUrl} alt=''/>
                            <p className="foodname">{item.title}</p>
                            <p className="foodprice">$ {item.price}</p>
                        </li>
                    )
                })
            }
            </ul>
            <div className="btnlist">
                <button className="cartaddition" onClick={() => {this.addtocartBtn()}}>Add to Cart</button>
                <button className="cartremoval" onClick={() => {this.removefromcartBtn()}}>Remove from Cart</button>
            </div>
            <div className="carttotalsection">
                <ul className="orderlist">
                    {
                        this.state.addtocart === false ? <h1>Cart Empty</h1> : cartData.map(item => {
                            return(
                            <li className="fooditem" key={item.id} onClick={() => {this.foodremovefromCart(item.id)}}>
                                <img className = "foodimg" src={item.imageUrl} alt=''/>
                                <p className="foodname">{item.title}</p>
                                <p className="foodprice">$ {item.price}</p>
                            </li>
                            )
                        })
                    }
                </ul>
                <div className="totalpricesec">Total Price: $ {this.state.totalamt}</div>
            </div>
        </div>
    );
  }
}

export default Foodfunc;