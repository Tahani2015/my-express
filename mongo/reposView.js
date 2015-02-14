module.exports = function(app) {

    app.get('/repo/view/:id', function(req, res) {

        var repos = app.db.get('repos')

        var q = {'id': Number(req.params.id) }           
        
        repos.findOne(q, function(err, rep) {

            res.render('reposView.jade', {
                repo: rep
            })
        })

    })
}
