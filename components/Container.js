import React from 'react';
import Head from 'next/head';
import NavMenu from './general/NavMenu';

const Container = (props) => {
    return (
        <div>
            <Head>
            <link rel="icon" href="/favicon.ico" />
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <NavMenu/>
            <section>
                {props.children}
            </section>
        </div>
    );
}

export default Container;
