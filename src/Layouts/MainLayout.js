import React from 'react'
import Footer from '../Shared/components/Footer/Footer';
import Header from '../Shared/components/Header/Header';

export default function MainLayout(props) {
  return (
    <div style={{ height: "100%" }}>
        <Header />
        <main style={{ minHeight: "calc(100vh - 170px)" }}>{props.children}</main>
        <Footer />
    </div>
  )
}
