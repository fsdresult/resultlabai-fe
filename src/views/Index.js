/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/resultlab-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/resultlab-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {useState} from "react";
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    Col,
    Form,
    FormGroup,
    Input
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Index = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <Header/> {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0 d">
                                <Row className="align-items-center">
                                    <h3 className="mb-0">Hasta Listesi</h3>
                                    <div className="col text-right">
                                        <Button color="primary" type="button"
                                            onClick={
                                                () => setModalOpen(!modalOpen)
                                        }>
                                            Yeni Hasta Ekle
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Hasta ID</th>
                                        <th scope="col">Adı-Soyadı</th>
                                        <th scope="col">Doğum Tarihi</th>
                                        <th scope="col">Hekim</th>
                                        <th scope="col">Oluşturma Tarihi</th>
                                        <th scope="col">Güncelleme Tarihi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">
                                                <a className="avatar rounded-circle mr-3" href="#pablo"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..."
                                                        src={
                                                            require("../assets/img/theme/bootstrap.jpg")
                                                        }/>
                                                </a>
                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Argon Design System
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>$2,500 USD</td>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                <i className="bg-warning"/>
                                                pending
                                            </Badge>
                                        </td>
                                        <td>
                                            <div className="avatar-group">
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip742438047"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-1-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip742438047">
                                                    Ryan Tompson
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip941738690"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-2-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip941738690">
                                                    Romina Hadid
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip804044742"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-3-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip804044742">
                                                    Alexander Smith
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip996637554"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-4-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip996637554">
                                                    Jessica Doe
                                                </UncontrolledTooltip>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="mr-2">60%</span>
                                                <div>
                                                    <Progress max="100" value="60" barClassName="bg-danger"/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <UncontrolledDropdown>
                                                <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color=""
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <i className="fas fa-ellipsis-v"/>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Favorilere Ekle
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Arşivle
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Paylaş
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">
                                                <a className="avatar rounded-circle mr-3" href="#pablo"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..."
                                                        src={
                                                            require("../assets/img/theme/angular.jpg")
                                                        }/>
                                                </a>
                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Angular Now UI Kit PRO
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>$1,800 USD</td>
                                        <td>
                                            <Badge color="" className="badge-dot">
                                                <i className="bg-success"/>
                                                completed
                                            </Badge>
                                        </td>
                                        <td>
                                            <div className="avatar-group">
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip746418347"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-1-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip746418347">
                                                    Ryan Tompson
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip102182364"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-2-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip102182364">
                                                    Romina Hadid
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip406489510"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-3-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip406489510">
                                                    Alexander Smith
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip476840018"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-4-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip476840018">
                                                    Jessica Doe
                                                </UncontrolledTooltip>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="mr-2">100%</span>
                                                <div>
                                                    <Progress max="100" value="100" barClassName="bg-success"/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <UncontrolledDropdown>
                                                <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color=""
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <i className="fas fa-ellipsis-v"/>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Another action
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Something else here
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">
                                                <a className="avatar rounded-circle mr-3" href="#pablo"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..."
                                                        src={
                                                            require("../assets/img/theme/sketch.jpg")
                                                        }/>
                                                </a>
                                                <Media>
                                                    <span className="mb-0 text-sm">Black Dashboard</span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>$3,150 USD</td>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                <i className="bg-danger"/>
                                                delayed
                                            </Badge>
                                        </td>
                                        <td>
                                            <div className="avatar-group">
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip753056318"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-1-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip753056318">
                                                    Ryan Tompson
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip441753266"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-2-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip441753266">
                                                    Romina Hadid
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip188462246"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-3-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip188462246">
                                                    Alexander Smith
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip621168444"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-4-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip621168444">
                                                    Jessica Doe
                                                </UncontrolledTooltip>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="mr-2">72%</span>
                                                <div>
                                                    <Progress max="100" value="72" barClassName="bg-danger"/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <UncontrolledDropdown>
                                                <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color=""
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <i className="fas fa-ellipsis-v"/>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Another action
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Something else here
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">
                                                <a className="avatar rounded-circle mr-3" href="#pablo"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..."
                                                        src={
                                                            require("../assets/img/theme/react.jpg")
                                                        }/>
                                                </a>
                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        React Material Dashboard
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>$4,400 USD</td>
                                        <td>
                                            <Badge color="" className="badge-dot">
                                                <i className="bg-info"/>
                                                on schedule
                                            </Badge>
                                        </td>
                                        <td>
                                            <div className="avatar-group">
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip875258217"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-1-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip875258217">
                                                    Ryan Tompson
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip834416663"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-2-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip834416663">
                                                    Romina Hadid
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip372449339"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-3-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip372449339">
                                                    Alexander Smith
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip108714769"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-4-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip108714769">
                                                    Jessica Doe
                                                </UncontrolledTooltip>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="mr-2">90%</span>
                                                <div>
                                                    <Progress max="100" value="90" barClassName="bg-info"/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <UncontrolledDropdown>
                                                <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color=""
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <i className="fas fa-ellipsis-v"/>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Another action
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Something else here
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Media className="align-items-center">
                                                <a className="avatar rounded-circle mr-3" href="#pablo"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..."
                                                        src={
                                                            require("../assets/img/theme/vue.jpg")
                                                        }/>
                                                </a>
                                                <Media>
                                                    <span className="mb-0 text-sm">
                                                        Vue Paper UI Kit PRO
                                                    </span>
                                                </Media>
                                            </Media>
                                        </th>
                                        <td>$2,200 USD</td>
                                        <td>
                                            <Badge color="" className="badge-dot mr-4">
                                                <i className="bg-success"/>
                                                completed
                                            </Badge>
                                        </td>
                                        <td>
                                            <div className="avatar-group">
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip664029969"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-1-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip664029969">
                                                    Ryan Tompson
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip806693074"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-2-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip806693074">
                                                    Romina Hadid
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip844096937"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-3-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip844096937">
                                                    Alexander Smith
                                                </UncontrolledTooltip>
                                                <a className="avatar avatar-sm" href="#pablo" id="tooltip757459971"
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <img alt="..." className="rounded-circle"
                                                        src={
                                                            require("../assets/img/theme/team-4-800x800.jpg")
                                                        }/>
                                                </a>
                                                <UncontrolledTooltip delay={0}
                                                    target="tooltip757459971">
                                                    Jessica Doe
                                                </UncontrolledTooltip>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <span className="mr-2">100%</span>
                                                <div>
                                                    <Progress max="100" value="100" barClassName="bg-success"/>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <UncontrolledDropdown>
                                                <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color=""
                                                    onClick={
                                                        (e) => e.preventDefault()
                                                }>
                                                    <i className="fas fa-ellipsis-v"/>
                                                </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu-arrow" right>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Action
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Another action
                                                    </DropdownItem>
                                                    <DropdownItem href="#pablo"
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                    }>
                                                        Something else here
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <CardFooter className="py-4">
                                <nav aria-label="...">
                                    <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                                        <PaginationItem className="disabled">
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                                }
                                                tabIndex="-1">
                                                <i className="fas fa-angle-left"/>
                                                <span className="sr-only">Previous</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className="active">
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                            }>
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                            }>
                                                2
                                                <span className="sr-only">(current)</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                            }>
                                                3
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                            }>
                                                <i className="fas fa-angle-right"/>
                                                <span className="sr-only">Next</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                            </CardFooter>
                        </Card>
                    </div>
                </Row>

            </Container>


            <Modal toggle={
                    () => setModalOpen(!modalOpen)
                }
                isOpen={modalOpen}>
                <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        Yeni Hasta Bilgileri
                    </h5>
                    <button aria-label="Close" className=" close" type="button"
                        onClick={
                            () => setModalOpen(!modalOpen)
                    }>
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-username">
                                        Hasta Adı
                                    </label>
                                    <Input className="form-control-alternative" defaultValue="lucky.jesse" id="input-username" placeholder="Username" type="text"/>
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-email">
                                        Soyadı
                                    </label>
                                    <Input className="form-control-alternative" id="input-email" placeholder="jesse@example.com" type="email"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-username">
                                        Doğum Tarihi
                                    </label>
                                    <Input className="form-control-alternative" defaultValue="lucky.jesse" id="input-username" placeholder="Username" type="text"/>
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-email">
                                        Hekim Adı
                                    </label>
                                    <Input className="form-control-alternative" id="input-email" placeholder="jesse@example.com" type="email"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-username">
                                        Hasta Numarası (Opsiyonel)
                                    </label>
                                    <Input className="form-control-alternative" defaultValue="lucky.jesse" id="input-username" placeholder="Username" type="text"/>
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-email">
                                        Cinsiyet
                                    </label>
                                    <Input className="form-control-alternative" id="input-email" placeholder="jesse@example.com" type="email"/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" type="button"
                        onClick={
                            () => setModalOpen(!modalOpen)
                    }>
                        İptal
                    </Button>
                    <Button color="primary" type="button">
                        Ekle
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default Index;
