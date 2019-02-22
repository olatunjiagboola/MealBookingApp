import MenuService from '../services/menu.service';

const MenuController = {
  fetchMenu(req, res) {
    const Menu = MenuService.fetchMenu();
    return res.json({
      status: 'Success',
      data: Menu,
    }).status(200);
  },

  addMenu(req, res) {
    const Menu = req.body;
    const createdMenu = MenuService.addMeal(Menu);
    return res.json({
      status: 'Success',
      data: createdMenu,
    }).status(201);
  },
};

export default MenuController;
