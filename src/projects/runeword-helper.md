---
title: Runeword Helper
stack: React.js
slug: runeword-helper
priority: 1
thumb: ../images/thumbnails/runeword-helper-thumbnail.png
description: A responsive Web App to assist Diablo 2 players. Utilises service workers and localStorage to enhance user experience.
source: https://github.com/VictorHugo183/runeword-helper
live: https://victorhugo183.github.io/runeword-helper/
---

### Description:

This app allows Diablo 2 players to select the Runes they own in the game, and view which Runewords they can make.<br>
It efficiently handles data filtering and presentation, while providing excellent desktop and mobile UX. it is also a full PWA.

### Goal:

To create a useful tool to be shared with the Diablo 2 playerbase, while learning more about React development.<br>
Many players will be playing on consoles, away from their PC, meaning that mobile UX was a top priority when developing.

### Development Notes:

The project was built using React.js. As it is a small-scale project, all state is handled within a parent Class component which passes down props to pure Functional components. If it were necessary to scale the project, I would probably implement Redux, in order to manage state in a more structured manner.<br><br>
As it was important to provide a good UX for mobile, I decided to turn the project into a PWA, by implementing service workers. However, the default configuration that comes with Create-React-App provides a suboptimal user experience, as it's not clear how the content updates. After learning more about service workers and reading through discussions on github, I was able to configure the service workers in a way that they'll update when the page is refreshed, rather than requiring the user to close all tabs, thus keeping the advantages of using service workers without the drawbacks.
<br><br>
Overall, in this project I was able to do everything I set out to do, while getting valuable experience with React by manipulating state, passing props, saving to and loading data from localStorage, and extensively manipulating JSON data. There are definitely improvements to be made if I had more time, such as refactoring the code for applying the various filtering functions, but I am happy with the current performance of the application.

