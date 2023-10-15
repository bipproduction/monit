

export interface MODEL_PM2 {
    pid: number
    name: string
    pm2_env: Pm2Env
    pm_id: number
    monit: Monit
}

export interface Pm2Env {
    exit_code: number
    prev_restart_delay: number
    versioning: any
    version: string
    unstable_restarts: number
    restart_time: number
    pm_id: number
    created_at: number
    axm_dynamic: AxmDynamic
    axm_options: AxmOptions
    axm_monitor: AxmMonitor
    axm_actions: any[]
    pm_uptime: number
    status: string
    unique_id: string
    PM2_HOME: string
    PM2_USAGE: string
    _: string
    COLORTERM: string
    SECURITYSESSIONID: string
    INFOPATH: string
    HOMEBREW_CELLAR: string
    GIT_ASKPASS: string
    VSCODE_GIT_ASKPASS_NODE: string
    NVM_BIN: string
    VSCODE_GIT_IPC_HANDLE: string
    LOGNAME: string
    HOMEBREW_PREFIX: string
    VSCODE_GIT_ASKPASS_MAIN: string
    HOME: string
    PYENV_SHELL: string
    SHLVL: string
    XPC_SERVICE_NAME: string
    XPC_FLAGS: string
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: string
    LANG: string
    EDITOR: string
    PWD: string
    __CFBundleIdentifier: string
    LaunchInstanceID: string
    PATH: string
    __CF_USER_TEXT_ENCODING: string
    SSH_AUTH_SOCK: string
    COMMAND_MODE: string
    USER: string
    NVM_DIR: string
    MallocNanoZone: string
    ORIGINAL_XDG_CURRENT_DESKTOP: string
    TERM_PROGRAM_VERSION: string
    TMPDIR: string
    HOMEBREW_REPOSITORY: string
    SHELL: string
    TERM: string
    NVM_CD_FLAGS: string
    PYENV_ROOT: string
    TERM_PROGRAM: string
    MANPATH: string
    NVM_INC: string
    NODE_APP_INSTANCE: number
    vizion_running: boolean
    km_link: boolean
    pm_pid_path: string
    pm_err_log_path: string
    pm_out_log_path: string
    instances: number
    exec_mode: string
    exec_interpreter: string
    pm_cwd: string
    pm_exec_path: string
    node_args: any[]
    name: string
    filter_env: any[]
    namespace: string
    args: string[]
    env: Env
    merge_logs: boolean
    vizion: boolean
    autorestart: boolean
    watch: boolean
    instance_var: string
    pmx: boolean
    automation: boolean
    treekill: boolean
    username: string
    windowsHide: boolean
    kill_retry_time: number
}

export interface AxmDynamic { }

export interface AxmOptions { }

export interface AxmMonitor { }

export interface Env {
    unique_id: string
    ex_5001: Ex5001
    PM2_HOME: string
    PM2_USAGE: string
    _: string
    COLORTERM: string
    SECURITYSESSIONID: string
    INFOPATH: string
    HOMEBREW_CELLAR: string
    GIT_ASKPASS: string
    VSCODE_GIT_ASKPASS_NODE: string
    NVM_BIN: string
    VSCODE_GIT_IPC_HANDLE: string
    LOGNAME: string
    HOMEBREW_PREFIX: string
    VSCODE_GIT_ASKPASS_MAIN: string
    HOME: string
    PYENV_SHELL: string
    SHLVL: string
    XPC_SERVICE_NAME: string
    XPC_FLAGS: string
    VSCODE_GIT_ASKPASS_EXTRA_ARGS: string
    LANG: string
    EDITOR: string
    PWD: string
    __CFBundleIdentifier: string
    LaunchInstanceID: string
    PATH: string
    __CF_USER_TEXT_ENCODING: string
    SSH_AUTH_SOCK: string
    COMMAND_MODE: string
    USER: string
    NVM_DIR: string
    MallocNanoZone: string
    ORIGINAL_XDG_CURRENT_DESKTOP: string
    TERM_PROGRAM_VERSION: string
    TMPDIR: string
    HOMEBREW_REPOSITORY: string
    SHELL: string
    TERM: string
    NVM_CD_FLAGS: string
    PYENV_ROOT: string
    TERM_PROGRAM: string
    MANPATH: string
    NVM_INC: string
}

export interface Ex5001 { }

export interface Monit {
    memory: number
    cpu: number
}
