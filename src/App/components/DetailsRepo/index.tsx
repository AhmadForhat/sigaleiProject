import React, { useState, useEffect } from 'react';

function DetailsRepo({data}) {
    const [load, setLoading] = useState(true)
    return(
        <>
            <h2>{data.messageHeadline}</h2>
        </>
     )
  }

export default DetailsRepo