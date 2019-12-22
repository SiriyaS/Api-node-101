module.exports = function(app){
    const handle = require('./handle');

    // test
    app.get('/', function (req, res) {
    res.send('Hello World!')
    })

    // with para n
    app.get('/:n', function (req, res) {
        var num = req.params.n;
        console.log(num);
        var result = handle.assignment1(num);
        res.status(200).send(result);
    })

    app.post('/assignment2', function (req, res) {
        var data = req.body;
        console.log(data);
        
    })
}


