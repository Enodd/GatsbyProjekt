import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import "../styles/stylecomponents/site404.scss"

const NotFoundPage = () => {
  return (
    <div className="container404">
      <Head title="404" />
      <main className="main404">
        <h1 className="main404__title">
          Coś poszło nie&nbsp;tak&nbsp;😱
        </h1>
        <p className="main404__content">
          Wygląda na to, że strona na, którą chcesz się dostać najprawdopodobniej:
        </p>
        <ul className="main404__list list404">
          <li className="list404__element">
            nie istnieje - nie istniała lub została usunięta,
          </li>
          <li className="list404__element">
            zmieniła swoje położenie i znajduje się pod innym adresem,
          </li>
          <li className="list404__element">
            jest w trakcie tworzenia lub prowadzone są nad nią prace serwisowe
          </li>
        </ul>
        <h2 className="main404__title">
          Ale spokojnie!
        </h2>
        <p className="main404__content">
          Tutaj są odnośniki na jedną z naszych stron
        </p>
        <Link to='/' className="main404__link">
          Strona główna
        </Link>
        <Link to='/blog' className="main404__link">
          Blog
        </Link>
      </main>
    </div>
  )
}

export default NotFoundPage
