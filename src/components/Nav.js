import Link from "next/link";
import site from "../site.config";
import { wa } from "../lib";

export default function Nav() {
  return (
    <>
      <div className="util">Livraison offerte dès 30 000 FCFA · Paiement mobile accepté</div>
      <header className="nav"><div className="wrap nav__in"><Link href="/" className="brand">{site.name}</Link>
        <nav><Link href="/boutique">Boutique</Link><Link href="/contact">Contact</Link><a className="cta" href={wa()}>Commander</a></nav></div></header>
    </>
  );
}
