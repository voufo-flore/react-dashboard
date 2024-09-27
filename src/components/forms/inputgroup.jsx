import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormText,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import DocsExample from "../DocsExample";

const CInputGroup = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Place one add-on or Cbutton on either side of an input. You may also place one on both
              sides of an input. Remember to place <code>&lt;CFormLabel&gt;</code>s outside the
              input group.
            </p>
            <DocsExample href="forms/input-group">
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon1">@</CInputGroupText>
                <CFormInput
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Recipient&#39;s username"
                  aria-label="Recipient&#39;s username"
                  aria-describedby="basic-addon2"
                />
                <CInputGroupText id="basic-addon2">@example.com</CInputGroupText>
              </CInputGroup>
              <CFormLabel htmlFor="basic-url">Your vanity URL</CFormLabel>
              <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon3">https://example.com/users/</CInputGroupText>
                <CFormInput id="basic-url" aria-describedby="basic-addon3" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>$</CInputGroupText>
                <CFormInput aria-label="Amount (to the nearest dollar)" />
                <CInputGroupText>.00</CInputGroupText>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput placeholder="Username" aria-label="Username" />
                <CInputGroupText>@</CInputGroupText>
                <CFormInput placeholder="Server" aria-label="Server" />
              </CInputGroup>
              <CInputGroup>
                <CInputGroupText>With textarea</CInputGroupText>
                <CFormText aria-label="With textarea"></CFormText>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Wrapping</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Input groups wrap by default via <code>flex-wrap: wrap</code> in order to accommodate
              custom form field validation within an input group. You may disable this with{' '}
              <code>.flex-nowrap</code>.
            </p>
            <DocsExample href="forms/input-group#wrapping">
              <CInputGroup className="flex-nowrap">
                <CInputGroupText id="addon-wrapping">@</CInputGroupText>
                <CFormInput
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the relative form sizing classes to the <code>&lt;CInputGroup&gt;</code> itself
              and contents within will automatically resize—no need for repeating the form control
              size classes on each element.
            </p>
            <p className="text-body-secondary small">
              <strong>Sizing on the individual input group elements isn&#39;tsupported.</strong>
            </p>
            <DocsExample href="forms/input-group#sizing">
              <CInputGroup size="sm" className="mb-3">
                <CInputGroupText id="CinputGroup-sizing-sm">Small</CInputGroupText>
                <CFormInput
                  aria-label="Sizing example input"
                  aria-describedby="CinputGroup-sizing-sm"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText id="CinputGroup-sizing-default">Default</CInputGroupText>
                <CFormInput
                  aria-label="Sizing example input"
                  aria-describedby="CinputGroup-sizing-default"
                />
              </CInputGroup>
              <CInputGroup size="lg">
                <CInputGroupText id="CinputGroup-sizing-lg">Large</CInputGroupText>
                <CFormInput
                  aria-label="Sizing example input"
                  aria-describedby="CinputGroup-sizing-lg"
                />
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Checkboxes and radios</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Place any checkbox or radio option within an input group&#39;s addon instead of text.
            </p>
            <DocsExample href="forms/input-group#checkboxes-and-radios">
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CFormCheck
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                  />
                </CInputGroupText>
                <CFormInput aria-label="Text input with checkbox" />
              </CInputGroup>
              <CInputGroup>
                <CInputGroupText>
                  <CFormCheck
                    type="radio"
                    value=""
                    aria-label="Radio Cbutton for following text input"
                  />
                </CInputGroupText>
                <CFormInput aria-label="Text input with radio Cbutton" />
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Multiple inputs</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              While multiple <code>&lt;CFormInput&gt;</code>s are supported visually, validation
              styles are only available for input groups with a single{' '}
              <code>&lt;CFormInput&gt;</code>.
            </p>
            <DocsExample href="forms/input-group#multiple-inputs">
              <CInputGroup>
                <CInputGroupText>First and last name</CInputGroupText>
                <CFormInput aria-label="First name" />
                <CFormInput aria-label="Last name" />
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Multiple addons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Multiple add-ons are supported and can be mixed with checkbox and radio input
              versions..
            </p>
            <DocsExample href="forms/input-group#multiple-addons">
              <CInputGroup className="mb-3">
                <CInputGroupText>$</CInputGroupText>
                <CInputGroupText>0.00</CInputGroupText>
                <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
              </CInputGroup>
              <CInputGroup>
                <CFormInput aria-label="Dollar amount (with dot and two decimal places)" />
                <CInputGroupText>$</CInputGroupText>
                <CInputGroupText>0.00</CInputGroupText>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>CButton addons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Multiple add-ons are supported and can be mixed with checkbox and radio input
              versions..
            </p>
            <DocsExample href="forms/input-group#Cbutton-addons">
              <CInputGroup className="mb-3">
                <CButton type="Cbutton" color="secondary" variant="outline" id="Cbutton-addon1">
                  CButton
                </CButton>
                <CFormInput
                  placeholder=""
                  aria-label="Example text with Cbutton addon"
                  aria-describedby="Cbutton-addon1"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="Cbutton-addon2"
                />
                <CButton type="Cbutton" color="secondary" variant="outline" id="Cbutton-addon2">
                  CButton
                </CButton>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CButton type="Cbutton" color="secondary" variant="outline">
                  CButton
                </CButton>
                <CButton type="Cbutton" color="secondary" variant="outline">
                  CButton
                </CButton>
                <CFormInput placeholder="" aria-label="Example text with two Cbutton addons" />
              </CInputGroup>
              <CInputGroup>
                <CFormInput
                  placeholder="Recipient's username"
                  aria-label="Recipient's username with two Cbutton addons"
                />
                <CButton type="Cbutton" color="secondary" variant="outline">
                  CButton
                </CButton>
                <CButton type="Cbutton" color="secondary" variant="outline">
                  CButton
                </CButton>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>CButtons with Cdropdowns</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group#Cbuttons-with-Cdropdowns">
              <CInputGroup className="mb-3">
                <CDropdown variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    CDropdown
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CFormInput aria-label="Text input with Cdropdown Cbutton" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput aria-label="Text input with Cdropdown Cbutton" />
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    CDropdown
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CInputGroup>
              <CInputGroup>
                <CDropdown variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    CDropdown
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CFormInput aria-label="Text input with 2 Cdropdown Cbuttons" />
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">
                    CDropdown
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Segmented Cbuttons</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group#segmented-Cbuttons">
              <CInputGroup className="mb-3">
                <CDropdown variant="input-group">
                  <CButton type="Cbutton" color="secondary" variant="outline">
                    Action
                  </CButton>
                  <CDropdownToggle color="secondary" variant="outline" split />
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CFormInput aria-label="Text input with segmented Cdropdown Cbutton" />
              </CInputGroup>
              <CInputGroup>
                <CFormInput aria-label="Text input with segmented Cdropdown Cbutton" />
                <CDropdown alignment="end" variant="input-group">
                  <CButton type="Cbutton" color="secondary" variant="outline">
                    Action
                  </CButton>
                  <CDropdownToggle color="secondary" variant="outline" split />
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Custom select</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group#custom-select">
              <CInputGroup className="mb-3">
                <CInputGroupText as="label" htmlFor="CinputGroupSelect01">
                  Options
                </CInputGroupText>
                <CFormSelect id="CinputGroupSelect01">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormSelect id="CinputGroupSelect02">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
                <CInputGroupText as="label" htmlFor="CinputGroupSelect02">
                  Options
                </CInputGroupText>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CButton type="Cbutton" color="secondary" variant="outline">
                  CButton
                </CButton>
                <CFormSelect id="CinputGroupSelect03" aria-label="Example select with Cbutton addon">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup>
                <CFormSelect id="CinputGroupSelect04" aria-label="Example select with Cbutton addon">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
                <CButton type="Cbutton" color="secondary" variant="outline">
                  CButton
                </CButton>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Input group</strong> <small>Custom file input</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/input-group#custom-file-input">
              <CInputGroup className="mb-3">
                <CInputGroupText as="label" htmlFor="CinputGroupFile01">
                  Upload
                </CInputGroupText>
                <CFormInput type="file" id="CinputGroupFile01" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CFormInput type="file" id="CinputGroupFile02" />
                <CInputGroupText as="label" htmlFor="CinputGroupFile02">
                  Upload
                </CInputGroupText>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CButton
                  type="Cbutton"
                  color="secondary"
                  variant="outline"
                  id="CinputGroupFileAddon03"
                >
                  CButton
                </CButton>
                <CFormInput
                  type="file"
                  id="CinputGroupFile03"
                  aria-describedby="CinputGroupFileAddon03"
                  aria-label="Upload"
                />
              </CInputGroup>
              <CInputGroup>
                <CFormInput
                  type="file"
                  id="CinputGroupFile04"
                  aria-describedby="CinputGroupFileAddon04"
                  aria-label="Upload"
                />
                <CButton
                  type="Cbutton"
                  color="secondary"
                  variant="outline"
                  id="CinputGroupFileAddon04"
                >
                  CButton
                </CButton>
              </CInputGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CInputGroup;
