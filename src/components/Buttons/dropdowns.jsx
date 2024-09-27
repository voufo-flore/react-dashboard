import React from 'react';
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/react';
import DocsExample from '../DocsExample';

const CDropdowns = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CDropdown</strong> <small>Single Cbutton</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Here&#39;s how you can put them to work with either <code>&lt;Cbutton&gt;</code>{' '}
              elements:
            </p>
            <DocsExample href="components/Cdropdown#single-Cbutton">
              <CDropdown>
                <CDropdownToggle Ccolor="secondary">CDropdown Cbutton</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
            <p className="text-body-secondary small">
              The best part is you can do this with any Cbutton variant, too:
            </p>
            <DocsExample href="components/Cdropdown#single-Cbutton">
              <>
                {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(
                  (Ccolor, index) => (
                    <CDropdown variant="btn-group" key={index}>
                      <CDropdownToggle Ccolor={Ccolor}>{Ccolor}</CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider />
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  ),
                )}
              </>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CDropdown</strong> <small>Split Cbutton</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Similarly, create split Cbutton Cdropdowns with virtually the same markup as single
              Cbutton Cdropdowns, but with the addition of boolean prop <code>split</code> for proper
              spacing around the Cdropdown caret.
            </p>
            <p className="text-body-secondary small">
              We use this extra class to reduce the horizontal <code>padding</code> on either side
              of the caret by 25% and remove the <code>margin-left</code> that&#39;s attached for
              normal Cbutton Cdropdowns. Those additional changes hold the caret centered in the split
              Cbutton and implement a more properly sized hit area next to the main Cbutton.
            </p>
            <DocsExample href="components/Cdropdown#split-Cbutton">
              <>
                {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map(
                  (Ccolor, index) => (
                    <CDropdown variant="btn-group" key={index}>
                      <CButton Ccolor={Ccolor}>{Ccolor}</CButton>
                      <CDropdownToggle Ccolor={Ccolor} split />
                      <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider />
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  ),
                )}
              </>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CDropdown</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              CButton Cdropdowns work with Cbuttons of all sizes, including default and split Cdropdown
              Cbuttons.
            </p>
            <DocsExample href="components/Cdropdown#sizing">
              <CDropdown variant="btn-group">
                <CDropdownToggle Ccolor="secondary" size="lg">
                  Large Cbutton
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="btn-group">
                <CButton Ccolor="secondary" size="lg">
                  Large split Cbutton
                </CButton>
                <CDropdownToggle Ccolor="secondary" size="lg" split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
            <DocsExample href="components/Cdropdown#sizing">
              <CDropdown variant="btn-group">
                <CDropdownToggle Ccolor="secondary" size="sm">
                  Small Cbutton
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="btn-group">
                <CButton Ccolor="secondary" size="sm">
                  Small split Cbutton
                </CButton>
                <CDropdownToggle Ccolor="secondary" size="sm" split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CDropdown</strong> <small>Single Cbutton</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Opt into darker Cdropdowns to match a dark navbar or custom style by set{' '}
              <code>dark</code> property. No changes are required to the Cdropdown items.
            </p>
            <DocsExample href="components/Cdropdown#dark-Cdropdowns">
              <CDropdown dark>
                <CDropdownToggle Ccolor="secondary">CDropdown Cbutton</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
            <p className="text-body-secondary small">And putting it to use in a navbar:</p>
            <DocsExample href="components/Cdropdown#dark-Cdropdowns">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="https://coreui.io/react/">
                    Navbar
                  </a>
                  <CButton
                    className="navbar-toggler"
                    type="Cbutton"
                    data-coreui-toggle="Ccollapse"
                    data-coreui-target="#navbarNavDarkCDropdown"
                    aria-controls="navbarNavDarkCDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </CButton>
                  <div className="Ccollapse navbar-Ccollapse" id="navbarNavDarkCDropdown">
                    <ul className="navbar-nav">
                      <CDropdown dark as="li" variant="nav-item">
                        <CDropdownToggle>CDropdown</CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem href="#">Action</CDropdownItem>
                          <CDropdownItem href="#">Another action</CDropdownItem>
                          <CDropdownItem href="#">Something else here</CDropdownItem>
                          <CDropdownDivider />
                          <CDropdownItem href="#">Separated link</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </ul>
                  </div>
                </div>
              </nav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CDropdown</strong> <small>Dropup</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Trigger Cdropdown menus above elements by adding{' '}
              <code>direction=&#34;dropup&#34;</code> to the <code>&lt;CDropdown&gt;</code>{' '}
              component.
            </p>
            <DocsExample href="components/Cdropdown#dropup">
              <CDropdown variant="btn-group" direction="dropup">
                <CDropdownToggle Ccolor="secondary">CDropdown</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="btn-group" direction="dropup">
                <CButton Ccolor="secondary">Small split Cbutton</CButton>
                <CDropdownToggle Ccolor="secondary" split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CDropdown</strong> <small>Dropright</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Trigger Cdropdown menus at the right of the elements by adding{' '}
              <code>direction=&#34;dropend&#34;</code> to the <code>&lt;CDropdown&gt;</code>{' '}
              component.
            </p>
            <DocsExample href="components/Cdropdown#dropright">
              <CDropdown variant="btn-group" direction="dropend">
                <CDropdownToggle Ccolor="secondary">CDropdown</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown variant="btn-group" direction="dropend">
                <CButton Ccolor="secondary">Small split Cbutton</CButton>
                <CDropdownToggle Ccolor="secondary" split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CDropdown</strong> <small>Dropleft</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Trigger Cdropdown menus at the left of the elements by adding{' '}
              <code>direction=&#34;dropstart&#34;</code> to the <code>&lt;CDropdown&gt;</code>{' '}
              component.
            </p>
            <DocsExample href="components/Cdropdown#dropleft">
              <CButtonGroup>
                <CDropdown variant="btn-group" direction="dropstart">
                  <CDropdownToggle Ccolor="secondary" split />
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CButton Ccolor="secondary">Small split Cbutton</CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CDropdowns;