import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import GET_ALL_INVESTMENTS_BY_USER from "../../graphql/graphql/queries/getAllInvestmentsByUser.gql";
import { useQuery } from "@apollo/react-hooks";
import refactorAmount from "../../utils/refactorAmount";
import { readableDate } from "../../utils/functions";

import Layout from "../../components/Layout";
import DashboardLayout from "../../components/DashboardLayout";
import SkeletonLine from "../../components/SkeletonLine";
import Table from "../../components/Table";
import TableHead from "../../components/Table/TableHead";
import TableHeading from "../../components/Table/TableHeading";
import TableBody from "../../components/Table/TableBody";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";
import StatusPill from "../../components/StatusPill";

const Investeringen = props => {
  const context = useContext(AuthContext);
  const { loading, error, data } = useQuery(GET_ALL_INVESTMENTS_BY_USER, {
    variables: { uid: context.user.user.id },
    srr: false
  });

  return (
    <Layout>
      <DashboardLayout>
        <h1>Mijn investeringen</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeading>Website</TableHeading>
              <TableHeading>Geinvesteerd</TableHeading>
              <TableHeading>Datum</TableHeading>
              <TableHeading>Status</TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && <SkeletonLine />}
            {data &&
              data.investments.map(investment => {
                return (
                  <TableRow>
                    <TableCell>{investment.website.url}</TableCell>
                    <TableCell>
                      {refactorAmount(`€${investment.amountInvested}`)}
                    </TableCell>
                    <TableCell>{readableDate(investment.createdAt)}</TableCell>
                    <TableCell>
                      <StatusPill type="success">Bezig met overname</StatusPill>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </DashboardLayout>
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Pass data to the page via props
  return { props: { user: { user: { id: "5f297eaba80b8800175e02aa" } } } };
}

export default Investeringen;
