var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article')

module.exports = function (app) {
  app.use('/', router)
}

router.get('/articles', function (req, res, next) {
  var articles = [
    {
      title: 'First Article',
      url: 'http://www.article.com/123',
      text: `
        Lorem ipsum yada yada yada
      `
    },
    {
      title: 'Second Article',
      url: 'http://www.article.com/124',
      text: `
        Lorem ipsum yada yada yada
      `
    },
    {
      title: 'Third Article',
      url: 'http://www.article.com/125',
      text: `
        Lorem ipsum yada yada yada
      `
    }
  ]

  res.send(articles)
  // Article.find(function (err, articles) {
  //   if (err) return next(err)
  //   res.render('index', {
  //     title: 'Generator-Express MVC',
  //     articles: articles
  //   })
  // })
})
