import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/stylecomponents/main.scss'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <Head title="Home" />
            <main className="core-main">
                <section className="core-main__section section">
                    <h2 className="section__title">
                        O Stronie słów kilka
                    </h2>
                    <p className="section__content">
                        Witaj na tej zacnej stronie, stworzonej przy użyciu
                    </p>
                    <span className="highlight--purple">&nbsp;Gatsby.</span>
                    <Img className="section__image" fluid={data.logoGatsby.childImageSharp.fluid} alt='logo gatsby' />
                    <p className="section__content">
                        Tutaj nauczysz się takich rzeczy jak:
                    </p>
                    <p className="section__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, unde?
                        Molestias accusamus at minus laboriosam veritatis ea! Sit, dolor hic!
                        Voluptatibus beatae accusamus error officia blanditiis ipsa dolorum? Ea, id?
                        Doloremque atque quae sint quisquam vitae sit quis voluptas necessitatibus?
                        Cupiditate, odit reiciendis deleniti voluptate nesciunt officiis? Culpa, fugit quae.
                        Cupiditate nobis sit, consequatur officiis explicabo cum rerum vel totam?
                        Rem qui ipsa maiores? Facilis, quia! Ab aspernatur ullam eveniet.
                        Minima repellendus numquam adipisci nihil iste eveniet maiores tenetur qui!
                        Praesentium dolore eligendi eum? Ducimus aliquam minus expedita non asperiores.
                        Voluptatibus animi molestias nesciunt praesentium error aspernatur necessitatibus at possimus.
                        Cupiditate vel cumque, ex accusamus facere ipsa enim voluptatibus fugiat.
                        Facilis reiciendis officiis error beatae sint alias cumque sed sit.
                        Fugit dolores, aliquam ex neque libero beatae sed cumque perferendis.
                        Qui numquam non, magnam id a assumenda rem quo quasi.
                        Doloremque veniam sed dolorum eveniet cumque, ducimus perspiciatis hic explicabo.
                        Dolorum, cumque? Qui esse quibusdam quas. Deserunt ut nobis eligendi.
                        Fugit reiciendis veniam aperiam itaque maxime, dolor quis aliquam quos?
                        Error ipsa corrupti nulla, velit vitae ad soluta neque aperiam?
                        Saepe quos odit consectetur sint veniam accusantium velit iste ex!
                        Fugiat maxime libero consectetur ut architecto sunt commodi iure eveniet.
                        Deleniti iste impedit quas ea fugiat? Doloremque, in! Adipisci, quia!
                        Quis laboriosam eum ratione totam maxime soluta a voluptatum nisi?
                        Soluta, animi porro blanditiis iste dolorem ullam nulla qui iure.
                        Saepe quo, voluptatem exercitationem reprehenderit atque voluptatum alias velit repellat?
                        Ut, libero vel sapiente consequuntur officia accusamus rem cum est?
                        Accusantium, illo cumque suscipit dolor quia assumenda atque nisi doloremque.
                        Qui dolorem dolore illo inventore non, repudiandae sed consequatur ad?
                        Accusamus unde magnam, mollitia quam praesentium dolores iste hic. Enim!
                        Consequatur ullam id sint voluptates blanditiis, harum soluta amet non.
                        Doloribus nisi nam vitae aliquid. Excepturi doloremque nesciunt a debitis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, unde?
                        Molestias accusamus at minus laboriosam veritatis ea! Sit, dolor hic!
                        Voluptatibus beatae accusamus error officia blanditiis ipsa dolorum? Ea, id?
                        Doloremque atque quae sint quisquam vitae sit quis voluptas necessitatibus?
                        Cupiditate, odit reiciendis deleniti voluptate nesciunt officiis? Culpa, fugit quae.
                        Cupiditate nobis sit, consequatur officiis explicabo cum rerum vel totam?
                        Rem qui ipsa maiores? Facilis, quia! Ab aspernatur ullam eveniet.
                        Minima repellendus numquam adipisci nihil iste eveniet maiores tenetur qui!
                        Praesentium dolore eligendi eum? Ducimus aliquam minus expedita non asperiores.
                        Voluptatibus animi molestias nesciunt praesentium error aspernatur necessitatibus at possimus.
                        Cupiditate vel cumque, ex accusamus facere ipsa enim voluptatibus fugiat.
                        Facilis reiciendis officiis error beatae sint alias cumque sed sit.
                        Fugit dolores, aliquam ex neque libero beatae sed cumque perferendis.
                        Qui numquam non, magnam id a assumenda rem quo quasi.
                        Doloremque veniam sed dolorum eveniet cumque, ducimus perspiciatis hic explicabo.
                        Dolorum, cumque? Qui esse quibusdam quas. Deserunt ut nobis eligendi.
                        Fugit reiciendis veniam aperiam itaque maxime, dolor quis aliquam quos?
                        Error ipsa corrupti nulla, velit vitae ad soluta neque aperiam?
                        Saepe quos odit consectetur sint veniam accusantium velit iste ex!
                        Fugiat maxime libero consectetur ut architecto sunt commodi iure eveniet.
                        Deleniti iste impedit quas ea fugiat? Doloremque, in! Adipisci, quia!
                        Quis laboriosam eum ratione totam maxime soluta a voluptatum nisi?
                        Soluta, animi porro blanditiis iste dolorem ullam nulla qui iure.
                        Saepe quo, voluptatem exercitationem reprehenderit atque voluptatum alias velit repellat?
                        Ut, libero vel sapiente consequuntur officia accusamus rem cum est?
                        Accusantium, illo cumque suscipit dolor quia assumenda atque nisi doloremque.
                        Qui dolorem dolore illo inventore non, repudiandae sed consequatur ad?
                        Accusamus unde magnam, mollitia quam praesentium dolores iste hic. Enim!
                        Consequatur ullam id sint voluptates blanditiis, harum soluta amet non.
                        Doloribus nisi nam vitae aliquid. Excepturi doloremque nesciunt a debitis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, unde?
                        Molestias accusamus at minus laboriosam veritatis ea! Sit, dolor hic!
                        Voluptatibus beatae accusamus error officia blanditiis ipsa dolorum? Ea, id?
                        Doloremque atque quae sint quisquam vitae sit quis voluptas necessitatibus?
                        Cupiditate, odit reiciendis deleniti voluptate nesciunt officiis? Culpa, fugit quae.
                        Cupiditate nobis sit, consequatur officiis explicabo cum rerum vel totam?
                        Rem qui ipsa maiores? Facilis, quia! Ab aspernatur ullam eveniet.
                        Minima repellendus numquam adipisci nihil iste eveniet maiores tenetur qui!
                        Praesentium dolore eligendi eum? Ducimus aliquam minus expedita non asperiores.
                        Voluptatibus animi molestias nesciunt praesentium error aspernatur necessitatibus at possimus.
                        Cupiditate vel cumque, ex accusamus facere ipsa enim voluptatibus fugiat.
                        Facilis reiciendis officiis error beatae sint alias cumque sed sit.
                        Fugit dolores, aliquam ex neque libero beatae sed cumque perferendis.
                        Qui numquam non, magnam id a assumenda rem quo quasi.
                        Doloremque veniam sed dolorum eveniet cumque, ducimus perspiciatis hic explicabo.
                        Dolorum, cumque? Qui esse quibusdam quas. Deserunt ut nobis eligendi.
                        Fugit reiciendis veniam aperiam itaque maxime, dolor quis aliquam quos?
                        Error ipsa corrupti nulla, velit vitae ad soluta neque aperiam?
                        Saepe quos odit consectetur sint veniam accusantium velit iste ex!
                        Fugiat maxime libero consectetur ut architecto sunt commodi iure eveniet.
                        Deleniti iste impedit quas ea fugiat? Doloremque, in! Adipisci, quia!
                        Quis laboriosam eum ratione totam maxime soluta a voluptatum nisi?
                        Soluta, animi porro blanditiis iste dolorem ullam nulla qui iure.
                        Saepe quo, voluptatem exercitationem reprehenderit atque voluptatum alias velit repellat?
                        Ut, libero vel sapiente consequuntur officia accusamus rem cum est?
                        Accusantium, illo cumque suscipit dolor quia assumenda atque nisi doloremque.
                        Qui dolorem dolore illo inventore non, repudiandae sed consequatur ad?
                        Accusamus unde magnam, mollitia quam praesentium dolores iste hic. Enim!
                        Consequatur ullam id sint voluptates blanditiis, harum soluta amet non.
                        Doloribus nisi nam vitae aliquid. Excepturi doloremque nesciunt a debitis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, unde?
                        Molestias accusamus at minus laboriosam veritatis ea! Sit, dolor hic!
                        Voluptatibus beatae accusamus error officia blanditiis ipsa dolorum? Ea, id?
                        Doloremque atque quae sint quisquam vitae sit quis voluptas necessitatibus?
                        Cupiditate, odit reiciendis deleniti voluptate nesciunt officiis? Culpa, fugit quae.
                        Cupiditate nobis sit, consequatur officiis explicabo cum rerum vel totam?
                        Rem qui ipsa maiores? Facilis, quia! Ab aspernatur ullam eveniet.
                        Minima repellendus numquam adipisci nihil iste eveniet maiores tenetur qui!
                        Praesentium dolore eligendi eum? Ducimus aliquam minus expedita non asperiores.
                        Voluptatibus animi molestias nesciunt praesentium error aspernatur necessitatibus at possimus.
                        Cupiditate vel cumque, ex accusamus facere ipsa enim voluptatibus fugiat.
                        Facilis reiciendis officiis error beatae sint alias cumque sed sit.
                        Fugit dolores, aliquam ex neque libero beatae sed cumque perferendis.
                        Qui numquam non, magnam id a assumenda rem quo quasi.
                        Doloremque veniam sed dolorum eveniet cumque, ducimus perspiciatis hic explicabo.
                        Dolorum, cumque? Qui esse quibusdam quas. Deserunt ut nobis eligendi.
                        Fugit reiciendis veniam aperiam itaque maxime, dolor quis aliquam quos?
                        Error ipsa corrupti nulla, velit vitae ad soluta neque aperiam?
                        Saepe quos odit consectetur sint veniam accusantium velit iste ex!
                        Fugiat maxime libero consectetur ut architecto sunt commodi iure eveniet.
                        Deleniti iste impedit quas ea fugiat? Doloremque, in! Adipisci, quia!
                        Quis laboriosam eum ratione totam maxime soluta a voluptatum nisi?
                        Soluta, animi porro blanditiis iste dolorem ullam nulla qui iure.
                        Saepe quo, voluptatem exercitationem reprehenderit atque voluptatum alias velit repellat?
                        Ut, libero vel sapiente consequuntur officia accusamus rem cum est?
                        Accusantium, illo cumque suscipit dolor quia assumenda atque nisi doloremque.
                        Qui dolorem dolore illo inventore non, repudiandae sed consequatur ad?
                        Accusamus unde magnam, mollitia quam praesentium dolores iste hic. Enim!
                        Consequatur ullam id sint voluptates blanditiis, harum soluta amet non.
                        Doloribus nisi nam vitae aliquid. Excepturi doloremque nesciunt a debitis.
                    </p>
                </section>
            </main>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
query{
    logoGatsby: file(relativePath: {eq: "images/icon.png"}){
        childImageSharp{
            fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`