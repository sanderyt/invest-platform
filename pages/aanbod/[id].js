import React, { useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";
import { useQuery } from "@apollo/react-hooks";
import GET_DETAIL_WEBSITE from "../../graphql/graphql/queries/detailWebsite.gql";
import { refactorAmount } from "../../utils/functions";
import {
  calculateProgress,
  amountOfInvestors,
  readableDate
} from "../../utils/functions";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "react-vis";

import Layout from "../../components/Layout";
import Subheader from "../../components/Subheader";
import DetailBar from "../../components/DetailBar";
import InvestBox from "../../components/InvestBox";
import ProgressBar from "../../components/ProgressBar";
import KPI from "../../components/KPI";
import Modal from "../../components/Modal";
import SkeletonLine from "../../components/SkeletonLine";
import SkeletonThumb from "../../components/SkeletonThumb";
import InvestModal from "../../components/InvestModal";

const Detail = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const { loading, error, data } = useQuery(GET_DETAIL_WEBSITE, {
    variables: { id: router.query.id }
  });

  const [investModalClicked, setInvestModalClicked] = useState(false);

  const investModalHandler = () => {
    setInvestModalClicked(!investModalClicked);
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
    smallDescription,
    monthlyProfit,
    monthlyRevenue,
    detailDescription,
    targetAmount,
    investments,
    createdAt,
    thumbnail
  } = data.website;

  if (data) console.log(data);
  return (
    <Layout>
      <Subheader subtitle={url} description={smallDescription} />
      <DetailBar createdAt={readableDate(createdAt)} />
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
                label="Maandelijkse winst"
                value={`€${refactorAmount(monthlyProfit)},-`}
                isProfit
              />
              <KPI
                label="Maandelijkse omzet"
                value={`€${refactorAmount(monthlyRevenue)},-`}
              />
              <KPI label="Inleg v.a." value="€250,-" />
              <KPI label="Bezoekers p/m" value="3240" />
              <KPI label="Conversiepercentage" value="2%" />
            </div>
            <h3>Beschrijving van dit object</h3>
            <p className="text--grey400">{detailDescription}</p>
          </div>
          <div className="col-md-6">
            <InvestBox targetAmount={refactorAmount(targetAmount)}>
              <ProgressBar
                targetAmount={targetAmount}
                progressAmount={calculateProgress(investments)}
                numberOfInvestors={amountOfInvestors(investments)}
              />
              <button
                className="btn btn--cta btn--lg"
                onClick={investModalHandler}
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
            <XYPlot width={800} height={400}>
              <HorizontalGridLines />
              <LineSeries
                data={[
                  { x: 1, y: 10 },
                  { x: 2, y: 5 },
                  { x: 3, y: 15 }
                ]}
              />
              <XAxis />
              <YAxis />
            </XYPlot>
          </div>
        </div>
      </div>
      <Modal
        title="Investeer in object #15452"
        isOpen={investModalClicked}
        clickHandler={investModalHandler}
      >
        <InvestModal
          progressAmount={calculateProgress(investments)}
          numberOfInvestors={amountOfInvestors(investments)}
          websiteId={router.query.id}
        />
      </Modal>
    </Layout>
  );
};

export default Detail;
