import React from "react";

// import './Styling/ShopPage.css';

import SHOP_DATA from './ShopData';
import CollectionPreviewItem from '../../Components/CollectionPreviewItem/CollectionPreviewItem';

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
                            <CollectionPreviewItem key={id} {...OtherProps} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ShopPage;