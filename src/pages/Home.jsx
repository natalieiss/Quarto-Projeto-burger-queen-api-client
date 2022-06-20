import React from "react";
import styles from "./Home.module.css"
import Logo from "../components/Logo"
import Navbar from '../components/Navbar'

function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Bem-vindo ao Burger Heroes</h1>
            <Logo customClass='logo' />
            <p className={styles.about}>Sabemos o quanto salvar o mundo é importante!
                Por isso este app optimiza o atendimento dos super heróis do nosso planeta.
                Você pode estar se perguntando se este restaurante é somente para o Batman ou Capitão America.
                De fato nossos heróis da Marvel e DC também são apaixonados por essa hamburgueria,
                mas entendemos que qualquer pessoa que consuma produtos com embalagens e utensílios
                eco-friendly são os verdadeiros heróis do planeta, portanto,
                essa hamburgueria foi criada especialmente pra você!
                Prepare-se pois realizar seus pedidos na Burger Heroes é tão rápido quanto um estalar de dedos!</p>
            <Navbar />
        </main>
    )
}

export default Home;