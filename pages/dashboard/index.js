import React, { useContext } from "react";
import { ProtectedPage } from "../../components/ProtectedPage";
import { AuthContext } from "../../context/auth";
import GET_ALL_INVESTMENTS_BY_USER from "../../graphql/graphql/queries/getAllInvestmentsByUser.gql";
import { useQuery } from "@apollo/react-hooks";

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
    variables: { uid: user.user.id }
  });

  const InvestmentsContent = () => {
    if (loading) return <SkeletonLine />;

    if (data) {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeading>Website</TableHeading>
              <TableHeading>Geinvesteerd</TableHeading>
              <TableHeading>Datum</TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>luieraanbiedingen.net</TableCell>
              <TableCell>5000</TableCell>
              <TableCell>23 april 2020</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>luieraanbiedingen.net</TableCell>
              <TableCell>5000</TableCell>
              <TableCell>23 april 2020</TableCell>
            </TableRow>
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
          {user && (
            <>
              <p>{user.user.email}</p>
              <p>{user.user.username}</p>
              <p>{user.user.id}</p>
            </>
          )}
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
