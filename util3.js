const util1Module = require('./util1');
const util2Module = require('./util2');

function div15(num) {
    if (util1Module.div3(num) && util2Module.div5(num))
        return 1;
    else return 0;
}
module.exports = {
    div15: div15,
    div3: util1Module.div3,
    div5: util2Module.div5,
}