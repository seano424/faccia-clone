import ProductsGrid from '@/components/ProductsGrid'
import Hero from '@/components/Hero'
import HomeFooter from '@/components/HomeFooter'
import Layout from '@/components/Layout'

export default function Home(props) {
  const { products } = props

  return (
    <Layout {...props}>
      <section className='relative top-20'>
        <Hero />
        <ProductsGrid products={products} />
        <HomeFooter />
      </section>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const linksRes = await fetch('http://localhost:3000/api/links')
  const links = await linksRes.json()

  const productsRes = await fetch('http://localhost:3000/api/products')
  const products = await productsRes.json()
  return {
    props: { products, links },
  }
}
