-- Para usar como plugin spec de Lazy.nvim
-- Guarda esto en: ~/.config/nvim/lua/plugins/run_commands.lua

return {
  -- Plugin local sin dependencias externas
  name = "run-commands",
  dir = "~/.config/nvim", -- Directorio dummy para Lazy
  lazy = false,
  config = function()
    local M = {}

    -- Almacenar trabajos activos
    M.active_jobs = {}

    -- Función para mostrar y ejecutar comandos
    function M.show_command_menu()
      local commands = {
        {
          name = "ng serve (frontend)",
          cmd = "cd /api/frontend && ng serve --host 0.0.0.0",
          description = "Iniciar servidor Angular",
        },
        {
          name = "ng serve (frontend) - puerto 4200",
          cmd = "cd /api/frontend && ng serve --port 4200 --host 0.0.0.0",
          description = "Iniciar Angular en puerto 4200",
        },
        {
          name = "Matar proceso ng serve",
          cmd = "pkill -f 'ng serve'",
          description = "Terminar todos los procesos ng serve",
        },
        {
          name = "Matar proceso en puerto 4200",
          cmd = "lsof -ti:4200 | xargs kill -9",
          description = "Matar proceso en puerto 4200",
        },
        {
          name = "Ver procesos Angular",
          cmd = "ps aux | grep ng",
          description = "Listar procesos Angular corriendo",
        },
        {
          name = "Ver puertos en uso",
          cmd = "netstat -tulpn | grep :420",
          description = "Ver qué usa el puerto 4200",
        },
        {
          name = "Ver trabajos activos",
          cmd = "jobs",
          description = "Ver procesos en segundo plano",
        },
        {
          name = "Listar todos los trabajos",
          action = "list_jobs",
          description = "Ver todos los trabajos activos",
        },
        {
          name = "Instalar dependencias frontend",
          cmd = "cd /api/frontend && pnpm i",
          description = "Instalar dependencias frontend",
        },
        {
          name = "Instalar dependencias backend",
          cmd = "cd /api/backend && pnpm i",
          description = "Instalar dependencias backend",
        },
      }

      -- Crear el menú usando vim.ui.select
      vim.ui.select(commands, {
        prompt = "Selecciona un comando para ejecutar:",
        format_item = function(item)
          return item.name .. " - " .. item.description
        end,
      }, function(choice)
        if choice then
          if choice.action == "list_jobs" then
            M.list_active_jobs()
            return
          end

          -- Variable local para capturar el job_id
          local job_id = nil

          -- Ejecutar el comando en segundo plano
          job_id = vim.fn.jobstart({ "sh", "-c", choice.cmd }, {
            on_stdout = function(j, data, _)
              if data and #data > 0 then
                for _, line in ipairs(data) do
                  if line ~= "" then
                    print("[Job " .. j .. "] " .. line)
                  end
                end
              end
            end,
            on_stderr = function(j, data, _)
              if data and #data > 0 then
                for _, line in ipairs(data) do
                  if line ~= "" then
                    print("[Job " .. j .. " ERROR] " .. line)
                  end
                end
              end
            end,
            on_exit = function(j, exit_code)
              print("[Job " .. j .. "] Terminado con código: " .. exit_code)
              -- Remover de trabajos activos
              M.active_jobs[j] = nil
            end,
            stdout_buffered = false,
            stderr_buffered = false,
            detach = true, -- Importante: permite que el proceso continúe
          })

          -- Verificar si el job se inició correctamente
          if job_id <= 0 then
            print("✗ Error al iniciar el comando: " .. choice.name)
            return
          end

          -- Guardar información del trabajo
          M.active_jobs[job_id] = {
            cmd = choice.cmd,
            name = choice.name,
            started = os.date("%H:%M:%S"),
          }

          print("✓ Iniciado job " .. job_id .. ": " .. choice.name)
          print("  Comando: " .. choice.cmd)
          print("  Usa ':Jobs' para ver trabajos activos")
        end
      end)
    end

    -- Función para listar trabajos activos
    function M.list_active_jobs()
      if vim.tbl_isempty(M.active_jobs) then
        print("No hay trabajos activos")
        return
      end

      print("Trabajos activos:")
      for job_id, info in pairs(M.active_jobs) do
        print("  Job " .. job_id .. ": " .. info.name)
        print("    Comando: " .. info.cmd)
        print("    Iniciado: " .. info.started)
      end
    end

    -- Función para matar un trabajo específico
    function M.kill_job(job_id)
      if M.active_jobs[job_id] then
        vim.fn.jobstop(job_id)
        print("Job " .. job_id .. " detenido")
      else
        print("Job " .. job_id .. " no encontrado")
      end
    end

    -- Comando para listar trabajos
    vim.api.nvim_create_user_command("Jobs", M.list_active_jobs, {})

    -- Comando para matar trabajo específico
    vim.api.nvim_create_user_command("KillJob", function(opts)
      local job_id = tonumber(opts.args)
      if job_id then
        M.kill_job(job_id)
      else
        print("Uso: :KillJob <job_id>")
      end
    end, { nargs = 1 })

    -- Comando principal
    vim.api.nvim_create_user_command("RunCommand", M.show_command_menu, {})

    -- Atajos de teclado
    vim.keymap.set("n", "<leader>rc", M.show_command_menu, {
      desc = "Ejecutar comando (Run Command)",
    })

    vim.keymap.set("n", "<leader>rj", M.list_active_jobs, {
      desc = "Ver trabajos activos",
    })

    -- Hacer M global para acceso desde comandos
    _G.RunCommandsPlugin = M
  end,
}
