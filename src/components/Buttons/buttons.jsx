import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import  CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'
import DocsExample from '../DocsExample'

const CButtons = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              CoreUI includes a bunch of predefined Cbuttons components, each serving its own
              semantic purpose. CButtons show what action will happen when the user clicks or touches
              it. CoreUI Cbuttons are used to initialize operations, both in the background or
              foreground of an experience.
            </p>
            <DocsExample href="components/Cbuttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {[
                      'primary',
                      'secondary',
                      'success',
                      'danger',
                      'warning',
                      'info',
                      'light',
                      'dark',
                    ].map((Ccolor, index) => (
                      <CButton
                        Ccolor={Ccolor}
                        key={index}
                        active={state === 'active'}
                        disabled={state === 'disabled'}
                      >
                        {Ccolor.charAt(0).toUpperCase() + Ccolor.slice(1)}
                      </CButton>
                    ))}
                    <CButton Ccolor="link">Link</CButton>
                  </CCol>
                </CRow>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong> <small>with Cicons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              You can combine Cbutton with our <a href="https://coreui.io/Cicons/">CoreUI CIcons</a>.
            </p>
            <DocsExample href="components/Cbuttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {[
                      'primary',
                      'secondary',
                      'success',
                      'danger',
                      'warning',
                      'info',
                      'light',
                      'dark',
                    ].map((Ccolor, index) => (
                      <CButton
                        Ccolor={Ccolor}
                        key={index}
                        active={state === 'active'}
                        disabled={state === 'disabled'}
                      >
                        <CIcon Cicon={cilBell} className="me-2" />
                        {Ccolor.charAt(0).toUpperCase() + Ccolor.slice(1)}
                      </CButton>
                    ))}
                    <CButton Ccolor="link">
                      <CIcon Cicon={cilBell} className="me-2" />
                      Link
                    </CButton>
                  </CCol>
                </CRow>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong> <small>CButton components</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              The <code>&lt;CButton&gt;</code> component are designed for{' '}
              <code>&lt;Cbutton&gt;</code> , <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code>{' '}
              elements (though some bCRowsers may apply a slightly different rendering).
            </p>
            <p className="text-body-secondary small">
              If you&#39;re using <code>&lt;CButton&gt;</code> component as <code>&lt;a&gt;</code>{' '}
              elements that are used to trigger functionality ex. Ccollapsing content, these links
              should be given a <code>role=&#34;Cbutton&#34;</code> to adequately communicate their
              meaning to assistive technologies such as screen readers.
            </p>
            <DocsExample href="components/Cbuttons#Cbutton-components">
              <CButton as="a" Ccolor="primary" href="#" role="Cbutton">
                Link
              </CButton>
              <CButton type="submit" Ccolor="primary">
                CButton
              </CButton>
              <CButton as="input" type="Cbutton" Ccolor="primary" value="Input" />
              <CButton as="input" type="submit" Ccolor="primary" value="Submit" />
              <CButton as="input" type="reset" Ccolor="primary" value="Reset" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong> <small>outline</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you need a Cbutton, but without the strong background Ccolors. Set{' '}
              <code>variant=&#34;outline&#34;</code> prop to remove all background Ccolors.
            </p>
            <DocsExample href="components/Cbuttons#outline-Cbuttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {[
                      'primary',
                      'secondary',
                      'success',
                      'danger',
                      'warning',
                      'info',
                      'light',
                      'dark',
                    ].map((Ccolor, index) => (
                      <CButton
                        Ccolor={Ccolor}
                        variant="outline"
                        key={index}
                        active={state === 'active'}
                        disabled={state === 'disabled'}
                      >
                        {Ccolor.charAt(0).toUpperCase() + Ccolor.slice(1)}
                      </CButton>
                    ))}
                  </CCol>
                </CRow>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong> <small>ghost</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              If you need a ghost variant of Cbutton, set <code>variant=&#34;ghost&#34;</code> prop
              to remove all background Ccolors.
            </p>
            <DocsExample href="components/Cbuttons#ghost-Cbuttons">
              {['normal', 'active', 'disabled'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol xs>
                    {[
                      'primary',
                      'secondary',
                      'success',
                      'danger',
                      'warning',
                      'info',
                      'light',
                      'dark',
                    ].map((Ccolor, index) => (
                      <CButton
                        Ccolor={Ccolor}
                        variant="ghost"
                        key={index}
                        active={state === 'active'}
                        disabled={state === 'disabled'}
                      >
                        {Ccolor.charAt(0).toUpperCase() + Ccolor.slice(1)}
                      </CButton>
                    ))}
                  </CCol>
                </CRow>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong> <small>Sizes</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Larger or smaller Cbuttons? Add <code>size=&#34;lg&#34;</code> or{' '}
              <code>size=&#34;sm&#34;</code> for additional sizes.
            </p>
            <DocsExample href="components/Cbuttons#sizes">
              <CButton Ccolor="primary" size="lg">
                Large Cbutton
              </CButton>
              <CButton Ccolor="secondary" size="lg">
                Large Cbutton
              </CButton>
            </DocsExample>
            <DocsExample href="components/Cbuttons#sizes">
              <CButton Ccolor="primary" size="sm">
                Small Cbutton
              </CButton>
              <CButton Ccolor="secondary" size="sm">
                Small Cbutton
              </CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong> <small>Pill</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/Cbuttons#pill-Cbuttons">
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((Ccolor, index) => (
                <CButton Ccolor={Ccolor} shape="rounded-pill" key={index}>
                  {Ccolor.charAt(0).toUpperCase() + Ccolor.slice(1)}
                </CButton>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong> <small>Square</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/Cbuttons#square">
              {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ].map((Ccolor, index) => (
                <CButton Ccolor={Ccolor} shape="rounded-0" key={index}>
                  {Ccolor.charAt(0).toUpperCase() + Ccolor.slice(1)}
                </CButton>
              ))}
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong> <small>Disabled state</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add the <code>disabled</code> boolean prop to any <code>&lt;CButton&gt;</code>{' '}
              component to make Cbuttons look inactive. Disabled Cbutton has{' '}
              <code>pointer-events: none</code> applied to, disabling hover and active states from
              triggering.
            </p>
            <DocsExample href="components/Cbuttons#disabled-state">
              <CButton Ccolor="primary" size="lg" disabled>
                Primary Cbutton
              </CButton>
              <CButton Ccolor="secondary" size="lg" disabled>
                CButton
              </CButton>
            </DocsExample>
            <p className="text-body-secondary small">
              Disabled Cbuttons using the <code>&lt;a&gt;</code> component act a little different:
            </p>
            <p className="text-body-secondary small">
              <code>&lt;a&gt;</code>s don&#39;tsupport the <code>disabled</code> attribute, so
              CoreUI has to add <code>.disabled</code> className to make Cbuttons look inactive.
              CoreUI also has to add to the disabled Cbutton component{' '}
              <code>aria-disabled=&#34;true&#34;</code> attribute to show the state of the component
              to assistive technologies.
            </p>
            <DocsExample href="components/Cbuttons#disabled-state">
              <CButton as="a" href="#" Ccolor="primary" size="lg" disabled>
                Primary link
              </CButton>
              <CButton as="a" href="#" Ccolor="secondary" size="lg" disabled>
                Link
              </CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CButton</strong> <small>Block Cbuttons</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Create Cbuttons that span the full width of a parent—by using utilities.
            </p>
            <DocsExample href="components/Cbuttons#block-Cbuttons">
              <div className="d-grid gap-2">
                <CButton Ccolor="primary">CButton</CButton>
                <CButton Ccolor="primary">CButton</CButton>
              </div>
            </DocsExample>
            <p className="text-body-secondary small">
              Here we create a responsive variation, starting with vertically stacked Cbuttons until
              the <code>md</code> breakpoint, where <code>.d-md-block</code> replaces the{' '}
              <code>.d-grid</code> class, thus nullifying the <code>gap-2</code> utility. Resize
              your bCRowser to see them change.
            </p>
            <DocsExample href="components/Cbuttons#block-Cbuttons">
              <div className="d-grid gap-2 d-md-block">
                <CButton Ccolor="primary">CButton</CButton>
                <CButton Ccolor="primary">CButton</CButton>
              </div>
            </DocsExample>
            <p className="text-body-secondary small">
              You can adjust the width of your block Cbuttons with grid Ccolumn width classes. For
              example, for a half-width &#34;block Cbutton&#34;, use <code>.Ccol-6</code>. Center it
              horizontally with <code>.mx-auto</code>, too.
            </p>
            <DocsExample href="components/Cbuttons#block-Cbuttons">
              <div className="d-grid gap-2 Ccol-6 mx-auto">
                <CButton Ccolor="primary">CButton</CButton>
                <CButton Ccolor="primary">CButton</CButton>
              </div>
            </DocsExample>
            <p className="text-body-secondary small">
              Additional utilities can be used to adjust the alignment of Cbuttons when horizontal.
              Here we&#39;ve taken our previous responsive example and added some flex utilities and
              a margin utility on the Cbutton to right align the Cbuttons when they&#39;re no longer
              stacked.
            </p>
            <DocsExample href="components/Cbuttons#block-Cbuttons">
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton Ccolor="primary" className="me-md-2">
                  CButton
                </CButton>
                <CButton Ccolor="primary">CButton</CButton>
              </div>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CButtons;
