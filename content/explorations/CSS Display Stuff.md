---
title: CSS Display Stuff
draft: false
tags:
  - web-dev
---

| Display        | Property                                                                                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inline`       | anything that can be placed in a single line.<br>E.g.: Images, text, links etc. They go in a single flow and wrap (or don’t) at the end of every line |
| `block`        | they change the default behavior of `inline`. They treat themselves as **block elements, start on a new line and take up all existing width**         |
| `flex`         | this is a flexible display property, helpful in creating layouts.<br>Its elements can be **aligned** and distributed horizontally or vertically       |
| `grid`         | allows us to create **grid systems**, and control positioning of grid items                                                                           |
| `inline-block` | they behave like `inline` elements but we can set their width, height, padding, margins etc                                                           |
| `table-row`    | makes the element behave like a `<tr></tr>` element                                                                                                   |
| `none`         | **removes** the element completely                                                                                                                    |
| `initial`      | back to the default value                                                                                                                             |
| `inherit`      | inherit the property from parent                                                                                                                      |

## Takeaways and Uses

- if you want to center an image (which by default is an `inline` element) turn it into a block and so now you can set padding for them
- if you want to align elements in a straight line (horizontally or vertically), use a `flex` box
- use a `grid` to make good compartmentalized UI
- use an `inline-block` if you want to get elements that look different (too big or too small) but are present in the middle of a line.