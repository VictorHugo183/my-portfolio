## My web developer portfolio
Live website: https://www.vnascimento.com<br>
This is where I share my favourite personal projects, built using:
<ul>
  <li>
    <strong>Gatsby.js</strong> (React.js & graphQL)
  </li>
  <li>
    <strong>CSS3</strong> (Flexbox)
  </li>
</ul>

### Goal:
<ul>
  <li>
    To create a responsive and clean website that is fast and easy navigate, where I can showcase my web dev projects.
  </li>
  <li>
    To make it very easy for me to alter and update content, to achieve this I used React components to reduce code repetition, and Gatsby's content mesh in order to query project details from markdown files - this way I only have to create and edit the markdown files whenever there's a change to my projects, instead of having to make an individual page for every project.
    </ul>

### Why Gatsby.js:
<ul>
  <li>
    Less repetition and easy to update content by using React components
  </li>
  <li>
    Provides quick load times and better SEO than just React.js, due to static site generation at build time.
  </li>
  <li>
    Gatsby combines all our data sources into a unified graphQL layer, making it much easier to access. for this project my data comes from individual markdown files for each project.
  </li>
</ul>

### Development:
<ul>
  <li>
    Started with Gatsby's barebones hello-world starter template, in order to generate all essential files for a Gatsby project.
  </li>
  <li>
    Every individual page is wrapped by a custom <strong>Layout component</strong>, this component contains elements which remain consistent in every page, including: some styles, content borders, navigation bar and footer. 
  </li>
  <li>
    <strong>Styling:</strong> used global.css for the elements in the Layout component, and used CSS modules to style pages individually. Flexbox and media queries were used to achieve a responsive design.
  </li>
    <li>
      Added <strong>gatsby-source-filesystem</strong> plugin so that Gatsby can access the file system, where it will find the data we want to query (markdown files for project data, and image folder for project images)
  </li>
  <li>
    Used a <strong>graphQL</strong> query in the index.js page inside Projects, to get all Markdown files containing project data, it sorts them by the priority property and then displays the relevant information for each project. project-details.js inside Templates folder also makes use of the graphQL layer.
  </li>
  <li>
    <strong>gatsby-node.js: </strong> runs at build time inside a Node environment. This is where we fetch data (project slugs) with graphQL and generate our project details pages with that data, by passing it on to the project-details.js template file as a query variable. project-details.js can then use that query variable inside a graphQL query to get details such as content and title from each project markdown file.
  </li>
</ul>

  
