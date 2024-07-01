import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBRipple,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function App() {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);

    return (
        <>
            <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
                <div className="position-sticky">
                    <MDBListGroup flush className="mx-3 mt-4">
                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' action className='border-0 border-bottom rounded rounded'>
                                <MDBIcon fas icon="tachometer-alt me-3" />
                                <NavLink to="/">Home</NavLink>
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="chart-area me-3" />
                                <NavLink to="/network">Network Issue</NavLink>
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="lock me-3" />
                                <NavLink to="/ga">GA Issue</NavLink>
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="chart-line me-3" />
                            <NavLink to="/technical">Technical Issue</NavLink>
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="chart-pie me-3" />
                                <NavLink to="/cache">Cache</NavLink>
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="globe me-3" />
                                <NavLink to="/purged">Purged URL</NavLink>
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="building me-3" />
                                <NavLink to="/human">Human Error</NavLink>
                            </MDBListGroupItem>
                        </MDBRipple>

                        <MDBRipple rippleTag='span'>
                            <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
                                <MDBIcon fas icon="users me-3" />
                                L1 Support
                            </MDBListGroupItem>
                        </MDBRipple>
                    </MDBListGroup>
                </div>
                <div className='footer'>
                    <p>Copyright @ 2024</p>
                    <p>Made By L1 Support Team</p>
                </div>
            </MDBCollapse>

            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
                        <MDBNavbarToggler
                            type='button'
                            aria-label='Toggle navigation'
                            onClick={toggleShow}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBNavbarBrand href='#'>
                            <img
                                src='https://images.news18.com/static_news18/pix/ibnhome/news18/News18.svg'
                                height='30'
                                alt=''
                                loading='lazy'
                                margin-top='30px'
                            />
                        </MDBNavbarBrand>

                        <MDBCollapse navbar>
                            <MDBNavbarItem className="d-flex align-items-center">
                                <MDBInput id='form1' type='text' />
                                <MDBIcon fas icon="search mx-2" />
                            </MDBNavbarItem>
                        </MDBCollapse>


                    </MDBNavbarNav>
                    <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
                        <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
                            <MDBDropdown>
<MDBDropdownMenu>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink href="#">Some news</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink href="#">Another news</MDBDropdownLink>
                                    </MDBDropdownItem>
                                    <MDBDropdownItem>
                                        <MDBDropdownLink href="#">Something else here</MDBDropdownLink>
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem className='me-3 me-lg-0'>
                            <MDBNavbarLink href='#'>
                                <MDBIcon fab icon='github' />
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className='me-3 me-lg-0'>
                            <MDBNavbarLink href='#'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}