module.exports = function(app) {

    app.get('/issue/view/:id', function(req, res) {

        var issues = app.db.get('issues')

        var q = {'id': Number(req.params.id) }           
        
        issues.findOne(q, function(err, issu) {

            res.render('issueView.jade', {
                issue: issu
            })
        })

    })
}
