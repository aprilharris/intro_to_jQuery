jQuery has already been installed in the index.html file's `<head>` element

### jQuery Syntax $()
  - $() is an abbreviation for the jQuery() function
  - We use the $() to target elements and do things with those elements

## jQuery Workflow

jQuery's workflow is basically 2 steps:

- target element
- do something with targeted element


## Targeting Elements
When targeting elements, jQuery uses a syntax similar to CSS.

For example, if I wanted to target a `<li>` element with a class of **"ingredient,"** I'd look for this in my HTML:
    
    <li class="ingredient">
  
To target that element with jQuery, I'd write:

    $(li.ingredient);
  
## Doing Stuff with Elements
Once you've targeted an element, you can do stuff with it (hide it, remove it, fade it in/out, etc.)




### hide() & fadeIn()
Run this code and you'll notice the ingredients slowly fade in:

Line 1 selects the `<li class="ingredient">` and does 2 things:
  
  - uses `.hide()` to momentarily **hide** the `<li class="ingredient">` elements when the page loads

  - uses `.fadeIn()`, to **fade** the elements back in
    over a duration of 1500 milliseconds.
  
- You can customize `fadeIn()` duration:

      - fadeIn(3000);
      - fadeIn("slow");
      - fadein("fast");

Line 2 creates an event listener:

- Clicking on a `<li class="ingredient">` element triggers the ``crossOut`` function.
- The `crossOut` function uses jQuery's `.css()` method
- The `.css()` method applies CSS to the `<li class="ingredient">` element
- In our example, it's adding this CSS rule:

      li.ingredient {
        text-decoration: line-through red;
      };


