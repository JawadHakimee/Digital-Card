import React from "react"
import Footer from './Componnent/Footer/Footer'
import Header from './Componnent/Header/Header'
import Main from './Componnent/Main/Main'
import './index.css'
export default function All() {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}