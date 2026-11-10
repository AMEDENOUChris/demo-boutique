import Link from "next/link";
import site from "../site.config";
import { items } from "../data";
import { Card, Foot, cid, wa } from "../lib";
import Nav from "../components/Nav";

export default function Home() {
  const cats = [...new Set(items.map((i) => i.cat))];
  return (
    <>
      <Nav />
      <section className="hero"><div className="wrap hero__in">
        <div><span className="eyebrow">Nouvelle collection</span><h1>{site.name}</h1><p>{site.tagline}</p>
          <div className="actions"><Link className="btn" href="/boutique">Découvrir la boutique</Link><a className="btn btn--ghost" href={wa()}>Commander sur WhatsApp</a></div></div>
        <img className="hero__img" src="/images/mall.svg" alt="Galerie commerciale avec boutiques" width="600" height="400" />
      </div></section>
      <section className="trust wrap">{["Livraison à domicile", "Paiement mobile", "Échange sous 7 jours", "Service client WhatsApp"].map((t) => <span key={t}>✓ {t}</span>)}</section>
      <section className="wrap"><h2>Nouveautés</h2><div className="cards">{items.slice(0, 4).map((i) => <Card key={i.slug} it={i} />)}</div></section>
      <section className="promo"><div className="wrap"><h2>Promo du week-end</h2><p>Jusqu'à -20 % sur une sélection de robes et de chaussures.</p><Link className="btn" href="/boutique">Voir les articles</Link></div></section>
      <section className="wrap"><h2>Acheter par catégorie</h2><div className="cats">{cats.map((c) => <Link key={c} href={`/boutique#${cid(c)}`} className="cat reveal">{c}<span>Voir →</span></Link>)}</div></section>
      <Foot />
    </>
  );
}
