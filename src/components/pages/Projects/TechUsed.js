import React from 'react';

export default function TechUsed ({tech})
{
console.log (tech);
return (
<div class="row">

<ul className='list-group'>Technology Used:
<div class="col-sm-6">
    {tech.map((tech, i) => 
        <li className='list-group-item' key={i}> {tech}</li>
    )}
    </div>
</ul>

</div>
)
}
