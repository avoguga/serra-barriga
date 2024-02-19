import React, {ReactNode} from 'react';
import * as C from './styles';

interface CustomAlertProps {
    show: boolean;
    onClose: () => void;
    children: ReactNode; 
  }

const CustomAlert: React.FC<CustomAlertProps>  = ({ show, onClose, children }) => {
    return (
      <C.AlertContainer show={show}> 
        {children}
        <br />   <C.Button onClick={onClose}>Ok</C.Button>
      </C.AlertContainer>
    );
  };
  
  export default CustomAlert;