import React, { useContext } from "react";
import { ProtectedPage } from "../../components/ProtectedPage";
import { AuthContext } from "../../context/auth";
import GET_ALL_INVESTMENTS_BY_USER from "../../graphql/graphql/queries/getAllInvestmentsByUser.gql";
import { useQuery } from "@apollo/react-hooks";
import { refactorAmount } from "../../utils/functions";

import Layout from "../../components/Layout";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardCard from "../../components/DashboardCard";
import SkeletonLine from "../../components/SkeletonLine";
import Table from "../../components/Table";
import TableHead from "../../components/Table/TableHead";
import TableHeading from "../../components/Table/TableHeading";
import TableBody from "../../components/Table/TableBody";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { loading, error, data } = useQuery(GET_ALL_INVESTMENTS_BY_USER, {
    variables: { uid: user.id }
  });

  const InvestmentsContent = () => {
    if (loading)
      return (
        <>
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
        </>
      );

    if (data) {
      console.log(data);
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeading>Website</TableHeading>
              <TableHeading>Geinvesteerd</TableHeading>
              <TableHeading>Datum</TableHeading>
              <TableHeading></TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.investments.map(investment => {
              return (
                <TableRow>
                  <TableCell>{investment.website.url}</TableCell>
                  <TableCell>
                    {refactorAmount(`€${investment.amountInvested}`)}
                  </TableCell>
                  <TableCell>{investment.createdAt}</TableCell>
                  <TableCell>
                    <i class="fas fa-ellipsis-h"></i>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      );
    }
  };

  return (
    <Layout>
      <DashboardLayout>
        <DashboardCard title="Mijn investeringen">
          <InvestmentsContent />
        </DashboardCard>

        <DashboardCard>
          <h2>Mijn profiel</h2>
        </DashboardCard>

        <DashboardCard title="Mijn inkomsten"></DashboardCard>

        <DashboardCard>
          <h2>Nieuwste mogelijkheden</h2>
          <p>Laat nieuwste websites zien</p>
        </DashboardCard>
      </DashboardLayout>
    </Layout>
  );
};

export default ProtectedPage(Dashboard);
