import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";
import { useQuery } from "@apollo/react-hooks";
import DETAIL_WEBSITE from "../../api/graphql/detailWebsite.gql";

import Layout from "../../components/Layout";
import Subheader from "../../components/Subheader";
import DetailBar from "../../components/DetailBar";
import InvestBox from "../../components/InvestBox";
import KPI from "../../components/KPI";
import Modal from "../../components/Modal";
import InputField from "../../components/InputField";
import AccordionItem from "../../components/Accordion/AccordionItem";

const Detail = () => {
  const [investClicked, setInvestClicked] = useState(false);
  const { loading, error, data } = useQuery(DETAIL_WEBSITE);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const investClickHandler = () => {
    setInvestClicked(!investClicked);
  };

  if (loading)
    return (
      <Layout>
        <Subheader
          subtitle="Luieraanbiedingen.net"
          description="Een affiliate website in de luiers niche"
        />
        <DetailBar />
        <h1>Loading</h1>
      </Layout>
    );

  return (
    <Layout>
      <Subheader
        subtitle="Luieraanbiedingen.net"
        description="Een affiliate website in de luiers niche"
      />
      <DetailBar />
      <div className="container detail">
        <div className="row detail__info d-flex pb-5">
          <div className="col-md-6">
            <h2>Website URL</h2>
            {user ? (
              <h3>www.luieraanbiedingen.net</h3>
            ) : (
              <span className="text--grey400">
                <i class="fas fa-lock"></i>
                Dit is alleen toegankelijk voor geregistreerde gebruikers.
              </span>
            )}
            <h2>Website KPIs</h2>
            <div className="d-flex flex-wrap">
              <KPI label="Maandelijkse winst" value="€3.200,-" isProfit />
              <KPI label="Maandelijkse omzet" value="€3.400,-" />
              <KPI label="Inleg v.a." value="€250,-" />
              <KPI label="Bezoekers p/m" value="3240" />
              <KPI label="Conversiepercentage" value="2%" />
            </div>
            <h3>Beschrijving van dit object</h3>
            <p className="text--grey400">
              De aangeboden website is opgebouwd rond het onderwerp baby's en
              luiers. Middels affiliate links genereert de eigenaar maandelijks
              een interessant bedrag aan affiliate inkomsten. Naast deze
              affiliate links lopen er directe afspraken met grote Nederlandse
              webwinkels die rechtstreeks exposure inkopen voor bepaalde thema
              en/of actieweken De onderneming beschikt over 25.000 unieke en
              double opt-in emailadressen. Let op: de cijfers zijn over 2017. De
              winst is netto-netto en dus al gecorrigeerd voor de uren die de
              verkoper er maandelijks insteekt.
            </p>
          </div>
          <div className="col-md-6">
            <InvestBox clickHandler={investClickHandler} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="detail__earnings row">
          <div className="col-12 d-flex flex-column align-items-center p-3">
            <h2>Inkomsten per maand</h2>
            <span>Importeer een library hier om grafieken te showen</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h2>Veelgestelde vragen</h2>
            <AccordionItem />
            <AccordionItem />
          </div>
        </div>
      </div>
      <Modal
        title="Investeer in object #15452"
        isOpen={investClicked}
        clickHandler={investClickHandler}
      >
        <p className="text--grey400">
          U kunt investeren vanaf €250,- voor dit object. Voor meer informatie
          of vragen, kunt u contact opnemen.
        </p>
        <div
          className="d-flex flex-column justify-content-around"
          style={{ width: "100%" }}
        >
          <div className="d-flex justify-content-around">
            <InputField name="invest" />
            <button className="btn btn--cta">
              <i class="fas fa-coins"></i>Investeren
            </button>
          </div>
          <span className="text--grey400 mt-3">
            Geschatte inkomsten per maand:
          </span>
          <h3 className="text--green">€67,- p/m *</h3>
        </div>
      </Modal>
    </Layout>
  );
};

export default Detail;
