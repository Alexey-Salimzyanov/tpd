// import * as React from 'react';
import MuiAccordion, {AccordionProps as MuiAccordionProps} from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { AppLink, AppLinkTheme } from '../AppLink/AppLink';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// export default function ControlledAccordions(summary: string, expanded: boolean, ) {
//   // const [expanded, setExpanded] = React.useState<string | false>(false);

//   // const handleChange =
//   //   (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//   //     setExpanded(isExpanded ? panel : false);
//   //   };
//   // const navigate = useNavigate();
//   // const [open, setOpen] = React.useState<boolean>(false);

//   // const handleNavigation = (path: string) => () => {
//   //   navigate(path);
//   //   setOpen(false);
//   // };

//   return (
//     <div>
//       <Accordion expanded={expanded} onChange={handleChange('panel1')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1bh-content"
//           id="panel1bh-header"
//         >
//           <Typography component="span">
//             {/* General settings */}
//             {summary}
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           {/* <ListItem disablePadding>
//             <ListItemButton onClick={handleNavigation('/')}>
//               <ListItemIcon>
//                 <HomeIcon />
//               </ListItemIcon>
//               <ListItemText primary="Главная" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton onClick={handleNavigation('/about')}>
//               <ListItemIcon>
//                 <InfoIcon />
//               </ListItemIcon>
//               <ListItemText primary="О сайте" />
//             </ListItemButton>
//           </ListItem> */}
//         </AccordionDetails>
//       </Accordion>

//       {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2bh-content"
//           id="panel2bh-header"
//         >
//           <Typography component="span" >
//             Users
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
     
//             <ListItem disablePadding>
//               <ListItemButton onClick={handleNavigation('/')}>
//                 <ListItemIcon>
//                   <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Главная" />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton onClick={handleNavigation('/about')}>
//                 <ListItemIcon>
//                   <InfoIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="О сайте" />
//               </ListItemButton>
//             </ListItem>
//         </AccordionDetails>
//       </Accordion> */}
//     </div>
//   );
// }
import { classNames } from '6_shared/lib/classNames/ClassNames';
import { FC } from 'react';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';

interface AccordionProps extends MuiAccordionProps{
	className?: string;
  summary: string;

}

export const Accordion: FC<AccordionProps> = (props) => {
    const {
        className,
        expanded,
        onChange,
        summary,
        children,
    } = props;

    return (
            <MuiAccordion expanded={expanded} onChange={onChange}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography component="span">
                  {/* General settings */}
                  {summary}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* <ListItem disablePadding>
                  <ListItemButton onClick={handleNavigation('/')}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Главная" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleNavigation('/about')}>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="О сайте" />
                  </ListItemButton>
                </ListItem> */}
                {children}
              </AccordionDetails>
            </MuiAccordion>
      
            // {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            //   <AccordionSummary
            //     expandIcon={<ExpandMoreIcon />}
            //     aria-controls="panel2bh-content"
            //     id="panel2bh-header"
            //   >
            //     <Typography component="span" >
            //       Users
            //     </Typography>
            //   </AccordionSummary>
            //   <AccordionDetails>
           
            //       <ListItem disablePadding>
            //         <ListItemButton onClick={handleNavigation('/')}>
            //           <ListItemIcon>
            //             <HomeIcon />
            //           </ListItemIcon>
            //           <ListItemText primary="Главная" />
            //         </ListItemButton>
            //       </ListItem>
            //       <ListItem disablePadding>
            //         <ListItemButton onClick={handleNavigation('/about')}>
            //           <ListItemIcon>
            //             <InfoIcon />
            //           </ListItemIcon>
            //           <ListItemText primary="О сайте" />
            //         </ListItemButton>
            //       </ListItem>
            //   </AccordionDetails>
            // </Accordion> */}
        );
};
