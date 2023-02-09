import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'

function Detail(props) {

    let { id } = useParams();
    let navigate = useNavigate();
    let [alert, setAlert] = useState(true);
    let BackBtn = styled.button`
        color : black;
        padding : 10px;
        text-items : start;
    `
    const product = props.shoe.find(element => element.id == id);

    useEffect(() => {
        let a = setTimeout(() => { setAlert(false) }, 2000)
    }, [])

    let [amount, setAmount] = useState(0);
    let [warning, setWarning] = useState(false);
    useEffect(() => {
        if (isNaN(amount)) {
            setWarning(true);
        }
        else {
            setWarning(false);
        }
    }, [amount])

    return (
        <div className="container">
            <BackBtn onClick={() => navigate(-1)}>뒤로가기</BackBtn>
            {
                alert == true
                    ? <div id="sale" className="alert alert-warning" style={{ backgroundColor: 'yellow' }}>
                        2초이내 구매시 할인
                    </div>
                    : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (product.id + 1) + ".jpg"} />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => { setAmount(e.target.value) }}></input>
                    {
                        warning == true
                        ? <p style={ {color : 'red'} }>경고 : 그러지마세요</p>
                        : null
                    }
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