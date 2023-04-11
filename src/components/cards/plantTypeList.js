import React from 'react'
import PlantTypeCard from './plantTypeCard'

const PlantTypeList = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "15px",
        maxHeight:'90vh',
        overflowY:"scroll",
        paddingRight:"10px"
      }}
    >
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
      <PlantTypeCard />
    </div>
  )
}

export default PlantTypeList