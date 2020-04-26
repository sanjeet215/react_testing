import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Form,
    Alert,
    CardBody
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
// import Checkboxes from "../components/components-overview/Checkboxes";
// import RadioButtons from "../components/components-overview/RadioButtons";
// import ToggleButtons from "../components/components-overview/ToggleButtons";
// import SmallButtons from "../components/components-overview/SmallButtons";
// import SmallOutlineButtons from "../components/components-overview/SmallOutlineButtons";
// import NormalButtons from "../components/components-overview/NormalButtons";
// import NormalOutlineButtons from "../components/components-overview/NormalOutlineButtons";
// import Forms from "../components/components-overview/Forms";
// import FormValidation from "../components/components-overview/FormValidation";
// import CompleteFormExample from "../components/components-overview/CompleteFormExample";
// import Sliders from "../components/components-overview/Sliders";
// import ProgressBars from "../components/components-overview/ProgressBars";
// import ButtonGroups from "../components/components-overview/ButtonGroups";
// import InputGroups from "../components/components-overview/InputGroups";
// import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";
// import CustomFileUpload from "../components/components-overview/CustomFileUpload";
// import DropdownInputGroups from "../components/components-overview/DropdownInputGroups";
// import CustomSelect from "../components/components-overview/CustomSelect";

import OrganizationForm from "../components/components-overview/OrganizationForm";
import TestForm from "../components/components-overview/TestForm";

const Addorganization = () => (
    <div>
        <Container fluid className="px-0">
            <Alert className="mb-0">
                <i className="fa fa-info mx-2"></i> How you doin'? I'm just a friendly, good-looking notification message and I come in all the colors you can see below. Pretty cool, huh?
      </Alert>
        </Container>
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle
                    sm="4"
                    title="Onboard New Organization"
                    subtitle="Overview"
                    className="text-sm-left"
                />
            </Row>

            <Row>
                <Col lg="8" className="mb-4">
                    {/* Complete Form Example */}
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Add Organization</h6>
                        </CardHeader>
                        <OrganizationForm />
                    </Card>

                    <p>

                    </p>
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Add Admin for Organization</h6>
                        </CardHeader>
                        <OrganizationForm />
                    </Card>
                </Col>
                <Col lg="4" className="mb-4">
                    {/* Sliders & Progress Bars */}
                    <Card small>
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Add Admin for Organization</h6>
                        </CardHeader>
                        <OrganizationForm />
                    </Card>
                    <p></p>
                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">New Organization onboarding Steps</h6>
                        </CardHeader>
                        <CardBody>
                            <li>1 . Add Orgnization</li>
                            <li>2 . Inform about Organization creation</li>
                            <li>3 . Add super admin user</li>
                            <li>4 . Send userName and password to new user</li>
                            <li>5 . Send template for Leave</li>
                            <li>6 . Send application guilde</li>
                        </CardBody>
                        <ListGroup flush>
                        </ListGroup>
                    </Card>
                    <p></p>
                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">New Organization onboarding Steps</h6>
                        </CardHeader>
                        <TestForm />
                        <ListGroup flush>
                        </ListGroup>
                    </Card>

                </Col>
            </Row>
        </Container>
    </div>
);

export default Addorganization;