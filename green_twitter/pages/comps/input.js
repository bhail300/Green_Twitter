import React from 'react'
import { Input } from 'semantic-ui-react'


const InputBox = (props) => {

return(

    <Input
     style={styles.div}
     placeholder ={props.placeholder}
     type ={props.type}
    
     />

)
}

//<Input placeholder='Search...' />



const styles = {
   div:{
    margin:15,
    borderRadius: 30
   }
  
}

export default InputBox