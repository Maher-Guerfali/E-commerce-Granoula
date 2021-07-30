import { useContext, useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'

import { API_URL } from '../utils/urls'

import { UserContext } from '../lib/UserContext';

const useOrders = (user) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true)
            if(user){
                try{
                    const token = await magic.user.getIdToken();
                    const orderRes = await fetch(`${API_URL}/orders`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    const data = await orderRes.json()
                    setOrders(data)
                } catch(err){
                    setOrders([])
                }
            }
            setLoading(false)
        }

        fetchOrders()
    }, [user])



    return {orders, loading}
}

export default () => {

    //const getToken = useContext(AuthContext);
    const [user] = useContext(UserContext);

    const { orders, loading } = useOrders(user)
    
    if(!user){
        return (
            <div>
                <p>Please Login or Register before accessing this page</p>
                <Link href="/"><a>Go Back</a></Link>
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>Your Account</title>
                <meta name="description" content="Your orders will be shown here" />
            </Head>
            <h2>Account Page</h2>
            
            
            <h3>Your Orders</h3>
            {loading && <p>Orders are Loading</p>}
            {orders.map(order => (
                <div key={order.id}>
                    {new Date(order.created_at).toLocaleDateString( 'en-EN' )} {order.product.name} ${order.total} {order.status}
                </div>
            ))}
            <hr />
            <p>Logged in as {user.email} j</p>
         
        </div>
    )

}