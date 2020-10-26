import React, { useState } from 'react';
import './style.scss';
import { Drawer } from 'antd';

const Header = () => {

    const [showDrawer, setShowDrawer] = useState(false);

    const _toggleDrawer = () => setShowDrawer(prevShowDrawer => !prevShowDrawer);

    return (
        <div className="main-header">
            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={_toggleDrawer}
                visible={showDrawer}
                headerStyle={{
                    backgroundColor: 'hotpink'
                }}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <button onClick={_toggleDrawer}>Click</button>
        </div>
    )
}

export default Header;