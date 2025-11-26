import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo-renovia.jpg" // ton fichier dans /public
            alt="Renov'IA"
            width={80}
            height={80}
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Renov’IA — Le SaaS qui automatise la gestion de vos rénovations
        </h1>

        <p className="text-slate-300 max-w-2xl mx-auto mb-10">
          Centralisez vos dossiers, importez vos fichiers (locataires, diagnostics,
          CCTP/DPGF), générez automatiquement vos synoptiques et fiches logements,
          et pilotez vos chantiers avec l’IA.
        </p>

        <a
          href="#demo"
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-full"
        >
          Demander une démo
        </a>
      </section>

      {/* APERÇU MOBILE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Aperçu de l’application mobile</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <PhoneScreen src="/mobile-accueil.jpg" label="Accueil" />
          <PhoneScreen src="/mobile-synoptique.jpg" label="Synoptique" />
          <PhoneScreen src="/mobile-logement.jpg" label="Logement" />
          <PhoneScreen src="/mobile-espace-locataire.jpg" label="Espace locataire" />
          <PhoneScreen src="/mobile-etat-des-lieux.jpg" label="État des lieux" />
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Fonctionnalités principales</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            title="Import intelligent"
            description="Locataires, amiante, CCTP/DPGF — l’IA structure et relie tout automatiquement."
          />
          <Feature
            title="Pilotage des logements"
            description="Fiches logements, synoptiques, travaux, réserves — tout est centralisé."
          />
          <Feature
            title="Application mobile"
            description="Saisie sur chantier, état des lieux, suivi des travaux depuis le terrain."
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-slate-400 text-sm" id="demo">
        © {new Date().getFullYear()} Renov’IA — CDSM SARL
      </footer>
    </main>
  );
}

function PhoneScreen({ src, label }: { src: string; label: string }) {
  return (
    <div className="text-center">
      <div className="border border-slate-700 rounded-3xl overflow-hidden bg-black mx-auto w-[150px] h-[300px] relative">
        <Image src={src} alt={label} fill className="object-cover" />
      </div>
      <p className="mt-2 text-slate-300 text-sm">{label}</p>S
    </div>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <h3 className="text-xl font-semibold mb-2 text-emerald-300">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}
