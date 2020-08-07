import React from "react";

import Layout from "../../components/Layout";
import DashboardLayout from "../../components/DashboardLayout";
import Table from "../../components/Table";
import TableHead from "../../components/Table/TableHead";
import TableHeading from "../../components/Table/TableHeading";
import TableBody from "../../components/Table/TableBody";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";
import StatusPill from "../../components/StatusPill";

const Facturen = () => {
  return (
    <Layout>
      <DashboardLayout>
        <h1>Mijn inkomsten</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeading>Website</TableHeading>
              <TableHeading>Bedrag</TableHeading>
              <TableHeading>Datum</TableHeading>
              <TableHeading>Status</TableHeading>
              <TableHeading>Download</TableHeading>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>drone123.nl</TableCell>
              <TableCell>€475,-</TableCell>
              <TableCell>23 april 2020</TableCell>
              <TableCell>
                <StatusPill type="pending">Betaling verwerken</StatusPill>
              </TableCell>
              <TableCell>
                <i class="fas fa-file-download"></i>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>drone123.nl</TableCell>
              <TableCell>€575,-</TableCell>
              <TableCell>21 maart 2020</TableCell>
              <TableCell>
                <StatusPill type="success">Uitbetaald</StatusPill>
              </TableCell>
              <TableCell>
                <i class="fas fa-file-download"></i>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>drone123.nl</TableCell>
              <TableCell>€250,-</TableCell>
              <TableCell>22 februari 2020</TableCell>
              <TableCell>
                <StatusPill type="success">Uitbetaald</StatusPill>
              </TableCell>
              <TableCell>
                <i class="fas fa-file-download"></i>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DashboardLayout>
    </Layout>
  );
};

export default Facturen;
