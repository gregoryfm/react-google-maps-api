// eslint-disable-next-line filenames/match-exported
import React, { Component } from 'react'
import Layout from '../components/layout'
import indexStyles from './index.module.css'
import uuid from 'uuidv4'

import { LoadScript } from 'react-google-maps-api'

import ShapesExample from '../examples/shapes-example'
import DrawingManagerExample from '../examples/drawing-manager-example'
import BicyclingExample from '../examples/bicycling-example'
import TrafficExample from '../examples/traffic-example'
import GroundOverlayExample from '../examples/ground-overlay-example'
import HeatmapLayerExample from '../examples/heatmap-example'
import DirectionsRendererExample from '../examples/directions-renderer-example'
import FusionTablesLayerExample from '../examples/fusion-tables-layer-example'

const mapBoxStyle = {
  marginTop: '2rem',
  marginBottom: '3rem'
}

const mapHeaderStyle = {
  fontSize: '1.5rem',
  marginBottom: '1.5rem'
}

const loadingStyle = {
  height: `100%`,
  backgroundColor: '#023456'
}

const mapContainerStyle = {
  height: `400px`,
  width: `800px`
}

const rowStyle = {
  display: 'flex',
  flexDirection: 'row'
}

const shapeExampleStyles = {
  container: mapContainerStyle,
  mapContainer: indexStyles.mapContainer
}

const Loading = (
  <div style={loadingStyle} />
)

const googleMapsLibraries = [
  'drawing',
  'visualization'
]

const loaderId = uuid()

class IndexPage extends Component {
  state = {
    language: 'en',
    checked: false,
    googleMapsApiKey: '',
    fusion: false,
    directions: false,
    heatmap: false,
    traffic: false,
    shapes: false,
    drawing: false,
    bicycling: false,
    ground: false
  }

  onChange = ({ target: { checked } }) => {
    this.setState(
      () => ({
        checked
      })
    )
  }

  onGoogleMapChange = ({ target: { value } }) => {
    this.setState(
      () => ({
        googleMapsApiKey: value
      })
    )
  }

  onFusionChange = ({ target: { checked } }) => {
    this.setState(
      () => ({
        fusion: checked
      })
    )
  }

  onDirectionsChange = ({ target: { checked } }) => {
    this.setState(
      () => ({
        directions: checked
      })
    )
  }

  onHeatmapChange = ({ target: { checked } }) => {
    this.setState(
      () => ({
        heatmap: checked
      })
    )
  }

  onTrafficChange = ({ target: { checked } }) => {
    this.setState(
      () => ({
        traffic: checked
      })
    )
  }

  onShapesChange = ({ target: { checked } }) => {
    this.setState(
      () => ({
        shapes: checked
      })
    )
  }

  onDrawingChange = ({ target: { checked } }) => {
    this.setState(
      () => ({
        drawing: checked
      })
    )
  }

  onBicyclingChange = ({ target: { checked } }) => {
    this.setState(
      () => ({
        bicycling: checked
      })
    )
  }

  onGroundChange = ({ target: { checked } }) => {
    this.setState(
      () => ({
        ground: checked
      })
    )
  }

  setEnLang = ({ target: { checked } }) => {
    if (checked) {
      this.setState(
        () => ({
          language: 'en'
        })
      )
    }
  }

  setRuLang = ({ target: { checked } }) => {
    if (checked) {
      this.setState(
        () => ({
          language: 'ru'
        })
      )
    }
  }

  setEsLang = ({ target: { checked } }) => {
    if (checked) {
      this.setState(
        () => ({
          language: 'es'
        })
      )
    }
  }

  render = () => (
    <Layout>
      <h1>Hello People!</h1>

      <p>Welcome to React Google Maps Light Example.</p>

      <p>
        You can create new Google API key here: <a href='https://console.cloud.google.com/apis/credentials/key' alt='google api key'>https://console.cloud.google.com/apis/credentials/key</a>
      </p>

      <div>
        <label
          htmlFor='apikey'
        >
          Enter your Google API key here:
        </label>
        {` `}
        <input
          id='apikey'
          type='text'
          onChange={this.onGoogleMapChange}
          value={this.state.googleMapsApiKey}
        />
      </div>

      <div>
        <input
          id='toggle-script'
          type='checkbox'
          checked={this.state.checked}
          onChange={this.onChange}
        />
        {` `}
        <label htmlFor='toggle-script'>{`Toggle <LoadScript />`}</label>
      </div>

      <div style={rowStyle}>
        <div>
          <input
            type='checkbox'
            id='en'
            checked={this.state.language === 'en'}
            onChange={this.setEnLang}
          />
          {` `}
          <label htmlFor='en'>En language</label>
        </div>

        <div>
          <input
            type='checkbox'
            id='ru'
            checked={this.state.language === 'ru'}
            onChange={this.setRuLang}
          />
          {` `}
          <label htmlFor='ru'>Ru language</label>
        </div>

        <div>
          <input
            type='checkbox'
            id='es'
            checked={this.state.language === 'es'}
            onChange={this.setEsLang}
          />
          {` `}
          <label htmlFor='es'>Es language</label>
        </div>
      </div>

      <div>
        <div>
          <input
            id='fusion'
            type='checkbox'
            onChange={this.onFusionChange}
            value={this.state.fusion}
          />
          {` `}
          <label
            htmlFor='fusion'
          >
            Fusion Layer Example
          </label>
        </div>

        <div>
          <input
            id='directions'
            type='checkbox'
            onChange={this.onDirectionsChange}
            value={this.state.directions}
          />
          {` `}
          <label
            htmlFor='directions'
          >
            Directions Example
          </label>
        </div>

        <div>
          <input
            id='heatmap'
            type='checkbox'
            onChange={this.onHeatmapChange}
            value={this.state.heatmap}
          />
          {` `}
          <label
            htmlFor='heatmap'
          >
            Heatmap Layer Example
          </label>
        </div>

        <div>
          <input
            id='traffic'
            type='checkbox'
            onChange={this.onTrafficChange}
            value={this.state.traffic}
          />
          {` `}
          <label
            htmlFor='traffic'
          >
            Traffic Layer Example
          </label>
        </div>

        <div>
          <input
            id='shapes'
            type='checkbox'
            onChange={this.onShapesChange}
            value={this.state.shapes}
          />
          {` `}
          <label
            htmlFor='shapes'
          >
            Shapes Example
          </label>
        </div>

        <div>
          <input
            id='drawing'
            type='checkbox'
            onChange={this.onDrawingChange}
            value={this.state.drawing}
          />
          {` `}
          <label
            htmlFor='drawing'
          >
            Drawing Layer Example
          </label>
        </div>

        <div>
          <input
            id='bicycling'
            type='checkbox'
            onChange={this.onBicyclingChange}
            value={this.state.bicycling}
          />
          {` `}
          <label
            htmlFor='bicycling'
          >
            Bicycling Layer Example
          </label>
        </div>

        <div>
          <input
            id='ground'
            type='checkbox'
            onChange={this.onGroundChange}
            value={this.state.ground}
          />
          {` `}
          <label
            htmlFor='ground'
          >
            Ground Layer Example
          </label>
        </div>
      </div>

      {
        (
          this.state.checked &&
          this.state.googleMapsApiKey.length >= 38
        )
          ? (
            <LoadScript
              id={loaderId}
              googleMapsApiKey={this.state.googleMapsApiKey}
              language={this.state.language}
              region={'EN'}
              version={'weekly'}
              onLoad={() => console.log('script loaded')}
              loadingElement={Loading}
              libraries={googleMapsLibraries}
              preventGoogleFontsLoading
            >
              {
                this.state.fusion && (
                  <div style={mapBoxStyle}>
                    <h2 style={mapHeaderStyle}>
                      Fusion Tables Layer Google Map example
                    </h2>

                    <FusionTablesLayerExample
                      styles={shapeExampleStyles}
                    />
                  </div>
                )
              }

              {
                this.state.directions && (
                  <div style={mapBoxStyle}>
                    <h2 style={mapHeaderStyle}>
                      Directions Renderer Google Map example
                    </h2>

                    <DirectionsRendererExample
                      styles={shapeExampleStyles}
                    />
                  </div>
                )
              }

              {
                this.state.heatmap && (
                  <div style={mapBoxStyle}>
                    <h2 style={mapHeaderStyle}>
                      Heatmap Layer Google Map example
                    </h2>

                    <HeatmapLayerExample
                      styles={shapeExampleStyles}
                    />
                  </div>
                )
              }

              {
                this.state.traffic && (
                  <div style={mapBoxStyle}>
                    <h2 style={mapHeaderStyle}>
                      Traffic Layer Google Map example
                    </h2>

                    <TrafficExample
                      styles={shapeExampleStyles}
                    />
                  </div>
                )
              }

              {
                this.state.shapes && (
                  <div style={mapBoxStyle}>
                    <h2 style={mapHeaderStyle}>
                      Google Map with Shapes
                    </h2>

                    <ShapesExample
                      styles={shapeExampleStyles}
                    />
                  </div>
                )
              }

              {
                this.state.drawing && (
                  <div style={mapBoxStyle}>
                    <h2 style={mapHeaderStyle}>
                      Google Map with DrawingManager
                    </h2>

                    <DrawingManagerExample
                      styles={shapeExampleStyles}
                    />
                  </div>
                )
              }

              {
                this.state.bicycling && (
                  <div style={mapBoxStyle}>
                    <h2 style={mapHeaderStyle}>
                      Google Map with Bicycling Layer
                    </h2>

                    <BicyclingExample
                      styles={shapeExampleStyles}
                    />
                  </div>
                )
              }

              {
                this.state.ground && (
                  <div style={mapBoxStyle}>
                    <h2 style={mapHeaderStyle}>
                      Google Map with Ground Overlay
                    </h2>

                    <GroundOverlayExample
                      styles={shapeExampleStyles}
                    />
                  </div>
                )
              }
            </LoadScript>
          )
          : null
      }
    </Layout>
  )
}

export default IndexPage
