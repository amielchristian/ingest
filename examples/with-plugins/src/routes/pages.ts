import type { Config } from '../config';
import { router } from '@stackpress/ingest/http';

const template = `
<!DOCTYPE html>
<html>
  <head>
    <title>Login</title>
  </head>
  <body>
    <h1>Login</h1>
    <form action="/user/login" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <button type="submit">Login</button>
    </form>
  </body>
</html>
`;

const route = router<Config>();

/**
 * Home page
 */
route.get('/', function HomePage(req, res) { 
  const project = req.context.plugin<{ welcome: string }>('project');
  res.setHTML(project.welcome);
});

/**
 * Login page
 */
route.get('/login', function Login(req, res) {
  //send the response
  res.setHTML(template.trim());
});

export default route;