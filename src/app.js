import express from 'express';
import cors from 'cors';
import path from 'path';
import history from 'connect-history-api-fallback';

const app = express();

// Set listening port
app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');

// Middlewares
app.use(cors()); // Admite configuraciones con un objeto de options
app.use(history()); // Tiene que estar antes de la config. como static de public. VER NOTA-2
app.use(express.static(path.join(__dirname, 'public'))); // Set static files folder

// Start server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

// NOTA-1:
// https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327#51844327
// NOTA-2:
// https://www.npmjs.com/package/connect-history-api-fallback#introduction
// https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
