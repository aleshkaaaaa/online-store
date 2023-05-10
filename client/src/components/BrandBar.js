import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Card from 'react-bootstrap/esm/Card';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div style={{display:'flex'}}>
            {device.brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border = {brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>    
            )}
        </div>
    );
});

export default BrandBar;