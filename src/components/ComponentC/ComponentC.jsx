import React from 'react' 
import ComponentE from '../ComponentE/ComponentE'

class ComponentC extends React.Component{
    render(){
        return(
            <div>
               <ComponentE/>
            </div>
        )
    }
}
export default ComponentC