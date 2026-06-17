import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <section className="flex min-h-[70vh] items-center bg-teal-950 pt-[72px] text-cream-100">
        <div className="container-px text-center">
          <p className="font-display text-7xl font-bold text-brass-400 sm:text-8xl">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold">This page is still on the drawing board</h1>
          <p className="mx-auto mt-4 max-w-md text-cream-100/70">
            The page you're looking for doesn't exist or has moved. Let's get you back home.
          </p>
          <Link to="/" className="btn-primary mt-8">
            Back to Home <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </section>
    </>
  )
}
