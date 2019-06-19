import React from "react";
import {PRODUCTS} from "./Constants";
export interface ProductCategoryRowProps {
}

export interface ProductCategoryRowProps {

}

class ProductCategoryRow extends React.Component<ProductCategoryRowProps> {

    // const category: string[] = [];

    render() {

        return  <div>
            <tr>
                <th>
                    {PRODUCTS.map((el, index) =>
                        <td> {el.category} </td>
                    )}
                </th>

            </tr>
        </div>
    }
}

export default ProductCategoryRow;