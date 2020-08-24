import React from 'react'
import SpiceItem from './SpiceItem'
import Filter from './Filter'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  renderSpices() {
    return this.props.spices
      .filter(spice => this.state.fourStarOnly ? spice.rating >= 4 : true)
      .filter(spice => spice.notes.toLowerCase().includes(this.state.search.toLowerCase()))
      .map(spice => (
        <SpiceItem key={spice.id} spice={spice} />
      ))
  }

  render() {
    return (
      <section className="spice-list">
        <Filter search={this.state.search} fourStarOnly={this.state.fourStarOnly} />
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList