import dummyData from '../utils/dummyData';
import Menu from '../models/menu.model';

const MenuService = {
  fetchMenu() {
    return dummyData.Menu.map((menu) => {
      const newMenu = new Menu();
      newMenu.id = menu.id;
      newMenu.day = menu.day;
      newMenu.meals = menu.meals;
      newMenu.vendor_id = menu.vendor_id;
      newMenu.category = menu.category;
      return newMenu;
    });
  },

  addMenu: (menu) => {
    const menuLength = dummyData.Menu.length;
    const lastId = dummyData.Menu[menuLength - 1].id;
    const newId = lastId + 1;
    const newMenu = { id: newId, ...menu };

    dummyData.Menu.push(newMenu);
    return newMenu;
  },
};

export default MenuService;
