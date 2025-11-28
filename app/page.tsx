"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// IMPORTS STATIQUES DES CAPTURES MOBILES
import screen1 from "../public/screens/renovia-mobile-1.jpg";
import screen2 from "../public/screens/renovia-mobile-3.jpg";
import screen3 from "../public/screens/renovia-mobile-2.jpg";
import screen4 from "../public/screens/renovia-mobile-4.jpg";
import screen5 from "../public/screens/renovia-mobile-5.jpg";

// IMPORT STATIQUE DU LOGO
import logoRenovia from "../public/logo-renovia.png";

// Tableau des écrans mobiles
const mobileScreens = [screen1, screen2, screen3, screen4, screen5];

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const slides = mobileScreens.map((img) => ({
    src: (img as { src: string }).src,
  }));

  return (
    <>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* NAVBAR */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 md:h-10 md:w-10">
                <Image
                  src={logoRenovia}
                  alt="Renov'IA"
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.14em] text-emerald-800 uppercase">
                  Renov’IA
                </span>
                <span className="text-xs text-slate-500">
                  Pilotage intelligent de la rénovation
                </span>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              <a href="#features" className="hover:text-emerald-800">
                Fonctionnalités
              </a>
              <a href="#how-it-works" className="hover:text-emerald-800">
                Comment ça marche
              </a>
              <a href="#who" className="hover:text-emerald-800">
                Pour qui ?
              </a>
              <a href="#pricing" className="hover:text-emerald-800">
                Tarifs
              </a>
              <a href="#faq" className="hover:text-emerald-800">
                FAQ
              </a>
            </nav>

            <div className="hidden gap-3 md:flex">
              <a
                href="#demo"
                className="rounded-full border border-emerald-800 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
              >
                Connexion
              </a>
              <a
                href="#demo"
                className="rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900"
              >
                Demander une démo
              </a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-20">
            <div className="flex-1 space-y-6">
              <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                SaaS BTP · Rénovation · Pilotage chantier
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                La plateforme SaaS qui automatise
                <span className="block text-emerald-800">
                  vos chantiers de rénovation
                </span>
              </h1>

              <p className="max-w-xl text-base text-slate-600 md:text-lg">
                Centralisez vos dossiers, importez vos fichiers (locataires,
                diagnostics, CCTP/DPGF) et laissez l’IA préparer vos fiches
                logements, synoptiques et fiches travaux, du DCE à la réception.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900"
                >
                  Essayer gratuitement 14 jours
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-800 hover:text-emerald-800"
                >
                  Voir les tarifs
                </a>
              </div>

              <p className="text-xs text-slate-500">
                Aucune carte bancaire requise. Hébergé en Europe. Conforme RGPD.
              </p>

              <div className="mt-6 space-y-2 text-xs text-slate-500">
                <p className="font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Conçu avec des équipes projets
                </p>
                <div className="flex flex-wrap gap-4 text-[11px]">
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                    Bailleurs sociaux
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                    Architectes &amp; MOE
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                    Entreprises générales
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                    AMO / MOS
                  </span>
                </div>
              </div>
            </div>

            {/* VISUEL HERO – ÉVENTAIL D'ÉCRANS MOBILES */}
            <div className="flex-1">
              <div className="relative mx-auto flex max-w-md items-end justify-center gap-2 md:gap-3">
                {mobileScreens.map((src, index) => (
                  <div
                    key={index}
                    role="button"
                    aria-label={`Voir la capture mobile ${index + 1}`}
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                    className={`relative h-64 w-28 cursor-zoom-in overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-[0_16px_40px_rgba(15,23,42,0.35)] md:h-72 md:w-32 ${
                      index === 2
                        ? "z-20 scale-110"
                        : index === 1 || index === 3
                        ? "z-10 scale-100 translate-y-2"
                        : "z-0 scale-95 translate-y-4 opacity-80"
                    }`}
                  >
                    <div className="absolute inset-0 rounded-[22px] border border-slate-800/60" />
                    <div className="absolute inset-x-6 top-2 h-1.5 rounded-full bg-slate-700" />
                    <div className="absolute inset-x-3 bottom-2 h-1 rounded-full bg-slate-800" />
                    <Image
                      src={src}
                      alt={`Capture mobile Renov'IA ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 2}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-[11px] text-slate-500">
                Une expérience pensée pour le terrain :
                <span className="font-semibold"> ergonomie mobile</span> pour
                les visites, états des lieux et suivis de travaux.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLÈME */}
        <section
          id="problem"
          className="border-b border-slate-200 bg-white py-12 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Gérer un chantier de rénovation ne devrait pas être un casse-tête
                administratif
              </h2>
              <p className="text-sm text-slate-600 md:text-base">
                Fichiers Excel locataires hétérogènes, diagnostics amiante
                volumineux, CCTP/DPGF pour chaque lot, réserves qui se perdent
                entre les mails… Résultat : des heures de re-saisie, des
                informations qui se contredisent et des retards en phase chantier
                et réception.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Données dispersées
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Dossiers partagés, mails, clés USB, imprimés terrain… Les
                  informations critiques sont éparpillées et se contredisent.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Suivi de logements complexe
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Impossible d’avoir une vision simple de l’état des logements,
                  des lots, des interventions et des réserves en cours.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Risque d’erreurs élevé
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Re-saisie manuelle, fichiers non synchronisés, documents
                  périmés… Le risque d’erreur augmente à chaque étape du chantier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section
          id="solution"
          className="border-b border-slate-200 bg-emerald-900 py-12 text-emerald-50 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Renov’IA, le cockpit intelligent de vos opérations de rénovation
              </h2>
              <p className="text-sm md:text-base">
                Renov’IA est une plateforme web SaaS qui automatise la gestion de
                vos flux de travaux BTP. Importez vos données, l’IA les structure
                et vous accompagne de la phase DCE jusqu’à la réception : fiches
                logements, synoptique d’immeuble, fiches travaux, listes de
                réserves et quitus sont générés et mis à jour en quelques clics.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-800/70 p-5">
                <h3 className="text-sm font-semibold">Centralisation</h3>
                <p className="mt-2 text-sm text-emerald-100">
                  Dossiers, acteurs, lots, logements, documents : tout est
                  regroupé dans un seul espace.
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-800/70 p-5">
                <h3 className="text-sm font-semibold">Structuration IA</h3>
                <p className="mt-2 text-sm text-emerald-100">
                  L’IA analyse et rattache les fichiers locataires, diagnostics et
                  CCTP/DPGF aux bons logements et lots.
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-800/70 p-5">
                <h3 className="text-sm font-semibold">Pilotage temps réel</h3>
                <p className="mt-2 text-sm text-emerald-100">
                  Suivez l’avancement des travaux, les réserves et la réception en
                  temps réel, avec des exports prêts à être partagés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APERÇU MOBILE (SECTION DÉDIÉE) */}
        <section className="border-b border-slate-200 bg-white py-12 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Une expérience optimisée pour le mobile
                </h2>
                <p className="text-sm text-slate-600 md:text-base">
                  Visites, états des lieux, photos de réserves, validation des
                  travaux : tout a été pensé pour une utilisation fluide sur
                  smartphone.
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                App web responsive
              </p>
            </div>

            <div className="mt-8 overflow-x-auto pb-4">
              <div className="flex min-w-max gap-4">
                {mobileScreens.map((src, index) => (
                  <div
                    key={`section-mobile-${index}`}
                    role="button"
                    aria-label={`Voir l'écran mobile ${index + 1}`}
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                    className="relative h-80 w-40 shrink-0 cursor-zoom-in overflow-hidden rounded-[2.1rem] border border-slate-200 bg-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.4)]"
                  >
                    <div className="absolute inset-0 rounded-[2rem] border border-slate-800/60" />
                    <div className="absolute inset-x-10 top-3 h-1.5 rounded-full bg-slate-700" />
                    <div className="absolute inset-x-6 bottom-3 h-1 rounded-full bg-slate-800" />
                    <Image
                      src={src}
                      alt={`Écran mobile Renov'IA ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FONCTIONNALITÉS */}
        <section
          id="features"
          className="border-b border-slate-200 bg-white py-12 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Fonctionnalités clés
                </h2>
                <p className="text-sm text-slate-600 md:text-base">
                  De la création du dossier à la réception, Renov’IA structure vos
                  données et automatise vos livrables.
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                Du DCE à la réception
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <FeatureCard
                title="Création & pilotage de dossiers"
                points={[
                  "Créez un dossier complet : typologie, adresse, immeubles, allées, étages, logements.",
                  "Renseignez MOA, MOE, AMO/MOS, entreprises, BET et lots associés.",
                  "Visualisez d’un coup d’œil tous vos dossiers en cours.",
                ]}
              />
              <FeatureCard
                title="Import intelligent des données"
                points={[
                  "Import des fichiers locataires (Excel) avec aide au mapping des colonnes.",
                  "Import des diagnostics amiante par blocs et rattachement automatique aux logements.",
                  "Import CCTP / DPGF par lot, utilisés ensuite dans les fiches logements et travaux.",
                ]}
              />
              <FeatureCard
                title="Synoptique & fiches logements"
                points={[
                  "Génération automatique du synoptique par allée/étage/logement.",
                  "Fiches logements complètes : occupants, spécificités, diagnostics, accès, etc.",
                  "Préparation des visites et des travaux par logement.",
                ]}
              />
              <FeatureCard
                title="Fiches travaux & suivi de chantier"
                points={[
                  "Génération de fiches travaux à partir du programme, des CCTP/DPGF et des visites.",
                  "Suivi des tâches par lot, par pièce et par logement.",
                  "Historique clair de ce qui a été réalisé, modifié ou reporté.",
                ]}
              />
              <FeatureCard
                title="Gestion des réserves & réception"
                points={[
                  "Saisie et suivi des réserves par logement et par lot.",
                  "Visualisation des réserves levées / maintenues et génération automatique des quitus.",
                  "Exports prêts à être partagés avec les parties prenantes.",
                ]}
              />
              <FeatureCard
                title="Plateforme 100% web & sécurisée"
                points={[
                  "Accès depuis un simple navigateur, sans installation.",
                  "Gestion fine des utilisateurs et des droits selon les rôles.",
                  "Hébergement européen, conformité RGPD, sauvegardes régulières.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* COMMENT ÇA MARCHE */}
        <section
          id="how-it-works"
          className="border-b border-slate-200 bg-slate-950 py-12 text-slate-50 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Comment ça marche ?
              </h2>
              <p className="text-sm md:text-base text-slate-200">
                Une mise en place progressive, pensée pour coller au rythme réel
                de vos opérations.
              </p>
            </div>

            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              <StepCard
                step="01"
                title="Créez votre dossier"
                description="Définissez le projet, les immeubles, les allées, les logements, les acteurs et les lots depuis une seule interface."
              />
              <StepCard
                step="02"
                title="Importez vos fichiers"
                description="Locataires, diagnostics amiante, CCTP/DPGF : l’IA analyse, nettoie et rattache les données aux bons logements."
              />
              <StepCard
                step="03"
                title="Pilotez vos chantiers"
                description="Suivez les travaux, les réserves et la réception ; générez vos fiches et exports en quelques clics."
              />
            </ol>

            <div className="mt-10">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Planifier une démo personnalisée
              </a>
            </div>
          </div>
        </section>

        {/* POUR QUI */}
        <section
          id="who"
          className="border-b border-slate-200 bg-white py-12 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Pour qui est faite Renov’IA ?
                </h2>
                <p className="text-sm text-slate-600 md:text-base">
                  Un outil transversal, conçu pour fluidifier la collaboration
                  entre tous les acteurs du chantier.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-4">
              <WhoCard
                title="Bailleurs sociaux & foncières"
                description="Vue globale des opérations, suivi des logements et sécurisation de la réception."
              />
              <WhoCard
                title="Architectes & MOE"
                description="Moins d’administratif, plus de conception et de coordination technique."
              />
              <WhoCard
                title="Entreprises générales"
                description="Centralisation des infos terrain et limitation des re-saisies chronophages."
              />
              <WhoCard
                title="AMO / MOS"
                description="Un support unique pour piloter vos missions d’accompagnement et de reporting."
              />
            </div>
          </div>
        </section>

        {/* TARIFS */}
        <section
          id="pricing"
          className="border-b border-slate-200 bg-slate-50 py-12 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Des plans adaptés à la taille de vos opérations
              </h2>
              <p className="text-sm text-slate-600 md:text-base">
                Commencez sur un chantier pilote, déployez ensuite à l’échelle
                d’un parc ou d’un groupe.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <PricingCard
                label="Chantier"
                price="49 €"
                period="/mois"
                features={[
                  "Jusqu’à 10 dossiers actifs",
                  "Utilisateurs illimités",
                  "Import locataires + diagnostics + CCTP/DPGF",
                  "Exports Excel / PDF",
                ]}
                cta="Parler à un expert"
              />
              <PricingCard
                label="Multi-Opérations"
                price="99 €"
                period="/mois"
                popular
                features={[
                  "Jusqu’à 20 dossiers actifs",
                  "Tableau de bord multi-résidences",
                  "Gestion avancée des rôles",
                  "Support prioritaire & onboarding",
                ]}
                cta="Choisir ce plan"
              />
              <PricingCard
                label="Entreprise / Groupe"
                price="Sur devis"
                features={[
                  "Nombre de dossiers illimité",
                  "SSO & intégrations spécifiques",
                  "SLA & support dédié",
                  "Accompagnement déploiement",
                ]}
                cta="Nous contacter"
              />
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Tarifs indicatifs – ajustables selon le volume de dossiers, le
              nombre d’utilisateurs et les besoins d’intégration.
            </p>
          </div>
        </section>

        {/* DEMO */}
        <section
          id="demo"
          className="border-b border-slate-200 bg-white py-12 md:py-20"
        >
          <div className="mx-auto max-w-3xl px-4">
            <div className="space-y-3 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Planifier une démo Renov’IA
              </h2>
              <p className="text-sm text-slate-600 md:text-base">
                Laissez-nous quelques informations sur votre contexte, nous
                reviendrons vers vous rapidement pour une démo personnalisée.
              </p>
            </div>

            <form className="mt-8 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Nom / Prénom
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-emerald-500 focus:bg-white focus:ring-2"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Structure
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-emerald-500 focus:bg-white focus:ring-2"
                    placeholder="Bailleur, entreprise générale..."
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-emerald-500 focus:bg-white focus:ring-2"
                    placeholder="prenom.nom@structure.fr"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-emerald-500 focus:bg-white focus:ring-2"
                    placeholder="+33..."
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Contexte et besoins
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-emerald-500 focus:bg-white focus:ring-2"
                  placeholder="Type d’opérations, nombre de logements, horizon de déploiement..."
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-slate-500">
                <input type="checkbox" className="mt-0.5" />
                <span>
                  J’accepte que mes données soient utilisées pour être recontacté·e
                  dans le cadre d’une démonstration de la solution Renov’IA.
                </span>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-900 md:w-auto"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="border-b border-slate-200 bg-slate-50 py-12 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Questions fréquentes
              </h2>
              <p className="text-sm text-slate-600 md:text-base">
                Et si vous ne trouvez pas votre réponse ici, contactez-nous
                directement.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <FaqItem
                question="Combien de temps faut-il pour prendre en main Renov’IA ?"
                answer="En général, une demi-journée de formation suffit pour être opérationnel sur un premier projet. L’interface est pensée pour coller à vos process actuels."
              />
              <FaqItem
                question="Vos serveurs sont-ils hébergés en Europe ?"
                answer="Oui, la plateforme est hébergée sur des infrastructures européennes, avec sauvegardes régulières et conformité RGPD."
              />
              <FaqItem
                question="Puis-je exporter mes données ?"
                answer="Oui, les listes de logements, de travaux, de réserves et les différents états peuvent être exportés en formats standards (CSV, Excel, PDF...)."
              />
              <FaqItem
                question="Proposez-vous un accompagnement pour le premier chantier ?"
                answer="Oui, nous pouvons vous accompagner sur le cadrage du premier projet, l’import de vos fichiers et la structuration des données."
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-950 py-8 text-slate-300">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1 text-xs">
              <p className="font-semibold text-slate-100">
                FLEURENT ARCHITECTES & GCC EURECA – Éditeur de la solution Renov’IA
              </p>
              <p>LYON – France</p>
              <p>
                <a
                  href="mailto:anthony@globodai.com"
                  className="underline decoration-emerald-500/70 decoration-2 underline-offset-4 hover:text-white"
                />
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="#" className="hover:text-white">
                  Mentions légales
                </a>
                <span>·</span>
                <a href="#" className="hover:text-white">
                  Politique de confidentialité
                </a>
                <span>·</span>
                <a href="#demo" className="hover:text-white">
                  Contact
                </a>
              </div>
              <p className="text-[11px] text-slate-500">
                © {new Date().getFullYear()} CDSM SARL. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* LIGHTBOX GLOBALE POUR LES CAPTURES MOBILES */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom]}
      />
    </>
  );
}

/* ========== COMPOSANTS RÉUTILISABLES ========== */

type FeatureCardProps = {
  title: string;
  points: string[];
};

function FeatureCard({ title, points }: FeatureCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {points.map((pt) => (
          <li key={pt} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

function StepCard({ step, title, description }: StepCardProps) {
  return (
    <li className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
        Étape {step}
      </span>
      <h3 className="mt-2 text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </li>
  );
}

type WhoCardProps = {
  title: string;
  description: string;
};

function WhoCard({ title, description }: WhoCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}

type PricingCardProps = {
  label: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

function PricingCard({
  label,
  price,
  period,
  features,
  cta,
  popular,
}: PricingCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-5 ${
        popular
          ? "border-emerald-600 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      {popular && (
        <span className="mb-3 inline-flex w-fit rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800">
          Le plus choisi
        </span>
      )}
      <h3 className="text-sm font-semibold text-slate-900">{label}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-slate-900">{price}</span>
        {period && <span className="text-xs text-slate-500">{period}</span>}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <a
          href="#demo"
          className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${
            popular
              ? "bg-emerald-800 text-white hover:bg-emerald-900"
              : "border border-slate-300 text-slate-800 hover:border-emerald-800 hover:text-emerald-800"
          }`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

type FaqItemProps = {
  question: string;
  answer: string;
};

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
      <h3 className="text-sm font-semibold text-slate-900">{question}</h3>
      <p className="mt-2 text-sm text-slate-600">{answer}</p>
    </div>
  );
}
