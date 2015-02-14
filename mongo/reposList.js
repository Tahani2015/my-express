module.exports = function(app) {

	 app.get('/repos/list', function(req, res) {

        var repos = app.db.get('repos')
                
        repos.find({}, {
            limit: 15
        }, function(err, reps) {

            res.render('reposList.jade', {
                repos: reps
            })
        })
    })

}