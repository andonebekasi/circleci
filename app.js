const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Azure App Service!, disini andi pangeran ..... ');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
