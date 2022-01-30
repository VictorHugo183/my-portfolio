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

<!-- Diablo 2 is a video game played by thousands of people worldwide, within it
there is a system of combining Runes, in a specific order, onto specific equipment in order to form "Runewords" and gain extra bonuses.<br><br>
The system is complex and most players will be consulting third-party resources when creating Runewords. As Diablo 2: Resurrected was recently released for gaming consoles, I found that there was a need for a tool which provided an excellent mobile experience and was quick to navigate. -->

### Goal:

To create a useful tool to be shared with the Diablo 2 playerbase, while learning more about React development.<br>
Many players will be playing on consoles, away from their PC, meaning that mobile UX was a top priority when developing.

### Development Notes:

The project was built using React.js. As it is a small-scale project, all state is handled within a parent Class component which passes down props to pure Functional components. If it were necessary to scale the project, I would probably implement Redux, in order to manage state in a more structured manner.<br><br>
As it was important to provide a good UX for mobile, I decided to turn the project into a PWA, by implementing service workers. However, the default configuration that comes with Create-React-App provides a suboptimal user experience, as it's not clear how the content updates. After learning more about service workers and reading through discussions on github, I was able to configure the service workers in a way that they'll update when the page is refreshed, rather than requiring the user to close all tabs, thus keeping the advantages of using service workers without the drawbacks.
<br><br>
Overall, in this project I was able to do everything I set out to do, while getting valuable experience with React by manipulating state, passing props, saving to and loading data from localStorage, and extensively manipulating JSON data. There are definitely improvements to be made if I had more time, such as refactoring the code for applying the various filtering functions, but I am happy with the current performance of the application.
<!-- I had some difficulty implementing the filtering features, as there were many different fields to filter by, in the end I decided to put all filtering functions in a different file and call those functions one by one before rendering the results. If I had more time I would adjust how those functions are called in order to reduce unnecessary code and improve performance, however the data set is relatively small, so further optimisation is unnecessary at the moment. -->

