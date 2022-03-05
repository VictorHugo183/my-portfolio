---
title: Runeword Helper
stack: React.js
slug: runeword-helper
priority: 2
thumb: ../images/thumbnails/runeword-helper-thumbnail.png
description: A Progressive Web App built to assist Diablo 2 players. It shows what Runewords they can make with the Runes that they own.
source: https://github.com/VictorHugo183/runeword-helper
live: https://victorhugo183.github.io/runeword-helper/
---

### Description:

This app allows Diablo 2 players to select the Runes they own in the game, and view which Runewords they can make.<br>
It handles data filtering and presentation. It is also a PWA that makes use of service workers.

### Goal:

To create a useful tool to be shared with the Diablo 2 playerbase, while learning more about React development.<br>
Many players will be playing on consoles, away from their PC, meaning that there's a need for such a tool to be accessible on mobile.

### Development Notes:

The project was built using React. As it is a small-scale project, all state is handled within a parent Class component which passes down props to pure Functional components. If it were necessary to scale the project, I would look into managing state in a more structured manner with tools such as Redux or React's Context API.<br><br>
As it was important to provide a good UX for mobile, I decided to turn the project into a PWA by implementing service workers. However, the default configuration that comes with Create-React-App provides a suboptimal user experience, as it's not clear to the user how the content updates. After learning more about service workers and reading through discussions on github, I was able to configure the service workers in a way that they'll update when the page is refreshed, rather than requiring the user to close all tabs, thus keeping the advantages of using service workers without the drawbacks.
<br><br>
This was my first real independent React project and I'm happy with how it turned out. During the development process I got valuable experience with React by manipulating state, passing props, saving to and loading data from localStorage, and extensively manipulating JSON data. There are definitely improvements to be made if I had more time, such as refactoring the code for applying the various filtering functions, but I am happy with the current performance and UX of the application.

