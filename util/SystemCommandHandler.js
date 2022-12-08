module.exports = {
    runCommand: function(command){
        var exec = require('child_process').exec;
        var response = execSync(command).toString('utf-8');
        return response;
    }
}