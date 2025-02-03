import { TabPanel } from "3_widgets/TabPanel/ui/TabPanel";
import { UsersTable } from "5_entities/UsersTable/ui/UsersTable";
import { Button } from "6_shared/ui/Button/Button";
import { Checkbox } from "6_shared/ui/Checkbox/Checkbox";
import { Menu } from "6_shared/ui/Menu/Menu";
import { useState } from "react";


const MainPage = () => {
    const tabs = []
    for (let i = 1; i <= 30; i++) {
        tabs.push({ label: `Вкладка ${i}`, content: <div>Содержимое вкладки {i}</div> })
    }
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div>
            <TabPanel tabs={tabs} />
            <Button >Кнопка</Button>
            <Checkbox />
            <UsersTable />

            <Button onClick={handleClick}>меню</Button>
            <Menu open={open} anchorEl={anchorEl} onClose={handleClose}/>
        </div>
    );
};

export default MainPage;
