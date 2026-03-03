-- Navegación entre ventanas con Alt+Flechas
vim.keymap.set("n", "<A-Left>", "<C-w>h", { desc = "Ir a ventana izquierda" })
vim.keymap.set("n", "<A-Right>", "<C-w>l", { desc = "Ir a ventana derecha" })
vim.keymap.set("n", "<A-Up>", "<C-w>k", { desc = "Ir a ventana superior" })
vim.keymap.set("n", "<A-Down>", "<C-w>j", { desc = "Ir a ventana inferior" })

-- Salir rápido con q+q
vim.keymap.set("n", "qq", ":q<CR>", { desc = "Salir de la ventana" })
