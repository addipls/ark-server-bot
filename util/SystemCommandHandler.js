module.exports = {
    runCommand: function(command){
        var execSync = require('child_process').execSync;
        var response = execSync(command).toString('utf-8');
        return response;
    }
}