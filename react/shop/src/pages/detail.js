import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import { Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./../store.js";

function Detail(props) {

    let { id } = useParams();
    let navigate = useNavigate();
    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);
    let [fade2, setFade2] = useState('');
    let dispatch = useDispatch();

    let cartData = useSelector((state)=>{return state.cartData});

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

    useEffect(() => {
        setFade2('end')
        return () => {
            setFade2('')
        }
    }, [])

    return (
        <div className={"container start " + fade2}>
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
                    <img src={"https://codingapple1.github.io/shop/shoes" + (product.id + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => { setAmount(e.target.value) }}></input>
                    {
                        warning == true
                            ? <p style={{ color: 'red' }}>경고 : 그러지마세요</p>
                            : null
                    }
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{product.content}</p>
                    <p>{product.price} 원</p>
                    <button onClick={()=>{
                        let data = {id : product.id, name : product.title, count : Number(amount)}
                        console.log(data)
                        dispatch(addCart(data))
                        console.log(cartData);
                    }} className="btn btn-danger" >주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(0)} eventKey="link0">상품설명</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(1)} eventKey="link1">리뷰</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(2)} eventKey="link2">문의사항</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent title={product.title} tab={tab} />
        </div>
    )
}

function TabContent(props) {

    let [fade, setFade] = useState('');

    useEffect(() => {
        // 리액트 18의 automatic batching 기능 
        // => 시간차없이 state 변경을 하는경우 한번에 요청해서 setTimeout 로 시간차를 줘야함.
        setTimeout(() => {
            setFade('end')
        }, 180)

        return () => {
            setFade('')
        }
    }, [props]);

    return (<div className={"start " + fade}>
        {[<div>{props.title}</div>, <div>내용 1</div>, <div>내용 2</div>][props.tab]}
    </div>)

}
export default Detail;