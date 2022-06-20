import React from "react";
import Button from "./Button";
import styles from './Order.module.css';

export const Order = ({ status, id, nameClient, table, createDate, finished,
    preparationTime, delivered, orderProducts, updateStatus, readyOrder, readyForDelivery }) => {
    const summaryPage = window.location.pathname === "/Summary";
    return (
        <li className={styles.order_card}>
            <section>
                {status === "pending" && (
                    <div>Pendente</div>
                )}
                {status === "processing" && (
                    <div>Preparando</div>
                )}
                {status === "deliver" && (
                    <div>Pronto para entregar</div>
                )}
                {status === "served" && (
                    <div>Entregue</div>
                )}
                <section>
                    <p className={styles.items_list}><strong className={styles.items_list}>{id}</strong></p>
                    <p className={styles.items_list}><strong className={styles.items_list}>Cliente: </strong>{nameClient}</p>
                    <p className={styles.items_list}><strong className={styles.items_list}>Mesa: </strong>{table}</p>
                    <p className={styles.items_list}><strong className={styles.items_list}>Criado em: </strong>{createDate}</p>
                    <p className={styles.items_list}><strong className={styles.items_list}>Finalizado em: </strong>{finished}</p>
                    <p className={styles.items_list}><strong className={styles.items_list}>Preparado em: </strong>{preparationTime}</p>
                    <p className={styles.items_list}><strong className={styles.items_list}>Entregue em: </strong>{delivered}</p>
                    <div>{orderProducts}</div>
                </section>
            </section>
            <section>
                {!summaryPage ?
                    <>
                        {status === "pending" && (
                            <Button children='Preparar' clickFunction={updateStatus} />
                        )}
                        {status === "processing" && (
                            <Button children='Pronto' clickFunction={readyOrder} />
                        )}
                        {status === "deliver" && (
                            <Button children='Entregar' clickFunction={readyForDelivery} />
                        )}
                    </> : ""
                }
            </section>
        </li>
    )
}

export const OrderProduct = ({ name, flavor, complement, qtd }) => {

    return (
        <div>
            <p className={styles.title_list}><strong className={styles.items_list}>Item: </strong></p>
            <p className={styles.product_list}>{name}</p>
            <p className={styles.product_list}>{flavor}</p>
            <p className={styles.product_list}><strong className={styles.items_list}>Complemento: </strong>{complement}</p>
            <p className={styles.product_list}><strong className={styles.items_list}>Quantidade: </strong>{qtd}</p>
        </div>
    )
}