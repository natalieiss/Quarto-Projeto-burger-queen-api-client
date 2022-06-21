import React from "react";
import { useState, useEffect } from "react";
import { timeAndDate, getPrepTime } from "../components/timeAndDate.js"
import { getAllOrders, updateOrder } from "../services/auth";
import { Order, OrderProduct } from "../components/Order";
import Logo from '../images/Logo.png';
import Header from "../components/Header";
import NavStatus from "../components/NavStatus";
import Modal from "../components/Modal";
import styles from './HallKitchen.module.css';

function HallKitchen() {
    const [orders, setOrders] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        async function filterCommand() {
            try {
                const response = await getAllOrders();
                const filteredOrders = response.filter((order) => {
                    const kitchenOrders = order.status === "pending" || order.status === "processing"
                    return kitchenOrders
                })
                setOrders(filteredOrders);
                const modal = filteredOrders.length === 0;
                setIsModalVisible(modal);
            } catch (error) {
                return error
            }
        }
        filterCommand();
    })

    return (
        <div>
            <Header children='Cozinha' img={Logo} alt={'Logo da Burger Heroes'} />
            <NavStatus firstLink='/HallKitchen' nameFirstLink='A Preparar' secondLink='/Summary' nameSecondLink='Histórico' />
            <section className={styles.main_kitchen}>
                {orders.map((item, index) => {
                    const updateToDeliver = item.status === "deliver"
                    const infosProduct = item.Products.map((product) => {
                        return (
                            <OrderProduct
                                key={product.id}
                                name={product.name}
                                flavor={product.flavor}
                                complement={product.complement !== null ? product.complement : "nenhum"}
                                qtd={product.qtd}
                            />
                        )
                    });

                    return (
                        <Order
                            key={index}
                            status={item.status}
                            id={item.id}
                            nameClient={item.client_name}
                            table={item.table}
                            createDate={timeAndDate(item.createdAt)}
                            finished={updateToDeliver ? timeAndDate(item.processedAt) : ""}
                            preparationTime={updateToDeliver ? getPrepTime(item.processedAt, item.createdAt) : ""}
                            orderProducts={infosProduct}
                            textButton={item.status}
                            updateStatus={() => updateOrder(item.id, "processing")}
                            readyOrder={() => updateOrder(item.id, "deliver")}
                        />
                    )
                })}
            </section>
            {isModalVisible ?
                <Modal className='modalactive' onClose={() => setIsModalVisible(false)}>Não há pedidos para serem preparados</Modal> : null
            }
        </div>
    )
}

export default HallKitchen;