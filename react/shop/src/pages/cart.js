import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeCount, deleteItem } from '../store'

function Cart() {

    // 장바구니 데이터는 state 로 관리
    let cartData = useSelector((state) => state.cartData)
    let dispatch = useDispatch();

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData.map(function (data, i) {
                            return (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.count}</td>
                                    <td><button onClick={() => {
                                        dispatch(changeCount(data.id))
                                    }}>+</button></td>
                                    <td><button onClick={() => {
                                        dispatch(deleteItem(data.id))
                                    }}>삭제</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Cart