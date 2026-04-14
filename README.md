# todo-task-card

A clean, accessible, and fully responsive Todo / Task Card component built with semantic HTML, ARIA attributes, and live time-remaining updates.

---

## Overview

This project implements a single, well-structured Task Card component designed to meet a strict automated testing contract. Every interactive and informational element is reachable by keyboard, labelled for screen readers, and tagged with a precise `data-testid` attribute for test runners.

The component is intentionally minimal in stack — plain HTML, CSS, and vanilla JavaScript — so it is easy to inspect, fork, and integrate into any larger project or framework.

---

## Features

- **Semantic HTML** — built with `<article>`, `<time>`, `<ul>`, `<input>`, and `<button>` — no div soup
- **Live time remaining** — friendly human-readable countdown ("Due in 3 days", "Due tomorrow", "Overdue by 2 hours") that refreshes every 60 seconds via `setInterval`
- **Priority badge** — displays Low, Medium, or High with distinct visual treatment
- **Status indicator** — Pending / In Progress / Done, updates to "Done" on checkbox toggle
- **Completion toggle** — real `<input type="checkbox">` with visible label; checking it strikes through the title and flips status
- **Tag chips** — wrapping flex list of category tags (e.g. work, urgent, design)
- **Edit & Delete buttons** — keyboard-focusable, with accessible names
- **Fully keyboard navigable** — Tab order: checkbox → Edit → Delete
- **WCAG AA compliant** — sufficient color contrast, visible focus rings on all interactive elements
- **`aria-live="polite"`** on the time-remaining region so screen readers announce updates without interrupting
- **Responsive layout** — stacked on mobile (320px), comfortable card width (420–500px) on tablet and desktop, no horizontal overflow at any viewport width

---

## data-testid Reference

All required test identifiers are present and visible on initial render:

| Element | `data-testid` |
|---|---|
| Root card container | `test-todo-card` |
| Task title | `test-todo-title` |
| Task description | `test-todo-description` |
| Priority badge | `test-todo-priority` |
| Due date | `test-todo-due-date` |
| Time remaining | `test-todo-time-remaining` |
| Status indicator | `test-todo-status` |
| Completion checkbox | `test-todo-complete-toggle` |
| Tags list | `test-todo-tags` |
| Edit button | `test-todo-edit-button` |
| Delete button | `test-todo-delete-button` |

Individual tags also carry optional identifiers — `test-todo-tag-work`, `test-todo-tag-urgent` — for granular assertions.

---

## Acceptance Criteria

- [x] All `data-testid` elements exist and are visible on load
- [x] Checkbox is focusable, togglable via keyboard, and screen-reader accessible
- [x] Time remaining shows a correct, human-readable value on load
- [x] Edit and Delete buttons are present and keyboard-focusable
- [x] Semantic elements used correctly: `article`, `time`, `label`, `button`, `ul`
- [x] Responsive from 320px to 1200px with no layout shift or horizontal overflow
- [x] Priority and status are clearly and accessibly displayed

---

## Usage

No build step required. Open `index.html` directly in a browser.

```bash
git clone https://github.com/your-username/todo-task-card.git
cd todo-task-card
open index.html
```

To adjust the hard-coded task data (title, description, due date, priority, tags), edit the relevant variables at the top of the `<script>` block in `index.html`.

---

## Tech Stack

- HTML5
- CSS3 (Flexbox, custom properties, media queries)
- Vanilla JavaScript (no dependencies)

---

## License

MIT
