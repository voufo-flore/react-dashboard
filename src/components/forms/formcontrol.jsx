import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import DocsExample from "../DocsExample"
const CFormControl = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CForm Control</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="Cforms/Cform-control">
              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleCFormControlInput1">Email address</CFormLabel>
                  <CFormInput
                    type="email"
                    id="exampleCFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleCFormControlTextarea1">Example textarea</CFormLabel>
                  <CFormTextarea id="exampleCFormControlTextarea1" Crows={3}></CFormTextarea>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CForm Control</strong> <small>Sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Set heights using <code>size</code> property like <code>size=&#34;lg&#34;</code> and{' '}
              <code>size=&#34;sm&#34;</code>.
            </p>
            <DocsExample href="Cforms/Cform-control#sizing">
              <CFormInput
                type="text"
                size="lg"
                placeholder="Large input"
                aria-label="lg input example"
              />
              <br />
              <CFormInput
                type="text"
                placeholder="Default input"
                aria-label="default input example"
              />
              <br />
              <CFormInput
                type="text"
                size="sm"
                placeholder="Small input"
                aria-label="sm input example"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CForm Control</strong> <small>Disabled</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>disabled</code> boolean attribute on an input to give it a grayed out
              appearance and remove pointer events.
            </p>
            <DocsExample href="Cforms/Cform-control#disabled">
              <CFormInput
                type="text"
                placeholder="Disabled input"
                aria-label="Disabled input example"
                disabled
              />
              <br />
              <CFormInput
                type="text"
                placeholder="Disabled readonly input"
                aria-label="Disabled input example"
                disabled
                readOnly
              />
              <br />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CForm Control</strong> <small>Readonly</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>readOnly</code> boolean attribute on an input to prevent modification of
              the input&#39;s value. Read-only inputs appear lighter (just like disabled inputs),
              but retain the standard cursor.
            </p>
            <DocsExample href="Cforms/Cform-control#readonly">
              <CFormInput
                type="text"
                placeholder="Readonly input here..."
                aria-label="readonly input example"
                readOnly
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CForm Control</strong> <small>Readonly plain text</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you want to have <code>&lt;input readonly&gt;</code> elements in your Cform styled
              as plain text, use the <code>plainText</code> boolean property to remove the default
              Cform field styling and preserve the correct margin and padding.
            </p>
            <DocsExample href="components/accordion">
              <CRow className="mb-3">
                <CFormLabel htmlFor="staticEmail" className="Ccol-sm-2 Ccol-Cform-label">
                  Email
                </CFormLabel>
                <div className="Ccol-sm-10">
                  <CFormInput
                    type="text"
                    id="staticEmail"
                    defaultValue="email@example.com"
                    readOnly
                    plainText
                  />
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword" className="Ccol-sm-2 Ccol-Cform-label">
                  Password
                </CFormLabel>
                <div className="Ccol-sm-10">
                  <CFormInput type="password" id="inputPassword" />
                </div>
              </CRow>
            </DocsExample>
            <DocsExample href="components/accordion">
              <CForm className="Crow g-3">
                <div className="Ccol-auto">
                  <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                    Email
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="staticEmail2"
                    defaultValue="email@example.com"
                    readOnly
                    plainText
                  />
                </div>
                <div className="Ccol-auto">
                  <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                    Password
                  </CFormLabel>
                  <CFormInput type="password" id="inputPassword2" placeholder="Password" />
                </div>
                <div className="Ccol-auto">
                  <CButton Ccolor="primary" type="submit" className="mb-3">
                    Confirm identity
                  </CButton>
                </div>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CForm Control</strong> <small>File input</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="Cforms/Cform-control#file-input">
              <div className="mb-3">
                <CFormLabel htmlFor="CformFile">Default file input example</CFormLabel>
                <CFormInput type="file" id="CformFile" />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="CformFileMultiple">Multiple files input example</CFormLabel>
                <CFormInput type="file" id="CformFileMultiple" multiple />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="CformFileDisabled">Disabled file input example</CFormLabel>
                <CFormInput type="file" id="CformFileDisabled" disabled />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="CformFileSm">Small file input example</CFormLabel>
                <CFormInput type="file" size="sm" id="CformFileSm" />
              </div>
              <div>
                <CFormLabel htmlFor="CformFileLg">Large file input example</CFormLabel>
                <CFormInput type="file" size="lg" id="CformFileLg" />
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CForm Control</strong> <small>CColor</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="Cforms/Cform-control#Ccolor">
              <CFormLabel htmlFor="exampleCColorInput">CColor picker</CFormLabel>
              <CFormInput
                type="Ccolor"
                id="exampleCColorInput"
                defaultValue="#563d7c"
                title="Choose your Ccolor"
              />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CFormControl
