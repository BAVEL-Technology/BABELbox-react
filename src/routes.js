import React from 'react';
import { mount, redirect, route } from 'navi';
import Home from './Home';
import bread from './utils/bread.js';
import Main from "./pages/main";

const routes =
  mount({
      '/': route({
        title: "Home Page",
        view: <Main />
      }),
      '/:game': route({
        
      })
    }),
  })

export default routes
