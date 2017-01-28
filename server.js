var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	4444));


// MAIN PAGE
app.use('/',	        express.static('./dist/', {
        'index' : 'index.html'
}))
// THX PAGE
app.use('/thx',	        express.static('./dist/', {
        'index' : 'thx.html'
}));


app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});