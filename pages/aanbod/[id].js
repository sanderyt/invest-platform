import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";
import { useQuery } from "@apollo/react-hooks";
import GET_DETAIL_WEBSITE from "../../api/graphql/queries/detailWebsite.gql";
import refactorAmount from "../../utils/refactorAmount";

import Layout from "../../components/Layout";
import Subheader from "../../components/Subheader";
import DetailBar from "../../components/DetailBar";
import InvestBox from "../../components/InvestBox";
import ProgressBar from "../../components/ProgressBar";
import KPI from "../../components/KPI";
import Modal from "../../components/Modal";
import AccordionItem from "../../components/Accordion/AccordionItem";
import SkeletonLine from "../../components/SkeletonLine";
import SkeletonThumb from "../../components/SkeletonThumb";
import InvestModal from "../../components/InvestModal";

const Detail = () => {
  const [investClicked, setInvestClicked] = useState(false);
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_DETAIL_WEBSITE, {
    variables: { id: router.query.id }
  });
  const { user } = useContext(AuthContext);

  const investClickHandler = () => {
    setInvestClicked(!investClicked);
  };

  if (loading)
    return (
      <Layout>
        <Subheader />
        <DetailBar />
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column">
              <SkeletonLine />
              <SkeletonLine />
              <SkeletonLine />
            </div>
            <div className="col-md-6">
              <SkeletonThumb />
            </div>
          </div>
        </div>
      </Layout>
    );

  const {
    url,
    shortDescription,
    description: { html },
    numberOfInvestors,
    targetAmount,
    progressAmount,
    monthlyProfit,
    yearlyProfit
  } = data.websites[0];

  return (
    <Layout>
      <Subheader subtitle={url} description={shortDescription} />
      <DetailBar />
      <div className="container detail">
        <div className="row detail__info d-flex pb-5">
          <div className="col-md-6">
            <h2>Website URL</h2>
            {user ? (
              <h3>{url}</h3>
            ) : (
              <span className="text--grey400">
                <i class="fas fa-lock"></i>
                Dit is alleen toegankelijk voor geregistreerde gebruikers.
              </span>
            )}
            <h2>Website KPIs</h2>
            <div className="d-flex flex-wrap">
              <KPI
                label="Jaarlijkse winst"
                value={`€${refactorAmount(yearlyProfit)},-`}
                isProfit
              />
              <KPI
                label="Maandelijkse winst"
                value={`€${refactorAmount(monthlyProfit)},-`}
                isProfit
              />
              <KPI label="Inleg v.a." value="€250,-" />
              <KPI label="Bezoekers p/m" value="3240" />
              <KPI label="Conversiepercentage" value="2%" />
            </div>
            <h3>Beschrijving van dit object</h3>
            <p className="text--grey400">{html}</p>
          </div>
          <div className="col-md-6">
            <InvestBox targetAmount={refactorAmount(targetAmount)}>
              <ProgressBar
                targetAmount={targetAmount}
                progressAmount={progressAmount}
                numberOfInvestors={numberOfInvestors}
              />
              <button
                className="btn btn--cta btn--lg"
                onClick={investClickHandler}
              >
                <i class="fas fa-coins"></i>Investeer
              </button>
            </InvestBox>
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
        <InvestModal
          progressAmount={progressAmount}
          numberOfInvestors={numberOfInvestors}
          websiteId={router.query.id}
        />
      </Modal>
    </Layout>
  );
};

export default Detail;
