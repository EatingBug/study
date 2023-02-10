import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart() {

    // 장바구니 데이터는 state 로 관리
    let cartData = useSelector((state) => state.cartData)

    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartData.map(function (data, i) {
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.count}</td>
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