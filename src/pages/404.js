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
          Wygląda na to, że strona na, którą chcesz się dostać najprawdopodobniej nie istnieje.
        </p>
        <h2 className="main404__title">
          Ale spokojnie!
        </h2>
        <p className="main404__content">
          Zawsze możesz wrócić na stronę główną
        </p>
        <Link to='/' className="main404__link">
          Powrót na stronę główną
        </Link>
      </main>
    </div>
  )
}

export default NotFoundPage
