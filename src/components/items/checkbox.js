import React, { useState } from 'react'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
const Checkbox = ({ label, value }) => {
  const [checked, setChecked] = useState()


  return (
    <div>
      <label htmlFor=""
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center"
        }}
        onClick={() => setChecked(!checked)}
      >
        {checked ? (
          <RiCheckboxBlankCircleFill size={30} color='#9B7DBF' />
        ) : (
          <MdRadioButtonUnchecked size={30} />
        )}
        <div>{label}</div>
      </label>
    </div>
  )
}

export default Checkbox