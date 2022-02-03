import React from "react";

// import './Styling/ShopPage.css';

import SHOP_DATA from './ShopData';
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render()
    {
        const { collections } = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...OtherProps }) => {
                        return (
                            <CollectionPreview key={id} {...OtherProps} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ShopPage;