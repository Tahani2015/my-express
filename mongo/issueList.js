module.exports = function(app) {

     app.get('/issues/list', function(req, res) {

        var issues = app.db.get('issues')
        
                
        issues.find({}, {
            limit: 20
        }, function(err, issus) {

            res.render('issueList.jade', {
                issues: issus
            })
        })
    
    })

}