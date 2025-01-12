

forEach: Model
fileName: router.js

path: frontend-wijmo/src
---

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


{{#boundedContexts}}
    {{#aggregates}}
import {{namePascalCase}}Manager from "./components/ui/{{namePascalCase}}Grid"
    {{/aggregates}}

    {{#viewes}}
        {{#ifEquals dataProjection "cqrs"}}
import {{namePascalCase}}View from "./components/{{namePascalCase}}View"
        {{/ifEquals}}
    {{/viewes}}
{{/boundedContexts}}

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
       {{#boundedContexts}}
        {{#aggregates}}
            {
                path: '/{{namePlural}}',
                name: '{{namePascalCase}}Manager',
                component: {{namePascalCase}}Manager
            },
        {{/aggregates}}

        {{#viewes}}
        {{#ifEquals dataProjection "cqrs"}}

            {
                path: '/{{namePlural}}',
                name: '{{namePascalCase}}View',
                component: {{namePascalCase}}View
            },
        {{/ifEquals}}
        {{/viewes}}
       {{/boundedContexts}}


    ]
})
