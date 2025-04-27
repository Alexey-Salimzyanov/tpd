import { BugButton } from "1_app/providers/ErrorBoundary";
import { Tabs } from "6_shared/ui/Tabs/Tabs"; 
import { UsersTable } from "5_entities/UsersTable";
import { Button } from "6_shared/ui/Button/Button";
import { Checkbox } from "6_shared/ui/Checkbox/Checkbox";
import { Select } from "6_shared/ui/Select/Select";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { TabPanel } from "3_widgets/TabPanel";
import { Menu } from "6_shared/ui/Menu/Menu";
import { PrintProgram } from "4_features/PrintProgram";


const MainPage = () => {


  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
     <PrintProgram/>
     <TabPanel/>

      {/* <BugButton/>
      <Checkbox />
      <div style={{maxWidth:'300px'}}>
      <Select value={age} onChange={handleChange} sx={{background:'red'}} label={'Список'}>
        <MenuItem value={10}>Опция 1</MenuItem>
        <MenuItem value={20}>Опция 2</MenuItem>
        <MenuItem value={30}>Опция 3</MenuItem>
      </Select>
      </div> */}

    </div>
  );
};

export default MainPage;
