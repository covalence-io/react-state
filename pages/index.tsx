import type { NextPage } from 'next';
// import { FormEvent, useState } from 'react';
import Form from '../components/form/form';
import Layout from '../components/layout/layout';
import { CONTAINER, SECTION } from '../utils';

const Home: NextPage = () => {
    // const [email, setEmail] = useState('');

    // const onRegister = (e: FormEvent) => {
    //     e.preventDefault();
    // };

    console.log('Rendering');

    return (
        <Layout
            title="Covalence | Home"
            description="Premium, online, software education">
            <section className={`${CONTAINER} ${SECTION} py-10 px-2 bg-gray-100`}>
                <div className="text-center py-10">
                    <img className="w-full md:w-1/6 block mx-auto" src="/logos/covalence_trans.png" alt="Covalence logo" />
                    <h1 className="text-3xl font-semibold">Hello World!</h1>
                    <h2 className="text-xl text-gray-500 font-medium">
                        {' '}
                        - Covalence
                    </h2>
                    <Form /*onRegister={onRegister} email={email} setEmail={setEmail}*/ placeholder="Enter email" inputType="email" />
                </div>
            </section>
            <section className={`${CONTAINER} ${SECTION}`}></section>
            <section className={`${CONTAINER} ${SECTION} bg-gray-100`}></section>
            <section className={`${CONTAINER} ${SECTION} py-24`}>
                <Form /*onRegister={onRegister} email={email} setEmail={setEmail}*/ inputStyle="flex" buttonText="Subscribe" placeholder="Enter email" inputType="email" />
            </section>
        </Layout>
    );
};

export default Home;
