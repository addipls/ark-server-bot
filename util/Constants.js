    module.exports = {
    Constants: new Map(
        [
            ['START_SERVER_BASIC', 'arkmanager start @main'],
            ['STOP_SERVER_BASIC', 'arkmanager stop @main'],
            ['RESTART_SERVER_BASIC', 'arkmanager restart @main'],
            ['INSTALL_MODS', 'arkmanager installmods @main'],
            ['UNINSTALL_MODS', 'arkmanager uninstallmods @main'],
            ['UPDATE_SERVER', 'arkmanager update @main --update-mods'],
            ['CHECK_FOR_UPDATES', 'arkmanager checkupdate @main'],
            ['CHECK_FOR_MOD_UPDATES', 'screen arkmanager checkmodupdate @main'],
            ['LIST_MODS', 'arkmanager list-mods @main'],
            ['STATUS', 'arkmanager status @main'],
        ]
    ),
}
