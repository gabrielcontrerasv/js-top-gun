import React from 'react';
import Head from 'next/head';
import NavMenu from './NavMenu';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavMenu/>
            <section>
                {props.children}
            </section>
        </div>
    );
}

export default Layout;
