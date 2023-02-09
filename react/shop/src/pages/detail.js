import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'

function Detail(props) {

    let {id} = useParams();
    let navigate = useNavigate();
    let BackBtn = styled.button`
        color : black;
        padding : 10px;
        text-items : start;
    `
    const product = props.shoe.find(element => element.id == id);

    useEffect(()=>{
        setTimeout(()=>{
            document.getElementById('sale').style.display = 'none'
        }, 2000)
    })

    return (
        <div className="container">
            <BackBtn onClick={()=>navigate(-1)}>뒤로가기</BackBtn>
            <div id="sale" className="alert alert-warning" style={ {backgroundColor : 'yellow'}}>
                2초이내 구매시 할인
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+ (product.id+1) +".jpg"}/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price} 원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;