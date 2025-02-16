
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal, {ModalProps} from '@mui/material/Modal';
import { FC } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface BasicModalProps extends ModalProps{
	className?: string;
}

export const BasicModal: FC<BasicModalProps> = (props) => {
 const {open, children, onClose} = props
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          {children}
        </Box>
      </Modal>
    </div>
  );
}