

<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
## Class 09: Templating

---
### Agenda
| Timing | Topic                                    |
| ------ | ---------------------------------------- |
| 5  min | Check In                                 |
| 30 min | Warmup / Review                          |
| 10 min | WTF is jQuery                            |
| 80 min | Intro to Templating                      |
| 30 min | Closing Exercise                         |
| 15 min | Final Project                            |
| 5  min | Closing Questions & Exit Ticket          |

---
## Looking Ahead

| Lesson No. |        Topic             |
| ---------- | ------------------------ |
|     07     | Intro to the DOM         |
|     08     | Events                   |
|   **09**   | **Templating & Build Tools** |
|     10     | Express                  |
|     11     | Databases & CRUD         |
|     11     | APIs                     |
|     12     | Application Architecture |
|     13     | Lab #2                   |

---
## Homework Review

---
## jQuery

--
### jQuery: Pros
- easy/simple interface for working with the DOM
- builds jQuery objects with a ton of helpful and easy to use methods
- truly incredible cross browser support

--
### jQuery: Cons
- it's big and slow
- makes it difficult to actually learn JavaScript
- promotes a not great way of thinking about the DOM and building web applications

---
## Warmup Exercise
Refactor slideshow to respond to events

---
## Templating

--
### Templating: A Brief Introduction
- Break up an `html` page into components or partials
- Dynamically build out entire `html` pages
- Bring functionality to our markup

--
### Types of Templating Languages/Engines
3 Flavors of templating:
- Jade / Pug
- Nunjucks / Swig ( EJS, sort of )
- Handlebars / Mustache

--
### Jade / Pug
```
h1 This is a Pug template
h2 By #{author}
```

--
### Nunjucks / Swig
```
<h1> Hello {% name %} </h1>
```

--
### EJS
```
<h1> Hello <% name %>  </h1>
```

--
### Handlebars / Mustache
```
<div class="entry">
  <h1>{{ title }}</h1>
  <div class="body">
    {{ body }}
  </div>
</div>
```

--
### Relation to Web Components
```
class App extends Component (
  render () {
    return <h1>Hello world</h1>
  }
)
```

--
### Up and Running with Handlebars
http://tryhandlebarsjs.com/

--
### Handlebars To Do exercise

---
## Final Projects

- [Assignment](https://github.com/ga-students/JS-DC-3/final-project)
- [Ideas](https://gallery.generalassemb.ly/WDI)

--

### Final Project Schedule

- Idea Submission: July 18
- UI Draft: August 2
- In Class Lab Time: August 16
- Presentations/Due: August 18
