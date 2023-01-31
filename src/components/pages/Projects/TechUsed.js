import React from 'react';
import './CSS/projects.css'

export default function TechUsed ({tech})
{
console.log (tech);
return (
<div className='container'>
    <h5>Technology Used:</h5>

<ul className='' style= {{ listStyle: 'none'}}>
<div className="row">
    {tech.map((tech, i) => 
        <li className='col' key={i}> {tech}</li>
    )}
    </div>
</ul>

</div>
)
}
