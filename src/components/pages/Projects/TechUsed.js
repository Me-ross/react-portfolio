import React from 'react';
import './CSS/projects.css'

export default function TechUsed ({tech})
{
console.log (tech);
return (
<div className='container'>Technology Used:

<ul className='row'>
<div className="tech-list">
    {tech.map((tech, i) => 
        <li className='col' key={i}> {tech}</li>
    )}
    </div>
</ul>

</div>
)
}
