const path    = require('path'),
      express = require('express'),
      app     = express();

const publicPath = path.join(__dirname, '../build'); /* '..', 'public' */
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/*', (req, res) =>{
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server Running');
});