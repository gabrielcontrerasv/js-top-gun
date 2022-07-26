import React from 'react';
import Link from 'next/link';

const NavMenu = () => {
    return (
        <section>
           <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services">
                        <a>Services</a>
                    </Link>
                </li>
                <li>
                    <Link href="/signin">
                        <a>SignIn</a>
                    </Link>
                </li>
            </ul> 
        </section>
    );
}

export default NavMenu;
