module.exports = function() { return { get: get }

    function get(req, res) {
        res.send(200, 'ok');
    }
};
