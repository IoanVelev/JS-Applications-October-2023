import { html } from "../../node_modules/lit-html/lit-html.js";
import * as userService from '../services/userService.js';


const loginTemplate = (submitHandler) => html`
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit="${submitHandler}">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        
        if (email != '' && password != '') {
            userService.login(email, password)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch(err => {
                alert(err);
            })
        } else{
            alert('Make sure fields are filled');
            return;
        }
    }
ctx.render(loginTemplate(submitHandler));
}