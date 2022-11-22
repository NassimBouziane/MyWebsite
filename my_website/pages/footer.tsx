import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-link-title">
          <Link href="">Nous contactez</Link>
          <Link href="">
            <br />
            <br />
            FAQ
          </Link>
        </div>
        <div className="footer-title">
          <p>A propos</p>
          <Link id="footer-child" href="">
            Greento
          </Link>
          <br />
          <Link id="footer-child" href="">
            Nos engagements
          </Link>
          <br />
          <Link id="footer-child" href="">
            Le Made in France
          </Link>
          <br />
          <Link id="footer-child" href="">
            Nos matiéres
          </Link>
        </div>
        <div className="footer-title">
          <p>Nos produits</p>
          <Link id="footer-child" href="">
            Nos Lunch box /Bentos
          </Link>
          <br />
          <Link id="footer-child" href="">
            Gourdes
          </Link>
          <br />
          <Link id="footer-child" href="">
            Couverts & Accessoires
          </Link>
          <br />
          <Link id="footer-child" href="">
            Pièces détachées
          </Link>
          <br />
        </div>
      </div>
      <div id="footer-link">
        <Link className="footer-link" href="">
          Conditions générales de vente
        </Link>
        <Link className="footer-link" href="">
          Mentions légales
        </Link>
        <Link className="footer-link" href="">
          Politique de protection des données
        </Link>
      </div>
    </footer>
  )
}
