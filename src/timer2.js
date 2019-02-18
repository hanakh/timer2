import React, { Component } from 'react';

import './App';

const Timer2=({temps}) => { return <div className="timer2">
<div class="tout">
<div class="hour">
{/* <h1 class="h">00:</h1>
<h1 class="M">30:</h1>
<h1 class="S">00</h1> */}
<h1>{temps}</h1>
</div>
<div class="temps">
<h6>Hour</h6>
<h6 class="min">Minute</h6>
<h6>Seconde</h6>
</div>
</div>
</div>


}
    
export default Timer2