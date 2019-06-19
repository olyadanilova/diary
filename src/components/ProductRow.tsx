import React from "react";

class ProductRow extends React.Component<any>{

    render() {
        return <div>
            <input type={"text"} placeholder={"Search..."}/>
            <p>
                <input type={"chekbox"}/>
                {' '}
                Only show products in stock
            </p>
        </div>
    }
}
export default ProductRow;