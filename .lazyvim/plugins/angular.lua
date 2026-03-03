return {

	-- mason.nvim
	-- {
	-- 	"mason-org/mason.nvim",
	-- 	opts = function(_, opts)
	-- 		opts.ensure_installed = opts.ensure_installed or {}
	-- 		table.insert(opts.ensure_installed, "angular-language-server")
	-- 	end,
	-- },

	-- nvim-treesitter
	{
		"nvim-treesitter",
		opts = function(_, opts)
			if type(opts.ensure_installed) == "table" then
				vim.list_extend(opts.ensure_installed, { "angular", "scss" })
			end
			vim.api.nvim_create_autocmd({ "BufReadPost", "BufNewFile" }, {
				pattern = { "*.component.html", "*.container.html" },
				callback = function()
					vim.treesitter.start(nil, "angular")
				end,
			})
		end,
	},

	-- nvim-lspconfig
	{
		"neovim/nvim-lspconfig",

		dependencies = {
			"mason-org/mason.nvim",
			opts = function(_, opts)
				opts.ensure_installed = opts.ensure_installed or {}
				table.insert(opts.ensure_installed, "angular-language-server")
			end,
		},

		opts = {
			servers = {
				angularls = {},
			},
			setup = {
				angularls = function()
					Snacks.util.lsp.on({ name = "angularls" }, function(_, client)
						--HACK: disable angular renaming capability due to duplicate rename popping up
						client.server_capabilities.renameProvider = false
					end)
				end,
			},
		},
	},

	-- nvim-lspconfig
	-- {
	-- 	"neovim/nvim-lspconfig",
	-- 	opts = function(_, opts)
	-- 		LazyVim.extend(opts.servers.vtsls, "settings.vtsls.tsserver.globalPlugins", {
	-- 			{
	-- 				name = "@angular/language-server",
	-- 				location = LazyVim.get_pkg_path(
	-- 					"angular-language-server",
	-- 					"/node_modules/@angular/language-server"
	-- 				),
	-- 				enableForWorkspaceTypeScriptVersions = false,
	-- 			},
	-- 		})
	-- 	end,
	-- },

	-- conform.nvim
	{
		"conform.nvim",
		opts = function(_, opts)
			if LazyVim.has_extra("formatting.prettier") then
				opts.formatters_by_ft = opts.formatters_by_ft or {}
				opts.formatters_by_ft.htmlangular = { "prettier" }
			end
		end,
	},
}
