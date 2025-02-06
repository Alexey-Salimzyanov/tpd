import { BugButton } from "1_app/providers/ErrorBoundary";
import { TabPanel } from "3_widgets/TabPanel/ui/TabPanel";
import { UsersTable } from "5_entities/UsersTable";
import { Button } from "6_shared/ui/Button/Button";
import { Checkbox } from "6_shared/ui/Checkbox/Checkbox";
import { Select } from "6_shared/ui/Select/Select";
import { MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";


const MainPage = () => {
  const tabs = []
  for (let i = 1; i <= 30; i++) {
    tabs.push({ label: `Вкладка ${i}`, content: <div>Содержимое вкладки {i}</div> })
  }
  tabs[0].content = <UsersTable />

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div>
      <TabPanel tabs={tabs} />
      <BugButton/>
      <Checkbox />
      <div style={{maxWidth:'300px'}}>
      <Select value={age} onChange={handleChange} sx={{background:'red'}} label={'Список'}>
        <MenuItem value={10}>Опция 1</MenuItem>
        <MenuItem value={20}>Опция 2</MenuItem>
        <MenuItem value={30}>Опция 3</MenuItem>
      </Select>
      </div>

    </div>
  );
};

export default MainPage;
