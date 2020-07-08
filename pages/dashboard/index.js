import React from "react";
import Layout from "../../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container-fluid" style={{ marginTop: 200 }}>
        <div className="row">
          <div className="col-4 d-flex p-5">Hier komt de sidebar</div>
          <div className="col-8 d-flex flex-column p-5">
            Van het dashboard moet je ook weer een layout component van maken!
            Het dashboard heeft de volgende functies:
            <ul>
              <li>Investeringen kunnen inzien die je gegaan hebt</li>
              <li>Alle facturen die je krijgt en uitbetalingen</li>
              <li>Resultaten van investeringen kunnen inzien</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
