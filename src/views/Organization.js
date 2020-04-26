import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { organizationService } from "../_service/organization.service"
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

function Organization() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8080/api/org");
      setData(result.data.data);
      console.log(result.data.data);
    })();
  }, []);

  return (

    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <Col lg="6">
          <PageTitle sm="6" title="Organizations" subtitle="Full List" className="text-sm-left" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Organization List</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                  </th>
                    <th scope="col" className="border-0">
                      Org-Id
                  </th>
                    <th scope="col" className="border-0">
                      Organization Name
                  </th>
                    {/* <th scope="col" className="border-0">
                      Description
                  </th> */}
                    <th scope="col" className="border-0">
                      Contact Name
                  </th>
                    <th scope="col" className="border-0">
                      Phone No
                  </th>
                    <th scope="col" className="border-0">
                      Email Id
                  </th>
                    <th scope="col" className="border-0">
                      Status
                  </th>
                  <th scope="col" className="border-0">
                      
                  </th>
                  
                  </tr>
                </thead>
                <tbody>

                  {(data.length > 0) ? data.map((data, index) => {
                    return (
                      <tr key={data.orgId}>
                        <td>{data.orgId}</td>
                        <td>{data.orgRefName}</td>
                        <td>{data.orgName}</td>
                        {/* <td>{data.description}</td> */}
                        <td>{data.contactName}</td>
                        <td>{data.contactNumber}</td>
                        <td>{data.contactEmail}</td>
                        <td>{data.status.toString()}</td>
                        <td><a href="/" className="fa fa-info mx-2"></a></td>
                      </tr>
                    )
                  }) : <tr><td colSpan="5">Loading...</td></tr>}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>




    </Container>

  );
}

export default Organization;
