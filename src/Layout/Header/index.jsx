import React, { useState } from 'react';
import './style.scss';
import { Drawer } from 'antd';
import Menu from './menu';
import { ReactComponent as BurgerMenu } from 'Assets/icon/menu_header.svg';

console.log(Menu);
const Header = () => {

    const [showDrawer, setShowDrawer] = useState(false);

    const _toggleDrawer = () => setShowDrawer(prevShowDrawer => !prevShowDrawer);

    return (
        <div className="main-header">
            <Drawer
                title='Drawer Title'
                placement='left'
                closable={false}
                onClose={_toggleDrawer}
                visible={showDrawer}
            >
                {
                    Menu.map((menu, index) => (
                        <div key={index} className="menu-list">
                            {menu.icon}
                            {menu.name}
                        </div>
                    ))
                }
            </Drawer>
            <BurgerMenu onClick={_toggleDrawer} />
        </div>
    )
}

export default Header;