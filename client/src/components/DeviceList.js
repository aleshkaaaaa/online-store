import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import DeviceItem from "./DeviceItem";
import Row from "react-bootstrap/esm/Row";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row style={{display:'flex'}}>
            {device.devices.map(device =>
                    <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    )
})

export default DeviceList;