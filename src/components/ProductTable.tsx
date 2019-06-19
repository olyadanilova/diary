import React from "react";
// import ProductCategoryRow from "./ProductCategoryRow";
// import ProductRow from "./ProductRow";

export interface ProductTableProps {

}

class ProductTable extends React.Component<ProductTableProps>{
    render (){
        return <div>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            {/*<ProductCategoryRow/>*/}
            {/*<ProductRow/>*/}
        </div>
    }
}
export default ProductTable;